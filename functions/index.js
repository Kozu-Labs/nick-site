/**
 * Cloud Functions for nslegal-ip.com
 *
 * submitContact   (A.2) — contact form → Slack #nick-firm + Firestore tee
 * portalLogin     (A.4) — defendant login (bcrypt + signed-cookie session)
 * portalData      (A.4) — return case + dockets + this defendant's row
 * portalDownload  (A.4) — gated PDF download (signed Storage URL + audit log)
 * portalEvent     (A.4.1) — frontend logs view events for the audit trail
 * portalLogout    (A.4) — clear session cookie + log session_end
 */

const { onRequest } = require('firebase-functions/v2/https');
const { defineSecret } = require('firebase-functions/params');
const { setGlobalOptions } = require('firebase-functions/v2');
const admin = require('firebase-admin');
const crypto = require('crypto');

admin.initializeApp();
const db = admin.firestore();

setGlobalOptions({ region: 'us-central1', maxInstances: 10 });

// Re-export the portal handlers (they require admin.initializeApp first).
const portal = require('./portal');
exports.portalLogin = portal.portalLogin;
exports.portalData = portal.portalData;
exports.portalDownload = portal.portalDownload;
exports.portalEvent = portal.portalEvent;
exports.portalLogout = portal.portalLogout;

const SLACK_LEADS_WEBHOOK = defineSecret('SLACK_LEADS_WEBHOOK');

// CORS allowlist. Add subdomains as portals come online.
const ALLOWED_ORIGINS = new Set([
  'https://nslegal-ip.com',
  'https://www.nslegal-ip.com',
  'https://nick-site-web.web.app',
  'https://nick-site-web.firebaseapp.com',
]);

const RATE_LIMIT_COUNT = 5;             // submissions per IP per hour
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;

