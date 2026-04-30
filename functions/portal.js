/**
 * Defendant Portal Cloud Functions (A.4 / A.4.1).
 *
 *  POST /api/portal/login    portalLogin    — verify creds, set session cookie
 *  GET  /api/portal/data     portalData     — return case + dockets + this defendant
 *  GET  /api/portal/download portalDownload — gated PDF download via signed URL
 *  POST /api/portal/logout   portalLogout   — clear cookie + log session_end
 *  POST /api/portal/event    portalEvent    — frontend logs view events
 *
 * Auth model: HMAC-signed JWT in HttpOnly cookie. No Firebase Auth client SDK
 * needed; defendants get an opaque session, server validates each request.
 *
 * Audit log: every login attempt (success + failure), every doc view, every
 * doc download lands in /cases/{caseId}/defendants/{schedNo}/access_log/{ts}.
 * Append-only, firm-only readable per firestore.rules.
 */

const { onRequest } = require('firebase-functions/v2/https');
const { defineSecret } = require('firebase-functions/params');
const admin = require('firebase-admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookie = require('cookie');
const crypto = require('crypto');

// admin is initialized in index.js; just access the SDK
const db = admin.firestore();
const storage = admin.storage();

const PORTAL_SESSION_SECRET = defineSecret('PORTAL_SESSION_SECRET');
const PORTAL_STORAGE_BUCKET = 'nick-site-web-portal';

// Firebase Hosting CDN strips all cookies except `__session` for cacheability.
// To pass through Hosting rewrites, the cookie MUST be named __session.
const SESSION_COOKIE_NAME = '__session';
const SESSION_TTL_SECONDS = 24 * 60 * 60;       // 24h
const SIGNED_URL_TTL_MS = 60 * 1000;            // 60s for PDF download
const FAILED_LOGIN_PER_IP_PER_HOUR = 5;
const FAILED_LOGIN_PER_EMAIL_PER_DAY = 10;

// ----------------------------------------------------------------------------
// Helpers
// ----------------------------------------------------------------------------

const ALLOWED_ORIGINS = new Set([
  'https://nslegal-ip.com',
  'https://www.nslegal-ip.com',
  'https://nick-site-web.web.app',
  'https://nick-site-web.firebaseapp.com',
]);

function setCors(req, res) {
  const origin = req.headers.origin;
  if (origin && ALLOWED_ORIGINS.has(origin)) {
    res.set('Access-Control-Allow-Origin', origin);
    res.set('Access-Control-Allow-Credentials', 'true');
    res.set('Vary', 'Origin');
  }
  res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type');
  res.set('Access-Control-Max-Age', '3600');
}

function clientIp(req) {
  const fwd = req.headers['x-forwarded-for'];
  if (typeof fwd === 'string' && fwd.length > 0) {
    return fwd.split(',')[0].trim();
  }
  return req.ip || 'unknown';
}

function newSessionId() {
  return crypto.randomBytes(16).toString('hex');
}

function issueSessionCookie(res, payload) {
  const token = jwt.sign(payload, PORTAL_SESSION_SECRET.value(), {
    algorithm: 'HS256',
    expiresIn: SESSION_TTL_SECONDS,
  });
  const c = cookie.serialize(SESSION_COOKIE_NAME, token, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    maxAge: SESSION_TTL_SECONDS,
    path: '/',
  });
  res.append('Set-Cookie', c);
}

function clearSessionCookie(res) {
  res.append('Set-Cookie', cookie.serialize(SESSION_COOKIE_NAME, '', {
    httpOnly: true, secure: true, sameSite: 'lax', maxAge: 0, path: '/',
  }));
}

function readSession(req) {
  try {
    const cookies = cookie.parse(req.headers.cookie || '');
    const token = cookies[SESSION_COOKIE_NAME];
    if (!token) return null;
    return jwt.verify(token, PORTAL_SESSION_SECRET.value(), { algorithms: ['HS256'] });
  } catch {
    return null;
  }
}

