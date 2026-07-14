# Nick Lee Legal — Firm AI Memory (`NS.md`)

> **Refresh prompt:**
> "Refresh from `~/NS.md` and pick up the todo list from last session."
>
> This is the unified memory file for everything Alan + Nick are building together
> on the firm-AI initiative — engineering, tools, deployments, and open work.
>
> **Where this file lives:** `Nick Lawfirm AI/NS.md` (iCloud-synced; both Macs see it).
> `~/NS.md` is a symlink to here.
> `nick-site/MEMORY/NS.md` is a git-committed snapshot for repo versioning.
>
> Reverse-chronological for session log; newest at top.

---

## 0. Reading order on session start

1. Read this file (§ 1 + § 2 + most-recent § 4 entry are usually enough).
2. If a specific case is in scope, also read `Clients/{Client}/STATUS.md`.
3. If drafting / generating a filing, also read `RULES.md` + relevant Draft Plan in `{case}/_draft_plans/`.
4. The pointers in § 5 tell you which deep file to consult for what.

---

## 1. Project map (mid-2026)

The umbrella initiative is **Nick's Law Firm AI** — using AI to make a small IP-litigation firm operate like a much bigger one.

```
   Nick's Law Firm AI (umbrella)
   │
   ├── nick-site (marketing site + per-case defendant portals)
   │     URL:        https://nslegal-ip.com/  (Firebase Hosting)
   │     Repo:       github.com/Kozu-Labs/nick-site
   │     Functions:  submitContact, portalLogin, portalData,
   │                 portalDownload, portalEvent, portalLogout
   │     Live portals:
   │       - Bullseyebore: nslegal-ip.com/portals/bullseyebore-26cv03898/
   │         (24 defendants, 21 public PDFs, audit-logged)
   │     ⚠️ STATIC SNAPSHOT for now: portal is frozen at 2026-04-30 ~16:00.
   │        New ECF entries / new Clio uploads do NOT flow through automatically.
   │        Auto-update needs A.5 (portal_publish skill) + B.1/B.2 (active-case
   │        registry + launchd cascade). To update manually before that ships:
   │        re-run provision_portal.js — but this rotates the password too
   │        (v2 fix needed: --keep-password flag).
   │
   ├── sarah-cloud (firm operations bot)
   │     Live:       GitHub Actions daily workflow (`ECF to Slack`)
   │     Standby:    Render service srv-d7gq5p8sfn5c73e0m4q0 is suspended
   │     Repo:       github.com/aldizzle/sarah-cloud
   │     Function:   polls admin@nslegal-ip.com via Microsoft Graph once each
   │                 weekday morning, with manual workflow_dispatch available;
   │                 parses ECF docket emails, posts structured messages to
   │                 Slack #nick-firm channel
   │     Phase:      1 done (email→Slack). 2 in roadmap (interactive @Sarah).
   │     Cost:       $0 while Render remains suspended
   │
   ├── case_manager (lawfirm action board)
   │     Lives in:   Nick Law Firm AI/_reference/skills/case_manager/
   │     Output:     Slack canvas pinned in #nick-firm + per-run markdown
   │                 to Nick Law Firm AI/_workflow_runs/
   │     Refresh:    bash Nick Law Firm AI/_reference/web_dashboard/refresh_canvas.sh
   │                 (manual today; auto-refresh planned in B.4)
   │
   ├── Other workspace skills (drafting pipeline)
   │     sync_clio · update_kb · draft_document · audit · upload_to_clio ·
   │     notify_defendants
   │     See WORKFLOW.md for the pipeline diagram.
   │
   └── CopyCatch (now: lead-gen marketing channel only)
         URL:        copycatch.ai (separate Firebase project genuine-haiku-426519-u5)
         Repo:       Kozu-Labs/copycatch-landing-11.3.25 (frontend only)
         Status:     Backend services (13 Cloud Run containers) deprecated;
                     site stays live as a marketing funnel routing prospective
                     IP-enforcement cases to Nick.
         Cost:       ~$30/mo currently. Backlog: clean up to ~$0 (see § 2).
```

