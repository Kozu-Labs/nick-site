# nick-site Session Memory

> Personal disk memory file for the `nick-site` project (this Mac only).
> Mirror lives at `nick-site/MEMORY/NS.md` (git-versioned, syncs across Macs).
> Reverse-chronological — newest at top.

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