async function logAccess(caseId, schedNo, fields) {
  const ts = new Date();
  const eventId = `${ts.toISOString()}_${fields.event_type}_${crypto.randomBytes(4).toString('hex')}`;
  await db.doc(`cases/${caseId}/defendants/${schedNo}/access_log/${eventId}`).set({
    ...fields,
    timestamp: admin.firestore.FieldValue.serverTimestamp(),
  });
}

async function checkLoginRateLimit(ip, email) {
  const now = Date.now();
  const ipKey = crypto.createHash('sha256').update(ip).digest('hex').slice(0, 24);
  const ipRef = db.doc(`rate_limits/portal_login_ip_${ipKey}`);
  const emailKey = crypto.createHash('sha256').update(email.toLowerCase()).digest('hex').slice(0, 24);
  const emailRef = db.doc(`rate_limits/portal_login_email_${emailKey}`);

  const [ipSnap, emailSnap] = await Promise.all([ipRef.get(), emailRef.get()]);

  const windowMs1h = 60 * 60 * 1000;
  const windowMs24h = 24 * 60 * 60 * 1000;

  if (ipSnap.exists) {
    const d = ipSnap.data();
    if (now - d.window_start < windowMs1h && d.failed_count >= FAILED_LOGIN_PER_IP_PER_HOUR) {
      return { allowed: false, reason: 'ip_rate_limited' };
    }
  }
  if (emailSnap.exists) {
    const d = emailSnap.data();
    if (now - d.window_start < windowMs24h && d.failed_count >= FAILED_LOGIN_PER_EMAIL_PER_DAY) {
      return { allowed: false, reason: 'email_rate_limited' };
    }
  }
  return { allowed: true };
}

async function bumpFailedLogin(ip, email) {
  const now = Date.now();
  const ipKey = crypto.createHash('sha256').update(ip).digest('hex').slice(0, 24);
  const emailKey = crypto.createHash('sha256').update(email.toLowerCase()).digest('hex').slice(0, 24);
  const ipRef = db.doc(`rate_limits/portal_login_ip_${ipKey}`);
  const emailRef = db.doc(`rate_limits/portal_login_email_${emailKey}`);

  await Promise.all([
    db.runTransaction(async (tx) => {
      const snap = await tx.get(ipRef);
      const d = snap.exists ? snap.data() : null;
      if (!d || now - d.window_start > 60 * 60 * 1000) {
        tx.set(ipRef, { window_start: now, failed_count: 1 });
      } else {
        tx.update(ipRef, { failed_count: d.failed_count + 1 });
      }
    }),
    db.runTransaction(async (tx) => {
      const snap = await tx.get(emailRef);
      const d = snap.exists ? snap.data() : null;
      if (!d || now - d.window_start > 24 * 60 * 60 * 1000) {
        tx.set(emailRef, { window_start: now, failed_count: 1 });
      } else {
        tx.update(emailRef, { failed_count: d.failed_count + 1 });
      }
    }),
  ]);
}

async function findDefendant(caseId, email) {
  const lower = email.toLowerCase().trim();
  const snap = await db.collection(`cases/${caseId}/defendants`).get();
  for (const doc of snap.docs) {
    const data = doc.data();
    const emails = [data.email, ...(data.secondary_emails || [])]
      .filter(Boolean)
      .map((e) => e.toLowerCase().trim());
    if (emails.includes(lower)) {
      return { id: doc.id, ...data };
    }
  }
  return null;
}

// ----------------------------------------------------------------------------
// portalLogin
// ----------------------------------------------------------------------------