---

## 2. Active todos (carry across sessions)

Use GFM checkboxes. Open `[ ]` carries forward; closed `[x]` is history.

### nick-site / portal

- [x] A.1 Lockdown (firestore.rules + delete admin.html + rotate SA)
- [x] A.2 Contact form → Slack #nick-firm via Cloud Function (rate-limited, honeypot)
- [x] A.3 Custom domain `nslegal-ip.com` wired (was already done by Frank)
- [x] A.4 Portal architecture (5 Cloud Functions + audit log + brand-matched UI)
- [x] A.4.1 Audit log layer (login/view/download events to per-defendant subcollection)
- [x] A.6 Bullseyebore portal v1 SHIPPED at nslegal-ip.com/portals/bullseyebore-26cv03898/
- [x] Publish the Nick authority/inbound growth plan and cross-site trust architecture
- [ ] Ratify the homepage category, primary attorney-referral CTA, and sourced credentials registry with Nick
- [ ] Run a 60-minute Nick authority interview and approve the first public matter/content set
- [ ] Fix the broken Insights route and sitemap; add source-safe funnel attribution
- [ ] Complete the narrow Clio C0 schema-only inventory before requesting any matter metadata
- [ ] Run the Nick-site visual-direction bake-off only after copy and proof inputs are approved
- [ ] A.5 Codify what worked into `portal_publish` workspace skill (sibling to notify_defendants)
- [ ] A.4.2 `portal_audit` skill — generate per-defendant service-of-process reports
- [ ] Portal v2: `--keep-password` flag on provisioner (idempotent re-runs)
- [ ] Portal v2: mobile UX testing
- [ ] Portal v2: per-defendant Schedule A snippet (extract one row from Ex 4 PDF) — replace "no document attached" with "Your row in Schedule A"
- [ ] Portal v2: fix the JS+HTML provisioner bugs we band-aided in A.6 (templates have absolute-path patches that don't substitute __SLUG__ yet — re-applies needed for next case provisioned)

### sarah-cloud / docket-driven cascade

- [x] B.0 Cost cutover — daily GitHub Actions ECF→Slack workflow live; Render worker suspended (2026-06-07)
- [ ] B.1 Active-case registry (`Nick Lawfirm AI/_active_cases.json` + Firestore mirror + activate/deactivate CLI)
- [ ] B.2 Mac-side launchd auto-poll cascade (sync_clio → emit-json → push → portal_publish per active case)
- [ ] B.3 Cloud-side ECF receipt log in Firestore (per-case ecf_receipts subcollection)
- [ ] B.4 Canvas auto-refresh (V1_SPEC P0.3/P0.7/P0.9) — Mac→Sarah cases.json push + 8am cron + ECF-event-driven
- [ ] B.5 Cloud-side gap-detection alerts (Sarah hourly diffs ECF receipts vs Clio inventory)
- [ ] B.6 case_manager extended as orchestrator (`--cascade` flag; action board surfaces sync_state)
- [ ] B.7 Universal admin@ email triage (defendant-attorney + client + platform-legal classification via Claude API)
- [ ] B.8 (DEFERRED) Sarah doc1/-link safety net for missed PDFs

### CopyCatch (lead-gen, cost optimization)

- [ ] Tier 1: `gcloud run services update copycatch-scan --min-instances=0` → ~$13/mo savings
- [ ] Tier 2: AR lifecycle policy (keep latest only) → ~$2.50/mo savings
- [ ] Tier 3: empty `run-sources-*` and `gcf-v2-sources-*` storage buckets → ~$0.30/mo savings
- [ ] Optional: Cloudflare in front of copycatch.ai → cuts Hosting bandwidth ~$14/mo to near-zero (~30-min separate task)

### Lawfirm workspace

- [ ] Update CLAUDE.md WORKSPACE SKILLS list to include `portal_publish` + `portal_audit` once shipped
- [ ] Update WORKFLOW.md pipeline diagram to show portal_publish as a downstream sink
- [ ] Polish judge-extraction regex in `_reference/scripts/analyze_admin_inbox.py` (currently 0 matches; needs to read `body.content` not just `bodyPreview`)

### Security / hygiene

- [ ] Rotate Slack incoming-webhook URL (was pasted in chat 2026-04-30 + 2026-05-01)
- [ ] Rotate Render API key (was pasted in chat 2026-04-30; new one rotated 2026-04-30, but new key also in chat now)
- [ ] Decide on Render API key permanent home (currently in `sarah-cloud/.env`, gitignored)

### Loose ends from this session

- [ ] Walmart Legal email at admin@ (4/27 20:00 — RE: TRO / DO - BULLSEYEBORE) — flag to Nick if he hasn't seen
- [ ] Optional: clean up the 5 "RateLimit Test" leads in #nick-firm (or leave; harmless)

---

## 3. Conventions established (hard rules)

These are decisions the team has made; respect them across sessions.

### Engineering

- **Never deploy before pushing.** GitHub is source of truth. Always `git push` before any `firebase deploy` / Render deploy.
- **Never commit build output.** `public/blog/` (regenerated by build-blog.py), `functions/node_modules/`, `.firebase/`, etc. stay out of commits.
- **Always rebase, never merge.** `git pull --rebase origin main`.
- **Cookie name in Firebase Hosting projects MUST be `__session`.** All other cookies are stripped by the CDN. (Bit us in A.4.)
- **Firebase project IDs are immutable.** Display names can change; the underlying ID stays. Don't try to "rename" projects — migration is the only real option.
- **Cloud Run min-instances=0 by default.** `=1` means always-on $10-15/mo per service. Reserve for cases where cold-start truly matters.
- **Set $5/mo budget alerts on every Firebase project.** Paranoid floor; never expected to fire at our scale.
- **Service accounts get only what they need.** Provisioner SA: Firestore + Storage write. Function runtime SA: signBlob role for signed URLs.
- **Secrets via Secret Manager, never in code or env files committed to git.** `firebase functions:secrets:set` reads from `--data-file` to avoid shell-history leaks.

### Provisioning

- **Schedule A (Ex. 4) is excluded from per-defendant exposure.** Same rule `notify_defendants` v1.1 enforces. Defendants should never see other defendants' identities.
- **Audit log is append-only and firm-only readable.** Defendants cannot read their own access log.
- **Portal activation trigger = motion for alternative service GRANTED.** Don't pre-provision portals; provision per case as alt service lands. Same rule `notify_defendants` enforces.

### Workflow

- **Workspace files live in iCloud** (`Nick Lawfirm AI/`); cross-Mac sync handled there. `nick-site/` is git-versioned (not iCloud-synced).
- **`~/NS.md` is the canonical session memory file**, symlinked to the iCloud version. Update on each major milestone.
- **TodoWrite items are ephemeral; persist meaningful ones to NS.md § 2** before session end.

### Growth and public positioning

- **Nicholas Lee is the cross-site trust anchor; CopyCatch is capability proof.** Attorney and IP-owner marketing should establish Nick's sourced practitioner authority before relying on product claims.
- **CopyCatch and Nick's legal practice are separate but connected.** CopyCatch provides monitoring and organized factual records; legal services require conflicts review and a separate engagement.
- **Use Nick's exact public relationship as `Co-founder and IP litigator`.** Do not imply that every CopyCatch result has received attorney review.
- **Review provenance must remain explicit and event-derived.** Only `CopyCatch reviewed` is supported today. `Ready for counsel` requires the future promotion/quality gate; `Attorney reviewed` requires a named reviewer, date, immutable revision, and auditable event.
- **Do not use a disclaimer to reverse a misleading net impression.** Headlines, portraits, CTAs, output labels, and nearby disclosures must communicate one coherent relationship.

---

## 4. Session log (newest first)

### 2026-07-13 — Nick authority and inbound growth architecture
- Audited the live `nslegal-ip.com` site, public repository, Firebase/contact foundation, current information architecture, structured data, crawl behavior, and lead path. Confirmed material growth gaps: one mixed-audience page, product-first trust sequencing, broken Insights route, missing sitemap, no useful attribution, and unsupported performance/court-ready language requiring a claims registry.
- Created `docs/nick-authority-inbound-growth-plan.md`, a decision-ready plan covering attorney and IP-owner ICPs, Nick-first positioning, CopyCatch and monitoring-product boundaries, P0/P1 page architecture, authority content, AI-citation/SEO, narrow Clio research controls, segmented intake, analytics, design, team roles, and launch acceptance criteria.
- Locked the trust relationship: Nick is presented as CopyCatch `Co-founder and IP litigator`; his legal practice and CopyCatch are separate but connected; Nick is the authority anchor while CopyCatch is factual capability proof. Public/client UX must never imply that every output is legal advice or attorney-reviewed.
- Completed a sanitized adversarial review in the dedicated CC/Fable chat. Adopted the standing advertising-compliance gate, Nick-as-origin visual separation, second-viewport CopyCatch placement, event-derived review labels, conflicts-safe owner routing, six-page P0, and falsifying 30/60/90 tests. No client names, Clio material, private cases, research mechanics, credentials, or fee arrangements were shared.
- This release is planning and memory only. The public site and portal behavior were not redesigned or changed.

### 2026-06-07 — Sarah cost cutover to free GitHub Actions
- Sarah ECF→Slack moved off the always-on Render background worker and onto GitHub Actions (`.github/workflows/ecf-to-slack.yml`) in `github.com/aldizzle/sarah-cloud`.
- Pushed commits: `7547231` added business-hours/stateless dedupe support; `92262a7` switched the deployment target to daily GitHub Actions and removed the Render cron blueprint.
- Copied Sarah's existing Render env vars into GitHub Actions repo secrets after Alan approval; no secret values recorded here.
- Manually dispatched workflow run `27101219889`; completed successfully. Because this ran on Sunday, it verified Actions/dependency/secret wiring and exited via the business-hours guard.
- Suspended Render worker `srv-d7gq5p8sfn5c73e0m4q0`; Render API reports `suspended`.
- Residual local note: `/Users/alan/Documents/NickFirmAI/sarah-cloud` still has an unrelated uncommitted `sarah/clio_client.py` change from before this session; it was intentionally left out of the Sarah cost-cutover commits.

### 2026-05-01 (PM) — Memory consolidation: NS.md unified
- Restructured `~/NS.md` as the firm-wide unified memory file (this restructure).
- Moved real file to iCloud workspace at `Nick Lawfirm AI/NS.md`; symlinked `~/NS.md` → it (cross-Mac via iCloud).
- Pulled in sarah-cloud, case_manager, CopyCatch, lawfirm-workspace state into project map (§ 1).
- Consolidated open todos across all workstreams into § 2 (GFM checkboxes; survives across sessions).
- Updated `/deploy` slash command + Stop hook to persist current todos back into NS.md before commit.
- Reverted documented "Sarah polls 1hr" decision — stays at 2 min default. Cost is identical at $7/mo Render Starter, faster polling more useful for time-sensitive court emails.

### 2026-05-01 (AM) — Portal v1 QA round 1
- Two bugs caught + fixed during Alan's QA:
  - **CSS not loading**: Firebase Hosting strips trailing slash → relative `./css/portal.css` resolved against parent dir. Fix: absolute paths in HTML.
  - **Login failing 400 "missing_fields"**: provisioner global `__CASE_ID__` substitution overwrote a JS sentinel string, returning null for caseId. Fix: split-string trick in JS so naive substring substitution can't match.
- "Download PDF" button → "Download" + filled-violet CTA style per Alan's UX preference.
- All gates passing end-to-end again. Sarah's polling check confirmed at 2 min (default; never actually changed).

### 2026-04-30 — Bullseyebore portal v1 SHIPPED
- URL: https://nslegal-ip.com/portals/bullseyebore-26cv03898/
- Password: `c69sUi3JSEDTwzfY` (regenerates on every provisioner re-run — v2 limitation)
- 24 defendants, 21 public PDFs (Schedule A Ex 4 excluded)
- Audit log captures every login/view/download event with IP + UA + session_id
- 7 verification gates passed (login OK/bad/missing-email, data fetch, public download, deny private, logout, audit)
- Built: `functions/portal.js`, `public/portals/_template/`, provisioning script at `Nick Law Firm AI/_reference/scripts/provision_portal.js`, storage.rules
- Created portal-provisioner SA: `portal-provisioner@nick-site-web.iam.gserviceaccount.com`
- Bucket: `nick-site-web-portal` (custom-named; `*.firebasestorage.app` is Firebase-managed and can't be created directly)
- Granted Cloud Run runtime SA `roles/iam.serviceAccountTokenCreator` for getSignedUrl signBlob.

### 2026-04-30 — Frank-pattern session-management infra
- Added `nick-site/.claude/commands/deploy.md` (slash command), `.claude/hooks/on-stop-deploy.sh` (Stop hook with stash/rebase/pop, source-only commit, push-before-deploy, ~/NS.md auto-update), `.claude/settings.local.json` (registers hook + pre-allows ~25 routine commands).
- Created `~/NS.md` + `nick-site/MEMORY/NS.md` for nick-site-specific memory (now consolidated into firm-wide NS.md).

### 2026-04-30 — Cost structure analysis + reference doc
- Investigated CopyCatch's $30/mo: copycatch-scan always-on ($13), Hosting bandwidth from copycatch.ai ($14), AR storage ($2.65), misc ($0.50).
- Saved cost-structure reference doc at `Nick Lawfirm AI/_reference/cost_structure.md`.
- Decisions log: stay on Firebase, drop original Cloudflare migration plan, single Firebase project for nick-site + portals, Sarah on $7/mo Render Starter for Phase 2 readiness.

### 2026-04-30 — Email volume empirical analysis
- Analysis script at `Nick Lawfirm AI/_reference/scripts/analyze_admin_inbox.py`.
- Output at `Nick Lawfirm AI/_reference/email_volume_analysis.md`.
- Key findings: 231 emails / 90 days, 2.6/day avg, 21 distinct cases (broader than the 6 "active" ones), 30% external (counsel/client/platform legal), 45% court ECF, 33% CC'd to admin@. LLM-classification cost projection: $0.06/mo at current rate.

### 2026-04-29 — A.1 Lockdown + A.2 contact form
- Closed Firestore rules data leak on /submissions (was `allow read, update: if true` — every submission publicly readable).
- Deleted public/admin.html (had `const PASSWORD = 'CCQA'` hardcoded in client JS).
- Deployed locked-down rules; verified with unauth curl returning 403.
- Built submitContact Cloud Function with validation/honeypot/rate-limit/Slack-webhook/Firestore-tee.
- Hostingrewrite at `/api/submitContact`. End-to-end verified: form submission → Slack message in #nick-firm + Firestore record. 7/7 gates passed.

---

## 5. Pointers — when you need more depth than this file

| Need | Read |
|---|---|
| Lawfirm rules / drafting protocol | `Nick Lawfirm AI/RULES.md` |
| Cross-session legal-work narrative (cases, drafting, filings) | `Nick Lawfirm AI/SESSIONS.md` |
| Operational pipeline diagram (sync_clio → ... → upload_to_clio) | `Nick Lawfirm AI/WORKFLOW.md` |
| Reference docs map (case strategy, judge intel, etc.) | `Nick Lawfirm AI/Nick Law Firm AI/_reference/INDEX.md` |
| Cost structure + decisions log | `Nick Lawfirm AI/Nick Law Firm AI/_reference/cost_structure.md` |
| Email-volume empirical baseline | `Nick Lawfirm AI/Nick Law Firm AI/_reference/email_volume_analysis.md` |
| Sarah architecture / build phases | `Nick Lawfirm AI/sarah-cloud/{README.md, LEARNING_PATH.md}` |
| Per-client case state | `Nick Lawfirm AI/Clients/{Client}/STATUS.md` |
| Brand guide (colors / typography / tone) | `Nick Lawfirm AI/nick-site/BRAND-GUIDE.md` |
| Active engineering plan (the big two-workstream doc) | `~/.claude/plans/i-do-the-own-concurrent-gem.md` |
| Provision_portal script (one-off; codifies into portal_publish) | `Nick Lawfirm AI/Nick Law Firm AI/_reference/scripts/provision_portal.js` |
| Inbox analysis script | `Nick Lawfirm AI/Nick Law Firm AI/_reference/scripts/analyze_admin_inbox.py` |

---

## 6. Credentials inventory (locations only — never values in this file)

| Credential | Where it lives | Who/what uses it |
|---|---|---|
| Firebase nick-site-web project access | `gcloud auth login` (alan@kozulabs.com) | All firebase / gcloud commands |
| Render API key | `sarah-cloud/.env` (gitignored) | Querying Sarah's env vars + admin operations |
| Microsoft Graph creds (admin@nslegal-ip.com) | Render env vars on `srv-d7gq5p8sfn5c73e0m4q0` | Sarah ECF poll + email_volume_analysis script |
| Clio API tokens | Render env vars + `Nick Law Firm AI/clio_data/token.json` | sync_clio + upload_to_clio + Sarah |
| Slack bot token (Sarah bot) | Render env vars (`SLACK_BOT_TOKEN`) | Sarah posts to #nick-firm |
| Slack incoming webhook (contact form) | Firebase Secret Manager (`SLACK_LEADS_WEBHOOK`) | submitContact function |
| Portal session signing key | Firebase Secret Manager (`PORTAL_SESSION_SECRET`) | portal{Login,Data,Download,Event,Logout} functions |
| Portal-provisioner SA key | `~/.config/nick-firm-portal-provisioner.json` (mode 600) | provision_portal.js writes Firestore + Storage |
| GitHub repos | github.com/Kozu-Labs (nick-site), github.com/aldizzle (sarah-cloud) | Source of truth for code |

---

_Last restructure: 2026-05-01 (PM). When this file crosses ~500 lines, archive older session-log entries to `Nick Lawfirm AI/_archive/NS_2026-{Q}.md` and reference back to it._

### 2026-07-13 — Nicholas Lee authority site shipped
- Rebuilt and deployed `nslegal-ip.com` as a six-page authority-first inbound channel: Home, For Attorneys, Schedule A Litigation, About, CopyCatch bridge, and Contact. The page sequence makes Nicholas Lee the trust anchor and positions CopyCatch as separate factual-investigation capability rather than implied legal oversight.
- Final visual system is the Annotated Practice direction. The header wordmark is `The Law Office of Nicholas Lee`. The approved glasses portrait was recovered exactly from historical Firebase Hosting version `a13722686c04447a`, deployed at 1080x1350 with SHA-256 `ed2134b249eb2b87b8b205a5043dbf73767677bd75b6ef8dcc76d956c6fa6caa`, and rendered uncropped at a restrained 330px desktop / 280px mobile frame.
- Source is synchronized on `main` through commit `3ac9cb6`. Firebase project `nick-site-web`, hosting target `nick-site`, serves `https://nslegal-ip.com` and `https://nick-site-web.web.app`.
- QA passed across desktop and mobile with zero horizontal overflow. All public routes, SEO/AI files, and assets return 200; missing routes return 404; portal routes remain noindex. The existing contact-to-Slack integration returned 200 for labeled QA submission `xtdDwB4xhkQwJ3XUPvKV`, with no Slack-post failure in function logs.
- Nick/legal still needs to verify all credentials and approve `docs/marketing/attorney-advertising-prepublication-checklist.md`. Clio-derived results or insight content remains deferred pending access plus legal approval.
