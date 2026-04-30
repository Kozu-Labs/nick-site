# nick-site Session Memory

> Personal disk memory file for the `nick-site` project (this Mac only).
> Mirror lives at `nick-site/MEMORY/NS.md` (git-versioned, syncs across Macs).
> Reverse-chronological — newest at top.

## Session: 2026-04-30 — Bullseyebore portal v1 SHIPPED ✅

### URL + creds (one-time — record this!)
- Portal URL: **https://nslegal-ip.com/portals/bullseyebore-26cv03898/**
- Password (defendants log in with this + their email): **`c69sUi3JSEDTwzfY`**
- Defendants: 24 (from `_defendants/defendants.json` `primary_email` field)
- Public PDFs: 21 / 22 docket entries (Schedule A Ex 4 excluded)
- Audit log: per-defendant subcollection at `/cases/26cv03898/defendants/{schedNo}/access_log/*`

### What was built (A.4 + A.4.1 + A.6)
- `functions/portal.js` — 5 Cloud Functions (portalLogin, portalData, portalDownload, portalEvent, portalLogout). HMAC-signed JWT in `__session` cookie (Firebase Hosting CDN strips all cookies except `__session`). bcrypt password verification. Per-IP + per-email rate limit on login (5/hour, 10/day). Audit log on every event.
- `firebase.json` — added 5 new Hosting rewrites (`/api/portal/*` → respective functions).
- `storage.rules` — NEW, deny-all client access (PDF reads gated through portalDownload).
- `public/portals/_template/` — login.html + dashboard.html + terms.html + portal.css + portal.js (brand-matched dark/violet/Manrope).
- `public/portals/bullseyebore-26cv03898/` — provisioned copy with case-specific tokens substituted.
- `Nick Law Firm AI/_reference/scripts/provision_portal.js` — one-off Node script that becomes the basis for portal_publish skill (A.5). Reads STATUS.md + defendants.json + Dkt_renamed manifest, generates password, bcrypts, writes Firestore + uploads PDFs to `gs://nick-site-web-portal/cases/{caseId}/pdfs/`.