exports.portalLogin = onRequest(
  { secrets: [PORTAL_SESSION_SECRET], cors: false },
  async (req, res) => {
    setCors(req, res);
    if (req.method === 'OPTIONS') return res.status(204).send('');
    if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });

    const ua = req.headers['user-agent'] || '';
    if (ua.length < 5) return res.status(400).json({ error: 'invalid_request' });

    const ip = clientIp(req);
    const { caseId, email, password } = req.body || {};
    if (!caseId || !email || !password) {
      return res.status(400).json({ error: 'missing_fields' });
    }

    const limit = await checkLoginRateLimit(ip, email);
    if (!limit.allowed) {
      return res.status(429).json({ error: 'rate_limited' });
    }

    const caseSnap = await db.doc(`cases/${caseId}`).get();
    if (!caseSnap.exists) {
      await bumpFailedLogin(ip, email);
      return res.status(401).json({ error: 'invalid_credentials' });
    }
    const caseData = caseSnap.data();

    const defendant = await findDefendant(caseId, email);
    if (!defendant) {
      await bumpFailedLogin(ip, email);
      // Best-effort log: under a synthetic "_unknown" defendant doc so we keep audit trail
      await logAccess(caseId, '_unknown', {
        event_type: 'login_failure',
        email: email.toLowerCase(),
        ip, user_agent: ua, reason: 'email_not_found',
      });
      return res.status(401).json({ error: 'invalid_credentials' });
    }

    const ok = await bcrypt.compare(password, caseData.password_hash || '');
    if (!ok) {
      await bumpFailedLogin(ip, email);
      await logAccess(caseId, defendant.id, {
        event_type: 'login_failure',
        email: email.toLowerCase(),
        ip, user_agent: ua, reason: 'wrong_password',
      });
      return res.status(401).json({ error: 'invalid_credentials' });
    }

    const sessionId = newSessionId();
    issueSessionCookie(res, {
      c: caseId,
      e: email.toLowerCase(),
      s: sessionId,
      n: defendant.id, // schedule_a_no key
    });

    await logAccess(caseId, defendant.id, {
      event_type: 'login_success',
      email: email.toLowerCase(),
      ip, user_agent: ua, session_id: sessionId,
    });

    return res.status(200).json({ ok: true });
  },
);

// ----------------------------------------------------------------------------
// portalData — returns case info + filtered dockets + this defendant's row
// ----------------------------------------------------------------------------

exports.portalData = onRequest(
  { secrets: [PORTAL_SESSION_SECRET], cors: false },
  async (req, res) => {
    setCors(req, res);
    if (req.method === 'OPTIONS') return res.status(204).send('');
    if (req.method !== 'GET') return res.status(405).json({ error: 'method_not_allowed' });

    const session = readSession(req);
    if (!session) return res.status(401).json({ error: 'unauthenticated' });
    const { c: caseId, n: schedNo, e: email, s: sessionId } = session;

    const [caseSnap, defendantSnap, docketSnap] = await Promise.all([
      db.doc(`cases/${caseId}`).get(),
      db.doc(`cases/${caseId}/defendants/${schedNo}`).get(),
      db.collection(`cases/${caseId}/dockets`).orderBy('filing_date', 'asc').get(),
    ]);

    if (!caseSnap.exists) return res.status(404).json({ error: 'case_not_found' });

    const caseData = caseSnap.data();
    delete caseData.password_hash;
    delete caseData.allowed_emails;
    const myDef = defendantSnap.exists ? defendantSnap.data() : null;
    const dockets = docketSnap.docs.map((d) => {
      const x = d.data();
      // Only return the doc download path if it's public; never leak
      // private file paths (e.g., Schedule A) even as metadata.
      return {
        entry_no: x.entry_no,
        sub_no: x.sub_no || null,
        filing_date: x.filing_date,
        type: x.type,
        title: x.title,
        is_public: !!x.is_public,
        doc_key: x.is_public ? d.id : null,
      };
    });

    await logAccess(caseId, schedNo, {
      event_type: 'dashboard_view',
      email, ip: clientIp(req), user_agent: req.headers['user-agent'] || '',
      session_id: sessionId,
    });

    return res.status(200).json({
      case: caseData,
      defendant: myDef ? {
        schedule_a_no: myDef.schedule_a_no,
        merchant_name: myDef.merchant_name,
        status: myDef.status,
        last_action_date: myDef.last_action_date || null,
        latest_event_summary: myDef.latest_event_summary || null,
      } : null,
      dockets,
    });
  },
);