const VALIDATION = {
  name:    { required: true,  min: 1,  max: 100 },
  email:   { required: true,  min: 5,  max: 200, regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
  phone:   { required: false, min: 0,  max: 50 },
  type:    { required: false, min: 0,  max: 50 },
  message: { required: true,  min: 10, max: 2000 },
};

function setCors(req, res) {
  const origin = req.headers.origin;
  if (origin && ALLOWED_ORIGINS.has(origin)) {
    res.set('Access-Control-Allow-Origin', origin);
    res.set('Vary', 'Origin');
  }
  res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type');
  res.set('Access-Control-Max-Age', '3600');
}

function validate(body) {
  const errors = [];
  const cleaned = {};

  for (const [field, rule] of Object.entries(VALIDATION)) {
    const raw = body[field];
    const value = typeof raw === 'string' ? raw.trim() : '';

    if (!value) {
      if (rule.required) errors.push(`${field} is required`);
      cleaned[field] = '';
      continue;
    }
    if (value.length < rule.min) errors.push(`${field} too short`);
    if (value.length > rule.max) errors.push(`${field} too long`);
    if (rule.regex && !rule.regex.test(value)) errors.push(`${field} invalid`);
    cleaned[field] = value;
  }

  return { errors, cleaned };
}

function clientIp(req) {
  const forwarded = req.headers['x-forwarded-for'];
  if (typeof forwarded === 'string' && forwarded.length > 0) {
    return forwarded.split(',')[0].trim();
  }
  return req.ip || 'unknown';
}

function hashIp(ip) {
  return crypto.createHash('sha256').update(ip).digest('hex').slice(0, 24);
}

/**
 * Per-IP rate limit. Atomic via Firestore transaction so concurrent submits
 * don't race. Window resets when current window expires.
 */
async function checkRateLimit(ip) {
  const ipHash = hashIp(ip);
  const ref = db.collection('rate_limits').doc(`contact_${ipHash}`);
  const now = Date.now();

  return db.runTransaction(async (tx) => {
    const snap = await tx.get(ref);
    const data = snap.exists ? snap.data() : null;
    const expired = !data || (now - data.window_start > RATE_LIMIT_WINDOW_MS);

    if (expired) {
      tx.set(ref, { window_start: now, count: 1, last_seen: now });
      return { allowed: true, remaining: RATE_LIMIT_COUNT - 1 };
    }

    if (data.count >= RATE_LIMIT_COUNT) {
      return { allowed: false, retry_after_ms: data.window_start + RATE_LIMIT_WINDOW_MS - now };
    }

    tx.update(ref, { count: data.count + 1, last_seen: now });
    return { allowed: true, remaining: RATE_LIMIT_COUNT - data.count - 1 };
  });
}

function buildSlackPayload(s, ip) {
  const fields = [
    { type: 'mrkdwn', text: `*Name*\n${s.name}` },
    { type: 'mrkdwn', text: `*Email*\n${s.email}` },
  ];
  if (s.phone) fields.push({ type: 'mrkdwn', text: `*Phone*\n${s.phone}` });
  if (s.type)  fields.push({ type: 'mrkdwn', text: `*Inquiry Type*\n${s.type}` });

  return {
    text: `New contact form lead: ${s.name} <${s.email}>`,
    blocks: [
      { type: 'header', text: { type: 'plain_text', text: '📨 New nslegal-ip.com lead' } },
      { type: 'section', fields },
      { type: 'section', text: { type: 'mrkdwn', text: `*Message*\n${s.message}` } },
      {
        type: 'context',
        elements: [
          { type: 'mrkdwn', text: `IP: \`${ip}\` · ${new Date().toISOString()}` },
        ],
      },
    ],
  };
}

async function postToSlack(webhookUrl, payload) {
  const res = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Slack webhook ${res.status}: ${body}`);
  }
}

exports.submitContact = onRequest(
  { secrets: [SLACK_LEADS_WEBHOOK], cors: false },
  async (req, res) => {
    setCors(req, res);

    if (req.method === 'OPTIONS') return res.status(204).send('');
    if (req.method !== 'POST') return res.status(405).json({ error: 'method_not_allowed' });

    const ua = req.headers['user-agent'];
    if (!ua || ua.length < 5) {
      return res.status(400).json({ error: 'invalid_request' });
    }

    const ip = clientIp(req);
    const body = req.body || {};

    // Honeypot. If a bot fills the hidden `website` field, accept silently
    // so it doesn't retry, but don't actually send anything.
    if (body.website) {
      console.log(`[honeypot] ip=${ip} website=${body.website}`);
      return res.status(200).json({ ok: true });
    }

    const { errors, cleaned } = validate(body);
    if (errors.length > 0) {
      return res.status(400).json({ error: 'validation_failed', details: errors });
    }

    const limit = await checkRateLimit(ip);
    if (!limit.allowed) {
      const retrySec = Math.ceil(limit.retry_after_ms / 1000);
      res.set('Retry-After', String(retrySec));
      return res.status(429).json({ error: 'rate_limited', retry_after_seconds: retrySec });
    }

    const submission = {
      ...cleaned,
      ip,
      user_agent: ua,
      received_at: admin.firestore.FieldValue.serverTimestamp(),
      source: 'website_contact_form',
      slack_posted: false,
      read: false,
    };

    let docRef;
    try {
      docRef = await db.collection('submissions').add(submission);
    } catch (err) {
      console.error('[firestore_write_failed]', err);
      return res.status(500).json({ error: 'storage_failed' });
    }

    try {
      await postToSlack(SLACK_LEADS_WEBHOOK.value(), buildSlackPayload(cleaned, ip));
      await docRef.update({ slack_posted: true });
    } catch (err) {
      console.error('[slack_post_failed]', err);
      await docRef.update({ slack_error: String(err).slice(0, 500) });
      // Submission is captured in Firestore even if Slack failed — don't 500.
    }

    return res.status(200).json({ ok: true, id: docRef.id });
  }
);