### Infrastructure decisions made
- Bucket name: `nick-site-web-portal` (not `*.firebasestorage.app` — that domain is Firebase-managed; can't create directly. Custom-named bucket works fine via Admin SDK).
- Service account for provisioning: `portal-provisioner@nick-site-web.iam.gserviceaccount.com`. Roles: `roles/datastore.user` + `roles/storage.objectAdmin`. Key file at `~/.config/nick-firm-portal-provisioner.json` (mode 600, gitignored).
- Cloud Run runtime SA needed `roles/iam.serviceAccountTokenCreator` on itself (for getSignedUrl signBlob calls). Granted.
- Cookie name: **`__session`** (not `portal_session`) — Firebase Hosting CDN strips all cookies except this one.

### Smoke tests passed (7 gates)
1. Login page loads + template vars substituted (case caption, case number, case ID).
2. Wrong password → 401 invalid_credentials, fail logged.
3. Email not in allowlist → 401 invalid_credentials, fail logged.
4. Valid login → 200 ok=true, __session cookie set with case_id + email + sessionId + schedNo claims.
5. /api/portal/data with cookie → 200 with case info + this defendant's row + 22 dockets (21 public + 1 private).
6. /api/portal/download?doc=001 → 302 to signed Cloud Storage URL, fetch returns 192,358 bytes (matches Complaint PDF size in manifest).
7. /api/portal/download?doc=001-04 (Schedule A) → 403 doc_not_available (correctly excluded).
8. Logout → 200, cookie cleared, subsequent /data → 401 unauthenticated.
9. Audit log: 13 entries captured for defendant #001 across the test session (login_success x5, login_failure x1, dashboard_view x2, doc_download x2, logout x1).

### Known v1 limitations / iterate-on items
- **Password regenerates each provisioning run** — bug for v2 (should be idempotent unless --rotate flag passed).
- **No password reset / change** — defendant who loses the password has to email Nick.
- **No mobile-specific UX testing yet** — desktop-tested only.
- **Audit log is firm-readable only via Admin SDK** — no portal_audit skill yet (A.4.2 deferred).
- **No "what's new since I last logged in" surfacing** — defendant sees full docket each time.
- **No filtering of per-defendant data leakage in dockets** — dockets are case-level (which is correct for v1; per-defendant data exposure rule applies to defendants subcollection only).

## Deploy: 2026-04-30 13:40 — `2fbf578`

## Session: 2026-04-30 — A.2 contact-form pipeline ✅ shipped end-to-end
- `npm install` in `functions/` (181 packages: firebase-admin 12, firebase-functions 6).
- `firebase functions:secrets:set SLACK_LEADS_WEBHOOK` via temp file (no shell-history leak). Stored as Secret Manager v1.
- `firebase deploy --only functions` — first attempt failed on Cloud Build IAM propagation (Blaze first-deploy issue); second attempt 30s later succeeded. Fn URL: `https://submitcontact-wlbk2rhpqq-uc.a.run.app`.
- `firebase functions:artifacts:setpolicy --force` — auto-deletes container images >1d old. Prevents the AR-bloat trap that hit CopyCatch.
- `gcloud run services add-iam-policy-binding ... --member=allUsers --role=roles/run.invoker` — required for public hosting-rewrite invocation. Default Cloud Run service is private; Hosting rewrite needs allUsers invoker.
- End-to-end verified: valid submission lands in `#nick-firm` (channel C0AQKA2KZV4) within seconds with full payload + IP + timestamp; Firestore tee returns doc IDs.
- Validation verified: bad email → 400 with details; honeypot → 200 silent (no Slack post, no Firestore tee).
- Rate limit verified: 5 successful submissions from same IP, 6th returned `HTTP 429 Retry-After: 3537` with JSON body `{error: rate_limited, retry_after_seconds: 3537}`.

## Deploy: 2026-04-30 13:40 — `2fbf578`
- Hosting deployed: https://nick-site-web.web.app
- Frank-pattern infra now live in repo + production
- Functions deploy pending A.2 webhook URL

## Session: 2026-04-30 — Frank-pattern session-management infra ✅
- Created `~/NS.md` + `nick-site/MEMORY/NS.md` (this dual-memory pattern).
- Upgraded `.claude/commands/deploy.md` to use `~/NS.md` (was `CLAUDE.md`); added explicit allowed-tools and exclusion list (`public/blog/`, `functions/node_modules/`).
- Added `.claude/hooks/on-stop-deploy.sh` — auto-runs deploy protocol on Claude Code Stop event. Includes loop-prevention (`stop_hook_active`), early-exit on no-changes, stash/pull-rebase/pop, source-only commit, push-before-deploy, post-deploy `~/NS.md` append.
- Added `.claude/settings.local.json` — registers the Stop hook + pre-allows ~25 routine git/firebase/curl commands.
- Made hook executable (`chmod +x`).

## Project state at a glance
- **Repo**: `Kozu-Labs/nick-site` (GitHub)
- **Firebase project**: `nick-site-web` (Blaze plan, upgraded 2026-04-30)
- **Live URLs**: https://nick-site-web.web.app · https://nslegal-ip.com (planned, A.3)
- **Deploy command**: `firebase deploy --only hosting`
- **Branch**: `main` (rebase, never merge)

## Session: 2026-04-30 — A.1 lockdown + A.2 contact-form rewrite (in progress)

### A.1 — Lockdown ✅ shipped
- Tightened `firestore.rules`: `/submissions` denies all client reads/writes; pre-staged `/cases/**` portal data behind `case_id + email + firm_admin` claims; default-deny everywhere else.
- Deployed rules: `firebase deploy --only firestore:rules` → verified unauth `curl` to submissions REST returns 403 PERMISSION_DENIED.
- Deleted `public/admin.html` (had `const PASSWORD = 'CCQA';` hardcoded — anyone could authenticate). Live `nick-site-web.web.app/admin.html` now 404.
- Committed [22af706]: "Lock down Firestore + remove insecure admin page".

### A.2 — Contact form → Slack `#nick-firm` (paused, awaiting webhook URL)
- Built `functions/index.js` — `submitContact` HTTPS endpoint with validation, honeypot, per-IP rate limit (5/hour), Slack webhook POST, Firestore tee.
- Updated `firebase.json` — added `functions` codebase + Hosting rewrite `/api/submitContact` → function.
- Edited `public/index.html` — replaced `addDoc(...)` with `fetch('/api/submitContact')`; added off-screen honeypot input.
- **Pending**: Alan to (a) create Slack incoming webhook for `#nick-firm`, (b) paste URL.
- **Pending**: `npm install` in `functions/`, `firebase functions:secrets:set SLACK_LEADS_WEBHOOK`, deploy.

### Manual hand-offs to Alan
- Rotate `FIREBASE_SERVICE_ACCOUNT` GitHub secret (Firebase IAM → generate new key → update GitHub Secrets → revoke old).
- Optionally back up `submissions` collection from Firebase Console before any further changes.

## Conventions established
- **Never deploy before pushing.** GitHub is source of truth; production is one consumer.
- **Never commit local-only modifications outside the current task scope.** `public/index.html` and `public/nick.png` had pre-existing local-only edits; left alone.
- **Untracked files in repo** (`.github/`, `blog-content/`, `build-blog.py`, `public/css/`, `public/images/`) — were never pushed to remote. Separate cleanup task to either commit or formally retire.
- **Firebase tooling**: `firebase --version` is 15.7.0; `gcloud` is installed (566.0.0); auth as `alan@kozulabs.com`.

---