// ----------------------------------------------------------------------------
// portalDownload — gated PDF download (signed URL + audit log)
// ----------------------------------------------------------------------------

exports.portalDownload = onRequest(
  { secrets: [PORTAL_SESSION_SECRET], cors: false },
  async (req, res) => {
    setCors(req, res);
    if (req.method === 'OPTIONS') return res.status(204).send('');
    if (req.method !== 'GET') return res.status(405).json({ error: 'method_not_allowed' });

    const session = readSession(req);
    if (!session) return res.status(401).json({ error: 'unauthenticated' });
    const { c: caseId, n: schedNo, e: email, s: sessionId } = session;

    const docKey = (req.query.doc || '').toString();
    if (!docKey || !/^[a-zA-Z0-9_-]+$/.test(docKey)) {
      return res.status(400).json({ error: 'invalid_doc_key' });
    }

    const docSnap = await db.doc(`cases/${caseId}/dockets/${docKey}`).get();
    if (!docSnap.exists) return res.status(404).json({ error: 'doc_not_found' });
    const docData = docSnap.data();
    if (!docData.is_public || !docData.pdf_path) {
      return res.status(403).json({ error: 'doc_not_available' });
    }

    const bucket = storage.bucket(PORTAL_STORAGE_BUCKET);
    const file = bucket.file(docData.pdf_path);
    const [exists] = await file.exists();
    if (!exists) return res.status(404).json({ error: 'file_missing' });

    const [signedUrl] = await file.getSignedUrl({
      action: 'read',
      expires: Date.now() + SIGNED_URL_TTL_MS,
    });

    await logAccess(caseId, schedNo, {
      event_type: 'doc_download',
      doc_key: docKey,
      doc_title: docData.title,
      pdf_path: docData.pdf_path,
      email, ip: clientIp(req), user_agent: req.headers['user-agent'] || '',
      session_id: sessionId,
    });

    res.set('Cache-Control', 'no-store');
    return res.redirect(302, signedUrl);
  },
);

// ----------------------------------------------------------------------------
// portalEvent — frontend logs view events (e.g. clicked-but-not-downloaded)
// ----------------------------------------------------------------------------

exports.portalEvent = onRequest(
  { secrets: [PORTAL_SESSION_SECRET], cors: false },
  async (req, res) => {
    setCors(req, res);
    if (req.method === 'OPTIONS') return res.status(204).send('');
    if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });

    const session = readSession(req);
    if (!session) return res.status(401).json({ error: 'unauthenticated' });
    const { c: caseId, n: schedNo, e: email, s: sessionId } = session;

    const { event_type, doc_key } = req.body || {};
    const allowed = ['doc_view'];
    if (!allowed.includes(event_type)) {
      return res.status(400).json({ error: 'invalid_event_type' });
    }

    await logAccess(caseId, schedNo, {
      event_type, doc_key: doc_key || null,
      email, ip: clientIp(req), user_agent: req.headers['user-agent'] || '',
      session_id: sessionId,
    });

    return res.status(204).send('');
  },
);

// ----------------------------------------------------------------------------
// portalLogout
// ----------------------------------------------------------------------------

exports.portalLogout = onRequest(
  { secrets: [PORTAL_SESSION_SECRET], cors: false },
  async (req, res) => {
    setCors(req, res);
    if (req.method === 'OPTIONS') return res.status(204).send('');
    if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });

    const session = readSession(req);
    if (session) {
      await logAccess(session.c, session.n, {
        event_type: 'logout',
        email: session.e,
        ip: clientIp(req),
        user_agent: req.headers['user-agent'] || '',
        session_id: session.s,
      });
    }
    clearSessionCookie(res);
    return res.status(200).json({ ok: true });
  },
);
