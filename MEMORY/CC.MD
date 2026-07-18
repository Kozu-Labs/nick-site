# CopyCatch Session Memory

## Session: 2026-07-15 - MNQ deterministic research and paper-trading system

- **2026-07-16 H5 result (current):** After v4 stopped, Alan explicitly overrode the OHLCV stop rule for one separate long-only H5. He first approved five-minute Wilder RSI(14), buy below 30, sell at/above 60, next-minute fills, one MNQ/one entry per trading session, one-ATR stop, 14:59 forced exit, and $10 friction; before any H5 count or P&L, he replaced the daily exit and confirmed the recommended multi-session form. Frozen `mnq-v5.0.0` uses contract-own Globex five-minute RSI/ATR, holds across sessions/weekends until RSI 60 or stop, forces out at mapped-contract roll/data guard, and marks out only at research boundaries for sample independence. Long-only total/long coverage gates apply; disabled short gates do not. Pre-result commit `72a3bb47419ab3249a35f3aa4d2e4b574397d918` was rebased and pushed after 515 Python checks in isolated groups, 19 relay checks, Ruff, formatting, mypy, and config validation passed; config SHA-256 is `ac6d969932a4e2860a0cc1d028efa2ecde455d033c8945ad5c821cf736e905b2`. Clean evidence preparation retained the 12 existing exclusions. H5 cleared coverage with 930 long development trades across 1,025 sessions, projecting 343.87 holdout trades, but development produced `STOP`: mean daily net R `-0.534061`, mean trade `-0.588615R`, PF `0.684446`, maximum drawdown `555.832R`, win rate `20.54%`, and net dollars `-$7,889` under $10 friction. Exit counts were 191 RSI exits and 739 stops. Selection manifest `a1e538bfc3bf80e5bd119cd9625028c538998d960eee843402752909a3dd773c` has no winner; 2024 and the 2025–2026 holdout remain sealed. No H5 threshold, stop, session, or exit tuning and no official alert/paper position are permitted. Result commit `5a710419c87a0708512cfef0a42681beea9bd9bb` is rebased and pushed on synchronized `main`. Public Vercel deployment `dpl_Fv66DFnefSD1PXL9EzmK6VP3fnro` is Ready at `https://mnq-v1-research-status.vercel.app`; live/local SHA-256 is `c94d827753c8782476ee9057c826a0cf60567121646afb5ccdbcf70d465f9116`.
- **2026-07-16 v3 result (current):** Alan approved the exact `mnq-v3.0.0` one-shot opening-shock reversal before any v3 census or P&L. Commit `874c8aa591089b1c41b096c86b9973f4a98bc773` froze the same-contract prior RTH close, absolute 20 bp 08:30 shock, fade at 08:40, 1 ATR stop, no target, fixed 09:40 exit, one MNQ, $10 primary friction, and no trend/VWAP/RelVol/RSI/news filters; it passed 485 tests in isolated groups, Ruff, formatting, mypy, and config validation and was pushed to synchronized `main` before outcomes. The census passed with 755 development trades (342 long/413 short), projecting 279.17 holdout trades. Development then produced `STOP`: mean daily net R `-0.150047`, mean trade `-0.203706R`, PF `0.773038`, maximum drawdown `174.211R`, long mean `-0.157522R`, short mean `-0.241950R`, and net dollars `-$7,917` under $10 friction. Selection manifest `e127248944c96299f64aa5e8ca332c4879193bb09ae483b9d9aaf29106158949` has no winner; 2024 and the 2025–2026 holdout remain sealed. No v3 tuning, official TradingView alert, or paper position is permitted. In parallel Fable ranked one future OHLCV candidate—late-session flow momentum using the 08:30→09:00 sign for a 14:30→14:59 trade—and recommends stopping OHLCV-only research if it also fails; the advice is quarantined in `docs/fable-v4-strategy-candidates-2026-07-16.md` and is not authorized for count/P&L. Result commit `f544159` is pushed to synchronized `main`. Public Vercel deployment `dpl_3JgeJCeqwKxiYv8K7HqkDFTbNHEo` is Ready at `https://mnq-v1-research-status.vercel.app`; live/local SHA-256 is `8723ecc0fac7cecb50f9c24deff152e4f4703ab9a990ba1e19d631ca4a1b6e32`.
- **2026-07-16 bounded v3 proposal:** With v1.2/v2 continuation strategies rejected, primary-source review found one genuinely independent simple OHLCV candidate: opening-shock reversal. Grant/Wolf/Yu (JBF 2005) studied a ±0.20% opening gap and reported about 10 minutes of continuation followed by reversal, but warned transaction costs sharply reduce significance; Fung/Mok/Lam (JBF 2000) reported similar index-futures reversal with limited after-cost opportunity. A recent MNQ-specific OHLCV falsification paper reports no tested family passed all cost/stability gates, so broad indicator mining is not justified. `docs/v3-opening-shock-reversal-proposal.md` defines one proposal-only test: same-contract prior RTH close, absolute 20 bp 08:30 shock, fade at 08:40, existing 1 ATR stop, no target, fixed 09:40 exit, one contract, $10 primary friction, no trend/VWAP/RelVol/RSI/news filters, unchanged coverage/selection/holdout gates, and no alternative threshold/horizon after inspection. No v3 count or P&L is authorized until Alan approves the exact proposal.
- **2026-07-16 v2 result (current):** A coverage-only search for a viable H1 revision inspected no v2 entries, exits, or P&L. Removing candle color changed no signals; an 08:50 start projected 93.55 holdout trades and failed coverage; an 08:45 start produced 272 development signals (157 long/115 short) and projected 100.57 holdout trades, the first natural boundary to pass, so the search stopped. `mnq-v2.0.0` froze H1 alone at 08:45–10:00 with all other rules unchanged and H2 retired; commit `cd0480c2bafea2c72fc5e41dfe481f23d6d37be2` passed 471 Python tests, Ruff, formatting, and mypy and was pushed before P&L. Clean v2 preparation bound configuration hash `62e5fbf47d28d25a314109542a1aaf5b4adc6824cd35311425fc77fb8db1f48e`. The first v2 development run then produced `STOP`: mean daily net R `-0.041461`, mean trade `-0.156242R`, PF `0.804720`, maximum drawdown `43.412R`, long mean `-0.198983R`, and short mean `-0.097890R` under $10 friction. Selection manifest `a4b13a7c0577f18942a2c65be79596fc127076219c127c1612cf974badb104d4` has no winner; no 2024 selection P&L or holdout was opened. Result commit `75bdccc` (`Record v2 development stop`) is rebased/pushed on synchronized `main`. Public deployment `dpl_GQoCJ2t157vxutraHpjrFSDBM6eB` is Ready and aliased to `https://mnq-v1-research-status.vercel.app`; live/local SHA-256 is `26498079a8b8b0bf9efec343268c6f0a2c1089e8c0c02b56cefdc63f83fa7378`. Official Stage A/B, TradingView strategy alerts, and paper positions remain locked. The next owner decision is a genuinely different frozen v3 hypothesis versus an explicitly non-promotable software/paper sandbox; post-result tuning of v2 is forbidden.
- **2026-07-16 v1.2 historical result:** The clean `mnq-v1.2.0` preparation and development gate completed from sealed Databento evidence. Prepared-evidence commit `ddfc4df58a5d497648ed7031cec0c5e07144ef12` follows the practical-session commit `371bc88de9a6fac322c8d8046d425a0c8422d2e0`; 1,761 observed RTH sessions and 12 objective vendor/incomplete-date exclusions were frozen before P&L. Selection manifest SHA-256 `e37e554eeb4562e7000138c145aa02c9d20c6a13b98ee3de815123cc240f1cd9` produced `STOP` with no winner. H1 was structurally inconclusive before P&L: 223 development signals projected about 82 holdout trades, below the frozen 100-trade gate. H2 was structurally testable but unprofitable in development: 323 trades, mean trade `-0.2466R`, profit factor `0.6739`, mean daily net R `-0.07771`, and maximum drawdown about `88.56R` under $10 friction. No 2024 selection P&L and no 2025–2026 holdout data was opened. Official Stage A/B and webhooks remain locked; neither hypothesis may be paper-promoted as validated. Result commit `4486503` (`Record v1.2 selection stop`) is rebased, pushed, and synchronized on `main`. The public result is deployed as Vercel production `dpl_CgUUrZXQLiyHpj2wojqVq7844x8s` at `https://mnq-v1-research-status.vercel.app`; live/local SHA-256 is `d0d1dd9c1744d697f7defc862828d13fa2a01e21b88b0c626ea9b9c5b02b06b1`. In logged-in Chrome, explicit `MNQU2026` still displayed delayed data and TradingView's CME page still offered subscription, so the newly purchased CME entitlement is not yet recognized in that session and must be confirmed in TradingView billing rather than purchased again. The next valid choice is a separately frozen v2 hypothesis (recommended: an H1 density revision selected from signal coverage only) or an explicitly non-promotable experimental sandbox.
- **2026-07-15 current launch decision:** Alan approved `mnq-v1.2.0` before any P&L was opened. Scheduled macro releases no longer suppress H1/H2 signals; July 16 is eligible if the ordinary trend, RelVol, mapping, and data-quality gates pass. This broadens the tested session population but does not make the bot news-aware. The economic-calendar archive is removed from the launch critical path; exchange-session validity, genuine halts, contract mapping, and corrupt/missing-bar exclusions remain required. Alan purchased TradingView CME and Nasdaq live data and explicitly requested the shortest safe launch path and Chrome-based alert/webhook setup. The active Codex goal is: finish historical preparation and selection, open only the selected one-use holdout after clean-room reproduction, and—only after historical PASS—deploy the brokerless receiver/relay, configure TradingView alerts, complete Stage A, and begin Stage B paper operation. No live brokerage orders are authorized. Source commit `3c4dc1bd108ae722aecf1de3223d2839ae44252c` (`Trade scheduled macro sessions in v1.2`) is rebased, pushed, and clean on `main`; 467 Python checks, Ruff, mypy, and 19 relay tests pass. Status deployment `dpl_AmrwTUM8MKpvKhGXV5Bh4JGpWR6o` is live at `https://mnq-v1-research-status.vercel.app`; live/local SHA-256 is `ae832568c22ed9383cc2be0294c9b2a7129d7d5b52e13a033180304fbd032f68`. A clean `prepare-evidence` now reaches the obsolete five-file calendar-bundle requirement, which is the immediate code blocker being replaced by a deterministic session/data-quality input path.
- **Current state (supersedes the earlier snapshot bullets below):** commit `a5d9a043e4c750b1a7b38ee6293f9a71498d60f0` (`Harden current-calendar evidence boundaries`) was rebased onto synchronized `main` and pushed. Verification is green: 466 Python tests, 19 relay/security tests, Ruff, formatting, and mypy locally; CI run `29460325624` passed for that exact commit. No development P&L, selection, prepared evidence, or holdout was opened.
- Review-governance commit `cdacc0a0541ae87ee126ebcf8611d57bfbb6e857` (`Constrain Fable review to next-gate blockers`) is pushed to synchronized `main`. The standing Codex/Fable rule is to recommend only the simplest necessary work that unlocks the next gate, reduces a material risk, or satisfies a required acceptance test; optional architecture, process, vendor, dashboard, indicator, and archival-perfection work is deferred. The current tracked-only snapshot is attached and the final pre-P&L Fable prompt is staged in the dedicated chat with this constraint. The unchanged read-only status page was redeployed as Vercel production `dpl_HLRMQqeg7p1ryE6YAU3ftsiyGpJB`; live/local SHA-256 remains `0ab7d1cc8c4a3f6ac75e88f86480f4752aa6de2fa87d0b72efb0e94728dcd416`.
- Alan reconfirmed that the historical Databento backtest—not a paper-infrastructure smoke test—is the next goal. Commit `91dc6a2a7d3cf59eab3fe4730366c6a53daa722a` (`Prioritize streamlined historical backtest`) is pushed to synchronized `main` and records the shortest recommended pre-result route: preserve strict `mnq-v1.1.0`, freeze a new version without the macro-news blackout, derive tradable/suspect session handling deterministically from the already-purchased MNQ data, then run development and 2024 selection before any paper launch. The only pending Alan decision is whether to approve removing the macro blackout instead of continuing the point-in-time calendar archive; no new key, broker, hosting, or data purchase is needed. The status page is live from Vercel deployment `dpl_A515JbV7B7tZx54HEQLQLRdLiG9i`; live/local SHA-256 is `170f2d968cf454b0bd4e3dabf1496ba6470a558bfadcb0830447aa2f64b35328`.
- Choice A's downside is now explicit in commit `fe9cdd8cc0adc02d527701ad07006d2e33f5c6a8` (`Document streamlined backtest risks`): it tests an all-valid-session strategy rather than strict v1.1, exposes the system to higher-volatility scheduled-news mornings, and may make one-minute modeled slippage/stop gap-through optimistic. A later blackout cannot be added post-result without becoming a new strategy and requiring new evidence. These are strategy/execution risks, not leakage; the recommended mitigation remains one-contract paper-only testing, frozen $10 cost gates, drawdown/concentration controls, and honest version labeling. The read-only status page was redeployed as `dpl_AMi7QGY98QyJMA2HUWT2j3HWmufD`; live/local SHA-256 is `d27e98e3129d81b3016a50a4e64fc553be617c87e9f0c59b4f861a49df66869c`.
- Alan proposed retaining simple no-trade days instead of choosing between no blackout and archival perfection. Commit `5167fe1743a2aa14c1c42dfd1e542d18d5f44999` (`Adopt practical blackout backtest path`) is pushed to synchronized `main` and records the recommended B-lite contract: one conservative date list frozen before P&L, original plus known revised dates, blackout sessions retained as zero-return denominator days while indicators update, identical use across development/selection/holdout/forward, and deterministic suspect-session exclusions from MNQ data. This does not statistically bias returns when frozen ex ante, but it reduces sample/power and may yield INCONCLUSIVE. Estimated work is 4–8 focused hours versus roughly 1–3 active days plus unbounded publisher/signer waits for strict B. No paid Trading Economics plan is authorized. The status page was deployed as `dpl_D7QWUCYZ3hnbCVjf8KNdmNFmXFt1`; live/local SHA-256 is `fb6bed482d710358dcf99ee95271c0662c89d058ac0e3314f9da917bd79dc141`.
- The immediate goal is now **B-lite selection-ready**, recorded in pushed commit `4b99941f9de47130f01bbae7250920c1af0f9570` (`Define B-lite selection goal`): freeze/hash practical blackouts and deterministic session exclusions, prepare the manifest, then run development census and 2024 selection to `STOP` or one eligible H1/H2 without opening holdout for a deadline. A true official paper position cannot launch July 16: Census schedules Advance Retail Sales for 8:30 a.m. ET / 7:30 CT, making the date a B-lite blackout, and official Stage A/B still requires historical gates. Infrastructure could shadow-run and verify flat/heartbeat/contract/blackout behavior, but it would not be validated paper evidence. Status deployment `dpl_EaeSg7R48udU8rAcXT9Bn9rvo3Zx` is live; live/local SHA-256 is `28cd12f515a4549c713e986b678d8a6ffaab6b3da1bed46f66f4743156de64f6`.
- The current immutable macro acquisition is `macro-evidence-v6`: 31/31 approved BLS/BEA/Census/Federal Reserve starting-point sources, manifest SHA-256 `cfa2f5a51afccff9ee212cdbe2562a08a68a7ff23139629abb009e9c294bc9df`. It adds the official BEA December 10 update and retains the January 7/15 updates plus current calendar. The manifest-bound BEA audit pins all 14 current national GDP/PIO identities in 2026-H1, but treats every current-feed row as candidate/corroborative and explicitly authorizes no P&L.
- Independent adversarial review caught and closed three evidence-tooling defects before commit: mutable BEA `DTSTAMP`/`SEQUENCE` metadata was overclaimed as historical proof; the BEA audit accepted arbitrary/non-structural files and omitted two January 22 releases; and the v5 manifest default collided with an old candidate output. The audit now replays ledger/manifest/source hashes, requires a strict single VCALENDAR envelope and exact event identities, enforces a complete current-feed census, writes immutable deterministic output, and defaults to fresh v6 paths.
- Alan explicitly chose simplicity over archival perfection. The point-in-time historical blackout reconstruction has reached diminishing returns and is no longer an open-ended research activity. The clean next product step is a separate, clearly labeled brokerless experimental MNQ paper sandbox using prospectively captured official release schedules, one contract, deterministic H1/H2 signals, simulated stop/target/10:30 flatten, and a read-only dashboard. Historical promotion/live-money eligibility remains locked until a deliberate new spec version either completes or simplifies the historical blackout contract and then passes its evidence gates.
- The read-only status page was redeployed as Vercel deployment `dpl_C8yaUZuLRNBXe1kgRcLcWDVW1KJm` and aliased to `https://mnq-v1-research-status.vercel.app`. Live and local HTML SHA-256 both equal `0ab7d1cc8c4a3f6ac75e88f86480f4752aa6de2fa87d0b72efb0e94728dcd416`.
- Three publisher/evidence requests remain draft-only and unsent: BEA, CME GCC, and ISM. CME historical alerts still require Alan to sign into the already-open Chrome tab if the strict historical track resumes. ISM retention is described only as a conservative project policy pending publisher clarification, not a legal conclusion.

### Earlier snapshot (superseded where inconsistent with the current state above)

- Published the current Fable-remediated pre-P&L release to private `aldizzle/TradingBot` `main` at exact commit `01fce94fd012be1016aea652765d0d30227837be` (`01fce94`, `Harden macro reschedule evidence`). GitHub CI run `29457808207` is green for that exact commit. The system remains limited to frozen H1 VWAP reclaim and H2 15-minute ORB research; friend-derived IB/FVG/RSI, Startup.IO signals, Vibe-Trading runtime code, AI trade decisions, and live brokerage orders remain excluded.
- Fable classified the historical rescheduled-release problem as a pre-freeze P0 validity defect that consumes no sample because P&L, selection, prepared evidence, and holdout were never opened. Version `mnq-v1.1.0` now freezes the union of every timely official original, intermediate, and latest eligible morning while preserving one occurrence identity and count; revisions add blackout dates but cannot inflate occurrence counts or calendar density. A separately signed schedule-version register makes completeness explicit, cancellations never remove dates, cross-month parents are bound without duplication, and a separate authenticated five-agency daily sidecar fails closed on stale, missing, ambiguous, unreachable, bad-hash, or bad-signature checks. Independent closure review reports no actionable P0/P1/P2 finding in this scope.
- Official-evidence tooling remains fail-closed. The macro candidate v4 binds official provenance, visible content, temporal coverage, occurrence attestation, exact lineage, the signed schedule-version register, and revision-union invariants; the global evidence audit v2 replays those invariants. CME holiday intake is staged, atomic, read-only, and cannot create `sessions.csv`. A final Ed25519 audit must inventory and sign every frozen calendar/source byte; the project contains no signer/private-key path and the reviewer public key is intentionally unconfigured.
- Verification is green: 450 Python tests, 19 relay security tests, Ruff, formatting, mypy, locked dependency resolution, package build, frozen-config validation, JSON template checks, secret/path checks, and the production-shaped DuckDB/Parquet synthetic pipeline. The rotated Databento value from ignored `key.env.local` appeared zero times in staged content; licensed/raw/runtime artifacts remain ignored.
- The frozen Databento purchase remains complete and must not be repeated: combined quote `$13.539773810655`; OHLCV job `GLBX-20260715-B9GQXWCPH6`; definitions job `GLBX-20260715-6HX8Q6DVHL`; 82 verified monthly DBNs per schema; 3,641,091 normalized one-minute rows across 32 quarterly MNQ outrights; Parquet SHA-256 `0ee161a3ad9d4ca3584875c1f6510d4df89461c835580942713d533d18aec355`.
- Historical evidence remains intentionally incomplete. All eight BLS annual pages for 2019–2026 are now captured; the macro-evidence-v4 source inventory has 27/27 starting-point records and source-manifest SHA-256 `321056fe999c036811a0687b8262e07c49d3c5ce70376e5990cf599ebec12216`. This is a source inventory, not verified occurrences. Remaining macro gaps are five lapse-affected BLS 2025 original dates, the original BEA January–June 2026 GDP/PIO chains, and complete point-in-time ISM Manufacturing/Services history. ISM requires written cooperation plus retention permission; the unsent request is in `docs/ism-official-calendar-request.md`. CME still needs January 16, 2023 MLK, February 2023–June 2026 special-session evidence, GCC records for March 9/12/16/18, 2020, and classification of February 28 and June 30, 2020. Its REST schedules API is insufficient because it has limited history and no point-in-time version field; the authenticated historical archive remains the lead. The v4 candidate is deliberately non-freezable; development, selection, holdout, and P&L remain unopened.
- A clean committed `prepare-evidence` run correctly stops because `calendars/frozen/{coverage.json,halts.csv,macro_blackouts.csv,sessions.csv,evidence-audit.json}` are absent. After evidence collection, assign an independent offline Ed25519 reviewer, freeze the public trust anchor with a new spec version, build/sign/verify the complete inventory, and only then prepare evidence and run the development census/2024 selection. Development, selection, holdout, and P&L remain unopened; no historical PASS or alpha claim exists.
- The authenticated observational dashboard, TradingView relay, Render packaging, and local paper ledger exist in code, but the paid forward stack has not been deployed. The zero-cost public research-status page is deployed as Vercel `dpl_EP6p1mEyaDeczdPQXGqmjFV1fB2P` at `https://mnq-v1-research-status.vercel.app`; live SHA-256 `d7736f9772f6b315f2cde411d3aaae7ebb8c055a79822b1fdcbf5f9740b4acf4` matches the committed static HTML. It has a deny-by-default CSP and contains no secrets, licensed data, webhook route, P&L result, broker connection, or order control. `config/promotion.json`, Stage A/B, forward services, Topstep/prop integration, self-funded broker routing, and live capital remain locked until their stated gates.
- Trading Economics is approved only as an optional point-in-time audit comparator and forward-operations convenience. Its documented point-in-time API may surface omissions or revisions, but it is third-party normalized data and cannot fill BLS, BEA, ISM, CME session, or CME halt gaps or unlock research. No API purchase or key is authorized; the decision and current pricing/licensing boundary are recorded in `docs/trading-economics-calendar-assessment.md`.
- The active Codex goal continues the sequence rather than being marked complete: finish official evidence and independent signing; prepare the pre-P&L manifest; run development/selection; clean-room reproduce the winner; consume only the selected one-use holdout; then advance a historical PASS through Stage A and Stage B before any separate broker/live-capital decision.

## Session: 2026-07-13 - mykitchen.bio entitlement-backed buyer access

- Closed the founding-outreach P0 where buyer receipt and recovery links ended at JSON instead of opening purchased content. PR #126 was independently reviewed, corrected, re-reviewed with no remaining P0/P1 findings, and rebase-merged to `main` at `3c9fbe51`.
- Recovery links now exchange into cookbook-scoped signed HTTP-only sessions; every cookbook and recipe read rechecks the exact live entitlement before querying private content. Refund, dispute, revocation, cancellation, expiration, wrong-buyer, and wrong-cookbook states fail closed.
- The paid buyer journey now includes real cookbook contents and a dedicated interactive Cook Mode with quantity scaling, ingredient check-offs, focused steps, and defensive screen wake lock. The client receives only the selected public recipe fields, not sibling recipes or internal metadata.
- The denied surface now provides privacy-safe email recovery with exact cookbook context. No match, delivery success, and delivery failure expose the same public response; production `string[]` recipe steps are normalized and regression-covered.
- Green evidence: buyer contract test, disposable real-Supabase integration, recovery/refund suite, launch contracts, typecheck, 91-route production build, Vercel preview, production HTTP/redirect smoke, and a browser check of the live recovery form with zero console warnings/errors.
- Production deployment `dpl_FtMzRT3zj8UqRW4GoXWF7Sx1ykDD` is Ready and aliased to `https://www.mykitchen.bio`. Root and buyer denied/recovery routes return `200`; an unauthorized cookbook URL redirects to the generic denied page while preserving cookbook context.
- This closes buyer-access delivery only. It does not change the no-outreach gate or certify the rest of the end-to-end founding-creator journey.

## Session: 2026-07-13 - Nick authority and inbound growth plan

- Audited the live `nslegal-ip.com` site and `Kozu-Labs/nick-site` repository, then created the decision-ready authority, inbound, content, SEO/AI-discovery, Clio-minimization, intake, analytics, design, and execution plan at `docs/nick-authority-inbound-growth-plan.md`.
- Locked the cross-site trust architecture: Nicholas Lee is presented accurately as CopyCatch `Co-founder and IP litigator`; Nick is the authority anchor while CopyCatch is the factual capability proof; CopyCatch and legal representation remain separate but connected through conflicts review and a separate engagement.
- Added the net-impression and event-derived review-provenance rules. Only `CopyCatch reviewed` is supported today; `Ready for counsel` requires the future promotion/quality gate, while `Attorney reviewed` requires a named reviewer, date, immutable revision, and auditable event. A disclaimer may not be used to reverse a misleading headline, portrait, CTA, or product label.
- Completed a sanitized adversarial review in the dedicated CC/Fable 5 Max chat. Adopted only the high-merit corrections: a standing advertising-compliance gate, Nick-as-origin visual separation, CopyCatch outside Nick's first viewport, event-derived review labels with only the live state exposed, conflicts-safe owner routing, a six-page P0, and falsifying 30/60/90 tests. No client names, Clio materials, private matters, research mechanics, credentials, or fee arrangements were shared.
- Restored the missing `~/NS.md` symlink to the iCloud canonical memory, updated the firm-wide growth rules and todos, and mirrored the current canonical file into `nick-site/MEMORY/NS.md`.
- Commit `eabca8c` (`Plan Nick authority growth system`) was rebased, pushed to synchronized `main`, and deployed to Firebase Hosting. `https://nick-site-web.web.app/` and `https://nslegal-ip.com/` both return `200`. This was a planning/memory release only; the known broken `/blog` and `/sitemap.xml` routes remain `404` and are explicit P0 implementation work.
- Fable review integration commit `41bf37f` (`Integrate authority plan review`) is rebased and pushed to synchronized `main`. The reviewed source was redeployed to Firebase Hosting; both roots remain `200`. The pass removed unsupported specialization phrasing, locked the six-page P0 and second-viewport CopyCatch rule, made the owner path conflicts-safe, and kept unreleased review states out of templates. No production site behavior changed; `/blog` and `/sitemap.xml` remain `404` until the implementation sprint.

## Session: 2026-07-13 - Calibrated Precision design source release

- Consolidated and committed the pending CopyCatch design-governance package: `_team/` now records the v3 Stark Editorial decision and trade-secret-safe investor framing; the approved `branding/Calibrated Precision/` source package and v4 explorations are checked in; the superseded moodboard assets were removed; and the Fable portfolio-expansion CRO review was preserved.
- Secret scan found no credential-bearing files in the staged release. Local `.env.local` remained ignored and uncommitted.
- Monorepo typecheck and production build both passed. Commit `adb6eb5` (`Adopt calibrated precision design sources`) was rebased against the refreshed `origin/main`, pushed to `main`, and left the repository clean and synchronized.
- Exact committed source was deployed to the Vercel `web` project as `dpl_D9J7awiVmEaJPUfZyEpW1C3Rx84x` at `https://web-p1uo7wobb-alan-kozulabscoms-projects.vercel.app`; `https://copycatch-v2-pilot.vercel.app` now points to it.
- Live verification returned `200` for the pilot root, `/workspace`, `/internal`, dashboard API health, and the separate public CrimpLok preview. The public preview alias was checked but not repointed or changed.

## Session: 2026-07-12 - 6.36-inch attorney-referral decision package

- Growth coordinated separate Amazon and non-Amazon bounded marketplace checks for
  a real attorney-originated 6.36-inch Linux single-DIN opportunity. Both lanes
  independently returned `GO` for a scoped deeper investigation while preserving
  the distinction between image-level relevance, unproven touch behavior, and legal
  conclusions.
- Amazon reviewed five first-page query windows and four representative product
  pages: two AINAVI/AINAVIGO visual candidates, one ambiguous Eonon X3U, and one
  visually irrelevant Pyniro example. The non-Amazon lane reviewed one Google
  Shopping result set, a shallow Walmart window plus three surfaced pages, two
  public eBay pages, and one direct-brand result: three relevant, three ambiguous,
  and three irrelevant listing appearances.
- Strongest immediate lead is the AINAVI/AINAVIGO family, including the
  `6.36-SD-02` model name. Eonon X3U is a repeated named lead but needs clearer UI
  imagery or operating video. The critical later proof task is whether touching the
  apparent in-display rail changes central content; listing images cannot establish
  that behavior.
- Nick's materials are saved under
  `/Users/alan/Product Research/outputs/019f47e9-e302-7bf2-880d-09372ce602b6/onscreen_6_36_surface_check_2026-07-12/`:
  `Nick Decision Brief.md`, `Representative Source Appendix.md`, and
  `Draft Reply to Jeff.md`.
- The sanitized product-learning record is
  `docs/referral-surface-check-result-2026-07-12.md`, linked from
  `docs/real-inbound-product-qa-plan.md`. The recommended next scope is exact-family
  seller/listing mapping followed by targeted video or approved test-buy work. No
  damages, recovery, prevalence, infringement, SourceRecord, MonitoringCycle,
  package, or client-pulse conclusion was created.
- Alan authorized the next deeper pre-engagement pass after the eye test passed.
  Amazon and non-Amazon research lanes are now expanding exact-family and high-signal
  queries, deduplicating strong visual listings by seller, and confirming seller
  country only from public business disclosures. The next decision package will use
  confirmed non-U.S. unique sellers as a defensible lower bound, with unknown-country
  sellers reported separately; it will not infer geography, damages, or complete
  marketplace prevalence.
- The deeper pass completed at seller-novelty saturation. Independent CSV
  reconciliation confirms `9` current Strong/visually supported marketplace
  listings and `5` confirmed non-U.S. current marketplace seller accounts: China
  `3`, Hong Kong `1`, and United Kingdom `1`. Amazon contributed `7` current Strong
  listings across `4` sellers (`3` non-U.S., `1` U.S.); non-Amazon contributed `2`
  current Strong listings across `2` non-U.S. sellers. The U.S. seller, ended row,
  preorder, direct-store duplicate context, ambiguous products, and unknown-country
  ambiguous resellers are excluded from the lower bound.
- Final decision materials now include `Deeper Opportunity Estimate.md` alongside
  the updated Nick brief, source appendix, and Jeff reply under
  `/Users/alan/Product Research/outputs/019f47e9-e302-7bf2-880d-09372ce602b6/onscreen_6_36_surface_check_2026-07-12/`.
- Underlying audited agent outputs are under
  `/Users/alan/Product Research/outputs/019f42ad-3d8e-78e2-b110-e449779b85fb/schedule_a_amazon_opportunity_2026-07-12/`
  and
  `/Users/alan/Product Research/outputs/019f4393-09e4-73e3-8f71-4dbc11046854/head_unit_opportunity_estimate_2026-07-12/`.
- Platform commit `e51c15c` (`Record attorney referral surface check`) is pushed to
  `main` after a zero-delta rebase check. Monorepo typecheck and production build
  passed. Exact committed source is deployed as Vercel
  `dpl_2456yXWdQ5Vy94KGyyKsZpCwCi3W` at
  `https://web-50npon6gr-alan-kozulabscoms-projects.vercel.app`, with
  `https://copycatch-v2-pilot.vercel.app` aliased to it. Pilot root/workspace, API
  health, and the separate static CrimpLok preview all returned `200`; the static
  preview was not repointed or changed.
- Final deeper-result commit `962a223` (`Record deeper referral opportunity
  estimate`) is pushed to synchronized `main` after a zero-delta rebase check.
  Monorepo typecheck and production build passed. Exact committed source is deployed
  as Vercel `dpl_5ses6taCgvCNmqA2kFsQV6W24LrR` at
  `https://web-q3cffux3x-alan-kozulabscoms-projects.vercel.app`, with
  `https://copycatch-v2-pilot.vercel.app` aliased to it. Pilot root/workspace,
  dashboard API health, and the separate static CrimpLok preview all returned `200`;
  the static preview remains separate and unchanged.

### Non-Amazon bounded companion check

- The non-Amazon companion check is saved at
  `/Users/alan/Product Research/outputs/019f4393-09e4-73e3-8f71-4dbc11046854/attorney_referral_pre_scope/6_36in_single_din_head_unit_directional_check_2026-07-12.md`.
  It is explicitly PRE-SCOPE / DIRECTIONAL: one Google Shopping set, a shallow
  Walmart window plus three surfaced pages, two directly surfaced eBay pages,
  and one direct-brand card. Its bounded sample is 3 relevant, 3 ambiguous,
  and 3 irrelevant listing appearances. No deeper collection, evidence capture,
  legal conclusion, or client-preview deployment followed.

### Non-Amazon deeper opportunity estimate

- Growth authorized a bounded adaptive follow-on for the 6.36-inch head-unit
  corpus. Final outputs are under
  `/Users/alan/Product Research/outputs/019f4393-09e4-73e3-8f71-4dbc11046854/head_unit_opportunity_estimate_2026-07-12/`.
- After exact Eonon/AINAVI and generic 6.36-inch increments, seller novelty
  saturated on the Eonon X3U and AINAVI/AINAVIGO families. The reconciled
  lower bound is **2 current Strong marketplace seller accounts**: Walmart
  Ainavi Official Store (CN) and active eBay Eonon Premium Store (GB).
  The ended euaudioworld listing and direct Eonon storefront remain context
  only and are excluded from the lower bound.
- The audit contains 12 listing rows: 4 Strong/context, 7 ambiguous, and 1
  irrelevant; 8 current marketplace seller identities plus context rows. No
  U.S. seller was counted from item location alone. No legal conclusion,
  checkout, or evidence capture was performed.

### Non-Amazon two-gate criteria audit

- The 6.36-inch head-unit opportunity was re-audited under two separate gates:
  Gate 1 for current product-family/form-factor candidates and Gate 2 for the
  existing evidence-ready visual rule. Outputs are under
  `/Users/alan/Product Research/outputs/019f4393-09e4-73e3-8f71-4dbc11046854/head_unit_criteria_audit_2026-07-12/`.
- Gate 1 contains 72 current listings and 18 identified seller/retailer
  accounts: 6 confirmed non-U.S. (CN 1, GB 4, HK 1), 0 confirmed U.S., and 12
  unknown country. Two additional current listings have unresolved sellers and
  are excluded from the unique-seller count.
- Gate 2 remains unchanged at 2 current listings / 2 sellers (CN 1, GB 1). The
  earlier two-seller floor was low primarily because of proof strictness and
  secondarily because the exact X3U corpus had not been inventoried. The supply
  remains compact at the family level: 57 identified first-page X3U listings
  concentrated across six eBay seller accounts.

## Session: 2026-07-12 - Schedule A attorney-referral Amazon pre-scope check

- Deeper directional Amazon pass completed at
  `/Users/alan/Product Research/outputs/019f42ad-3d8e-78e2-b110-e449779b85fb/schedule_a_amazon_opportunity_2026-07-12/`.
  It provides an auditable workbook, inventory CSV, query-coverage CSV, and memo.
  The bounded current sample has 7 Strong visual listings across 4 unique sellers:
  3 publicly confirmed non-U.S. sellers (HK: 1; CN: 2), 1 confirmed U.S. seller,
  and 0 unknown-country Strong sellers. The defensible directional lower bound is
  therefore 3 confirmed non-U.S. sellers, not a market-completeness claim.
- The primary generic vocabulary is `6.36 inch single DIN car stereo/radio`,
  `6.36 inch Linux car stereo`, `6.36 inch IPS touchscreen single DIN`, and
  `single DIN Linux wireless CarPlay Android Auto`; display-spec variants need an
  explicit 6.36-inch filter because `1280x480` alone leaks into 6.9-inch results.
  Strong visual rows must show central content and a distinct in-display soft rail;
  physical panels, behavior, software commonality, and legal conclusions remain
  unproven by listing images. No CAPTCHA, login fallback, checkout, or `/spc` was
  used. The recommendation remains `GO` for a narrow, image-led next pass only.

- Completed a bounded, discovery-only Amazon.com screen for 6.36-inch single-DIN Linux head units with CarPlay/Android Auto. Five first-page query windows only (no pagination, login, checkout, collection run, or evidence capture) produced two visually plausible AINAVI/AINAVIGO examples, one ambiguous Eonon X3U, and one irrelevant Pyniro comparison. The output is in `/Users/alan/Product Research/outputs/019f42ad-3d8e-78e2-b110-e449779b85fb/schedule_a_pre_scope_amazon_2026-07-12/` and is labeled PRE-SCOPE / DIRECTIONAL.
- Recommendation: GO for a narrow deeper Amazon scope around the AINAVI/AINAVIGO 6.36-SD-02 family plus Eonon and Pyniro comparators, but retain the distinction between image-level UI plausibility and unproven behavior, software/commonality, and legal conclusions. No client-preview data, SourceRecords, MonitoringCycle, evidence package, or platform deployment was created or changed.

## Session: 2026-07-12 — Monitoring Cycle and Client Matter Pulse contract judgment

- Platform planning commit `41a14b3` (`Plan monitoring cycle and matter pulse contracts`) is pushed to `main`. The decision-ready Tech judgment is in `docs/monitoring-cycle-matter-pulse-contract-plan.md`; no backend, API, data, auth, or UI behavior changed.
- The existing latest completed import can seed one immutable Monitoring Cycle without re-importing or duplicating source records. Current truth lives at `accounts/{accountId}/matters/{matterId}/imports/{manifestId}`, with deterministic manifest ID, schema version, checksum, source timestamp, started/completed timestamps, counts, and media results. The first cycle must be backfilled before another import replaces each source record's latest `import.manifestId`.
- Minimum storage is two matter subcollections: immutable `monitoringCycles/{manifestId}` with an embedded versioned Coverage Snapshot, and append-only `matterEvents/{eventId}`. The client Matter Pulse is a derived allowlisted read combining the latest immutable cycle with current published records, attention, and explicitly client-visible events.
- Raw audit events are not the client timeline. Backfill publication and attention events from their authoritative documents, then dual-write future domain events alongside audit events atomically. Counsel no-action/action/disposition outcomes require an explicit immutable Matter Event; silence is never inferred.
- Minimum API: internal cycle list/detail, internal append-only Matter Event write, and one client-safe `matter-pulse` composite read. Client-visible events require explicit visibility plus publisher authority; actor, manifest/checksum, scores/tiers, audit mechanics, internal references, and collection methods never enter the client serializer.
- Coverage is stored immutable per cycle; the Pulse derives current published/attention activity at read time with `asOf` and a versioned definition of “new.” The first backfilled scope must be labeled `matter_current_at_backfill`, not represented as an original historical snapshot.
- P1 export verification may expose the existing SHA-256 artifact digest, algorithm, artifact schema, createdAt, and recordCount through a versioned serializer; storage path and creator UID remain private.
- Web typecheck/build and dashboard API tests `26/26` pass. Protected-pilot deployment `dpl_AyMsk67RVAnKSc2xsqRyqLPuoVxn` is live at `https://web-l5houy5na-alan-kozulabscoms-projects.vercel.app`; `https://copycatch-v2-pilot.vercel.app` points to it. The separate static preview remains unchanged and returns `200`.

## Session: 2026-07-12 — V2 internal contract-backed production pass

- Platform commit `16fc279` (`Polish V2 internal review workflows`) is pushed to `main` on top of Growth accessibility commit `9d0b7ec`. It implements only existing contracts: cursor paging for Review and single-record Publication, explicit dashboard error-state mapping, controlled/source-only/pending/unavailable media states, review save/conflict/undo feedback, internal shell accessibility, and bounded consistency across directory, matter overview, Sellers, Attention, and frozen JSON Exports.
- Review and Publication page adapters now consume existing continuation cursors and append by stable `sourceRecordId`, preventing duplicate cards while keeping loaded context visible on recoverable failures. Publication fatal-load errors are separate from inline paging/publish validation and conflict errors; no batch, history, withdrawal, or durable server queue behavior was added.
- Evidence Desk labels controlled media as display media rather than an evidence asset, distinguishes failed or uncopied images, preserves the pinned reference comparison, and keeps mobile inspection-only. Imported assessment, human review, and client publication remain separate.
- Shared annotation text was darkened from `#8A9194` to readable `#6E767A`; `#8A9194` remains the non-essential ghost token. Internal mobile navigation, sign-out, shared actions, and review-position controls have 44px targets. Shared states now distinguish session expiry, forbidden, not found, conflict, offline/service interruption, and generic errors.
- Full checks passed after rebase: web typecheck, production build, diff hygiene, and dashboard API tests `26/26`. Signed-in live QA appended Review from `60` to `120` with `120/120` unique record links; Publication showed one eligible/ready record and the exact allowlisted preview; controlled and source-only media states passed; client `/workspace` contained no internal review terms; application warning/error logs were empty.
- Mobile QA at `390x844`: no horizontal page overflow; Sign out, internal nav, and review cursor targets measured `44px`; Evidence Desk displayed `Inspection only` with radios, text areas, and Save disabled.
- Protected-pilot deployment `dpl_7yND7pgeZGvvc78QzZoYyWC3P3xi` is live at `https://web-kle7h3t8z-alan-kozulabscoms-projects.vercel.app`; `https://copycatch-v2-pilot.vercel.app` points to it. The separate static preview at `https://copycatch-client-preview.vercel.app/client-preview/crimplok-698` remains unchanged, returns `200`, and retains verified `11,698 / 595` headline values.
- Unrelated PM canon, moodboard, Calibrated Precision, v4 branding, and Fable-context working-tree changes remain untouched.

## Session: 2026-07-12 — V2 internal production-fidelity audit

- Tech independently reviewed the completed Production Foundations and Internal Review Fable projects, Growth's unstaged generated-artifact manifest, and current contract-backed internal code. The resulting audit is committed at `c165eb6` (`Audit V2 internal production fidelity`) in `docs/design/v2-tech-production-fidelity-audit-2026-07-12.md`, on top of Growth planning commit `a6fe65e`.
- The deployed internal product is structurally complete. The material contract-backed functional gap is cursor paging: Review and Publication currently present only the first cursor page even though the API returns continuation cursors. Durable server queue resume remains contract-first.
- P0 fidelity files are the shared state/access shell (`globals.css`, `components/system/**`, `AuthState.tsx`, `InternalShell.tsx`), Review paging/density (`AuthenticatedReview.tsx`, `ReviewWorkspace.tsx`, `browser-api.ts`, `types.ts`), Evidence Desk/media states (`AuthenticatedRecord.tsx`, `EvidenceDesk.tsx`, `RecordMedia.tsx`), and single-record publication (`AuthenticatedPublication.tsx`, `PublicationQueue.tsx`). P1 consistency files are directory, matter overview, Sellers, Attention, and Exports components.
- Monitoring cycles/scope/heartbeat, image-rich reports, invitations/member admin, batch/withdrawal/history/audit reads, seller detail/group work, operations setup/import, and trademark/copyright workflows remain explicitly contract-first. The public static Crimplok preview remains outside this pass.
- Growth's two design documents and parallel public/marketing edits were read but not staged. The Tech audit was rebased and validated from a clean detached checkout: web typecheck and production build passed.
- Protected-pilot deployment `dpl_FVFStpDEyx7a9axb2wQpjerf8kea` is live at `https://web-7xhnr37g1-alan-kozulabscoms-projects.vercel.app`; `https://copycatch-v2-pilot.vercel.app` points to it. Pilot root and `/internal` return `200`. The separate public static preview at `https://copycatch-client-preview.vercel.app/client-preview/crimplok-698` was not repointed and returns `200`.

## Session: 2026-07-12 — Fable 5 Max design completion sprint resumed

- Growth resumed eight sanitized Fable 5 Max completion/audit runs: IP Monitoring Service Workspace, Reports and Communications, Internal Review, Investor Demo Kit, Managed Operations mobile/handoff, Access and Account, Marketing Library claims cleanup, and Production Foundations consistency/accessibility/handoff.
- Platform commit `e8a9301` (`Track resumed V2 design completion sprint`) records the authoritative source map and implementation gates in `docs/design/claude-design-max-sprint-2026-07-12.md`. Existing marketing/client/internal contracts may be polished; monitoring cycles, image-rich reports, invitations/members, seller detail/group review, publication withdrawal/revisions/batches, audit reads, and managed-operations creation remain contract-first. Pricing, economics, proof, legal/security text, public samples, investor metrics, and operative trademark/copyright language remain approval-first.
- The branch was rebased onto `origin/main` with unrelated shared PM/design edits automatically restored unchanged. Web typecheck and production build passed.
- Protected-pilot deployment `dpl_B4Qnr2x8mDkTdWhzCrexZPRmS6cY` is live at `https://web-myb3hij5r-alan-kozulabscoms-projects.vercel.app`; `https://copycatch-v2-pilot.vercel.app` points to it. Pilot root and `/workspace` return `200`. The separate public static preview at `https://copycatch-client-preview.vercel.app/client-preview/crimplok-698` was not repointed and returns `200`.
- No speculative product, API, auth, or contract behavior was added while the design runs are incomplete.

## Session: 2026-07-11 — CopyCatch V2 internal workspace production pass

- Platform commits `cde9e57` (`Build V2 internal workspace entry`) and `f34901e` (`Clarify internal directory matter count`) are pushed to `main` on top of Growth release `8d8a02a`. The internal surface now has an authenticated account/matter directory at `/internal`, a real matter overview at `/internal/matters/:matterId`, session-restored review position, keyboard review navigation, shared production system states, and mobile inspection-only detail behavior.
- The directory and matter overview use only existing account/matter contracts. They do not invent operational counts or add gated workflows. Imported assessment remains visibly separate from human review, publication remains queue-only, and the existing public Crimplok preview contract was not changed.
- Web typecheck and production build passed. Signed-in live QA as `alan@kozulabs.com` passed at `1440x900` and `390x844`: directory showed `1` account, `1` matter, and `1` open matter; matter overview exposed the five contract-backed work surfaces; the review grid loaded `60` API-backed records; mobile had no horizontal overflow; and application warning/error logs were empty.
- Final protected-pilot deployment is Vercel `dpl_2X2LQZ3GbGVcHj4J8bbDC283bCm6` at `https://web-4wl50972e-alan-kozulabscoms-projects.vercel.app`; `https://copycatch-v2-pilot.vercel.app` points to it. The separate public static preview at `https://copycatch-client-preview.vercel.app/client-preview/crimplok-698` remains unchanged and returns `200`.
- Unrelated PM/design `_team/`, moodboard, Calibrated Precision, v4 branding, and Fable-context working-tree changes were reported and left untouched.

## Session: 2026-07-11 — CopyCatch V2 production design foundation

- Platform commit `d2238b1` (`Build V2 production design foundation`) is pushed to `main`. It converts the authoritative Claude Design Production Foundations handoff into shared production code: the complete Calibrated Precision color/state token set, Archivo/IBM Plex Mono hierarchy, focus and reduced-motion rules, square geometry, button/link, lifecycle chip, metric, surface designation, and system-state primitives.
- The Firebase authentication shell now uses the shared production state and action components for loading, configuration, sign-in, and sign-out without changing auth behavior, roles, API contracts, or client/internal field boundaries. Local web typecheck and production build passed.
- Responsive visual QA passed at `1440x900` and `390x844`: the authenticated/configuration states had no horizontal overflow, no application console errors, and stable non-shifting geometry. Browser extension wallet warnings were external to the app.
- The release was deployed from a clean detached checkout of the committed source as Vercel production deployment `dpl_2axSBJRWeKHSSsWXGeoefBEyiUqM` at `https://web-k8llp76i3-alan-kozulabscoms-projects.vercel.app`; only `https://copycatch-v2-pilot.vercel.app` was repointed. Live authenticated mobile QA rendered the real portfolio correctly with no overflow or application errors. The public static preview at `https://copycatch-client-preview.vercel.app/client-preview/crimplok-698` remains separate, unchanged, and returns `200`.
- Tech owns `apps/web/app/globals.css`, `apps/web/tailwind.config.ts`, `apps/web/components/system/**`, `apps/web/lib/design-system/**`, shared contract adapters, backend, git, and deploy integration. Growth owns route-level marketing/client implementation and copy/fidelity review. Existing PM/design worktree changes remain untouched.

## Session: 2026-07-11 — mykitchen.bio Fable 5 design preservation and shared launch lane

- Preserved the final approved Claude Design Fable 5 Max batch B1-B8 as rendered HTML source with provenance, prompt brief, and checksums under `Branding/Branding v2/Claude v2.1/design-drops/2026-07-11-fable-emergency-batch/`. The drop covers buyer subscription/receipt, ten emails, onboarding/auth, publish/money moments, editor/system states, cookbook PDF, covers/share cards, and admin.
- Growth is authorized for explicitly assigned frontend implementation packages while Codex retains contracts, backend, all git integration, merge, deploy, and release evidence. First collision-free package is B2 email templates/tests on `fe/growth-email-suite`; Growth must not alter provider transport, Stripe/webhooks, schema, pricing constants, or contracts.
- Shared launch acceptance matrix is `tasks/end-to-end-acceptance-matrix.md`; package coordination is `tasks/growth-frontend-handoff-2026-07-11.md`. Current Alan-owned dependencies remain OpenAI review quota, monitored `hello@` inbox confirmation, production Google sign-in, zero-help phone walkthrough, and requested real social-webview tests.

## Session: 2026-07-11 — mykitchen.bio beta evidence truth boundary

- Backend creator-loop evidence is green through OAuth handoff, exactly-once starter grant and unit return, recipe edit, cookbook membership/readiness, storefront claim, atomic publish, authoritative public readback, video-file upload/adversarial gates, founding auto-qualification, and Stage 2A zero-skip acceptance. PR `#102` added a production-state auditor plus Alan's scored zero-help phone runbook; the actual phone usability run remains pending corrected Studio FE.
- Growth approves Kürbispasta and Spicy Blueberry Brie Jalapeño Poppers as two faithful product demonstrations. Burrito, smoothie blocks, and flower bread correctly fail closed with explicit creator-confirmation needs. These five hard cases do not establish a corpus-wide publishability rate.
- Extraction reliability is 44/44 eligible direct extraction for both ScrapeCreators and Apify, with 3/3 ineligible rows routed to source fallback and zero unknown extraction failures. This must never be described as recipe-generation success.
- PRs `#104`–`#106` made recipe-quality benchmarking checkpointed/resumable/fail-fast and added the strict combined corpus gate. Current full-run quality evidence is incomplete: 47 rows, 44 quality-eligible, 1 independently reviewed, 43 pending, 0 publishable in the new full-run sample, 1 creator-review fallback, 3 source fallbacks, provisional handled rate 8.51%, zero unknown failures. OpenAI API billing/higher quota is the external resume dependency.
- Remaining beta exit dependencies: corrected FE PR `#73`, stacked Studio Home PR `#79`, real public storefront rendering, Alan's zero-help phone run plus machine audit, and seven consecutive durably recorded healthy canary days. Day 1 is 4/4 healthy on 2026-07-11.

## Session: 2026-07-10 — Patent wedge, multi-IP V2 spine

- CopyCatch platform `main` commit `af37c4b` (`Plan multi-IP V2 product spine`) folds the reopened D18 surface-rule proposal into the migration synthesis and Fable request. It is planning only; PM must ratify the rule change before frontend or API contracts freeze.
- Product spine is now Account → Portfolio → IP asset → Matter → Source records → Seller groups → Human review → Publication → Client workspace/export. Patents remain the GTM wedge and fully implemented V1 workflow; trademarks and copyrights are protected by shared contracts, not presented as equal launch products.
- Make shared now: discriminated `IpAsset` by `ipType`; type-aware summaries, filters, display nouns, imports, publication/export allowlists, preview details, shared Source Record base, portfolio shell, roles, queues, comments, and exports. Defer to V1.1: trademark/copyright field modules, review labels and gates, rationale templates, export variants, public claims, and acquisition pages; test with synthetic matters first.
- Patent V1 uses the feature-based Strong visual match publication gate. Future trademark and copyright review/output vocabulary, publication gates, and public claims require Nick approval. Client hierarchy is Portfolio → type-specific asset → Published records; seller remains a lens/filter.

## Session: 2026-07-10 — V2 migration decisions after Fable review

- Fable/Growth migration feedback was incorporated in CopyCatch platform commit `2c1e07d` (`Incorporate V2 migration product decisions`), rebased and pushed to `main`.
- Client hierarchy is now Portfolio → Patent → Published records. Seller is a first-class filter/lens, not mandatory client navigation. Internal hierarchy remains Portfolio → Matter → Seller group → Record.
- Published Record Snapshot is now a named principle: a published record is immutable and revisioned; one frozen client-field allowlist drives both client APIs and exports. Contract tests must prove zero internal-only fields reach either surface.
- V1 decisions are locked: Strong visual matches only may publish; every release uses Publication Queue; client attention lifecycle is Received → In review → Responded; client nouns are Patent, Published records, Request attention; internal nouns remain Matter, Seller group, Record.
- Client progress is separate from internal throughput. Client view shows last completed monitoring cycle, new published records, published totals, coverage, and attention requests. Internal view shows queue, aging, pending review, and throughput.
- Phase 1 now locks the export contract before export UI delivery; client publication adds pre-publication empty state and monitoring heartbeat; Phase 4 is named Export and record presentation; Phase 5 is more matters with the same experience, without seller-overlap scope creep.

## Session: 2026-07-10 — Fable-safe V1 to V2 packet approved

- Growth reviewed the migration feedback packet and initially requested narrow sanitation: remove the V1 technical inventory, operational/import detail, exact API routes, data-drift notes, and real matter identifier from the attached plan.
- CopyCatch platform `main` commit `7b8ff43` (`Sanitize V2 migration plan for Fable`) applied those changes and was rebased/pushed. The migration plan now contains only product posture, portfolio/matter/seller/record hierarchy, role and publication boundaries, review/client surfaces, migration phases, pre-design decisions, and success criteria.
- Fable packet is ready to send. Attach exactly: `docs/fable-context/v1-to-v2-migration-feedback-request.md` and `docs/v1-to-v2-migration-plan.md`. Do not attach the old repository, Product Research folders, source exports, screenshots, design boards, credentials, or operating documentation.

## Session: 2026-07-10 — V1 to V2 migration plan

- Tech Lead audited the legacy `copycatch-landing-11.3.25` repository and synthesized the V1-to-V2 plan with Growth. V1 was a static Pug/Tailwind site with browser-side Firestore dashboard behavior and separately deployed Cloud Run services; its old remote service calls are not the same thing as today's local Product Research team.
- CopyCatch platform `main` commit `23b8d9f` (`Plan V1 to V2 platform migration`) adds `docs/v1-to-v2-migration-plan.md` and the Fable-safe review prompt `docs/fable-context/v1-to-v2-migration-feedback-request.md`.
- V2 decision: build fresh and use V1 read-only as a source of product/data patterns. Carry forward matter history, image-led record review, seller grouping, job states, and durable exports. Rebuild identity/membership, import/review/publication/audit workflows, portfolio views, controlled evidence delivery, and frozen Excel exports. Do not port self-serve scanning, billing/credits, browser-side Firestore, permissive legacy rules, old service credentials, or V1's mixed report document structure.
- Immediate technical priority before dashboard mockups: establish one approved manifest import path that feeds both V2 Firestore/API and the client preview fixture, eliminating manual snapshot drift.

## Session: 2026-07-10 — Crimplok saturation-gated final release

- Superseded the prior 576-row snapshot with CopyCatch platform `main` commit `8a1cddb` (`Sync final Crimplok saturation data`), sourced only from Amazon/Codex's final consolidated JSON package generated `2026-07-10T23:00:18.677Z`.
- Final client-preview totals are `11,698` screened, `2,162` reviewed, `798` retained for attorney review, and `595` Strong Visual Matches. The strong-preview mix is Amazon `169`, Walmart `131`, Etsy `135`, eBay `141`, AliExpress `4`, SHEIN `3`, and VerticalRetailers `12`. The retained population has `212 / 556 / 30` US, non-US, and unknown-country records and `270` unique marketplace-scoped seller IDs.
- Local type check and production build passed. The commit was rebased with automatic temporary stashing of unrelated shared PM/design edits, which were restored untouched, then pushed to `origin/main`.
- Final Vercel production deployment: `dpl_ApKJgXAZcxpxN78tTs9bJkSMVqvE` at `https://web-oqzpbs6fm-alan-kozulabscoms-projects.vercel.app`. Public alias `https://copycatch-client-preview.vercel.app` is explicitly pinned to this deployment. Live verification passed: legacy `/client-preview` returns 308 to `/client-preview/crimplok-698`; canonical route returns 200 with `11,698 / 798 / 595`; Open Graph image returns a 1200x630 PNG.

- Marketplace subsequently applied the approved storage-retention cleanup only: 3,025 temporary candidate/contact-sheet or excluded-only images (170.9 MiB) were pruned. Review artifacts were rebuilt; the compact Marketplace review bundle is now 122 MiB. Backend reviewed/preview JSON, scoring, retained seller fields, and Strong/Borderline image gates are unchanged, so no platform commit or redeploy was required.

## Marketplace saturation gate (2026-07-10)

- Measure discovery progress by deduped new retained listings and new retained seller IDs for each platform and keyword, not by result-card/page volume.
- After at least two fresh post-head rounds, move on when those two rounds together add less than about 10% of the keyword's current retained pool and reveal no material new seller. For a small pool, two consecutive zero-retained rounds are enough.
- Log coverage, dedupe rate, retained yield, new sellers, blocks, and the next untried high-signal term. Resume only if new terminology, a new seller cluster, or catalog change creates a material signal.

## Marketplace efficiency and retention defaults (2026-07-10)

- Work the head first: screen pages 1-3 for every keyword, measure retained listings and new sellers per page, then extend only in 2-5 page increments that earn their keep. Broad terms may justify 10 pages; narrow terms generally stop after 3-5. Two zero-material-yield increments trigger the saturation handoff.
- Preserve masters, raw lightweight inventory, audit CSVs, final manifests/workbooks/HTML, reusable scripts, retained hero assets, and one final Strong-only contact sheet per marketplace. After the retained field/image gate passes, delete disposable candidate-image caches, duplicate contact sheets, and excluded-only downloaded images; record reclaimed space.
- Amazon/future-lane docs now mirror these gates in `Amazon Extraction Platform Playbook.md` and `AGENTS.md`. This was a process-only documentation sync; the verified Crimplok dataset and deployed client preview remain unchanged.
- Sent the Shein/Temu R&D lane the canonical data contract, image-led scoring bands, adaptive discovery/retry rules, seller/variant gate, and a feasibility-first iPhone-app probe boundary. This is coordination only; no product data, platform source, or deployment changed.

## Session: 2026-07-10 - Crimplok eBay low-yield recall continuation
- Marketplace lane continued the strict image-led eBay recall sweep under the
  shared Crimplok 698 scoring standard. `stopper beads` tail pages 11-15 added
  216 net-new listings, all Exclude; `crimp beads with plunger` added 21, all
  Exclude; and `round crimp beads` pages 1-5 added 14, producing 1 Strong
  (`397942517776`, seller `aukit55`, China) and 1 Borderline kit
  (`389929847607`, seller `nova-select`, Turkey).
- `positioning beads` pages 1-5 added 167 net-new listings. Image-only review
  retained 3 Strong examples (`198352361649`, `306870626265`, `406317645403`),
  all China sellers with completed Seller ID/name/brand/storefront/business
  disclosure/country fields; the other 164 are Exclude. Strong reasons name the
  visible round body and solid lateral cylindrical locking peg.
- The eBay recall terms have become low-yield: most new rows are duplicate
  inventory, center-hole sliders, open bails, tubes, covers, or generic beads.
  Alan authorized moving to the next platform/keyword when retained rows stop
  increasing materially. `bead stoppers` page 1-2 checkpoint was saved; do not
  expand low-yield depth before completing the next marketplace queue.
- Product Research main is local-only/no remote. CopyCatch platform main was
  checked with `git pull --rebase --autostash origin main` and was already up to
  date; its local design/doc edits are unrelated and must not be swept into the
  marketplace research commit.

## Session: 2026-07-10 — Crimplok re-audited marketplace refresh
- CopyCatch platform `main` commit `e585a07` (`Refresh Crimplok preview from re-audited exports`) replaced the static client-preview dataset from approved JSON exports only: Amazon's consolidated reviewed export plus Marketplace's final non-Amazon preview sample export. No marketplace-master or workbook data was read by the platform.
- Current client-preview totals are `11,280` screened, `778` potential matches retained for attorney review, `576` strong visual matches, `263` marketplace-scoped sellers, and `208 / 540 / 30` US, non-US, and unknown-country records. Strong visual examples are Amazon `169`, Walmart `130`, Etsy `135`, eBay `124`, AliExpress `4`, SHEIN `3`, and VerticalRetailers `11`.
- Metadata and the 1200x630 share card now carry the same updated counts. Source record/evidence capture status remains intentionally unclaimed; no evidence assets were added or implied.
- Local production build and TypeScript validation passed. The commit was rebased with `--autostash` because the shared working tree contains unrelated PM/design edits; those edits were restored untouched. Vercel production deployment `dpl_94QNkQXaTNoSADt3vt42fW93TYSg` (`https://web-2plidn9ki-alan-kozulabscoms-projects.vercel.app`) is READY, and `https://copycatch-client-preview.vercel.app` is explicitly pinned to it. Final route verification passed: legacy `/client-preview` returns 308 to `/client-preview/crimplok-698`; canonical route returns 200 with `11,280 / 778 / 576`; the share card returns 1200x630 PNG. The subsequent final Amazon consolidation's strongest-only JSON was compared against the committed snapshot and is an exact row-for-row match, so no second content commit was needed.

## Session: 2026-07-10 — Crimplok full non-Amazon visual regrade
- Marketplace thread `019f4393-09e4-73e3-8f71-4dbc11046854` expanded the eBay fix into a full non-Amazon visual regrade using `/Users/alan/Product Research/Crimplok 698/Internal Visual Scoring Standard - 698.md`. Confidence is now image-earned; flat `0.95` marketplace pools are treated as stale.
- Rebuilt non-Amazon review workbooks and backend exports after the regrade. Final paths: review manifest `/Users/alan/Product Research/outputs/019f4393-09e4-73e3-8f71-4dbc11046854/crimplok_698_non_amazon_reviews/manifest.json`; backend manifest `/Users/alan/Product Research/outputs/019f4393-09e4-73e3-8f71-4dbc11046854/crimplok_698_backend_preview/manifest.json`; backend reviewed JSON `/Users/alan/Product Research/outputs/019f4393-09e4-73e3-8f71-4dbc11046854/crimplok_698_backend_preview/crimplok-demo-non-amazon-reviewed-listings.json`; strongest-only preview JSON `/Users/alan/Product Research/outputs/019f4393-09e4-73e3-8f71-4dbc11046854/crimplok_698_backend_preview/crimplok-demo-client-preview-sample-listings.json`.
- Final reviewed counts after regrade: Walmart 3 Strong / 190 Borderline / 130 Exclude / 5 Unable; Etsy 135 / 39 / 287 / 11; eBay 63 / 21 / 43 / 3; AliExpress 4 / 1 / 9 / 0; SHEIN 3 / 13 / 5 / 0; DHgate 0 / 0 / 0 / 0; VerticalRetailers 11 / 0 / 0 / 0. Backend export has 976 reviewed rows and 219 strongest-only preview rows.
- eBay weak rows flagged by Growth are no longer preview-safe: `397828364822`, `386384497143`, `397908534686`, and `157983830638` are absent from the strongest-only preview export. eBay preview-safe count is now 63, with confidence rescored from images rather than inherited `0.95`.
- Review workbook QA passed after converting three Etsy AVIF-disguised-as-JPG assets into real JPEGs and copying 14 eBay audit images into canonical `/Users/alan/Product Research/Crimplok 698/assets/ebay/`. Workbook manifest reports `missingImages=0` for all marketplaces.
- Full audit report and correction CSV are in `/Users/alan/Product Research/Crimplok 698/run_logs/full_non_amazon_visual_regrade_2026-07-10/`, especially `Full Non-Amazon Visual Regrade Report.md` and `full_non_amazon_visual_regrade_corrections.csv`. DHgate remains blocked/no reviewed product-grid rows; SHEIN remains limited to already-collected rows because deep SHEIN/Temu R&D moved to the separate hostile-platform/app-mirroring lane.
- Amazon/Codex thread `019f42ad-3d8e-78e2-b110-e449779b85fb` independently QA-checked the completed non-Amazon regrade against the internal visual scoring standard and reported PASS. Validated: 976 reviewed non-Amazon rows, 219 strongest-only non-Amazon preview rows, 0 required backend field gaps, weak eBay IDs absent, and visual spot-checks passed across eBay/Etsy/Walmart/AliExpress/SHEIN/VerticalRetailers.
- Product Research local `main` captured the full non-Amazon regrade in commit `9e6af94` (`Regrade non-Amazon marketplace visuals`). This repo still has no remote configured, so the commit is local-only.
- Amazon/Codex rebuilt the consolidated Amazon + non-Amazon package at `/Users/alan/Product Research/outputs/019f42ad-3d8e-78e2-b110-e449779b85fb/crimplok_698_consolidated/`: manifest reviewedRows `1167`, previewStrongestRows `388`, strongest JSON `crimplok-demo-client-preview-strongest-listings.json`, reviewed JSON `crimplok-demo-consolidated-reviewed-listings.json`.
- CopyCatch platform `main` refreshed and deployed the QA-passed consolidated preview. Relevant commits: `0a42055` refreshed the marketplace regrade data, `2551f4a` showed regraded strongest-preview rationale, and `ec052fe` balanced the static fallback sample order/summary so the visible client preview includes corrected marketplace rows instead of showing an all-Amazon first page. Stable client URL: `https://copycatch-client-preview.vercel.app/client-preview`; latest deployment `dpl_Ez5ZYwBbD5xMrCvij4pynxoD3tqd` at `https://web-2rm71q3uc-alan-kozulabscoms-projects.vercel.app`.
- Post-deploy smoke passed for `/client-preview` and `/preview/crimplok` on both the fresh deployment and stable alias: HTTP 200, `11,224` screened, `674` potential matches, corrected eBay row `ebay-406747112769` present, weak eBay rows `397828364822`, `386384497143`, `397908534686`, and `157983830638` absent, plus `Under attorney review` and `Protected product reference` present.

## Session: 2026-07-10 — Crimplok non-Amazon marketplace audit update
- Marketplace thread `019f4393-09e4-73e3-8f71-4dbc11046854` incorporated the Amazon-calibrated strong-match audit: Strong requires round/disc bead plus a visible solid side plunger/locking peg. eBay corrected 8 prior Strong rows to Exclude; SHEIN corrected 2 mixed-kit rows to Borderline; Etsy corrected 1 low-detail row to Borderline.
- PH PandaHall vertical-retailer browser probe resolved the prior blocked lead: 8 PandaHall stopper/crimp product rows were promoted as Strong Match with local hero assets and rebuilt into the non-Amazon review bundle. Seller legal domicile was not exposed; country remains `Unknown` pending evidence capture.
- Latest non-Amazon review counts after rebuild: Walmart 3 Strong / 190 Borderline; Etsy 102 / 86; eBay 22 / 75; AliExpress 1 / 10; SHEIN 6 / 13; VerticalRetailers 11 / 0; DHgate 0 / 0. Backend preview export uses `matterId=crimplok-demo`, with 962 reviewed rows and 519 client-preview-safe rows.
- Current unresolved active non-Amazon blocker: DHgate remains blocked by access/security policy before product-grid harvest. EM ART was resolved as screened/no confirmed product from its public `.eu` crimp/stoppers category. SHEIN has 5 historical direct/fresh-search challenge placeholders retained in the master, but SHEIN/Temu deep R&D remains out of this lane and belongs to the separate hostile-platform/app-mirroring agent.
- Added the reusable Strong-only audit process to `/Users/alan/Product Research/Marketplace Playbook.md`: contact sheets of current Strong rows, strict visible side-plunger gate, correction artifacts, update both screen fields and recalibration override fields, then rebuild and verify manifest counts.
- Product Research local `main` now has commit `ab3bac3` resolving EM ART as screened/no confirmed product and reducing VerticalRetailers backend `blocked` count to 0; DHgate remains the only active non-Amazon platform blocker in this lane.
- Follow-up Product Research local `main` commit `4fbd741` clarified SHEIN's 5 historical challenge placeholders versus the active DHgate blocker and tightened the Strong-only audit note so Strong reasons must explicitly mention the visible side plunger/locking feature.
- Amazon lane process-training note was folded into `/Users/alan/Product Research/Marketplace Playbook.md`: next marketplace cases should run inventory-first, batch visual screen second, detail-harvest retained rows only, use recalibration fields as review source of truth, mirror Amazon workbook front columns, and export preview-safe examples as Strong/Tier 1 only. The non-Amazon backend exporter was updated accordingly: reviewed rows remain 962, retained Strong/Borderline rows remain 519, preview-safe rows are now 145 Strong/Tier 1 rows only, required backend field gaps are 0, and Borderline/Exclude/Unable leakage in preview-safe export is 0.
- Product Research local `main` commit `e0925e1` (`Align marketplace exports with Amazon preview model`) captured the process-training playbook update, hardened the backend exporter with nonblank seller-name fallback, rebuilt the non-Amazon backend preview export, and added `/Users/alan/Product Research/Crimplok 698/run_logs/Non-Amazon Marketplace Goal Audit 2026-07-10.md`. The active marketplace goal remains open because current evidence does not prove exhaustive eBay 5,600+ depth or DHgate product-grid access.
- CopyCatch platform was already rebased/current with `origin/main` at commit `c90c88c` (`Refine Crimplok case opportunity copy`). Redeployed Vercel project `web` to deployment `dpl_Abgq6KAvQx2DABoyPDvKyyYUxjQS` (`https://web-8s4tzr5o2-alan-kozulabscoms-projects.vercel.app`) and repointed `https://copycatch-client-preview.vercel.app`. Smoke checks passed for `/client-preview` and `/preview/crimplok`: HTTP 200, `10,589`, `Potential Matches`, `190 / 485`, `35 unknown`, `high-confidence sample rows`, `Under attorney review`, `Protected product reference`, `High-priority Amazon records`, and `Bead Buddy Magical CrimpLoks`.
- eBay continuation planning: added `/Users/alan/Product Research/Crimplok 698/run_logs/eBay Continuation Queue 2026-07-10.md`. Current proven eBay coverage is `crimp beads` pages 1-10, `stopper beads` pages 1-10, `clamp beads` pages 1-5, `crimp stopper beads` pages 1-7, and `stop-it crimp bead` page 1. Next logged-in continuation should start with `crimp beads` pages 11-20 and use visible pagination only. This thread currently lacks a usable logged-in Chrome/eBay control surface, so anonymous continuation was not run.
- eBay continuation merge tooling prepared: `/Users/alan/Product Research/Crimplok 698/merge_ebay_continuation_inventory.py` dry-runs saved inventory JSON first, preserves existing master rows/decisions, adds only net-new listing IDs as cheap `harvested`/`pending` rows when run with `--write`, and emits an audit JSON with first listing IDs/block signals. Validation against already-merged eBay inventory produced existing master IDs `1559`, input unique IDs `1143`, new rows `0`, backfills `0`, and block files `0`; audit path is `/Users/alan/Product Research/Crimplok 698/run_logs/ebay_continuation_inventory_2026-07-10/_merge_audits/existing_inventory_dry_run.json`.
- Live eBay retry note: logged-in Chrome loaded eBay, searched `crimp beads`, confirmed newer `.su-card-container` result-card markup, and advanced via visible Next from page 1 to page 8. No eBay CAPTCHA/security block was observed. The attempt stopped before page 11 and saved no continuation JSON because the Chrome-control bridge timed out, then subsequent extension tab discovery/claim and macOS Chrome AppleScript checks timed out/hung. Next retry should check whether Chrome is still on page 8, then continue visible pagination to page 11 and save JSON one page at a time.
- Follow-up eBay continuation succeeded from a fresh logged-in Chrome tab: `crimp beads` pages 1-20 captured via visible search and visible Next pagination only, no CAPTCHA/security block. Raw JSONs saved under `/Users/alan/Product Research/Crimplok 698/run_logs/ebay_continuation_inventory_2026-07-10/crimp_beads/`. Merge wrote 635 net-new cheap inventory rows to the eBay master, leaving them harvested/pending before screening. First visual triage batch screened 129 title-priority rows into 14 Strong candidates, 13 Borderline candidates, and 102 Exclude; 27 retained rows are queued at `/Users/alan/Product Research/Crimplok 698/run_logs/ebay_continuation_inventory_2026-07-10/screening/crimp_beads_pages_1_20_retained_detail_backfill_queue.csv` for seller/business/country detail backfill before final review rebuild. 506 continuation rows remain pending visual screen.

## Session: 2026-07-10 — CopyCatch research-to-preview data contract alignment
- Added `docs/client-preview-data-contract.md` as the Tech-owned contract between product-research review outputs, backend imports, and the client preview. It defines the Amazon-modeled workbook format (`Image`, `Tier`, `Confidence`, `Reason`, `Product URL`), normalized backend fields, matter-level funnel fields, and client-safe label translation.
- Amazon agent thread `019f42ad-3d8e-78e2-b110-e449779b85fb` confirmed its reviewed Amazon workbook/export already matches the reference shape: large in-cell images, confidence-sorted rows, clickable product URLs, concise image-led reasons, and master-field mapping from Amazon source fields into normalized backend fields.
- Backend/client-preview normalized exports should use `matterId=crimplok-demo`; the local research folder/case name can remain `Crimplok 698`.
- Marketplace agent thread `019f4393-09e4-73e3-8f71-4dbc11046854` received the contract and generated backend-ready exports from recalibrated non-Amazon masters using `matterId=crimplok-demo`. Output folder: `/Users/alan/Product Research/outputs/019f4393-09e4-73e3-8f71-4dbc11046854/crimplok_698_backend_preview/`.
- Marketplace export validation: 751 reviewed/audit rows, 519 client-preview-safe rows, 7 marketplace summaries, 0 missing required fields, 0 wrong matter IDs, and 0 excluded/unable records in the preview-safe file. Preview statuses are 148 `qualified` and 371 `borderline`; reviewed/audit statuses are 148 `qualified`, 371 `borderline`, 212 `excluded`, and 20 `unable_to_determine`.
- Decision/status mapping for imports: Strong Match/Tier 1 -> `decision=include`, `status=qualified`; Borderline/Tier 2 -> `decision=flag`, `status=borderline`; Exclude -> `decision=exclude`, `status=excluded`; Unable -> `decision=flag`, `status=unable_to_determine`.
- Client preview stats were updated from the corrected marketplace export while keeping sample cards Amazon-only: Amazon 2,673 screened / 191 retained; corrected non-Amazon 7,715 screened / 519 retained / 195 sellers; combined public totals are now 10,388 screened, 710 potential records/source records, 257 sellers, 8 marketplaces, 0 source captures. Public static fallback and backend seed matter summary now use the same corrected stats.
- Replaced the redundant top-tile `Source Records` metric with `US / Non-US Records`. The 710 retained records split is 194 US, 489 non-US, and 27 unknown-country records. The preview tile displays `194 / 489` with `27 unknown`; backend/shared preview types now carry optional `usRecords`, `nonUsRecords`, and `unknownCountryRecords`.
- Renamed the top client-preview metric from `Potential Infringer Records` to `Potential Matches` for cleaner mobile fit while preserving the lower section label for the record list.
- Client preview layout cleanup: removed the redundant right-side `Selected source record` panel, aligned the patent reference / owner / review state metadata row, and moved the four top metrics into their own full-width section above Marketplace summary on desktop.
- Refreshed client-preview stats from the post-audit non-Amazon review bundle at `/Users/alan/Product Research/outputs/019f4393-09e4-73e3-8f71-4dbc11046854/crimplok_698_non_amazon_reviews/`. New public totals: 10,567 screened, 710 potential matches, 256 sellers, 190 US records, 485 non-US records, 35 unknown-country records. Marketplace changes: Etsy 2,148 screened / 188 retained, eBay 1,559 / 97, VerticalRetailers 23 / 11, Walmart 4,020 / 193, Amazon 2,673 / 191, SHEIN 30 / 19, AliExpress 110 / 11, DHgate 4 / 0.
- Growth handoff sent to thread `019f47e9-e302-7bf2-880d-09372ce602b6` for final CRO/front-end polish. Stable public preview URL is `https://copycatch-client-preview.vercel.app/client-preview`, deployment `dpl_AMqfyu7tTxZ8jk1f9zkq1vcBYQfx`, commit `1ce383e`. Handoff noted static fallback mode, final counts, data-label caveats, and current layout status.
- Deployed refreshed client preview from the `web` Vercel project after post-audit data sync: deployment `dpl_GooRprVg6a9nDBoX8NKys9eXFxNc`, URL `https://web-hvcgwrz98-alan-kozulabscoms-projects.vercel.app`, public alias `https://copycatch-client-preview.vercel.app/client-preview`. Smoke check returned HTTP 200 and rendered updated totals `10,567`, `710`, `190 / 485`, and `35 unknown`.
- Amazon thread `019f42ad-3d8e-78e2-b110-e449779b85fb` produced the consolidated Crimplok review package from Amazon plus the latest stable non-Amazon outputs: `/Users/alan/Product Research/outputs/019f42ad-3d8e-78e2-b110-e449779b85fb/crimplok_698_consolidated/Crimplok 698 - Consolidated Master Review.xlsx`, with manifest reviewedRows `1153` and previewStrongestRows `314`.
- CopyCatch platform local `main` rebased cleanly onto `origin/main`, then pushed commits `b7e6756` and `5703848` adding the Crimplok protected-product reference panel, Amazon review-focus metrics, and `Under attorney review` label. Verification passed after a clean sequential run: `pnpm build` and `pnpm typecheck`.
- Final production deploy from Vercel project `web` after consolidated preview data sync: commit `60b33c9`, deployment `dpl_GrxtWeRkiLWN9KAaHvkw9LbeMYKA`, URL `https://web-i1sn6qwsd-alan-kozulabscoms-projects.vercel.app`, public alias `https://copycatch-client-preview.vercel.app`. Smoke checks returned HTTP 200 for `/client-preview` and `/preview/crimplok`, confirmed `10,589` screened, `Potential Matches`, `190 / 485`, `35 unknown`, `high-confidence sample rows`, `Under attorney review`, `Protected product reference`, `Strong Amazon matches`, and `Bead Buddy Magical CrimpLoks`.

## Session: 2026-07-10 — CopyCatch preview recalibration safety pass
- Alan manually spotted weak/non-infringing non-Amazon sample rows in the client preview. Tech relayed a full recalibration directive to marketplace thread `019f4393-09e4-73e3-8f71-4dbc11046854`: recalibrate Walmart/Etsy/eBay/SHEIN existing reviewed records against the Amazon-calibrated positive evidence standard before trusting confidence labels or adding more rows.
- Amazon thread `019f42ad-3d8e-78e2-b110-e449779b85fb` provided the process-only standard: Strong Match requires a round/disc-like bead body plus a distinct solid side plunger/peg; generic round/spacer/crimp beads, tubes, covers, caps, cord ends, rubber stoppers, finished jewelry, and mixed kits without a clear side-plunger bead should be downgraded or excluded. This was relayed to the marketplace thread.
- Client preview static showcase is now Amazon-only until non-Amazon recalibration completes. Non-Amazon funnel counts remain visible as needs-review counts in the marketplace summary, but Walmart/Etsy/eBay/SHEIN sample cards and public thumbnail assets were removed from the app bundle.
- Final public client alias: https://copycatch-client-preview.vercel.app/client-preview. Deployed through Vercel project `web` because the `copycatch-platform` project is configured/protected in a way that returned SSO/404 for this public alias. Final deployment ID: dpl_E24RkFhVheAW5XhvsVxBnNkNeKjd.
- Verification passed: `pnpm build`, serial `pnpm typecheck`, public alias returns HTTP 200, removed Walmart thumbnail path returns HTTP 404, and the page preloads only `/research/amazon/...` images.

## Session: 2026-07-10 — CopyCatch Amazon-complete client preview
- Final client preview link remains `/client-preview`; latest Vercel deployment is `https://copycatch-platform-eibkrd07i-alan-kozulabscoms-projects.vercel.app/client-preview` (deployment `dpl_39MjvCZCiZGg9J4FZ7bUFR415Gtq`, Vercel SSO-protected).
- Static Crimplok fallback now includes Amazon from reviewed local product-research exports: Amazon `screened=2673`, `qualified/needs-review=191`, `sellers=62`, field gate PASS. Overall static preview totals are `screened=8958`, `Potential Infringer Records=848`, sellers `268`, source captures `0`.
- Preview rows now include real product thumbnails from local reviewed assets for Amazon plus Walmart/Etsy/eBay/SHEIN sample rows. Product thumbnails are displayed as listing context; evidence/source captures remain explicitly `Source record pending`, with no fabricated evidence.
- Client-facing labels use `Potential Infringer Records`, `Match Scoring`, `Review state`, and `Source record pending`; raw confidence/tier/qualified labels are still internal data only. `CRIMPLOK_PREVIEW_TOKEN` is still not configured in Vercel, so the verified static fallback remains intentional for the client-safe preview.
- Verification passed: `pnpm typecheck`, `pnpm build`, Vercel deployment READY, `/client-preview` returns expected Vercel SSO 302, and backend `/api/healthz` returns `{"ok":true}`.

## Session: 2026-07-10 — CopyCatch Stage 1 dev preview hardening
- Growth support alignment: client-review link remains `/client-preview`; latest deployed URL is `https://copycatch-platform-aqdt9w04x-alan-kozulabscoms-projects.vercel.app/client-preview` behind Vercel SSO. Added `docs/client-preview-alignment.md` with the frontend/backend contract for Growth.
- Vercel still has no `CRIMPLOK_PREVIEW_TOKEN`; only the API URL env vars are configured. Recommendation for tomorrow: keep the static verified Crimplok fallback enabled unless Alan explicitly approves adding the read-only preview token to Vercel.
- Live backend remains healthy (`/api/healthz` returned `{"ok":true}`) with preview API shape unchanged: `/api/v1/preview/:token/matters/:matterId` and `/api/v1/preview/:token/matters/:matterId/listings`, matter ID `crimplok-demo`.
- Final frontend alignment pass deployed to Vercel at `https://copycatch-platform-5s9ihg2p3-alan-kozulabscoms-projects.vercel.app` (Vercel SSO-protected). Intended client path for tomorrow is `/client-preview`; `/preview/crimplok` remains the underlying polished preview route.
- Vercel Preview/Development envs have `DASHBOARD_API_URL` and `NEXT_PUBLIC_DASHBOARD_API_URL` only. `CRIMPLOK_PREVIEW_TOKEN` is not configured in Vercel. The frontend intentionally attempts the API only when that env exists and otherwise falls back to the static verified Crimplok meeting dataset, so tomorrow's client path does not show an environment error.
- Backend alignment for the live API remains: base `https://dashboard-api-866881757145.us-central1.run.app`, matter ID `crimplok-demo`, preview routes `/api/v1/preview/:token/matters/:matterId` and `/api/v1/preview/:token/matters/:matterId/listings`. Backend health check returned `{"ok":true}` during the final alignment pass.
- Client-safe data mapping confirmed: internal `qualified` displays as `Needs Review`; internal `confidence`/`tier` are translated into qualitative `Match Scoring`; raw confidence/tier labels are not exposed in the client preview.
- Final frontend pass added the clean `/client-preview` alias, CopyCatch brand mark/assets/favicons/OpenGraph preview card, responsive overflow fixes, and branding polish. Verification: `pnpm build` and `pnpm typecheck` passed; Vercel deployment `dpl_22kky7DwMQxDP1gmCv8jYaS2aJ4R` reached `READY`; `/client-preview` responds with Vercel SSO protection.
- Overnight client-ready proof slice deployed to Vercel at `https://copycatch-platform-hsb3sw00k-alan-kozulabscoms-projects.vercel.app` (Vercel SSO-protected). Scope: Calibrated Precision visual pass, homepage refresh using Artifact Pack v1 labels, `/for-litigators`, `/for-patent-owners`, `/assessment`, `/login`, `/dashboard`, and `/preview/crimplok`.
- The Crimplok preview now has a no-secret static verified snapshot for the client walkthrough: 657 documented marketplace records from Walmart/Etsy/eBay/SHEIN, 206 sellers, 0 source captures imported, and representative real listing rows. This avoids storing the read-only preview token in Vercel or putting it into a URL. Live Firestore/API preview remains available for later scoped-access work.
- Client-facing labels in the proof slice: `Needs Review`, `Source Records`, `Review state`, `Match Scoring`, and `Source record pending`. The page keeps the counsel-boundary line visible and does not show raw confidence/tier/qualified labels publicly.
- Public website copy follows Growth Artifact Pack v1: H1 `Patent infringement investigation before you file.`, category `Patent Infringement Monitoring & Pre-Suit Investigation`, primary CTA `Get a free assessment`, secondary CTA `Model cost`, and the six public modules exactly: Marketplace Infringement Discovery, Seller-Pool Expansion, Claim-Relevant Source Records, Attorney Review Package, Seller & Listing Review, Sample Tracking.
- Verification for proof-slice changes: full `pnpm build` passed, full `pnpm typecheck` passed, Vercel deployment `dpl_AVywB1qHy86bWzw7CdMwFwpcFUDC` reached `READY`, and `/preview/crimplok` responds with Vercel SSO protection.
- Dashboard API dev backend was hardened around Firestore-backed access-control checks and scoped preview access. Live dev API remains `https://dashboard-api-866881757145.us-central1.run.app`; latest deployed Cloud Run revision is `dashboard-api-00005-n4k`.
- Crimplok dev seed now imports structured, verified product-research records from local master exports for Walmart, Etsy, eBay, and SHEIN: `657` listings and `206` sellers. Amazon raw rows remain excluded until a reviewed export with decision fields exists. Evidence assets remain `0`/pending; no evidence was fabricated.
- Live backend smoke passed: health OK, unauthenticated account routes return `401 auth_required`, preview matter shows totals `screened=9072`, `qualified=665`, `sellers=206`, `evidenceAssets=0`, preview listings returns `657`, bad preview access returns `403`, and legacy `/api/dashboard/*` stays `not_found`.
- Vercel project `copycatch-platform` was created under Alan's personal project scope, with the latest private smoke deployment at `https://copycatch-platform-jxkaqe5dc-alan-kozulabscoms-projects.vercel.app`. Non-secret API URL env vars are configured for Preview and Development. `CRIMPLOK_PREVIEW_TOKEN` still needs to be set securely in Vercel before the `/preview/crimplok` smoke page can fetch live preview data there.
- Client-facing preview language now uses `Match Scoring` instead of separate confidence/tier labels, `Needs Review` instead of qualified, and keeps the boundary line: "Observations describe what was documented; conclusions remain with counsel."
- Added `docs/fable-context/` as the allowlisted context-pack folder for future Fable sessions and `docs/product-research-ingestion-plan.md` as the Tech-owned boundary plan. Raw product-research materials should stay out of broad PM/design context; share sanitized summaries by default.
- Verification after repo changes: full `pnpm build` passed, then full `pnpm typecheck` passed.

## Session: 2026-07-09 — CopyCatch Platform fresh repo backend foundation
- Fresh private platform repo is `https://github.com/aldizzle/copycatch-platform` and the legacy landing repo is reference/import only.
- Canon docs were committed on `main` as `a58c7c3` (`Canon: ROADMAP + contract v0.2 (D18/D19)`), including D20 dev+prod now/staging later and D21 design-system bake-off pause.
- Dashboard API stub was upgraded locally to the v0.2 `/api/v1` contract and committed as `a57137c` (`Upgrade dashboard API stub to v0.2 contract`): account-scoped routes, preview route, shared generic IP schema with patent-only surfaces, Crimplok owner `Nikhil Gupta`, and `docs/backend-foundation-plan.md`.
- Verification passed before push: `pnpm typecheck`, `pnpm build`, local `/healthz`, `/api/v1/accounts/copycatch-demo-account/matters/crimplok-demo`, sellers, preview, and old `/api/dashboard/*` returning `not_found`.
- GCP CLI authenticated as `alan@kozulabs.com`. New projects created under `kozulabs.com`: `copycatch-platform-dev` (project number `866881757145`) and `copycatch-platform-prod` (project number `801149433922`). Service accounts created in both: `dashboard-api-runtime`, `deploy-runner`, and `import-job-runner`. Alan created clean billing account `CopyCatch-Platform-v2` (`01ACF9-EC62C7-AE4F88`); `copycatch-platform-dev` is linked to it, `copycatch-platform-prod` remains unbilled/inert. Created monthly budget `CopyCatch Dev $10 Guardrail` (`561ba292-d933-40e9-ba0e-27ca25a22de5`) scoped to dev with 50/90/100% alerts. Enabled dev APIs: Cloud Run, Cloud Build, Artifact Registry, Firestore, Firebase, Identity Toolkit, Secret Manager, IAM Credentials, Cloud Logging, Cloud Billing, Billing Budgets, and Storage.
- Firebase CLI `15.7.0` is logged in as `alan@kozulabs.com`. Firebase was added to `copycatch-platform-dev`; Firebase console URL: `https://console.firebase.google.com/project/copycatch-platform-dev/overview`. No Firebase web apps exist yet in dev. Prod remains without billing and should not be Firebase-enabled until later.
- Created Firebase Web App in dev: `CopyCatch Platform Web Dev`, app ID `1:866881757145:web:f97fe5729bb906a77c83c8`. Created default Firestore Native database in `us-central1`, standard edition, free tier, PITR disabled. Firebase SDK config fetched for future frontend env wiring. Firebase CLI does not expose Google sign-in provider setup; next manual console step is Firebase Auth -> Sign-in method -> Google provider -> enable.
- Alan enabled Firebase Authentication Google sign-in provider in `copycatch-platform-dev` with public-facing name `CopyCatch Platform Dev` and support email `alan@kozulabs.com`. Verified Firebase web app exists and Firestore default database is `us-central1`, Firestore Native, standard, free tier.
- Dev infrastructure foundation continued: created `gs://copycatch-platform-dev-evidence`, created Secret Manager `PREVIEW_TOKEN_SECRET` version 1, created Artifact Registry repo `copycatch`, built dashboard API images with Cloud Build, and deployed Cloud Run service `dashboard-api` in `us-central1` using `dashboard-api-runtime@copycatch-platform-dev.iam.gserviceaccount.com`. Public dev URL verified: `https://dashboard-api-866881757145.us-central1.run.app`; `/api/healthz` returns `{"ok":true}`, `/api/v1/accounts/copycatch-demo-account/matters/crimplok-demo` returns Crimplok v0.2 mock data, old `/api/dashboard/*` returns `not_found`. Cloud Run max scale is 1 and min scale remains default zero.
- Canon/docs and branding sync: committed PM-authored `_team/` state and branding assets as `9e5b603` (`Canon: Tone v2 (D23) + P9 + governance tripwires; add branding assets`). Added sanitized app-ready single-color SVG copies from Logo-3/4 and Asset 2/3 as `currentColor` web assets in commit `5be13ff`; Logo-1/2 and Asset 1 remain reference-only.
- Crimplok dev Firestore seed/API switch: built image `us-central1-docker.pkg.dev/copycatch-platform-dev/copycatch/dashboard-api:dev-firestore-seed`, created and executed Cloud Run job `crimplok-seed`, and redeployed `dashboard-api` revision `dashboard-api-00003-knd` with `USE_FIRESTORE=true`. Live verification passed: `/api/healthz` returns `{"ok":true}`, `/api/v1/accounts/copycatch-demo-account/matters/crimplok-demo` returns Firestore data for owner `Nikhil Gupta` with `screened=6182`, `qualified=308`, `sellers=254`, `evidenceAssets=0`, sellers returns one verified summary for `Tasharina Corp`, listings returns `[]`, and old `/api/dashboard/*` remains `not_found`. Implementation commit: `5ec3f9f` (`Seed Crimplok matter and read dashboard API from Firestore`).
- D24 off-laptop pilot planning: added `docs/off-laptop-pilot-plan.md` and `docs/nick-gate-checklist.md` as planning-only artifacts. Recommendation is Walmart Marketplace as the first pilot because current Crimplok canon/seed has the strongest verified Walmart funnel. Plan keeps the split at workstation VM browser runtime + Cloud Run orchestration, evidence capture with UTC timestamp/hash/storage pointer/auditEvents, human review for all interruptions, and a 30-day benchmark vs Alan's laptop output. No infrastructure/build starts until Alan confirms Nick clears the pre-pilot gate.

## Session: 2026-07-07 — mykitchen.bio product pages design review
- Reviewed the Claude v2.1 `/product/*` design round for the five product pages: recipe-engine, cookbook-builder, storefront, cook-mode, and pdf-export.
- Verdict: approve after one focused iteration. Shared template is solid, pages feel like siblings-not-clones, §3 copy is verbatim, cross-link chain points toward the paste box, and money visuals are modest/product-led.
- P1 fixes before FE port: make 3a's first visual show source-to-draft transformation more directly; make visual-only controls inert when inside `aria-hidden` demo wrappers; consider broadening the final close helper from "just a link" to include upload/what-you-have language via the content map.
- Review note committed in `docs/strategy/product-pages-design-review-2026-07-07.md`.

## Session: 2026-07-08 — mykitchen.bio Studio contract surface folded into build plan
- Alan accepted the Studio v1.1 review changes: Customers rename, Orders & Earnings with Orders first, backend-computed refund consequence preview, jobs/import queue, notifications, analytics-basic, publish readiness, and account/payout restriction surfaces.
- Codex folded the expanded Studio contract surface into `MVP Development Plan.md` under "Creator Studio Shared Contract Surface" so `lib/contracts.ts` has one end-to-end target: intake, recipes, jobs, cookbooks/readiness, covers, storefront, products, orders/refunds/access recovery, earnings/payouts, analytics, customers, broadcasts, billing usage/renewal/overage, Connect, next-best actions, events, notifications, and settings.
- Main-branch docs sync preserved the newer rev 7 tracker facts (live Stripe webhook, payout-capable connected account, Resend sender path) while adding decision 009 no-stage-gating doctrine and the Studio screen map/index updates.

## Session: 2026-07-08 — mykitchen.bio FE sprint merge ownership
- Codex is now explicitly responsible for reviewing and merging the FE agent's frontend sprint PRs into `main` going forward. `AGENTS.md` carries the durable instruction: Codex owns final integration, including FE-agent PR review/merge, while the FE agent continues implementation on its own branches.
- This sits alongside Decision 009: no stage gating anywhere; the site is the end-to-end build list, and truth-check happens once at pre-GTM launch review.

## Session: 2026-07-06 — mykitchen.bio Stage 1 homepage feedback fix deployed
- Feedback issue: the first Stage 1 homepage integration under-carried the Claude Design conversion-story motion, rendered example covers as raw food-photo cards, and left the final CTA food photo awkwardly visible on mobile webviews.
- Fix committed on `main` as `62144419` (`Fix Stage 1 homepage feedback issues`) and deployed to production `https://www.mykitchen.bio`.
- Outcome preview now renders a four-step source-to-book flow, example cards render approved food photos inside HTML/CSS cookbook cover objects, and the final CTA image is hidden on small mobile viewports with paste-card contrast corrected.
- New Stage 1-safe strings added for Fable review are listed in `tasks/frontend-home-contract-notes.md`.
- Verification passed after deploy: `npm run test:stage1:production` and a live 390px mobile DOM check confirming no horizontal overflow, four conversion steps, three book-cover examples, and `.hp-final-photo` display `none` on mobile.

## Session: 2026-07-06 — mykitchen.bio Stage 2A/2B goal and design-drop operating rule
- Active Codex goal is now Stage 2 money loop split by dependency reality: Goal 2A is sandbox-complete and can progress without Alan's live-mode unblockers; Goal 2B is live proof and starts after tax/legal/email/Stripe live dependencies land.
- Goal 2A success: PAYG credit packs, clean export unlock and refund reversal, connected-account sandbox checkout, buyer entitlements with email recovery, webhook signature/replay safety, admin full-refund path, fee reconciliation, and Stage 2 route/pricing contracts.
- Goal 2B success: one controlled live purchase/refund/reversal/payout cycle with penny-accurate reconciliation.
- Operating model now requires each Claude Design export to land as its own design-drop round commit. Frontend work should compare design-drop commits and port diffs into app code; design files remain a one-way inbox and are not served directly.
- Added npm run design-drop -- <round name> helper to inspect pending changes under Branding/Branding v2/Claude v2.1/ and print the expected design-drop commit message.

## Session: 2026-07-06 — mykitchen.bio Supabase pooler and Stage 1 durability unblocked
- Supabase MCP server is installed in Codex Desktop, but the active thread still does not expose a `mcp__supabase` callable namespace. Apify and Vercel MCP tools are callable now; Supabase may require another client refresh/new thread before its tools appear.
- Added `SUPABASE_POOLER_URL` to ignored `Keys.env.local.txt` and Vercel Production + Preview env. The pooler URL uses the Shared Pooler host `aws-1-us-west-2.pooler.supabase.com:6543` and user `postgres.ehlvcmmfetnmqnhvongy`.
- `npm run db:push` reached Supabase but stopped on remote migration-history IDs that are not in the local migrations directory. Avoided `supabase migration repair` because it could rewrite migration history without review.
- Applied the prepared Stage 1 SQL directly through Supabase CLI one statement at a time: `20260705090000_create_stage1_sessions.sql` and `20260705100000_create_stage1_rate_limits.sql`. This created/confirmed `stage1_sessions`, `stage1_rate_limits`, and the rate-limit RPCs.
- Added `STAGE1_SESSION_SECRET` to ignored local env and Vercel Production + Preview; redeployed production to `https://www.mykitchen.bio`.
- Verification: `npm run test:goal:readiness -- --live` now reports 18 pass, 0 warn, 1 manual, 0 blocked. The only remaining readiness item is Alan-provided graded Creator Assist cover examples. `npm run build`, `npm run typecheck`, `npm run test:stage1:gates`, and `npm run test:stage1:production` passed.
- Updated `STRIPE_TEST_CONNECTED_ACCOUNT_ID` locally and in Vercel to the newer Express sandbox account `acct_1TqFTwAac5DdyNqH`, which Alan submitted for review. Commerce destination-charge testing remains pending Stripe connected-account capability review.

## Session: 2026-07-06 — mykitchen.bio Stripe MCP setup
- Stripe commerce scaffold added locally: `/api/webhooks/stripe` verifies raw Stripe signatures, records event IDs to `stripe_webhook_events` when Supabase is available, and returns idempotent duplicate responses; `/api/commerce/sandbox-checkout` is internal/test-mode only, requires `x-mykitchen-admin-secret`, and creates Stripe Checkout destination charges with application fees to the sandbox connected account. Verification commands: `npm run test:commerce:scaffold`, `npm run typecheck`, `npm run test:stage1:gates`, and `npm run build` passed. Next after deploy: create/register the Stripe sandbox webhook endpoint for `https://www.mykitchen.bio/api/webhooks/stripe`, add the returned `STRIPE_WEBHOOK_SECRET`, then redeploy.
- Stripe MCP is now visible in the active Codex tool list and read-only account verification succeeded. It is authenticated against platform account `acct_1NyJqaAHV3npmCvr` / `AXL Media LLC`. Use Stripe MCP for sandbox-first inspection and setup before falling back to Dashboard/CLI.
- Local env file `Keys.env.local.txt` is gitignored and now includes `STRIPE_TEST_CONNECTED_ACCOUNT_ID` for the sandbox Express account. Do not commit this env file.
- Stripe webhook setup note: the repo currently has no Stripe webhook route checked in, so do not create/register the Dashboard webhook endpoint yet unless a route is added/deployed first. After the route exists, create a sandbox webhook event destination in Stripe Workbench/Webhooks or use `stripe listen` locally to get the `whsec_...` signing secret. Vercel must be redeployed after adding/updating webhook env vars there.
- Stripe MCP refresh note: Stripe MCP is registered and OAuth-authenticated, but its tools were not visible in the active thread. A full Codex Desktop restart or fresh thread should refresh MCP tool schemas; until then use Stripe Dashboard/CLI for setup.
- Stripe sandbox Express connected account was created for mykitchen.bio testing. Durable connected account ID: `acct_1TqEogPRibOga4zC`. Do not store/share the short-lived onboarding setup link; use the account ID as `STRIPE_TEST_CONNECTED_ACCOUNT_ID` for sandbox destination-charge and webhook tests.
- Stripe connected-account business type clarification: the business type in the connected-account creation flow describes the creator/seller connected account, not AXL Media LLC. For the sandbox test creator, `Individual` is fine. In production, creators may onboard as individuals or companies through Stripe Express/onboarding.
- Stripe sandbox Express account review: capabilities should show card payments, transfers, and payouts; account properties should show platform pays Stripe fees, Express dashboard access, platform negative-balance liability, and Stripe requirement collection. Use a test creator email, create the account, then capture the resulting `acct_...` as `STRIPE_TEST_CONNECTED_ACCOUNT_ID`.
- Stripe sandbox connected account capability choice: for mykitchen.bio's hosted-storefront model, test connected accounts should include both `Accept payments from their own customers` and `Receive transfers to their Stripe balance`. This models connected creators as sellers/merchants who can receive payouts while mykitchen.bio takes application fees.
- Stripe dashboard navigation note: on `Connect` -> `Connected accounts`, do not create live connected accounts manually during setup. First switch to sandbox/test mode; then use `+ Create` only for a test connected account. For mykitchen.bio creators, the intended launch path is Express connected accounts via app/API onboarding, not hand-created live accounts.
- Stripe MCP server was added with official URL `https://mcp.stripe.com` via the app-bundled Codex CLI, and Stripe OAuth login completed successfully. `codex mcp list` shows `stripe` enabled. Like Supabase, the active Codex tool list may require a refresh/new turn before Stripe MCP tools become callable.
- Stripe MCP should be used sandbox-first with human confirmation and without pasting raw Stripe secret keys into chat/repo. Next commerce tasks: inspect sandbox account, create/use test connected accounts, verify destination charges with 10%/7.5% application fees, configure/test webhook secret, test refund + transfer-reversal handling, then update readiness.

## Session: 2026-07-06 — mykitchen.bio Supabase Google Auth and migration status
- Supabase Google Auth is now configured: `npm run test:goal:readiness -- --live` passed the Google OAuth provider check because the Supabase authorize endpoint redirects for Google.
- Supabase MCP tools are available, and migrations were started through MCP. `create_lead_capture` applied successfully and is recorded in Supabase migration history. `create_stage1_sessions` initially hit a Supabase MCP HTTP 500/OOM response, then succeeded on retry.
- `create_stage1_rate_limits` is still not confirmed/applied. Supabase MCP began returning HTTP 500/OOM responses even for migration/list/query calls, and the local CLI fallback cannot run because neither `SUPABASE_POOLER_URL` nor `SUPABASE_DIRECT_URL` is configured locally.
- Current Supabase open item: finish/apply `supabase/migrations/20260705100000_create_stage1_rate_limits.sql` once MCP recovers or after Alan provides a working pooler/direct database URL. Then rerun live readiness and Stage 1 smoke.

## Session: 2026-07-05 — mykitchen.bio Stage 1 production hardening and blockers
- Google OAuth credentials were generated in Google Cloud for the mykitchen.bio Web application. Do not commit or store the Client Secret in repo/env files; paste the Client ID and Client Secret only into Supabase Auth -> Google provider, enable the provider, save, then run the live readiness check. The downloaded Google client-secret JSON should stay out of the repo.
- Google OAuth client check: Google Cloud Web application setup is correct with production origins `https://www.mykitchen.bio`, `https://mykitchen.bio`, optional `http://localhost:3000`, and authorized redirect URI `https://ehlvcmmfetnmqnhvongy.supabase.co/auth/v1/callback`. After creation, copy the generated Google Client ID and Client Secret into Supabase Auth -> Google provider and enable it. Stripe Connect approval is confirmed; next Stripe task is sandbox connected-account + destination-charge/webhook verification before wiring live creator onboarding.
- Google OAuth consent support email: a personal email is acceptable for the current setup; move to `support@mykitchen.bio` once the domain inbox exists so the Google consent screen looks more polished for public launch.
- Google Cloud OAuth setup state: on `APIs & Services` -> `Credentials`, Google shows the yellow "configure OAuth consent screen" banner before OAuth client creation. Next click path is `Configure consent screen`, fill app name/support email/developer contact, then return to `Credentials` -> `Create credentials` -> `OAuth client ID`. The blue Gemini warning is separate from OAuth and should be handled by restricting the existing Gemini API key to the Gemini API and server-safe usage, or replacing it later with authorization/service-account based access if appropriate.
- Google Cloud OAuth navigation note: from the Google Cloud project dashboard, use left sidebar `APIs & Services` -> `Credentials` -> `Create credentials` -> `OAuth client ID`; choose `Web application`, add mykitchen.bio origins, and use the Supabase provider callback URL as the authorized redirect URI.
- Supabase Google Auth setup guidance: the Google provider modal must use a real Google Cloud OAuth Web Client ID ending in `.apps.googleusercontent.com` and the matching Google OAuth client secret. Do not paste the Supabase database password into the Google client secret field. Google Cloud should use the Supabase callback URL as its authorized redirect URI, while Supabase URL configuration should allow the app callback path `/auth/callback`.
- Supabase MCP setup: global MCP server `supabase` was added with project ref `ehlvcmmfetnmqnhvongy` using the app-bundled Codex CLI because the global `codex` npm shim is missing its vendor binary. OAuth login completed successfully, and Supabase agent skills were installed into `.agents/skills/` with `skills-lock.json`. The active Codex tool list may require a refresh/new turn before Supabase MCP tools appear.
- Supabase update after Alan found the pooler UI: Shared Pooler host is `aws-1-us-west-2.pooler.supabase.com`, port `6543`, database `postgres`, user `postgres.ehlvcmmfetnmqnhvongy`. Attempted `npm run db:push` through the constructed pooler URL; network reached the pooler, but authentication failed (`password authentication failed`). The stale/invalid local `SUPABASE_POOLER_URL` entry was removed. Next action: Alan should reset/copy the current database password from Supabase and provide the exact password or a ready-to-copy encoded pooler URI.
- Stage 1 is live on `https://www.mykitchen.bio` and deployed from main commit `73652002` / PR #19. Latest deployment URL: `https://mykitchen-54nlxo2zn-alan-kozulabscoms-projects.vercel.app`.
- Stage 1 public truth is enforced: no waitlist/teaser framing, no pricing page, no hosted-selling/storefront claims, no public founding copy, and `/api/founding-spots` now returns 404 until Stage 2.
- Recent hardening PRs: #17 tightened `.env.example` and readiness inputs; #18 removed stale account-list/waitlist copy from unused lead-capture paths; #19 hid the founding-spots API and added local + production smoke coverage.
- Production smoke passed after deploy: `npm run test:stage1:production` verifies hidden Stage 2 routes, hidden founding API, public-copy truth, social-link fallback, social-link-plus-transcript success, preview auth bridge, editor/builder unlock, watermarked PDF export, and production test-auth 404.
- Active goal is intentionally marked blocked, not complete. Remaining unblockers are external setup/input: `SUPABASE_POOLER_URL`, Supabase Google OAuth, `STRIPE_TEST_CONNECTED_ACCOUNT_ID`, `STRIPE_WEBHOOK_SECRET`, `SCRAPECREATORS_API_KEY`, `APIFY_TOKEN`, decision to accept 47 corpus links or provide 3 more, and 3-5 graded creator-assist cover examples with manifest.
- Readiness command: `npm run test:goal:readiness` currently reports 8 pass, 1 warn, 2 manual, 6 blocked. Use it after each setup change to prove the blocker list is shrinking.

## Session: 2026-07-05 — mykitchen.bio progressive truth rollout
- Decision 007 is now current rollout canon alongside Decision 006: no waitlist or teaser surfaces; the public site grows stage-by-stage with product truth.
- Stage 1 north star is the live Magic loop: homepage paste -> Google auth with artifact carry-through -> staged generation -> recipe editor -> cookbook builder -> watermarked PDF export. Stage 1 H1 is `Turn your recipe videos, blog posts, and PDFs into a cookbook.`
- Stage 1 public site must not show pricing, selling, hosted storefront, public founding, or "you can sell" copy until Stage 2 money systems actually work.
- `MVP Development Plan.md` was rewritten as the workstream plan: public website/stage gating, core loop, media pipeline, commerce, subscriptions, creator assist, email+analytics, ops/admin/observability, each with acceptance tests and adversarial cases.
- Next implementation branch should be `codex/core-loop-stage1`; Goal mode is allowed only when the goal is a passing test suite, never "looks good."

## Session: 2026-07-05 — mykitchen.bio launch-complete doctrine
- Canon reading order now starts at `docs/README.md`; Decision 006 v2.1 is the current business spec and supersedes earlier credit-first/founding-counter assumptions where it conflicts.
- Launch-complete doctrine: public site should only claim what works at launch. Public launch now includes Free try / PAYG / Starter / Pro, hosted selling, living cookbooks, short-form video extraction, email/broadcast basics, analytics, AI-assisted product creation, and Stripe Connect payouts.
- Pricing v2.1: PAYG and Starter use 10% all-in hosted selling fee, Pro uses 7.5% all-in, standard card processing included; private founding offer is not public and is handled by account-level 5% override.
- Short-form import posture: extraction-first for public single links such as TikTok/Reel/Short via vendor abstraction with upload/caption fallback; no social account connection, no bulk import, no guarantee language.
- Open technical review flags before freezing copy/build: complete-offer scope is buildable but long; docs still need cleanup around old final-decision/todo/MVP-plan language for audio, YouTube/podcast scope, public founding counters, and old credit-pack-first assumptions.

## Session: 2026-07-04 — mykitchen.bio Working Cookbook public site
- Operating model is binding for mykitchen.bio: read `docs/operating-model.md`; Codex owns app/schema/infra/git/deploys, Fable owns strategy/decision docs, Alan decides.
- Visual canon is Decision 004: Working Cookbook Claude v2.1 + paprika `#B3401E`; Modern Pantry is superseded as UI canon but remains historical asset/context.
- Launch scope is Decision 005: hosted storefront selling ships at launch with Creator `$29/mo`; first 100 paid-action accounts can activate hosted selling and lock 5% for life; Creator Pro, living cookbooks, broadcasts, deeper analytics, and Gemini video parsing are post-launch.
- Public site was rebuilt and deployed to `https://www.mykitchen.bio`: creator-first SaaS homepage, public Product/Solutions/Examples/Why/Pricing/About/Resources pages, hidden login CTA until auth exists, `/join` as early creator-account/free-credit reservation, and `/api/founding-spots` placeholder endpoint.
- Growth review P1 fixes implemented: `/join` no longer says invite/first-batch, lead capture success says creator account list and 5 starter credits, pricing includes clean-export unlock from any credit pack, founding counter uses pre-checkout honest wording, Creator Pro is marked coming later, and Resources copy is creator-facing.

## Session: 2026-07-03 — mykitchen.bio MVP V1
- mykitchen.bio V1 direction: preserve the three live demo creator storefronts (`/maria-table`, `/coach-kate`, `/plantbased-asha`) as outreach proof assets, and replace the root redirect with a creator-facing trust homepage.
- Decision collaboration workflow added: strategic product questions should now live in repo decision briefs under `docs/decisions/`; ask Claude/Fable to review a numbered brief such as `001-pricing-model.md`, then record Alan's final call in `docs/decisions/decisions.md`.
- Homepage implementation now centers the creator-first concierge alpha: request invite, paste existing recipe links/captions/transcripts/notes, receive a private cookbook preview, set simple monthly/annual pricing, then launch paid access.
- Copy guardrails: do not promise TikTok/Instagram/YouTube OAuth in V1; say creators can paste links and notes. Keep claims around lifestyle and monetization, not medical outcomes or guaranteed income.
- Lead capture foundation added: `/join`, reusable invite form, server-side Supabase service-role insert path, and `public.lead_capture` migration with RLS enabled. Local machine does not have `psql`, so apply the migration through Supabase SQL editor or Supabase CLI before relying on production form submissions.
- Design guardrails: Modern Pantry brand, mobile-first, real HTML copy instead of text baked into images, sparse ornament use, app-facing assets from `public/assets`, WIP generated website assets kept as visual references under `Branding/Website Assets`.
- Verification: `npm run typecheck` and `npm run build` pass; local `/`, `/join`, and `/maria-table` return 200 via the dev server. Chromium screenshot QA was blocked by macOS sandbox permissions.
- Growth Lead review was requested from thread `019f23e4-4829-7212-a30c-8fa358c6cb27` and implemented for V1 copy: removed public "alpha" language, switched to "founding creators", clarified the 5% founding creator rate plus Stripe processing, tightened the `/join` H1, nudged the form toward 1-3 recipe links, and added a 24-48 hour preview FAQ.

## Session: 2026-06-19
- Giftable Reddit research findings added at `MEMORY/GIFTABLE_REDDIT_RESEARCH_FINDINGS.md`: synthesized linked Reddit threads from GiftIdeas, Marriage, SecretSanta, DAE, and Autism into themes around gift decision anxiety, confidence, budget regret, recipients already owning what they want, Amazon as both benchmark and guilt source, and practical workarounds. Recommendations: build Giftable as a confidence reducer with 3 explained ideas, budget/timing constraints, "good enough to give" framing, note/personalization helper, gift-type pivots for people who own everything, and no anti-Amazon shaming.
- Giftable Reddit research prompt added at `MEMORY/GIFTABLE_REDDIT_RESEARCH_PROMPT.md`: recommends using `/r/Gifts` to gather real gift-shopping stories instead of asking a direct feature-pitch question; draft post asks what made the last stuck gift hard, current workarounds, trust reactions to detail-based gift ideas, follow-up probes, coding categories, and validation/disconfirmation signals for Giftable's confidence-problem wedge.
- Giftable positioning and marketing angles added at `MEMORY/GIFTABLE_POSITIONING_MARKETING_ANGLES.md`: incorporated the "why no great gifting app?" diagnosis into positioning guardrails, recommending "personal gift search assistant" as the category, "Thoughtful gifts, without the homework" as the tagline direction, one-sided giver-first flows, no magic/perfect-gift claims, no wishlist/social adoption dependency, no gift-card/cash/payment scope in MVP, and Shopify-powered distinctive physical gifts framed through relationship fit.
- Giftable fast trustworthy gift flow added at `MEMORY/GIFTABLE_FAST_TRUSTWORTHY_GIFT_FLOW.md`: answers the post-strategy UX question with a one-person gift brief, under-60-second capture, 3 primary Shopify-powered candidates with fit rationale, quick refinement nudges, Contacts as optional one-person acceleration only, state handling, navigation model, data needs, and Lead Dev handoff. No SwiftUI implementation changed.
- Giftable competitive strategy brief added at `MEMORY/GIFTABLE_COMPETITIVE_STRATEGY_BRIEF.md`: reviewed Givingli, JoyCo, wishlist substitutes, and manual alternatives; recommended the MVP wedge as relationship-aware discovery of distinctive physical Shopify-powered gifts for one recipient/occasion, explicitly rejecting digital greeting cards, gift card sending, generic wishlist/contact-manager scope, and broad shopping feeds.
- Giftable ChatGPT Pro migration handoff added at `MEMORY/CHATGPT_PRO_MIGRATION_HANDOFF.md`: documents what Git preserves versus live chats, current remote, existing agent thread IDs, recommended reasoning levels, bootstrap prompt for a new Pro coordinator chat, recreate prompts for Lead Dev/Product Manager/UI-UX Designer, and first-push checklist.
- Giftable GitHub preservation prep: added `MEMORY/AGENT_REGISTRY.md` with active Lead Dev, Product Manager, and UI/UX Designer thread IDs, coordination model, reasoning-level rules, current phase, and recovery prompt for restarting the project if live chats are lost.
- Giftable Contacts boundary implementation: added native `ContactsService` actor under `Giftable/Services` with app-owned `ContactsAuthorizationState` (`notDetermined`, `authorized`, `limited`, `denied`, `restricted`, `unknown`, `unavailable`), async authorization request, current status mapping, typed errors, and app-safe `ContactCandidate` projection only. The service projects stable identifier, display name, optional next birthday date, no raw `CNContact`, and conservative low-confidence/no relationship hint because Contacts relation metadata is not reliable for inferring the user's relationship to arbitrary contacts. Added generated Info.plist `NSContactsUsageDescription`: "Giftable uses Contacts to help you choose recipients and prefill names and birthdays. You review everything before saving."
- Validation: Swift 6 simulator typecheck passes with `ContactsService.swift`; `plutil -lint Giftable.xcodeproj/project.pbxproj` passes; generated simulator app `Info.plist` contains `NSContactsUsageDescription`. `scripts/build_and_test.sh` still hangs in Xcode's `IDEXCBuildServiceBuildOperation`/SDK stat-cache phase and was interrupted cleanly.
- Giftable onboarding domain implementation: added app-safe `ContactCandidate`, mutable `OnboardingRecipientDraft`, preserved user-entered birthday/anniversary draft inputs, richer `Relationship` category/detail modeling, occasion source/priority metadata, and pure `RelationshipSeedingPolicy` in `Giftable/Domain`. Policy now seeds Partner, Parent, Child, Sibling, In-Law, Relative, Friend, Colleague, and Mentor deterministically with anniversary capture only for Partner and Mother's/Father's Day only for known mother/father or mother/father-in-law details. Seed recipients were updated to use relationship details and occasion sources.
- Validation: Swift 6 simulator typecheck passes with the new onboarding domain files included; `plutil -lint Giftable.xcodeproj/project.pbxproj` passes. `scripts/build_and_test.sh` is still blocked by the local Xcode build service hanging inside `IDEXCBuildServiceBuildOperation` after the SDK/stat-cache phase, even when run outside the sandbox; the hung build was interrupted cleanly.
- Giftable relationship-aware onboarding MVP spec added at `MEMORY/GIFTABLE_RELATIONSHIP_AWARE_ONBOARDING_SPEC.md`: coordinated Product Strategy Lead and Experience Flow Designer context into a four-screen onboarding plan, smart relationship seeding policy, Contacts allow/deny/skip/later-enable states, data model implications, assumption audit, and Lead Dev implementation brief. No SwiftUI feature code changed.
- Giftable MVP experience flow blueprint added at `MEMORY/GIFTABLE_MVP_EXPERIENCE_FLOW.md`: first-launch to first recommendation journey, Home/Recipients/Gifts/Profile screen flow, Contacts allow/deny/skip/later-enable paths, empty/loading/error/offline/no-results states, low-fidelity wireframes, navigation model, data mapping, and Lead Dev handoff notes. No SwiftUI implementation changed.
- Giftable agent operating protocol update: added explicit phase gates and three upstream roles before implementation work: `Lead Agent Orchestrator`, `Product Strategy Lead`, and `Experience Flow Designer`; review loop now sequences product strategy → user flow/wireframes → SwiftUI/data architecture → Liquid Glass/HIG → Shopify integration → Xcode validation
- Giftable data architecture slice: added immutable typed recipient graph (`Recipient`, `Relationship`, `Occasion`, `InterestTag`) and `GiftProduct` model with `Identifiable`, `Codable`, price, image URLs, and optional Shopify `attributionToken` / `shdid` capture
- AppModel now owns reactive `recipients` and `recommendedGifts` arrays seeded with realistic upcoming 2026 dates and product mock data for the next UI phase
- Validation: full `xcodebuild` simulator build is currently blocked by Xcode 26.5 `clang-stat-cache` hanging after the iOS 26.5 runtime install; headless Swift 6 typecheck passes with simulator SDK, workspace module caches, and elevated Observation macro plugin access
- Giftable native foundation update: implemented persistent SwiftUI `TabView` shell with per-tab `NavigationStack` containers and route destination hooks, preserving placeholder roots only
- Moved Shopify API boundary from `Giftable/Services` to `Giftable/Network/ShopifyCatalogClient.swift`; client remains a Swift `actor` with JSON-RPC 2.0 typed request/response models, in-actor prompt sanitization, async/await transport, and typed errors (`emptyPrompt`, `networkError`, `protocolError`, `emptyResult`, etc.)
- Validation: `swiftc -module-cache-path /private/tmp/giftable-swift-module-cache -typecheck -parse-as-library Giftable/GiftableApp.swift Giftable/App/AppShell.swift Giftable/App/AppTab.swift Giftable/App/FoundationPlaceholderView.swift Giftable/Models/AppModel.swift Giftable/Models/AppRouter.swift Giftable/Network/ShopifyCatalogClient.swift` passes; `plutil -lint Giftable.xcodeproj/project.pbxproj` passes
- Giftable Native iOS pivot: retired the prior Next.js/Tailwind/PWA surface and scaffolded a greenfield SwiftUI iOS 18+ project in `/Users/alan/Documents/Gifting App Shopify Catalog API`
- Native scaffold: `Giftable.xcodeproj`, shared `Giftable` scheme, `GiftableApp` entry point, unified `AppShell`, `TabView` routes for Home/Recipients/Gifts/Profile, `@Observable` `AppModel` and `AppRouter`
- Shopify native boundary: added typed Swift `ShopifyCatalogClient` actor targeting `https://catalog.shopify.com/api/ucp/mcp` with JSON-RPC request/response models, prompt sanitization, async/await, and typed errors
- Validation: `plutil -lint Giftable.xcodeproj/project.pbxproj` passes, `xmllint` on `Giftable.xcscheme` passes, and Swift source typecheck passes via `swiftc -module-cache-path /private/tmp/giftable-swift-module-cache -typecheck -parse-as-library ...`
- Simulator build blocker: local machine has Command Line Tools selected and no `/Applications/Xcode.app`, so `scripts/build_and_test.sh` exits with a clear "Full Xcode is required" preflight before `xcodebuild`
- Giftable Catalog App: scaffolded a Next.js 15 App Router + TypeScript mobile-first PWA in `/Users/alan/Documents/Gifting App Shopify Catalog API`
- Added shadcn-style Tailwind UI primitives, bottom navigation, install prompt, manifest, service worker, Supabase auth scaffold, recipient add/edit workflow, product cards, loading/error states
- Shopify Global Catalog server action sends JSON-RPC `tools/call` for `search_catalog` with `catalog.query`, `catalog.filters`, and `catalog.placements`
- Live endpoint currently returns `UCP discovery failed: Missing profile uri`; `.env.example` and README note that `SHOPIFY_CATALOG_MCP_URL` may need Shopify's profile-specific URL/query string
- Validation: `npm run build` and `npm run typecheck` pass; mobile browser preview verified at 390x844
- Sites project: `appgprj_6a34a3ace62c81919d09a6fab177d30c` (`giftable-catalog-app`)

## Session: 2026-02-22
- NegotiAgent: restructured to case-centric UX — Case List → Case Detail pattern matching CaseAgent
- New components: NegotiCaseCard, NegotiCaseList, NegotiCaseDetail with back navigation + 3-tab sub-nav
- Deleted NegotiStatusDashboard (7-color pipeline bar), replaced with progressive disclosure
- Color palette reduced to 3: gold (#F5A623 active), green (#30A46C settled), red (#EF4444 urgency), gray (#9CA3AF neutral)
- All panels (SchedulePanel, OutreachPanel, NegotiationsPanel) now accept caseId prop and filter data
- NegotiNegotiationsPanel: replaced 2-column inbox with single-column expandable list
- Schedule A table: fixed column alignment — uniform widths, consistent 10px font, removed badges/follow-up pills from rows
- NegotiAgent cases now linked to MOCK_CASES (same as CaseAgent) — deleted standalone NEGOTI_CASES, unified caseId references across all mock data (threads, photos, samples, email groups, outreach events)
- ResultsView: optimized button placement — slim header, action buttons in tab row, search/filters/view controls in new action bar above data
- EnrichProgressOverlay: added completion screen with product count stat card + layers-completed checklist (green checkmarks), purple "View Results" CTA
- Brand cards: changed damage label from "dmg" to "/yr" for annual damages
- Moved Export/Enrich buttons onto the marketplace pills row for cohesiveness
- Demo deep scan now shows full pro UI: Results/Schedule A tabs, search bar, column manager, saved lists, enrich dropdown
- Deploy: `npm run build && npx firebase-tools@latest deploy --only hosting:production`
- Commits: main branch, short descriptive messages

## Session: 2026-02-21
- Focus: Frontend/GUI layer updates
- Deploy: `npm run build && npx firebase-tools@latest deploy --only hosting:production`
- Commits: main branch, short descriptive messages
- Skill: frontend-design for all frontend changes

## Key Learnings
- scan2 routing now uses `history.pushState` path-based routing: `/scan2/<agentname>/<tool>`
- URL slugs use full agent names (lowercase): `searchagent`, `caseagent`, `reportagent`, `negotiagent`, `photoagent`, `shoppingagent`
- Each AGENTS entry has a `slug` field for the URL segment, `key` stays as internal identifier
- `SLUG_TO_KEY` / `KEY_TO_SLUG` lookup maps bridge between URL slugs and internal keys
- Firebase already had `"/scan2/**" → "/scan2.html"` rewrite, so SPA sub-paths just work on refresh
- AGENTS array defines 6 agents: search, case, report, negoti, photo, shopping
- Each agent has subTabs (tools) — these become the `<tool>` segment in the URL
- Search agent also has internal flow states: `chat`, `results` (not in subTabs but valid routes)
- `onAgentNav(agent, subTab, _skipPush)` — third arg prevents double pushState on mount/popstate
- `parseRoute()` / `pushRoute()` / `replaceRoute()` are the router utilities
- Legacy `?agent=` query param still supported as fallback (auto-upgraded to path on mount)

## Dashboard SearchAgent — Live Backend API Reference

### Auth
- Firebase Auth → ID token in `Authorization: Bearer <token>`
- `/api/scan/billing/is-pro` → `{ pro: boolean }` (quick pro check)
- `/api/scan/billing/check-subscription` → `{ pro, plan, subscriptionId, status, currentPeriodEndMs }`
- `scan-auth-header.js` handles onAuthStateChanged → updates UI login/subscriber state

### Core Scan Flow
1. `POST /api/scan/run` — `{ image_url, keyword_exclusion? }` → `{ results }` (authed)
2. `POST /api/scan/run-public` — same but no auth (gated by ALLOW_PUBLIC_SCAN env)
3. `POST /api/scan/scans` — save scan `{ imageUrl, keywordExclusion, results, products?, product?, scanType? }` → `{ id }`
4. `GET /api/scan/scans` — list user scans (50 most recent)
5. `GET /api/scan/scans/:id` — single scan details

### Product Enrichment
- `POST /api/scan/junglescout/keywords_by_asin` — `{ asin, marketplace }` → `{ keywords[], total, asin, marketplace, ms }` (JungleScout keywords_by_asin_query)
- `GET /api/scan/amazon/details?asin=X` → product details, variants, seller, photos, sales
- `GET /api/scan/amazon/seller/profile?seller_id=X&domain=com` → seller profile
- `GET /api/scan/junglescout/sales_estimates_query` → sales estimates
- `POST /api/enrich/start` — `{ caseId, asins[] }` → `{ jobId }` (batch enrichment)
- `GET /api/enrich/status?jobId=X` — poll enrichment progress
- `POST /api/enrich/cancel` — cancel enrichment job

### Browser Use (Agent Automation)
- `POST /api/scan/browser-use/start` — `{ reportId, profileIds[], productIds?[] }` → `{ jobId, total, workers }`
- `POST /api/scan/browser-use/cancel` — `{ jobId }`
- `GET /api/scan/browser-use/status?jobId=X` — poll job progress
- Firestore listener: `browserUseJobs/{jobId}` for real-time updates

### Visual Match & Image
- `POST /api/scan/visual-match` — `{ image_url }` → `{ matches[] }`
- `POST /api/scan/upload` — multipart form-data → `{ url }` (GCS)

### Billing & Checkout
- `POST /api/scan/billing/create-checkout-session` — `{ price_id }` → `{ client_secret, sessionId }`
- `POST /api/scan/entitlements/sync_from_checkout_session` — `{ session_id }` → activate post-checkout
- `POST /api/scan/entitlements/claim` — `{ entitlement_code }`
- `GET /api/scan/entitlements/me` — current user entitlements
- Stripe webhook: `POST /api/scan/stripe/webhook`

### Firestore Collections
- `users/{uid}` — user doc, `scan_pro` flag
- `users/{uid}/scan_scans` — saved scan results
- `scan_entitlements_by_email/{email}` / `scan_entitlements_by_uid/{uid}` — subscription data
- `reports/{reportId}` — report docs with browserUse fields
- `browserUseJobs/{jobId}` — agent automation job tracking
- `enrichJobs/{jobId}` — batch enrichment jobs
- `searchAgentCases/{caseId}` — case data with product/seller subcollections

### Third-Party Services
- Stripe (payments), SearchAPI (Amazon lookup), RapidAPI/Axesso (product/seller data)
- JungleScout (sales estimates + keyword research), Browser Use (automation), OpenRouter (LLM)
- Google Cloud Storage (images), Google Cloud Tasks (job orchestration)

## Key Architecture Notes — scan2-react-app.js
- Single-file IIFE, vanilla React with `h = React.createElement` (no JSX, no build step)
- AGENTS array (line ~74): 6 agents with key, name, icon, accent, subTabs
- Mock data section: MOCK_PRODUCT, MOCK_KEYWORDS, MOCK_DEFENDANTS (8), DEMO_CASE_CONTEXT, LITIGATION_STRATEGIES, DEMO_DOCUMENTS
- CaseAgent constants: CASE_STATUSES, CASE_TYPES, DEFAULT_STEPS (9 litigation steps), CASE_DOC_TEMPLATES (38 docs)
- Shared demo components: AgentDemoIntro, AgentDemoRunning, AgentDemoComplete
- Chat pattern: ChatMsg (role=agent/user), TypingDots, auto-scroll with endRef
- SearchAgent flow: LandingView → ChatFlow (ProductConfirm → Keywords → ScanPicker → scan animation) → ResultsView
- CaseAgent flow: AgentDemoIntro → CaseAgentInteractiveDemo chat (5 interactive steps) → CaseDashboardPreview
- CaseAgentView renders CaseAgentDemo when `!isPro && !forceTab` (line ~6001)
- App root manages view state, agent navigation, paywall, auth modal
- `onAgentNav(agent, subTab)` handles switching between agents

## Memory File Conventions
- Local: `~/CC.MD`
- Repo: `/MEMORY/CC.MD`
- Workflow: fetch remote on rebase, merge additively (append new, never replace), commit with each iteration
- Both files kept in sync

## Progress Log
- [x] QA Playground path-based routing — `/qa/{agent}/{tool}` with pushState, popstate, refresh support
  - SLUG_MAP/KEY_TO_PATH built from slug fields on AGENTS/TOOLS arrays
  - pathToKey/keyToPath/pushRoute/replaceRoute router helpers
  - QAApp initializes activeKey from URL, popstate for back/forward
- [x] QA Capture Screenshots tool — under ReportAgent, calls Browser Use backend (start/status/cancel jobs)
- [x] Path-based routing for /scan2 — `/scan2/<agent>/<tool>` with pushState, popstate, refresh support
- [x] Audit of dashboard SearchAgent backend APIs — full reference documented above
- [x] Amazon URL/ASIN validation — `parseAmazonInput()` util, real-time feedback on input, SCAN button gated on valid ASIN, extracted ASIN passed to ChatFlow via `asin` prop
- [x] Live product lookup — ChatFlow calls `/api/scan/amazon/details?asin=` on mount, ProductConfirm shows real image/brand/price/variants, error fallback to demo flow
- [x] Firebase anonymous auth in scan2 — SDK loaded in scan2.pug, auto sign-in, token passed via `window.__ccGetAuthToken()` → `Authorization: Bearer` header on API calls
- [x] CaseAgent interactive demo — full 5-step journey replacing simple 3-phase demo:
  - Step 0: CaseContextConfirm — editable case details form (client, IP type, reg#, product, jurisdiction)
  - Step 1: DefendantSelector — checkbox list with real-time stats, select all/deselect, status badges
  - Step 2: CaseStrategyPicker — Quick Strike vs Full Discovery cards with features/timelines
  - Step 3: DocGenerationAnim — animated checklist (6 docs) with progress bar
  - Step 4: CaseDashboardPreview — stats strip, 9-step pipeline, blur-locked defendant table & docs, upgrade CTA
  - Uses CaseChatMsg with blue accent (#3B82F6), chat-style UX matching SearchAgent pattern
  - New mock data: DEMO_CASE_CONTEXT, LITIGATION_STRATEGIES, DEMO_DOCUMENTS

- [x] JungleScout keyword lookup — ChatFlow fetches real keywords via `POST /api/scan/junglescout/keywords_by_asin` after product confirmation:
  - Shows "Analyzing keyword data..." loading animation (keyword-lookup message type)
  - Populates Keywords component with real data (keyword text + search volume badges)
  - `fmtVol()` helper formats volumes: 1234→"1.2K", 56789→"56.8K"
  - Keywords component now shows volume badges next to each keyword chip
  - Falls back to MOCK_KEYWORDS silently on API error
  - Backend endpoint: JungleScout `keywords_by_asin_query` API, sorted by -monthly_search_volume_exact, page size 50
  - Production backend: `copycatch-scan` Cloud Run service (NOT `scan-service`)
  - Deploy backend: `cd scan-service && gcloud run deploy copycatch-scan --source . --region=us-central1 --allow-unauthenticated`

## Deployment Notes
- Frontend hosting: Firebase (`copycatch.web.app`)
- Backend API: `copycatch-scan` Cloud Run service (firebase.json rewrites `/api/scan/**` → copycatch-scan)
- `scan-service` Cloud Run is NOT the production service — do not deploy to it
- Backend deploy: `cd scan-service && gcloud run deploy copycatch-scan --source . --region=us-central1 --allow-unauthenticated`

- [x] Persist Quick Scan results to Firestore + refresh + shareable links:
  - Backend: `POST /api/scan/scans` extended with `products` (capped 250), `product`, `scanType` fields
  - Also writes to top-level `shared_scans/{id}` collection for unauthenticated access
  - `GET /api/scan/shared/:id` — public endpoint, no auth, reads from `shared_scans`
  - Frontend: After `mapScanResults()`, fire-and-forget save to `/api/scan/scans`, URL updated to `?scanId=<id>` via `replaceRoute`
  - `buildPath()`, `pushRoute()`, `replaceRoute()` now accept optional `query` object for query params
  - On mount at `/scan2/searchagent/results?scanId=X`, fetches via `/api/scan/shared/:id` (no auth needed)
  - `scanLoading` state shows Radar spinner while restoring scan, prevents mock data flash
  - Shareable: any visitor with the link sees the same results

## Remaining Agent Demos
- [x] ReportAgent interactive demo (completed 2026-02-22)
- [x] ReportAgent "From Case" 5-step wizard (completed 2026-02-22)
- [x] NegotiAgent pro panels: KPI strip, Schedule A (search/sort/filter/settlement timeline), Outreach (groups/templates/progress), Negotiations (2-col thread inbox), cross-agent wiring (completed 2026-02-22)
- [x] ShoppingAgent pro panels: KPI strip, footer summaries on all 4 panels (completed 2026-02-22)
- [ ] NegotiAgent interactive demo
- [ ] PhotoAgent interactive demo
- [ ] ShoppingAgent interactive demo

## SearchAgent Deep Scan — Green Philosophy Case Study (2026-02-22)
- Replaced generic ivy fence mock data with Green Philosophy succulent pillow case study
- **MOCK_PRODUCT**: Succulent® Decorative Pillow, $44.99, real product image (`/images/demo/gp-leaf-product.jpg`)
- **MOCK_KEYWORDS**: 10 succulent/leaf/plant pillow keywords
- **mkProduct()**: 20 plant pillow knockoff titles, 20 sellers (8 from MOCK_DEFENDANTS + 12 new), real product images cycling through DEMO_IMAGES array
- **DEMO_IMAGES**: 7 real photos in `src/assets/images/demo/` — 4 knockoffs + 3 GP originals (knockoffs first so page 1 shows infringers)
- **Price range**: $8.99–$26.99 (knockoffs undercut $44.99 original)
- **Country bias**: ~80% CN via `['CN','CN','CN','CN','CN','US','UK','DE'][i % 8]`
- **DEEP reduced**: 150 → 100 items (10 pages × 10)
- **Scan animation**: Product image carousel (160×160px) with purple scan-line, cycles 3 products every 2.4s with crossfade, "Analyzing: Leaf® Pillow" caption
- **SCAN_IMAGES**: gp-leaf-product.jpg, knockoff-succulent.png, knockoff-poinsettia.jpg

## ReportAgent Demo & Backend — Green Theme (#30A46C)
- **Demo flow**: 5-step chat-based: Evidence Selector → Report Type Picker → Paywall → Evidence Capture Anim → Dashboard Preview
- **Dashboard preview**: ToC (defendant→products tree with ASINs/page numbers), Evidence Preview (product data table with real fields), Screenshot Evidence (listing/seller/checkout), Download Sample Report button, Upgrade CTA
- **Evidence fields** (matching real PDF report): Product Name, Product URL, Product ID (ASIN), Seller ID, Seller Store Name, Seller Business Name, Seller URL, Seller Country
- **MOCK_DEFENDANTS**: 8 fictional defendants with sellerId, businessName, country fields
- **DEMO_REPORT_PRODUCTS**: Fictional ASINs per defendant for ToC display
- **Sample report PDF**: `/docs/sample-report.pdf` — watermarked real output, downloadable from demo dashboard
- **Green theme**: All 30+ purple references in backend replaced with green (#30A46C/#22874F/#6EE7A8)
- **Hero stats strip**: 8 DEFENDANTS | 47 PRODUCTS | $812K DAMAGES | 6 PLATFORMS
- **AGENTS nav order**: Search → Report → Case (matches workflow: find → document → litigate)
- **Components**: ReportChatMsg, ReportEvidenceSelector, ReportTypePicker, ReportAgentPaywall, EvidenceCaptureAnim, ReportDashboardPreview, ReportAgentDemo
- **From Case Flow** (ProView): FromCaseFlow orchestrator + 3 step components (FromCaseStep1-3) + FromCaseStepIndicator
  - Step indicator: completed steps are clickable to navigate back (e.g., click "Select Case" from step 2)
  - Step 1: Case selector (merges MOCK_CASES + localStorage), Step 2: Defendant/product checkbox selector
  - Step 3: Animated evidence capture (~500ms/page) → auto-completes with instant PDF
  - On capture complete: auto-names report from case, creates pre-completed report (status: 'completed', all screenshots populated, PDF ready immediately)
  - Completed reports hide workflow stepper + screenshots grid, show "Download PDF Report" + "Create New Report" buttons
  - `cases` prop threaded: App → ReportAgentView → ReportCreatePanel → FromCaseFlow
  - Create tab resets all state (activeReport, draftProducts, method) via resetKey remount
- **Past Reports tab**: search bar (filters by name) + status filter pills (All/Completed/In Progress/Draft) + result count + "No matching reports" empty state
- **Report Detail modal**: max-w-6xl (widened from 4xl), hides ScreenshotPreview for completed reports (deliverable is PDF)
- **ReportProductList table columns**:
  - Desktop (md+): Product | Seller | Seller ID | ASIN | Platform | Est. Damages
  - Tablet (sm): Product | ASIN | Platform
  - Mobile: Product (with seller name subtitle below title)
  - Match score column removed (not relevant for report/PDF generation)
  - X remove buttons hidden when report is active/completed (onRemove=null)
  - Est. Damages in green, right-aligned, uses `fmtN()` formatter
  - Product title max-width 320px (wider than before)
- **MpLogo**: Added "TikTok Shop" to MP_TEXT_LOGOS for consistent platform display across agents
- **Demo → Pro upgrade flow**: "Upgrade to ReportAgent Pro" button in ReportDashboardPreview now calls the real `onUpgrade` (main paywall) instead of demo paywall. After payment, `setIsPro(true)` transitions to the Pro Create/Past Reports workspace.
- **Hours Saved stat**: Replaced "Screenshots" stat in ReportDashboardPreview and "Platforms" stat on landing preview with "Hours Saved" — formula: `(defendants×20min + products×5min) / 60`. Dashboard: dynamic calc. Landing: hardcoded `6.6h` for 8 defs + 47 products.
- **Streamlined paste/CSV flow**: Source method card stays highlighted after submit. Paste/CSV shows compact ASIN chip summary (monospace chips, up to 20 + "+X more") instead of full product table. Product table only renders for From Case flow. `mkProductFromAsin` strips seller/damages (only ASIN provided). Clear resets both products and method. `ScanSelectionSummary` takes `source` prop ('case'|'other') for different layouts.
- **Conditional Est. Damages**: Column + "Total Est. Damages" header hidden when no product has `estDamages > 0` (e.g. paste/CSV flow). Only shows for From Case products with real data.
- **Completed report summary**: On report completion, `enrichProduct()` fills in seller/damages data for paste/CSV products (simulates agent enrichment). Completed view shows: stats strip (Products, Screenshots, Est. Damages, Hours Saved) + full enriched product table as "Report Summary" — demonstrates agent's work from raw ASINs to enriched evidence.
- **Unified progress view**: Replaced 3-step ReportWorkflow stepper + ScreenshotPreview grid + manual "Generate Report" button with `ReportProgressView` — matches `EnrichProgressOverlay` layout structure (rounded-2xl card, `var(--cc-surface)` bg, `var(--cc-surface-2)` info notice with ℹ️ emoji, 8px progress track) but uses Report Agent green: bar `#22874F→#30A46C`, icon bg `rgba(48,164,108,0.1)`, icon stroke `#6EE7A8`, percentage `#30A46C`. Auto-generates report when screenshots complete (500ms delay useEffect). Progress: screenshots 0-70%, generation 70-100%. Old components kept for backward compatibility. X close button with `reportCancelRef` stops running simulations cleanly.
- **Completed view layout**: Stats boxes (Products, Pages, Est. Damages, Hours Saved) on top → enriched product table → Download PDF + Create New Report buttons at bottom. "Pages" stat replaces "Screenshots" — formula: `2 + products×3 + 1` (cover + ToC + 3 evidence pages/product + summary).
- **KPI stat cards**: 3-column grid above sub-nav in `ReportAgentView`, matching CaseAgent pattern. Reports (green, counts ALL reports not just completed), Total Products (green), Hours Saved (purple #A78BFA). Aggregated via `useMemo`. Hours formula: `products × 20min / 60`. Est. Damages removed — 3 KPIs + 3 method cards gives clean visual symmetry.
- **AddToCaseModal confirmation overlay**: After clicking "Create New Case" or selecting an existing case, shows animated green check confirmation ("Case Created" / "Defendants Added") with case/defendant count label, then auto-fires the real action after 1.2s delay. Stays on SearchAgent (no navigation to CaseAgent) — case is saved silently in the background.
- **AddToCaseModal `subtitle` prop**: Optional string replaces default "X defendants · $Y damages" summary. Used by HistoryView to show scan title + result count instead.
- **HistoryView Add to Case**: Now opens AddToCaseModal (create new or pick existing) instead of silently creating an empty case. `openAddToCase(scan, e)` stores scan in state, handlers `handleCreateNewFromScan`/`handleAddToExistingFromScan` link scan via `scanId`.

## SearchAgent Brand Tiles View (2026-02-22)
- **Brand-grouped tiles** replace flat product grid as default view (`vm = 'tiles'`)
- View toggle: Tiles | Table (was Grid | Table)
- `BrandTileCard`: 4-col thumbnail grid, brand name, ASIN count, damages/revenue, checked badge, Schedule A toggle, Exclude button
- `BrandSortBar`: sort pills (Damages / 30d Sales / Checked / # Products / A-Z), excluded brands last
- `BrandDrillHeader`: back button + brand name + Select All / Clear controls
- Click brand card → drill into DataTable filtered to that brand's products
- `checkedAsins` (object) — shared selection state, persisted to localStorage, passed to DataTable as external selection
- `excludedBrands` (Set) — dimmed at bottom (opacity 0.45), persisted to localStorage
- DataTable accepts optional `checkedAsins`, `onToggleChecked`, `onToggleAll`, `onClearChecked` props for external selection
- Schedule A tab shows brand tiles filtered to Schedule A brands only
- Schedule A CSV export prefers checked ASINs, falls back to all
- Saved Lists now include `excludedBrands`, `checkedAsins`, `brandSort`, `vm`
- Tab switch and view toggle clear `drillBrand`
- **Add to Case from Schedule A**: Blue "Add to Case" button in ResultsView header (visible on Schedule A tab when brands exist). `AddToCaseModal` component: briefcase icon header, defendant/damage summary, "Create New Case" card (builds full case object with defendants, navigates to CaseAgent), "Add to Existing Case" card (searchable case picker with search input, status filter pills, scrollable case list — click a case to add defendants immediately). `brandsToDefendants()` helper converts brand groups to defendant objects. Props threaded: `cases`, `onSendToCase`, `onUpdateCases` from App → ResultsView.
- **Fuzzy search**: Replaced "Add ASIN" input with search bar that filters brands/products by brand name, product title, ASIN, and marketplace. `searchQuery` state filters both `sortedBrandKeys` (tiles) and `filtered` products (table). Resets page to 1 on input.
- **Save List modal**: Replaced native browser `prompt()` with inline dark-themed modal (`saveListModal`/`saveListName` state). Styled with backdrop blur, text input, Cancel/Save buttons, Enter/Escape key support.
- **Super Enrich "Only" buttons**: Seller Profiles, Sales Estimates, and Visual Match tiles have an "Only" shortcut that deselects all other layers, enabling one-click single-layer enrichment. `selectOnly(key)` helper sets only the target key to enabled.
- **Super Enrich minimal progress overlay**: Simplified from detailed per-ASIN tracking to clean minimal UI — "Enriching N products" title, friendly layer label (LAYER_LABELS map), purple gradient progress bar with %, estimated time remaining (shown after 3 items processed), "Feel free to close" info box, Cancel button. Removed: per-ASIN tracking, log tail, processed/total counter, failed count inline, step X/Y header. `runSuperEnrich` passes `startTime` in progress object for ETA computation.
- **Super Enrich demo mode**: `runSuperEnrich` always uses demo simulation (~150-250ms/item) unless `window.__ccEnrichLive = true` is set. Simulates progress across all enabled layers (total = products × layers). Set the flag in console to bypass demo and use real API calls when backend is ready.
- **Fix**: `props.asinCount` → `props.productCount` in SuperEnrichConfigModal (was showing "undefined ASINs").
- **Variant Harvest progress overlay**: Replaced `VariantReviewModal` (checkbox selection + "Add to Results") with `VariantProgressOverlay` — same minimal style as Super Enrich overlay: progress bar, time estimate, "X variants discovered" live count, auto-ingest on completion (no review step). Demo mode simulates ~200ms/ASIN with ~30% variant discovery rate. `harvestVariants()` now accepts `cancelRef` and reports `{ processed, total, found, startTime }` via onProgress.

## Story Page — /story (Investor Pitch)
- **Route**: `/story` — self-contained page, NOT modifying homepage
- **Architecture**: Self-contained Pug page (like index.pug, NOT extending layout.pug)
- **Theme**: Dark void theme matching current homepage (Manrope, void black, glass morphism, GSAP)
- **Purpose**: Apple-esque cinematic investor story page for ~5 min live presentation
- **Files**: `src/pages/story.pug`, `src/assets/js/narrative.js`, `src/assets/js/cinema-transition.js`, CSS inline in story.pug
- **Build**: Added to `templates:core` in package.json
- **Firebase**: `cleanUrls: true` handles `/story.html` → `/story` automatically
- **Narrative (v3)**: 20 sections — Cinema Hero → Dream → COVID Comfort → Rise → Betrayal headline → Betrayal evidence → Depression → Not Alone → DMCA Fails → The Calls → The Lawyer (Nick) → The Builder (Frank) → The Operator (Alan) → Victory → Platform → Opportunity → Proof → Mission → CTA → FAQ
- [x] Scaffold: story.pug + narrative.js + package.json build update (2cf47fc)
- [x] v2 visual-first redesign with placeholder images (1556710) — live at copycatch.ai/story
- [x] v3 cinema container hero + 20-section narrative rebuild (cc4047e)

## Story Page v3 — Cinema Transition + Corrected Narrative (COMPLETED)
- **Cinema Container**: `#cinema-container` hero with video/poster fallback, GSAP morph timeline
- **CinemaTransition class** (`cinema-transition.js`): placeholder mode, video mode, timed captions, skip button, scroll trigger, iframe preload
- **Morph Timeline**: video/poster → dashboard screenshot → live scan2 iframe (via `?embedded=1`)
- **Mobile**: CTA overlay instead of iframe embed
- **13 Gemini Frame Placeholders**: Each `.img-placeholder` labeled with Gemini frame description (1A-3D)
- **Corrected Story**: Marriage as ORIGIN (not resolution), COVID comfort, depression, DMCA failure, 15 law firms, team credentials
- **Team Portraits**: Full cinematic sections for Nick (3A), Frank (3B), Alan (3C) with credential badges

## Story Page v2 — Visual-First Redesign (SUPERSEDED by v3)
- Cut ~70% body copy, added labeled placeholder image boxes (`.img-placeholder` CSS class in `tailwind.css`)
- Placeholder images have descriptive labels for layout planning (e.g., "Lifestyle photo: succulent pillow on cozy bed")
- Each section: big cinematic text callout → placeholder image → minimal supporting text
- `.img-placeholder` class: dashed border, diagonal stripe overlay, centered label, aspect ratio helpers

## The Founder Story — Green Philosophy Case Study (CANONICAL REFERENCE)
This is the true story used on the /story page and in all pitch materials.

### The Founder
- **Name**: Lillian Lau
- **Company**: Green Philosophy Co.
- **Product**: Succulent pillows — decorative pillows shaped like succulents ("plants that don't die")
- **Category**: Created a category that didn't exist before her

### The Rise
- Went viral on TikTok: **10M+ views**
- Revenue: **High 7-figures annually**
- Social impact: **300K+ trees planted** (part of brand mission)
- Category creator — succulent pillows didn't exist before Green Philosophy

### The Betrayal
- **Hundreds of copycats** appeared across Amazon, Temu, AliExpress
- Stolen product photos, descriptions, even the tree-planting marketing copy
- **Sales dropped 40-50%**
- Customers blamed Lillian for knockoff quality (they thought fakes were hers)
- DMCA takedown notices were **ignored by platforms**

### The Broken System
- Called **15 law firms** — nobody would take the case
- Too many defendants (hundreds across countries)
- Each individual infringer = "de minimis" damages (too small for law firms)
- Platforms profit from counterfeits, no incentive to enforce
- Traditional IP enforcement is broken for small/mid brands

### The Discovery — Schedule A Litigation
- **Schedule A litigation**: legal mechanism that allows suing hundreds of unnamed defendants in a single federal case
- **Federal Temporary Restraining Orders (TROs)**: courts order platforms to freeze seller funds
- Platforms **cannot ignore federal court orders** (unlike DMCA)
- Fund freezing = immediate financial pressure on infringers
- Contingency-based = no upfront legal costs for brand owners

### The Results (Green Philosophy Case)
- **$50K recovered** in first round of settlements
- **100+ copycats removed** from marketplaces
- **90% sales increase** after enforcement
- **10x ROI** on enforcement costs
- Lillian testimonial: "CopyCatch recovered more money than I expected while taking all the work off my plate. I saw an immediate and consistent boost in sales."

### Additional Case Traction
- Dickinson Wright / Intake Breathing: $300K collected, 10x+ ROI
- Current pipeline: 5 active cases, $3M+ total value

## CopyCatch Platform — 6 AI Agents
1. **SearchAgent™** (#623CEA purple) — Find copycats across 75+ marketplaces
2. **CaseAgent™** (#3B82F6 blue) — Manage cases, documents, timelines
3. **ReportAgent™** (#30A46C green) — Court-ready evidence reports
4. **NegotiAgent™** (#F5A623 gold) — Settlement negotiation & collection
5. **PhotoAgent™** (#E5484D red) — Sample photography & evidence tagging
6. **ShoppingAgent™** (#06B6D4 cyan) — Automated sample procurement
- Reduces case prep cost and time by up to **95%**

## Cross-Agent Design Playbook (Apply to Negoti, Photo, Shopping)

This section captures every design pattern and architectural decision established across SearchAgent, ReportAgent, and CaseAgent. When building the remaining three agents, follow this playbook exactly to maintain cohesion.

### 1. Agent Color System — Every Agent Owns Its Color Universe
Each agent "owns" its accent color. All UI within that agent uses its accent — never borrow another agent's color.

| Agent | Accent | Darker | Light BG (10-18%) | Gradient |
|-------|--------|--------|-------------------|----------|
| Search | `#623CEA` | `#5632D1` | `#623CEA18` | `#623CEA → #623CEADD` |
| Report | `#30A46C` | `#22874F` | `rgba(48,164,108,0.1)` | `#22874F → #30A46C` |
| Case | `#3B82F6` | `#2563EB` | `#3B82F618` | `#3B82F6 → #3B82F6DD` |
| Negoti | `#F5A623` | `#D4900C` | `#F5A62318` | `#D4900C → #F5A623` |
| Photo | `#E5484D` | `#C63B40` | `#E5484D18` | `#C63B40 → #E5484D` |
| Shopping | `#06B6D4` | `#0891B2` | `#06B6D418` | `#0891B2 → #06B6D4` |

Usage: icon bg `accent + '15'`, progress bar gradient `darker → accent`, active tab `accent + '20'`, badges, CTA buttons.
Exception: Cross-agent accent colors for variety in KPI cards — `#F5A623` gold for money stats, `#A78BFA` purple for time/efficiency stats, regardless of which agent you're in.

### 2. Agent View Structure — 4-Layer Architecture
Every Pro agent view follows this exact top-to-bottom structure:

```
┌─ Title Row: icon (w-10 h-10 rounded-xl, accent bg) + "AgentName™" + subtitle
├─ KPI Strip: grid of 3-4 stat cards (grid-cols-2 sm:grid-cols-3 or 4)
├─ Sub-Nav: pill tabs in rounded-lg bar (accent bg when active)
└─ Panel Content: tab-specific component
```

**KPI Card** (identical pattern across all agents):
- Card: `px-5 py-4 rounded-xl border transition-all hover:-translate-y-0.5 hover:shadow-md`, `var(--cc-surface)` bg
- Icon: `w-9 h-9 rounded-lg` with `accent + '15'` bg
- Label: `text-[11px] uppercase tracking-wider font-semibold`, `var(--cc-text-subtle)`, `var(--cc-font-display)`
- Value: `text-lg font-bold leading-tight`, colored by accent
- Grid: `grid-cols-2 sm:grid-cols-3 gap-3 mb-6` (3 cards) or `sm:grid-cols-4` (4 cards)

**Sub-Nav** (identical pattern):
- Container: `flex gap-1 mb-6 rounded-lg p-1 overflow-x-auto`, `var(--cc-surface)` bg
- Tab: `flex items-center gap-1.5 px-4 py-2 rounded-md text-xs font-medium transition-all flex-shrink-0`
- Active: `accent + '20'` bg, accent text. Inactive: transparent, `var(--cc-text-muted)`

### 3. Demo Flow — 3-Phase Pattern
Every agent demo follows: **Intro → Running → Complete**

**Phase 1: AgentDemoIntro** (shared component, `previewWide: true` for dramatic previews)
- Badge + bold headline (accent-colored keyword) + subtitle
- Hero preview card — an animated miniature dashboard mockup showing what the Pro tool looks like. NOT a flat boring card — must be visually impressive (CaseAgent has animated pipeline + defendant table + stats)
- CTA: "Try a Demo — Free" with accent gradient
- 4-column feature grid

**Phase 2: Running** — progress steps + live status messages + item-by-item reveal
**Phase 3: Complete** — blur-locked Pro dashboard preview + stats strip + "Upgrade to [Agent] Pro" CTA → calls real `onUpgrade` (main paywall), NOT a separate demo paywall

### 4. Progress Overlay — Unified Pattern
For any long-running operation (enrichment, generation, capture, analysis, outreach, ordering):

- Card: `rounded-2xl border p-6`, `var(--cc-surface)` bg, `var(--cc-border)` border
- Header: icon (w-10 h-10 rounded-lg, accent tint bg) + title + X close button (w-8 h-8)
- Description: `text-xs`, `var(--cc-text-muted)`
- Progress bar: **8px height**, `var(--cc-surface-2)` track, agent accent gradient fill, `rounded-full`
- Percentage: `text-xs font-bold tabular-nums`, accent color, right-aligned, min-width 36px
- Info notice: `var(--cc-surface-2)` bg, `rounded-lg p-3`, ℹ️ + "Feel free to close — you'll be notified when it's done."
- **Cancel pattern**: `useRef({ current: false })`, checked on each tick, set `true` on X close. Pass `cancelRef` to simulation functions.

### 5. Completed/Results View Layout
When an agent finishes work:

1. **Stats strip** (top): 3-4 stat boxes in a row
2. **Data table** (middle): Enriched summary table
3. **Action buttons** (bottom): Download/Export + "Create New [X]"

Stats use KPI card pattern. Money values right-aligned in gold. Time values in purple.

### 6. Cross-Agent Workflow Connections
Agents feed into each other — this is a core design decision:

**Established connections**:
- SearchAgent → CaseAgent: "Add to Case" button on Schedule A → `AddToCaseModal` → confirmation overlay → stays on SearchAgent (silent save)
- SearchAgent → ReportAgent: Products flow via paste ASINs or "From Case"
- CaseAgent → ReportAgent: "From Case" flow → select case/defendants → auto-capture → instant PDF

**Future connections (for remaining agents)**:
- CaseAgent → NegotiAgent: Case defendants feed into negotiation pipeline (Schedule A import)
- NegotiAgent → CaseAgent: Settlement outcomes update case status
- SearchAgent → ShoppingAgent: Identified copycats trigger sample purchases
- ShoppingAgent → PhotoAgent: Received samples need evidence photography
- PhotoAgent → ReportAgent: Photos become evidence in court reports

### 7. Confirmation, Toast & Modal Patterns
- **Confirmation overlay**: `fixed inset-0 z-[115]`, `rgba(0,0,0,0.7)` + `backdrop-filter: blur(8px)`, centered card, animated check circle (agent-colored), action label, auto-fires after 1.2s
- **Toast**: `Toast` component, message + type (success/error), auto-dismiss 2.5s
- **Delete confirmation**: Modal "Delete this [X]?" + red button + Cancel
- **Modals**: `z-[100]` for standard, `z-[115]` for confirmation overlays on top of modals

### 8. Shared CSS Variables (Dark Theme)
```
--cc-surface      (card/panel bg)
--cc-surface-2    (inset bg — info notices, progress tracks)
--cc-text         (primary text)
--cc-text-muted   (secondary text)
--cc-text-subtle  (tertiary — labels, timestamps)
--cc-border       (default borders)
--cc-font-display (Sentient — headings, KPI labels)
```

### 9. Tailwind Purge Safety
**CRITICAL**: Tailwind purges unused classes at build time. Before adding a new utility class in `scan2-react-app.js`, check `public/css/tailwind/tailwind.min.css`. If not present, use inline `style={}` instead. This caused a production bug (adding `pr-2` made entire sections vanish).

### 10. Remaining Agent Implementation Checklist

**NegotiAgent** (#F5A623 gold):
- [x] Add KPI strip to `NegotiAgentView`: Total Defendants, Total Recovered, Response Rate, Pending Follow-ups
- [x] Schedule A panel: search input, sortable columns, settlement history timeline in expanded rows, follow-up due badges, red accent on overdue rows, footer summary
- [x] Outreach panel: New Group button, 2-col email group grid, mass serve progress overlay, footer summary
- [x] Negotiations panel: 2-column thread inbox (40/60 split) — thread list left, selected thread detail right with settlement tracker + email chain + follow-up/default warnings
- [x] Progress overlay for Import Schedule A and Mass Serve operations (gold gradient, cancel ref, auto-complete)
- [x] Cross-agent: "Send to NegotiAgent" button on CaseAgent DefendantRoster rows
- [ ] Redesign `AgentDemoIntro` preview — animated settlement pipeline/negotiation dashboard mockup
- [ ] Completed view: settlement summary table + export

**PhotoAgent** (#E5484D red):
- [ ] Redesign `AgentDemoIntro` preview — animated photo capture/tagging dashboard mockup
- [ ] Add KPI strip to `PhotoAgentView`: Photos Captured, Evidence Sets, AI Confidence Avg, Cases Covered
- [ ] Add progress overlay for batch AI analysis operations
- [ ] Wire cross-agent: receive samples from ShoppingAgent, export to ReportAgent
- [ ] Completed view: photo grid with AI analysis overlays + export

**ShoppingAgent** (#06B6D4 cyan):
- [x] Add KPI strip to `ShoppingAgentView`: Active Orders, Samples Received, Total Spend, Avg Delivery
- [x] Footer summaries on all 4 panels (Orders, Addresses, Warehouse, Receipts)
- [ ] Redesign `AgentDemoIntro` preview — animated order tracking/logistics dashboard mockup
- [ ] Add progress overlay for order placement operations
- [ ] Wire cross-agent: import targets from SearchAgent results, hand off to PhotoAgent
- [ ] Completed view: order status table + tracking + receipt export

## Market Opportunity (Investor Numbers)
- **$600B** lost annually to IP infringement globally
- **100M+** active intellectual properties, <0.01% monetized through enforcement
- **50%+** of Amazon sellers are China-based
- SaaS: $249/mo or $1K/yr → 100K IPs at $1K/yr = **$100M ARR path**
- Case prep services: $5K–$100K+/case → 100K IPs at $10K avg = **$1B ARR path**
- Combined: **$1.1B+ potential** at <0.1% market capture

## Team
- **Nicholas Lee** — CEO & Chief Legal Counsel, Chicago Super Lawyer, 20+ yrs IP litigation
- **Frank Albanese** — CTO, YC W'21 alum, 500K users, $1.4M ARR
- **Alan Li** — Chief Growth Officer, early Lyft Growth, DTC brand acquired

## Video Generation — Kling 3.0 Multi-shot Auto Workflow
- **Tool**: Kling 3.0 Multi-shot Auto mode with Start/End frame pairs
- **Settings**: 16:9, 720p, ~5s per shot, ~9 credits per shot
- **Workflow**: Generate 13 Gemini images → pair as start/end frames → paste motion prompts
- **Frame pairs**: 1A→1B, 1B→1C, 1C→1D, 1D→2A, 2A→2B, 2B→2C, 2C→2D, 2D→2E, 2E→3A, 3A→3B, 3B→3C, 3C→3D, 3D (final)
- **Color arc**: Warm gold (Act I) → Cold blue (Act II) → Purple/gold hope (Act III)
- **Total**: ~65s raw (13×5s), trim to 45-60s in post
- **Credits**: ~117 credits (13×9)

## Video Production Workflow — Dialogue/Conversation Version (from Video Guy)
- **Image Gen Tool**: Hicks Field AI → Nana Banana image generation model (better than Google's native — has 2K/4K options)
- **Image Setting**: 2K resolution via Nana Banana on Hicks Field
- **Step 1 — Create the Actor**: Prompt engineer in Nana Banana until you get a good actor likeness. Iterate until you find a consistent character look. This image becomes the FIRST FRAME of the video clip.
- **Step 2 — Animate in Kling**: Take the Nana Banana image into Kling (also on Hicks Field). Use "Starting Frame" mode — it shows all images generated with Nana Banana. Select the actor image as start frame.
- **Step 3 — Write the Dialogue Prompt**: In Kling, write a motion prompt like "UGC actor talking into the camera, gesturing with their hands, saying: [SCRIPT LINE]". The script line must naturally be ~10 seconds long for correct pacing.
- **Step 4 — Download & Edit**: Download the Kling output clip → bring into CapCut or similar editing software for assembly, cuts, final polish.
- **Caveat**: AI lip-sync isn't perfect — sometimes says wrong words. Getting better rapidly but not a slam dunk every time. May need multiple generations per clip.
- **Key Constraint for Script Writing**: Each dialogue line must be naturally ~10 seconds when spoken aloud. This is critical for Kling clip pacing.
- **Conversation Script**: `context/short-film-script-conversation.md` — acted-dialogue version, Alan + Lillian portray themselves in natural conversation, camera observes. 12 dialogue clips + 4 visual clips = 16 total. Equal 6/6 line split between characters. Includes Nana Banana character reference prompts, Kling dialogue prompts for every line, timing check table, generation order guide, and CapCut assembly notes.

## Video Script — 30-Second Investor Pitch (3 Scenes × ~8 sec)

### Scene 1 — "The Creation"
**Gemini/Seedance prompt**: Cinematic close-up of a woman's hands gently placing a green succulent-shaped decorative pillow on a white linen bed. Warm golden morning light streams through a window. Cozy bedroom filled with houseplants. Shallow depth of field. Slow, intimate camera movement. 4K film quality with subtle grain. 8 seconds.
**Text overlay**: "She spent a year creating something new."
**Subtext**: "This is a true story."

### Scene 2 — "The Betrayal"
**Gemini/Seedance prompt**: Dark dramatic mood shift. A phone screen fills with an endless scrolling grid of counterfeit product listings — dozens of knockoff items with stolen photos appearing one after another. Colors desaturate to cold blue-gray with red warning tint creeping in from edges. Ominous, overwhelming feeling. Cinematic, 4K. 8 seconds.
**Text overlay**: "Then hundreds of copycats stole everything."
**Subtext**: "Sales dropped 50%. Fifteen law firms said no."

### Scene 3 — "The Weapon"
**Gemini/Seedance prompt**: Sleek futuristic software dashboard materializing from darkness. Dark black interface with glowing purple accent lines. Scan results populating in real-time — product images, seller data, evidence reports generating. Confident, powerful camera pull-back revealing the full platform. Premium tech aesthetic, subtle lens flare. 8 seconds.
**Text overlay**: "So we built the weapon they needed."
**Subtext**: "CopyCatch.AI — AI-powered IP enforcement."

### Video Emotional Arc
Beauty (creation) → Destruction (betrayal) → Power (the weapon)

### Alternative 30-sec Script Versions (for reference)
- **Version A "Origin Story"**: Emotional, founder-focused, best for live narrated pitch
- **Version B "Problem Is Massive"**: Data-driven, investor-brain, best standalone
- **Version C "One Stat, One Story"**: Apple-esque minimalist typography, most shareable

## CopyCatch Short Film — "The Fight" (Full Production Script)
- **File**: `context/short-film-script.md`
- **Format**: ~2 min short film (NOT the 30-sec investor pitch, NOT the silent film)
- **Narrator**: Alan Li, first-person voiceover, conversational
- **3 Arcs**: The Dream (~40s) → The Betrayal (~40s) → The Fight (~40s)
- **10 scenes total** (compressed from 18), 20 Gemini key frame images (start + end per scene), 10 Kling clips
- **Director's Reference Guide**: film/music/camera references per arc, color grading LUT suggestions, editing rhythm, AI tool recommendations, shot list quick reference
- **Compression strategy**: merged related scenes (date+leap, R&D+viral, copycats+flood, sales+confusion+depression, rejections+nick, team+platform, results+mission), kept "Almost Quit" as standalone hinge moment
- **Original 18-scene version preserved in git history** (commit `e6b46ee`) for extended cut option
- **Color arc**: Warm gold → Cold blue-gray → CopyCatch purple/gold
- **Music arc**: Intimate piano → Tension strings → Heroic/triumphant
- **Story**: Alan's perspective — relationship origin, Lillian quitting job, R&D+viral, COVID comfort → copycats flood, sales drop + emotional devastation, almost shutting down → law firm rejections, finding Nick, team + platform reveal, results + scale → CTA into product demo
- **Key emotional beats**: Marriage as origin (not just business), trust/vulnerability of the "quit your job" moment, the warm-to-cold color shift within Scene 4, the "close store" silence (Scene 6 = emotional hinge), Nick discovery, CopyCatch purple doesn't appear until Scene 8 (must feel earned)
- **Voiceover script**: ~55 seconds of VO over ~120 seconds of visuals (gaps are intentional — let images + music breathe)
- **Production handoff**: 20 Gemini image prompts, 10 Kling motion prompts, music cue sheet, text overlay schedule, color temperature guide

### Short Film Production Steps
- [ ] Generate 36 Gemini key frame images (start + end for all 18 scenes)
- [ ] Pair frames in Kling 3.0 Multi-shot Auto with motion prompts
- [ ] Record Alan voiceover (full script in `context/short-film-script.md`)
- [ ] License/commission music score following cue sheet
- [ ] Color grade across arcs (warm→cold→purple)
- [ ] Add text overlays (clean sans-serif, fade in/out)
- [ ] Trim/edit final cut (target 3:30-4:30)
- [ ] Final scene transition into live product demo

## CaseAgent UI Overhaul (2026-02-22)
- Removed priority badges and metadata row (Trademark/jurisdiction/TBD) from case cards — much shorter cards
- Case number moved to right side of Next Step row, now inline-editable (click to edit, for court case ID matching)
- Gen Docs + Generate Draft buttons changed from purple to CaseAgent blue gradient
- Inline case name editing via pencil icon on cards and detail modal (Enter saves, Escape cancels)
- Gen Docs button now wires end-to-end: click → Documents workspace → auto-selects case → navigates to next un-filed step → auto-generates first doc draft
- Doc count badges (completed/total) on step bar per step
- Upload Document button in document sidebar for steps 2+
- Replaced native case `<select>` with searchable dropdown picker (search input, filtered list, status dots, click outside to close)
- Removed "Damages by Case" card from CaseStatsPanel — stats section now only KPIs + Pipeline Progress (more compact)
- Added grid/table view toggle in CaseFilters (next to sort pills), matching SearchAgent view toggle pattern
- Default sort changed from "Recent" to "Damages" for immediate prioritization
- New `CaseTableView` component: 8-column table (Case Name, Case #, Status, Defs, Est. Damages, Progress, Next Step, Actions)
  - Inline editing for case name (pencil icon) and case number (click blue text) using single editId/editField/editVal state triplet
  - Row click opens CaseDetailModal, hover highlights row
  - Docs + View action buttons per row (matching light pill style)
  - Horizontal scroll on narrow viewports (minWidth 860px)
- Next Step shows step number prefix (e.g., "1. Case Setup", "3. Seal Motion") in both table and card views
- Added "Step" sort option — sorts cases by furthest-progressed step (highest step number first)
- "Docs" button label in both card and table views (consistent naming)
- Clickable sortable table headers: all columns (except Actions) have sortKey, chevron indicator on active column, blue highlight, hover effect on inactive
- Sort keys expanded: name (A→Z), caseNumber (alpha), status (alpha), defs (desc count), progress (desc %), damages/step/recent (existing)
- **Ascending/descending toggle**: click active header or pill again to flip direction. Chevron rotates 180° for asc. `sortDir` state + `SORT_DEFAULTS` map (desc for numeric/step/recent, asc for text). `handleSort(key)` toggles dir on same key, resets to default on new key. Sort pills also show direction chevron.
- Sort pills stay in sync with header clicks (shared `sortBy`/`sortDir` state)
- Saved Views feature: bookmark button between sort pills and grid/table toggle, dropdown with "Save current view" + list of saved views with X delete
- Saved view stores: statusFilter, sortBy, viewMode, search — persisted to localStorage (`cc_caseAgent_savedViews`)
- Save modal matches SearchAgent pattern (dark modal, backdrop blur, text input, Enter/Escape)
- Pencil icon in CaseCard: fixed alignment from items-center → items-start + marginTop:2 (aligns with first line of 2-line names)
- **Download button**: exports current document as `.md` file (Blob + createObjectURL), between Lock and Generate Draft, hidden on Step 1
- **Formatting toolbar**: Bold/Italic/Underline/Bullet List/Numbered List buttons with markdown insertion + cursor restore via `editorRef`. Visible on steps 2+, disabled when locked.
- **Case Setup intake form (Step 1)**: `CaseSetupForm` component replaces textarea on Step 1. 3 card sections: Client Info (entity, contact, counsel), IP Portfolio (claim type pills, type-specific registration cards), Case Strategy (brand narrative, infringement context, court/damages). Auto-saves every 30s. Sidebar docs scroll to form sections. Toolbar shows "Case Setup — Intake Form" + COMPLETED badge + "Continue >" button.
- **AI Auto-Fill (Case Setup)**: Upload file or SideKiq chat → `simulateExtractFromFile()`/`simulateExtractFromChat()` → `autoFillData` prop → CaseSetupForm useEffect populates all 28 fields. Auto-Fill banner at top of form. SideKiq enters "Intake Mode" on Step 1 with progressive chat responses + "Auto-Fill Form from Conversation" button. Left sidebar "Upload Case File" button with parsing overlay.
- **Context-aware document generation**: `generateDocContent()` now produces full legal documents (complaint, TRO motion, proposed order, etc.) interpolated with case context (attorney, court, plaintiff, registrations, defendants, claims, damages). All 38 document templates use real data — no more `[PLACEHOLDER]` text.
- **"Gen Docs" → "Docs"**: Card view button renamed to "Docs" for consistency with table view.
- **Toast centering**: "Draft generated" toast uses absolute positioning within center editor column (not fixed viewport), stays centered relative to document area even with SideKiq open.

## Next Steps (Story Page)
- [ ] Generate 13 Gemini key frame images (1A through 3D)
- [ ] Upload frame pairs to Kling 3.0 Multi-shot Auto with motion prompts
- [ ] Trim/edit final trailer video (target 45-60s)
- [ ] Add `?embedded=1` detection to scan2-react-app.js (5 lines — Session 3)
- [ ] Test iframe integration + postMessage handoff (Session 3)
- [ ] Replace placeholder images in story.pug with actual Gemini images (Session 4)
- [ ] Deploy and test full morph experience end-to-end

## Session: 2026-06-25 — Raveyard Creative Strategy Reset
- Organized June 25 Raveyard creative-reset evidence into the repo: Meta headline/primary-text exports under `02_Meta-Ads-Data/2026-06-25_creative-strategy-reset/`, updated reviews and survey under `04_Customer-Data/2026-06-25_creative-strategy-reset/`.
- Added strategy evidence inventory at `06_Analysis/Strategy/RAVEYARD_Creative-Strategy_Evidence-Inventory_2026-06-25.md` and linked it from the reset doc.
- Key strategy context: Everything Bundle beginner-friendly positioning has worked because of the included 3-hour start-to-finish techno masterclass; beginner segmentation should split true beginners from equipped beginners; intermediate segmentation should split loop-makers from track-builders; upcoming work should account for Diablo 3 and the completed Schranz Hard Techno masterclass.
- Git: committed locally on main (`2694811 Organize Raveyard creative reset evidence`) after prior reset-doc commit (`6382e00 Add Raveyard creative strategy reset`); rebase against origin/main is clean. A bad iCloud duplicate ref `.git/refs/heads/main 2` was moved to `.git/bad-refs-backup/main 2.2026-06-25`.
- Added simple Raveyard creative portfolio tracker at `07_Deliverables/RAVEYARD_Creative-Portfolio-Tracker_2026-06-25.xlsx`: 78 concepts across 10 lanes, with priority, persona, problem, promise, proof, format, offer, hook, source signal, production notes, status, and result/learning columns. Committed locally as `a7bbcad Add creative portfolio tracker`.

## Session: 2026-06-26

- Created a greenfield native SwiftUI iOS app in `/Users/alan/Documents/Meal Prep Ideas vegetarian App`.
- App scope: vegetarian meal prep ideas, favorites, weekday planning, and a grocery checklist generated from planned meals.
- Project files: `MealPrepIdeas.xcodeproj`, shared `MealPrepIdeas` scheme, SwiftUI app entry point, `TabView` shell, local `ObservableObject` `MealPrepStore`, sample vegetarian meal fixtures, and feature views for Ideas, Plan, Groceries, and Saved.
- Implementation detail: switched from macro-based Observation/`#Preview` to `ObservableObject`/`PreviewProvider` to avoid Swift macro plugin failures under the workspace sandbox.
- Validation: `plutil -lint MealPrepIdeas.xcodeproj/project.pbxproj` passes; `xmllint --noout MealPrepIdeas.xcodeproj/xcshareddata/xcschemes/MealPrepIdeas.xcscheme` passes; `xcodebuild -project MealPrepIdeas.xcodeproj -scheme MealPrepIdeas -destination 'generic/platform=iOS Simulator' -derivedDataPath /private/tmp/MealPrepIdeasDerivedData build` succeeds with Xcode 26.5.
- Deployment: installed and launched `com.local.MealPrepIdeas` on the booted iPhone 17 Pro iOS 26.5 simulator; screenshot verified at `/private/tmp/MealPrepIdeas-screenshot-v2.png`.

## Session: 2026-06-26 Verdant Phase 1
- Project: `/Users/alan/Documents/Meal Prep Ideas vegetarian App`.
- Rebuilt the native SwiftUI app foundation as Verdant while preserving the internal `MealPrepIdeas` target; user-facing display name is `Verdant`, bundle id `com.local.Verdant`.
- Added SwiftData models for nutrition goals, recipes, recipe ingredients, weekly plan entries, pantry items, and grocery check state.
- Implemented deterministic vegetarian weekly planning from calorie/protein/carb/fat targets with complete-protein rules for soy, dairy/egg, and grain plus legume pairings.
- Implemented aisle-grouped grocery aggregation with serving scaling and pantry matching. Pantry matches stay visible with an explicit include/full-buy toggle instead of being silently removed.
- Added Home, Plan, Groceries, and Recipes tabs using the Stitch modern organic editorial direction and local SwiftUI recipe artwork.
- Seed content is vegetarian-only; no fish, meat, or pescatarian examples are included.
- Added XCTest coverage for meal planning, complete-protein logic, grocery aggregation, pantry subtraction, include-pantry override, and unavailable pantry behavior.
- Validation: project plist and shared scheme lint pass; fresh simulator build succeeds via `xcodebuild -project MealPrepIdeas.xcodeproj -scheme MealPrepIdeas -destination 'id=E919509A-9EB8-4F8F-B596-4A238AA2A6A6' -derivedDataPath /private/tmp/VerdantDerivedData build`; test run passes 9 tests with 0 failures.
- Deployment: installed and launched `com.local.Verdant` on the booted iPhone 17 Pro iOS 26.5 simulator; screenshot verified at `/private/tmp/Verdant-fresh-home.png`.

## Session: 2026-06-26 Verdant Visual System
- Project: `/Users/alan/Documents/Meal Prep Ideas vegetarian App`; branch `main`; user-facing app name `Verdant`, bundle id `com.local.Verdant`.
- Integrated the Stitch visual direction into SwiftUI: bundled Playfair Display and Inter fonts, registered them in Info.plist, centralized tokens/components in `MealPrepIdeas/App/AppStyle.swift`, and added local vegetarian-safe food/profile/onboarding assets in `MealPrepIdeas/Assets.xcassets`.
- Replaced gradient recipe placeholders with local image rendering via `VerdantPhoto`; generated/replaced the black bean sweet potato chili image so it clearly shows beans, sweet potato, corn, avocado, and no animal ingredients.
- Reworked Home, Plan, Groceries, Recipes, and Recipe Detail with cream canvas, editorial serif headings, image-forward cards, warm shadows, rounded components, haptics, and improved bottom spacing. Recipe Detail now hides the tab bar and keeps Add to Plan in-flow to avoid CTA/nutrition overlap.
- UX visual inspector pass found one blocker (Recipe Detail CTA overlap) and two polish issues (chili image, bottom spacing); blockers fixed before commit.
- Verification: iPhone 17 Pro iOS 26.5 simulator build/test passes 9 tests with 0 failures using `/private/tmp/VerdantVisualDerivedData`; vegetarian scan found no fish/meat/pescatarian labels. Screenshots: `/private/tmp/verdant-home-fixed.png`, `/private/tmp/verdant-plan-fixed.png`, `/private/tmp/verdant-groceries-fixed.png`, `/private/tmp/verdant-recipes-fixed.png`, `/private/tmp/verdant-recipe-detail-fixed.png`.

## Session: 2026-06-26 Verdant Phase 1.5
- Project: `/Users/alan/Documents/Meal Prep Ideas vegetarian App`; user-facing app name `Verdant`, bundle id `com.local.Verdant`.
- Implemented the interactivity and contrast polish pass. Home now owns a navigation path and recipe lookup so Today's Prep rows and Seasonal Picks tiles open `RecipeDetailView` with the correct SwiftData ingredients.
- Promoted `RecipeDetailView` for reuse from Home and Recipes, added explicit close handlers, enlarged the custom back affordance, and disabled hero-image hit testing so Back reliably returns to the originating tab.
- Fixed Home hero hierarchy and contrast: title/subcopy now lead, search sits below the title block, and the Home-only "Generate my week" CTA uses a cream/white fill with dark forest text/icon.
- Added a high-contrast `TagPill` mode and applied it to Complete Protein chips: solid terracotta background with white text.
- Preserved existing primary button styling for Plan and Recipe Detail; only the Home hero CTA uses the new hero button style.
- Verification: iPhone 17 Pro iOS 26.5 simulator build succeeds; `xcodebuild test -project MealPrepIdeas.xcodeproj -scheme MealPrepIdeas -destination 'id=E919509A-9EB8-4F8F-B596-4A238AA2A6A6' -derivedDataPath /private/tmp/VerdantPhase15DerivedData` passes 9 tests with 0 failures.
- Manual simulator verification: Home hero hierarchy/CTA contrast verified, Today's Prep opens Recipe Detail, Back returns to Home, Recipe Detail back affordance is visible, and Complete Protein uses the high-contrast chip path.
- Curie UX/UI visual inspection found no P0/P1 blockers. Vegetarian content scan found no fish, meat, or pescatarian labels. No git remote was configured, so fetch/rebase was skipped before commit.


## Session: 2026-06-26 Verdant Phase 1.6-4 Execution
- Project: `/Users/alan/Documents/Meal Prep Ideas vegetarian App`; user-facing app name `Verdant`, bundle id `com.local.Verdant`.
- Implemented the expanded goal-mode pass: Phase 1.6 core journey closure, Phase 2 tactile/kinetic polish, Phase 3 onboarding/profile/paywall prototype, Phase 4 local importer shell, and an initial Phase 5 personalization hook.
- Core journey: Plan meal rows now open `RecipeDetailView`, Plan's Generate Shopping List CTA opens Groceries, menu/avatar affordances open native Verdant sheets, and `verdant://tab/<tab>` deep links support deterministic tab QA.
- Tactile polish: centralized `VerdantHaptics.selection`, `lightImpact`, and `successDoublePulse`; added `VerdantMotion` spring/reduce-motion tokens; applied haptics/animations to generation, tabs/filters, grocery checkoff, pantry toggles, Add to Plan, and expandable nutrition.
- Onboarding/personalization: added an 8-screen SwiftUI onboarding flow with diet type, pain point, macro goal, kitchen skill, processing/social-proof, trial timeline, and prototype paywall. SwiftData profile/goal writes are main-actor safe. Strict Vegan wins over other segments and filters dairy/egg recipes.
- Importer: added premium Recipes-tab `Import from Link` block, local import sheet, source detection, mock parser, editable imported draft, save-to-SwiftData path, optional recipe source metadata, and vegetarian translation policy. No live web scraping, backend, auth, StoreKit, or cloud sync added.
- Tests: expanded XCTest from 9 to 14 tests. Latest command passed: `xcodebuild test -scheme MealPrepIdeas -destination 'platform=iOS Simulator,name=iPhone 17 Pro,OS=26.5' -derivedDataPath /private/tmp/verdant-derived` with 14 tests, 0 failures.
- Visual QA/deploy: installed/launched on iPhone 17 Pro iOS 26.5 simulator. Screenshots captured for onboarding, Home, Plan, Groceries, Recipes/import block, and Recipe Detail; visual sheet `/private/tmp/verdant-route-visual-qa-sheet.png` showed no blank imagery or obvious contrast/layout blockers.
- Git: no remote configured, so fetch/rebase was skipped before local commit.

## Session: 2026-06-26 Verdant ReciMe-Inspired Product Polish
- Project: `/Users/alan/Documents/Meal Prep Ideas vegetarian App`; user-facing app name `Verdant`, bundle id `com.local.Verdant`.
- Inspected 214 ReciMe reference screenshots and public App Store/Google Play review signals to adapt successful meal-planning/import/product psychology patterns without copying their brand.
- Implemented Verdant Collections, recipe sort controls, richer import source education, hands-free guided prep mode, clearer trial/paywall trust copy, and `verdant://prep/<recipeID>` for deterministic prep-mode QA.
- Complaint-driven safeguards: clearer no-charge-today paywall language, visible reminder/cancel path, manual/source-aware importer framing, vegetarian-only visible language, and stronger browse/sort controls.
- Verification: latest iPhone 17 Pro iOS 26.5 Simulator test pass is 14 XCTest cases with 0 failures. Final screenshots captured at `/private/tmp/verdant-recipes-recime-upgrades-final.png`, `/private/tmp/verdant-detail-recime-upgrades-final.png`, and `/private/tmp/verdant-prep-mode-final.png`.

## Session: 2026-06-27 Verdant Bottom Overlay Fix
- Project: `/Users/alan/Documents/Meal Prep Ideas vegetarian App`; user-facing app name `Verdant`, bundle id `com.local.Verdant`.
- Fixed the Recipes/Home/Plan/Groceries bottom-covering visual bug by removing the opaque `verdantFloatingTabInset` cream overlay and keeping only normal scroll bottom padding for the floating tab bar.
- Verification: `xcodebuild test -scheme MealPrepIdeas -destination 'platform=iOS Simulator,name=iPhone 17 Pro,OS=26.5' -derivedDataPath /private/tmp/verdant-derived` passes 14 tests with 0 failures. Deployed to the booted iPhone 17 Pro iOS 26.5 simulator and captured `/private/tmp/verdant-bottom-block-fix-recipes.png`, showing the large bottom block is gone.
- Git: no remote is configured, so fetch/rebase was skipped before committing locally to `main`.

## Session: 2026-06-27 Verdant AI Feedback Screen Pack
- Project: `/Users/alan/Documents/Meal Prep Ideas vegetarian App`; user-facing app name `Verdant`, bundle id `com.local.Verdant`.
- Created `/Users/alan/Documents/Meal Prep Ideas vegetarian App/AI_Feedback_Screens/Verdant_2026-06-27_Screen_Flow` with 16 numbered simulator screenshots covering onboarding, core tabs, importer, recipe detail, and hands-free prep mode.
- Folder contents: raw screenshots in `01_individual_screens`, title/subtitle versions in `02_labeled_screens`, four labeled mosaic boards in `03_mosaics`, and a `README.md` screen-order guide for AI/product reviewers.
- Added hidden review routes for repeatable screenshot capture: `verdant://onboarding/<0...7>`, `verdant://importer`, and `verdant://importer/preview`.
- Verification: `xcodebuild test -scheme MealPrepIdeas -destination 'platform=iOS Simulator,name=iPhone 17 Pro,OS=26.5' -derivedDataPath /private/tmp/verdant-derived` passes 14 tests with 0 failures. Deployed the fresh build to the booted iPhone 17 Pro iOS 26.5 simulator before capture.
- Git: no remote is configured, so fetch/rebase was skipped before committing locally to `main`.
## Session: 2026-06-28
- TrendBite competitive baseline audit created and then updated with Gemini Master Project Brief context at /Users/alan/Documents/Trending Recipes Mobile App/COMPETITIVE_BASELINE_AUDIT.md. The audit is based on 447 screenshot assets from eMeals, Mealime, NYT Cooking, ReciMe, and Recipe Keeper.
- Added TrendBite-specific requirements beyond competitor baseline: native iOS SwiftUI/SwiftData framing, three-tab Trending Feed / Tailored Weekly Planner / Smart Grocery-Pantry shape, macro-aware user profile, pantry coverage state, multi-signal social/video parsing, protocol-driven local mocks, and public share cards for the social comment growth loop.
- Git/deploy status: /Users/alan/Documents/Trending Recipes Mobile App is not a git repository and has no app/deploy config, so rebase, commit to main, and deploy are blocked until the project is initialized or moved into the intended repo.


## Session: 2026-06-28 TrendBite Fluid Shell
- Project: /Users/alan/Documents/Trending Recipes Mobile App; bundle id com.trendbite.fluidshell.
- Built the native SwiftUI/SwiftData Phase 1 Fluid Shell from the TrendBite asset starter with onboarding, mock paywall, Discover, Planner, and Smart Grocery/Pantry tabs.
- Data layer: local-only SwiftData models and protocol-driven mock services for UserProfile, Recipe, Ingredient, IngredientVariant, MealPlanWeek, ShoppingList, TrendDraft, and PublicShareCard; all app/database mutations are main-actor constrained.
- Product mechanics: runtime diet ingredient swaps preserve canonical recipe data, planner macro progress reflects the active profile, and grocery aggregation scales servings, merges duplicates, groups by aisle, and keeps in-pantry items visible for audit.
- Validation: Xcode 26.5 build/test passed on iPhone 17 Pro iOS 26.5 simulator using /private/tmp/TrendBiteDerivedData; 3 unit tests and 2 UI tests passed with 0 failures.
- Screenshot proof: /Users/alan/Documents/Trending Recipes Mobile App/Artifacts/Screenshots/trendbite-iphone17pro-onboarding.png.
## Session: 2026-06-30 mykitchen.bio Branding Asset Library
- Project: /Users/alan/Documents/Mykitchen.Bio; local git repo on main.
- Organized the Modern Pantry branding asset library under Branding with design tokens, moodboard, logo/mark candidates, textures, cookbook covers, recipe photography, creator profiles, UI ornaments, contact sheets, archive originals, and asset_manifest.csv.
- Second intake moved Phase 5/Phase 6 assets from Branding/to be organized into 06_ui_ornaments raw/promoted folders, added Phase 5/6/promoted contact sheets, and updated asset_manifest.csv to 262 rows.
- Updated MVP Development Plan.md so first app scaffold uses Modern Pantry tokens and concrete asset paths, with generated images treated as visual assets only and UI text rendered as real HTML.
- Current limitation: no remote configured and no deployable app exists yet, so rebase/deploy are skipped until a remote/app scaffold is available.
## Session: 2026-07-01 mykitchen.bio Static MVP Shell
- Project: /Users/alan/Documents/Mykitchen.Bio; local git repo on main.
- Created goal: build the Modern Pantry static MVP shell until live service signup/API keys are needed.
- Built a Next.js 16 App Router shell with mock data and real organized assets: /chef-lina storefront and /chef-lina/books/meal-prep-pantry/recipes/salmon-bowl cook mode.
- Storefront includes creator profile, trust cues, cookbook cards, pricing drawer, free-preview CTA, and hosted-checkout fallback copy.
- Cook mode includes serving scaler, ingredient checkoffs, active-step focus cards, and defensive Wake Lock wrapper.
- Added .env.example for Supabase, Stripe, admin, and AI keys; updated MVP Development Plan.md with current status and asset mapping.
- Verification: npm run typecheck and npm run build pass. Local HTTP route checks returned 200 for storefront and cook-mode pages.
- Blockers before live MVP backend: Supabase project keys, Stripe keys/webhook/domain setup, Vercel/deployment target, AI API key, and preferably Node 22+ for current Supabase SDK.
- Commit: 0449f8d Build Modern Pantry MVP shell. No remote configured, so rebase/deploy remain unavailable.


## Session: 2026-07-02 mykitchen.bio
- Implemented diet-pivot MVP shell in /Users/alan/Documents/Mykitchen.Bio: organized 19 new diet assets, promoted recipe/cookbook production assets, added three storefronts (/maria-table, /coach-kate, /plantbased-asha), diet metadata, theme variants, keto carb validation helper, and cook-mode macro/substitution display.
- Validation: npm run typecheck and npm run build pass; browser route checks confirmed all three storefronts and preview recipes load with images. Deploy/rebase blocked because the repo has no remote and no deployment config yet.

## Session: 2026-07-02 mykitchen.bio Stripe setup
- Added local secret-file protection for Keys.env.rtf / *.env.rtf while user configures Supabase and Stripe credentials. Recommended Stripe test-mode setup: API keys, products/prices, payment methods, webhook secret, and wallet domain registration later.

## Session: 2026-07-02 mykitchen.bio env safety
- User added Stripe sandbox keys to a local keys env file; detected TextEdit-style Keys.env.local.rtf rather than plain .env.local. Updated .gitignore patterns to protect *.env.local and *.env.local.rtf variants. Next step: convert secrets into plain .env.local before running Stripe product/price creation.

## Session: 2026-07-02 mykitchen.bio Stripe key check
- User provided Keys.env.local.txt. Verified without printing secrets: file is plain ASCII text and contains NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as pk_test and STRIPE_SECRET_KEY as sk_test. Added ignore patterns for *.env.local.txt / Keys.env.local.txt. Ready to create Stripe sandbox products/prices after explicit user confirmation.

## Session: 2026-07-02 mykitchen.bio Stripe sandbox products
- Created Stripe sandbox placeholder products/prices for the three MVP cookbooks using the local sk_test key: Mediterranean, Keto, and Plant-Based, each with monthly 4.99 and annual 39.99 recurring prices. Removed lifetime from mock storefront pricing, added env placeholders, setup script, and non-secret docs/stripe-sandbox-products.md. These are MVP placeholders; long-term creator-owned subscriptions should be handled via creator onboarding and likely Stripe Connect.

## Session: 2026-07-02 mykitchen.bio GitHub/Vercel auth
- Added GitHub remote https://github.com/aldizzle/mykitchen-bio.git locally, but pushes are blocked because Codex environment still sees expired GitHub auth for aldizzle. Vercel CLI is logged into tascionemusic-4076 / vince-tasciones-projects, which does not match the user screenshot account, so direct deploy was paused. Removed wrong local .vercel link and kept .vercel ignored.

## Session: 2026-07-02 mykitchen.bio GitHub pushed / Vercel pending
- User successfully pushed local main to https://github.com/aldizzle/mykitchen-bio.git and branch tracks origin/main. Public Vercel status later showed systems operational, but user saw degraded dashboard incident while trying to create/import project. Next step is to retry Vercel Import Project from GitHub after refreshing dashboard; direct CLI deploy was avoided because CLI is logged into the wrong Vercel account.

## Session: 2026-07-02 mykitchen.bio Vercel deploy prep
- Vercel CLI now reports user alan-6953. Added .vercelignore to keep raw Branding assets, local env files, node_modules, .next, and .vercel out of Vercel upload. New untracked Branding/Social Media Assets folder is left uncommitted for later organization. Local npm run build passes.

## Session: 2026-07-02 mykitchen.bio Vercel production deployed
- Deployed production app to Vercel project alan-kozulabscoms-projects/mykitchen-bio. Live alias: https://mykitchen-bio-eta.vercel.app. Verified /maria-table and the Coach Kate recipe route return HTTP 200. Vercel GitHub connection still needs Login Connection in dashboard, but direct CLI deploy succeeded.

## 2026-07-02 GitHub push auth diagnosis
- Vercel domains are valid for mykitchen.bio and www.mykitchen.bio.
- Local repo is on main and ahead of origin/main by 2 commits.
- Codex shell cannot push/fetch over HTTPS because gh auth status reports an invalid aldizzle token and no Git credential helper is configured.
- Recommended fix: refresh GitHub CLI auth in the same environment and run gh auth setup-git, or switch origin to SSH after adding a GitHub SSH key.

## 2026-07-02 Production deploy after GitHub push
- User successfully pushed local commits d4b701d and 5e26629 to origin/main.
- Local main matches origin/main; safety reviewer blocked pull --rebase as unnecessary because there was no divergence.
- Ran npm run build successfully.
- Deployed production via Vercel CLI: https://mykitchen-jwg5c8z2k-alan-kozulabscoms-projects.vercel.app
- Production alias: https://www.mykitchen.bio
- Verified live routes: /maria-table returned 200 and /coach-kate/books/low-carb-comfort-dinners/recipes/creamy-spinach-chicken-skillet returned 200.
- Untracked local folder remains: Branding/Social Media Assets/.

## 2026-07-02 Pricing card layout polish
- Updated app/globals.css so the payment option cards use auto-fit grid columns instead of a fixed three-column grid.
- This makes Monthly and Annual fill the row evenly on mobile and removes the empty space on the right side of the drawer.
- npm run build passed before commit/deploy.

## 2026-07-02 Pricing card layout deployed
- Commit 79b9889 (Even out pricing option cards) pushed to origin/main.
- No rebase was needed after fetch because origin/main had 0 commits not in local main.
- Production deploy completed: https://mykitchen-fpz4k392c-alan-kozulabscoms-projects.vercel.app
- Production alias: https://www.mykitchen.bio
- Verified /maria-table returns HTTP 200 after deploy.

## 2026-07-02 MVP plan progress checkpoint
- Updated MVP Development Plan.md to reflect deployed production state and current next steps.
- Current completion: brand/assets, static three-creator shell, cook mode, Stripe sandbox products, GitHub main sync, and Vercel production deploy are complete.
- Next build step: Supabase schema/migrations, cookie-only auth/server client scaffolding, then Stripe checkout APIs/webhooks and concierge ingest.

## 2026-07-02 Pre-service-build decision checklist
- Added Before the Next Build Pass section to MVP Development Plan.md.
- Decision: no full PM expansion is required before the next engineering pass; keep scope to consumer purchase/unlock, admin-assisted ingest, and a lightweight creator proof path.
- Required before live integration: Supabase URL/anon/service role keys, Stripe keys/webhook secret/price IDs in Vercel, one AI key, and admin auth setting.

## 2026-07-02 Vercel env clarification
- User has Supabase and Stripe sandbox info locally and asked where to get Vercel keys.
- Clarified that no separate Vercel API key is needed for normal runtime; add Supabase/Stripe/AI/admin variables under Project mykitchen-bio -> Environment Variables for Production and Preview.
- NEXT_PUBLIC_SITE_URL should be https://www.mykitchen.bio in Vercel Production.
- Stripe webhook secret comes from Stripe after the webhook endpoint exists, then gets copied into Vercel.

## 2026-07-02 Vercel env entry confirmation
- User showed NEXT_PUBLIC_SITE_URL being added in Vercel Environment Variables with value https://www.mykitchen.bio.
- Confirmed this is correct: exact key name, raw unquoted value, Production and Preview selected.
- Sensitive enabled is required for secrets and acceptable for public runtime values.

## 2026-07-02 Consolidated local keys file
- Consolidated Supabase, Stripe sandbox, Stripe price IDs, and OpenAI env names into ignored local file Keys.env.local.txt.
- Confirmed Keys.env.local.txt is ignored by Git and tightened permissions to 600.
- Added SUPABASE_DIRECT_URL placeholder to .env.example so the tracked env contract matches the local key file.
- No secret values were committed.

## 2026-07-06 Media MCP and vendor keys configured
- Codex Desktop MCP config now includes OAuth-authenticated servers for Apify (`https://mcp.apify.com/`), Scrape Creators (`https://api.scrapecreators.com/mcp`), Vercel (`https://mcp.vercel.com`), Stripe, and Supabase. The app-bundled CLI at `/Applications/Codex.app/Contents/Resources/codex` works; the npm `codex` shim is still broken/missing its vendor binary.
- Scrape Creators and Apify keys were added to ignored `Keys.env.local.txt` and to Vercel Production + Preview env vars. Redeploy is required after env changes for production runtime to see them.
- `npm run test:goal:readiness` now passes media vendor key checks and the media corpus check. Remaining readiness items: provide `SUPABASE_POOLER_URL` later, run the live Google OAuth check when needed, and add graded creator-assist cover examples.
- Alan approved using `Marketing/media-extraction-corpus-v1.csv` as the first QA corpus even though it has 47 unique valid URLs instead of 50. The readiness checker now uses 47 as the initial media QA threshold.
- `tasks/creator-assist-cover-examples-request.md` now has exact cover example requirements, filenames, image specs, manifest format, and a Claude/ChatGPT prompt brief. Alan should generate 3-5 examples in `Branding/Creator Assist Cover Examples/`.

## 2026-07-06 Stripe webhook green, Connect sandbox account pending
- Stripe webhook endpoint is deployed and signed verification is working at `https://www.mykitchen.bio/api/webhooks/stripe`. Vercel has `STRIPE_WEBHOOK_SECRET` configured, and live signed test events now return `persistence:"stored"` on first receipt and `duplicate:true` on repeat receipt.
- Supabase remote migration `grant_stripe_webhook_events_service_role` was applied after the webhook store initially returned `persistence:"unavailable"`; root cause was missing `service_role` INSERT privilege on `public.stripe_webhook_events`. Local migration file: `supabase/migrations/20260706193000_grant_stripe_webhook_events_service_role.sql`.
- `/api/commerce/sandbox-checkout` is deployed and configured, but destination-charge checkout is blocked until a test connected account has active `transfers`. Existing sandbox connected account `acct_1TqEogPRibOga4zC` and generated Express test account `acct_1TqFTwAac5DdyNqH` both show inactive card payments/transfers and currently due onboarding requirements. Stripe does not allow bypassing Express onboarding via API for those fields; Alan needs to complete a test onboarding link or create an onboarded test Express account before destination charges can pass.
- Sandbox checkout route now catches Stripe `insufficient_capabilities_for_transfer` and returns a clean JSON `409` instead of a blank `500`.
- Verification after fixes: `npm run test:commerce:scaffold`, `npm run typecheck`, `npm run test:stage1:gates`, and `npm run build` passed. `npm run test:goal:readiness` now passes Stripe secret checks and remains blocked only by non-Stripe setup/corpus items plus `SUPABASE_POOLER_URL`.

## 2026-07-02 Gemini video key added locally
- User provided Gemini API credentials for future video/audio ingest routing.
- Added Gemini env names to ignored Keys.env.local.txt and placeholders to .env.example.
- Keys.env.local.txt remains ignored and chmod 600.
- Do not commit secret values; only placeholders are tracked.
- Remaining config before service build: ADMIN_CONCIERGE_PASSWORD and later STRIPE_WEBHOOK_SECRET after webhook endpoint creation.

## 2026-07-02 Admin concierge definition and Supabase DB password
- User provided Supabase database password; updated ignored Keys.env.local.txt SUPABASE_DIRECT_URL with the URL-encoded password.
- Keys.env.local.txt remains ignored and chmod 600; do not commit secret values.
- Added Admin Concierge section to MVP Development Plan.md defining it as an internal founder/admin ingest tool, not a consumer feature or self-serve creator dashboard.
- Remaining runtime secret placeholders: ADMIN_CONCIERGE_PASSWORD and later STRIPE_WEBHOOK_SECRET after endpoint creation.

## 2026-07-02 Admin concierge password configured locally
- User provided admin concierge password; added it to ignored Keys.env.local.txt only.
- Updated MVP Development Plan.md to mark local Supabase, Stripe sandbox, OpenAI, Gemini, and admin concierge config as ready.
- Remaining later secret: STRIPE_WEBHOOK_SECRET after /api/webhooks/stripe exists and is registered in Stripe.
- No secret values were committed.

## 2026-07-02 Vercel environment import verified
- User imported local env values into Vercel.
- Verified via vercel env ls that Supabase, Stripe sandbox, OpenAI, Gemini, admin concierge, and site URL variables exist for Production and Preview.
- Note: STRIPE_WEBHOOK_SECRET exists but may need to be overwritten after /api/webhooks/stripe is created and registered in Stripe.
- Updated MVP Development Plan.md to mark Vercel env import complete.

## 2026-07-02 Vercel deployment settings decision
- User asked about Vercel recommendations: concurrent builds, elastic build machines, and frontend/backend mismatch prevention.
- Decision: keep current defaults for MVP. Do not enable on-demand concurrent builds, Elastic Build Machines, Deployment Checks, Skew Protection, Rolling Releases, or Cold Start Prevention yet.
- Keep Node.js 24.x on Vercel, Prioritize Production Builds enabled, and standard auto-detected Next.js build settings.
- Revisit deployment checks/skew protection after checkout, webhook, and admin API routes have automated smoke tests.

## 2026-07-02 GTM-driven MVP sequence update
- Incorporated delegated GTM/MVP plan into MVP Development Plan.md.
- New sequence: preserve live demo shell; build creator-facing trust homepage; add /join alpha lead capture and Supabase lead_capture table; support static creator preview routes within 24-48 hours; then build service-backed transactional MVP.
- Root homepage and alpha capture now come before full Stripe checkout/webhook complexity.
- Static demo routes remain proof assets for founder-led outreach and social screen recordings.

## 2026-07-02 Engineering ownership clarification
- Alan clarified that this technical thread owns product/engineering implementation for the GTM/MVP plan.
- Growth Lead owns creator acquisition, positioning, outreach, research, social content, CRM/process, and build-request inputs.
- Added ownership split to MVP Development Plan.md for homepage, /join, lead_capture, static previews, admin concierge, and transactional MVP work.

## 2026-07-02 Next engineering roadmap
- Added Next Engineering Roadmap to MVP Development Plan.md.
- Build order: trust layer homepage, /join alpha lead capture, Supabase foundation, static creator preview workflow, Stripe transactional MVP, admin concierge ingest.
- Current next build should start with creator-facing homepage and alpha lead capture while preserving existing demo routes.

## 2026-07-02 Homepage plan review and asset phases
- Reviewed attached Codex-ready homepage plan for creator GTM signup.
- Direction is strong: monetization-first, creator-first, and aligned with trust-layer roadmap.
- Adjustments: avoid promising TikTok/Instagram OAuth until built; avoid lifetime-access language; keep homepage v1 tighter than full long-form SaaS page.
- Added homepage v1 section priority and phased asset generation plan to MVP Development Plan.md.

- mykitchen.bio: 2026-07-06 Supabase pooler and Stage 1 durability are unblocked. `SUPABASE_POOLER_URL` is configured locally and in Vercel; the prepared Stage 1 SQL for `stage1_sessions`, `stage1_rate_limits`, and rate-limit RPCs was applied directly through Supabase CLI statement-by-statement after `db:push` hit remote migration-history drift. `STAGE1_SESSION_SECRET` is configured locally and in Vercel, production was redeployed, and `npm run test:goal:readiness -- --live` reports 18 pass, 0 warn, 1 manual, 0 blocked. The only remaining readiness item is Alan-provided graded Creator Assist cover examples. Supabase MCP is installed in Codex Desktop but still not exposed as a callable `mcp__supabase` namespace in the active thread; Apify and Vercel MCP tools are callable. Stripe test connected-account env now points to `acct_1TqFTwAac5DdyNqH`, pending Stripe review/capability activation.

- mykitchen.bio: Gemini video ingest policy set to gemini-3.1-flash-lite first pass, gemini-3.5-flash review fallback, low media resolution for triage; update Vercel env with GEMINI_VIDEO_REVIEW_MODEL and GEMINI_VIDEO_MEDIA_RESOLUTION when video ingest is implemented.

- mykitchen.bio: MCP should stay internal/operator-facing for MVP. Do not put MCP in homepage, checkout, auth, entitlement, or cook-mode critical paths; consider later for admin connectors if creator intake becomes the bottleneck.

- mykitchen.bio: Social connection GTM call is yellow/red. Do not promise "connect TikTok/Instagram/YouTube" as a core first-batch value prop. Lead with "send/paste 5-10 recipe video links, captions, or transcripts"; treat YouTube as likely first integration, TikTok possible after scope approval, Instagram highest-risk until Meta permissions are validated.

- mykitchen.bio: Creator GTM/onboarding decision: use invite-first, paste-links-first flow. Public CTA should be Request an invite; approved creators get a lightweight workspace to paste 5-10 recipe video links/captions/transcripts. Do not build social OAuth or full creator dashboard before alpha validation.

- mykitchen.bio: Website design agent handoff accepted with minor guardrails. Use invite-first section order; batches can be combined as A+B (8), C+D (6), E+F (8) if quality holds. Correct Plant-Based Asha route to /plantbased-asha. Images are references only; app text/pricing/FAQ/CTAs must be real HTML.

- mykitchen.bio: Website asset generation sweet spot is focused 4-image batches: two related homepage sections, each desktop + mobile. Hero + Creator Intake Preview batch is a strong current reference; continue with section-pair batches rather than 8-10 image requests unless quality holds.

- mykitchen.bio: Final homepage visual references are now organized under `Branding/Website Assets/00_final_reference_comps`, with a contact sheet at `Branding/Website Assets/90_contact_sheets/homepage_final_reference_comps_contact_sheet.png`. Treat these comps as section-level visual specs, not production backgrounds. Next image-gen requests should be isolated, text-free component assets only, documented in `Branding/Website Assets/01_component_asset_requests/homepage_component_asset_request_list.md`.

- mykitchen.bio: 2026-07-03 homepage component asset batch is organized under `Branding/Website Assets/01_component_asset_requests`. Food photography and phone-fill assets are approved build candidates. Generated hero/pricing/ornament cutouts are RGB with baked checkerboard, not real alpha, so they need true transparent regeneration or cleanup before freeform placement.

- mykitchen.bio: Product roadmap pivoted away from invite-only/concierge alpha toward a self-service AI cookbook product builder. New roadmap doc is `docs/self-service-saas-roadmap.md`. Primary vertical slice: signup/login, creator account, free starter credits, text/caption generation job, credit ledger, recipe draft review/edit, cookbook project, preview, simple PDF export. Credits monetize generation; hosted storefront sales later require Stripe Connect for creator payouts and 5% application fee handling.

## Session: 2026-07-05 — mykitchen.bio Stage 1 core loop branch
- Active rollout canon: Decision 007 progressive truth. No waitlist/teaser; public site should only show stages that work today.
- Stage 1 scope being merged/deployed: homepage paste box -> generated recipe draft -> ready/auth handoff -> recipe editor -> cookbook builder -> watermarked PDF export.
- Stage 1 implementation is text-first: captions, transcripts, notes, blog/article URLs, and text-based PDFs. Bare TikTok/Reels/Shorts links intentionally return a guided fallback asking for caption/transcript until the media extraction workstream ships.
- Stage 1 public copy is narrowed accordingly; Stage 2 restores pricing/commerce language only when billing, clean export, hosted checkout, and payouts are real.
- Stage 1 safety/observability: signed HTTPOnly preview-session cookie, basic device/IP repeated-try guard, hero A/B assignment cookie, and hero exposure endpoint.
- Test command: `npm run test:stage1` starts a local Next.js server and verifies intake, ready page, app page, editor, builder, PDF export, bare-social fallback, repeated-try lockout, and hero exposure logging.
- Media QA corpus lives at `Marketing/media-extraction-corpus-v1.csv`; use it in the media pipeline sprint for extraction-first canaries and failure-mode tests.
- Claude Design website iterations are in `Branding/Branding v2/Claude v2.1/`; treat them as source/context for integration, not raw production assets until promoted.

## 2026-07-06 mykitchen.bio Stage 1 canonical homepage deployed
- Commit `4446c8fc` (`Build Stage 1 canonical homepage`) is on `origin/main` and deployed to Vercel production `dpl_HQfifw8mGncgD6HRKJEY7RmoFwRu`, aliased to `https://www.mykitchen.bio`.
- Homepage implements content-map rev 4.7 Stage 1 canon, keeps existing `mk_hero_variant` A/B assignment, promotes approved images/brand marks, uses optimized JPG derivatives at runtime, and documents paste/asset/string contracts in `tasks/frontend-home-contract-notes.md`.
- Verification passed: typecheck, build, Stage 1 gates, local smoke, production smoke, live DOM check, 360/390/430/1280 viewport QA, simulated TikTok/Instagram webview QA, and local Lighthouse 96. Real-phone TikTok/Instagram in-app webview QA remains manual.
- Operating-model rule: each design drop gets its own `design-drop: <round>` commit; FE works from drop-to-drop diffs.

## 2026-07-08 mykitchen.bio privacy, Studio API, and Stage 2B proof status
- Mounted approved privacy policy at /privacy with Effective July 8, 2026; /support and /contact redirect to /about#contact until dedicated pages exist.
- Swept key marketing copy away from stage/preview-era language toward full cookbook product/export/publish truth.
- Added Studio schema/API surface for account, generation jobs, recipe drafts, cookbooks, readiness, events, and notifications.
- Stage 2B earlier live checkout reconciles as paid then fully refunded: entitlement refunded, application fee refunded, transfer reversed, and webhook records present.
- Additional one-transaction payout-landing proof checkout exists but is still open/unpaid: cs_live_a1MN7XHLpSEaqv888lmqPNL9NACwmHadapP7UkvvfR6qvKDCg5UwPR81X9. Do not create another payout-proof checkout unless Alan explicitly asks.
- Video-file upload is not yet true: current intake supports text/PDF-style uploads and link extraction, not binary video parsing. Launch gate added for video MIME upload -> duration gate -> parse pipeline.

## 2026-07-08 mykitchen.bio copy refinement and payout-proof link
- Applied Fable copy refinements: hero support uses "One free recipe · No credit card · No account connection"; hero body says export or sell from your bio; login welcomes creators back to recipes, cookbooks, and storefront.
- Existing payout-proof Checkout Session remains open/unpaid and should be used for the single unrefunded payout-landing proof: cs_live_a1MN7XHLpSEaqv888lmqPNL9NACwmHadapP7UkvvfR6qvKDCg5UwPR81X9.
- The proof script now includes Checkout URL in status output so the session can be recovered without creating another live checkout.

## 2026-07-08 mykitchen.bio payout-proof payment received
- The unrefunded Stage 2B payout-proof Checkout Session is now paid: cs_live_a1MN7XHLpSEaqv888lmqPNL9NACwmHadapP7UkvvfR6qvKDCg5UwPR81X9.
- Verification passed for active buyer entitlement, checkout.completed webhook persistence, $1.50 application fee, unreversed $15.00 transfer, and no refund/reversal.
- Connected account shows $13.50 pending and $0.00 available; payout landing remains pending Stripe settlement.

## 2026-07-08 mykitchen.bio conversion foundations
- Growth Website Conversion Plan added at docs/strategy/website-conversion-plan.md.
- PR #49 had been merged; this pass adds /refunds -> /refund-policy, compare routes, canonical solution slugs, SEO/GEO basics, llms.txt, sitemap, robots, and schema.
- Marketing analytics now has a first-party dataLayer contract, root GTM install GTM-TWBDRNBS, Meta dataset/pixel ID 1366449145441480, UTM persistence, backend event sink, and Supabase analytics_events migration. TikTok remains an additive config slot.
- Verification passed: test:analytics:contract, test:legal:routes, test:launch:contracts, typecheck, and build.

## 2026-07-08 mykitchen.bio Meta/GTM tracking ownership
- Meta browser pixel delivery is code-owned in components/analytics/MarketingAnalytics.tsx; events use canonical names plus eventID=payload.event_id for future CAPI dedupe.
- GTM remains installed once as the container for non-Meta tags; the dataLayer explicitly marks meta_delivery=code_owned_do_not_fire_in_gtm.
- Do not configure Meta Pixel tags inside GTM, or browser events will duplicate the coded Meta events.

## 2026-07-08 mykitchen.bio GTM MCP access
- Added Stape Google Tag Manager MCP server to /Users/alan/.codex/config.toml as [mcp_servers.gtm] with URL https://gtm-mcp.stape.ai/mcp.
- Codex Desktop likely needs a restart/reload and Google OAuth before GTM tools appear as callable MCP tools in a new thread.

## 2026-07-08 mykitchen.bio compare/solutions canon repair
- Interim compare pages must follow website-content-map canon over conversion-plan proposals. /compare now indexes all five competitors; each detail page needs fee facts, official source links, Fees verified July 2026, and semantic table data.
- Guard command: npm run test:marketing:canon.

## 2026-07-09 CopyCatch client preview responsive deploy
- CopyCatch platform `main` has a client-ready proof slice for tomorrow's Crimplok review: Calibrated Precision website refresh, `/client-preview` alias, black/white CopyCatch branding, link-preview card, and read-only Crimplok source-record preview.
- Frontend/backend contract: Vercel has API URL env vars but no `CRIMPLOK_PREVIEW_TOKEN`; `/client-preview` attempts live API only when that token exists and otherwise uses the verified static Crimplok dataset so the link does not show an environment error.
- Client-safe labels are locked for the preview: `Needs Review`, `Review state`, `Source Records`, `Source record pending`, and qualitative `Match Scoring`; raw `confidence` and `tier` remain internal translation fields only.
- Latest mobile QA tightened homepage and preview width constraints for 390px phone screenshots while preserving desktop layout. Verification passed locally: web build, web typecheck, `/client-preview` 200, OpenGraph metadata present, and banned public-copy scan across `/`, `/assessment`, `/for-litigators`, `/for-patent-owners`, `/login`, `/dashboard`, `/client-preview`.
- Tech Lead alignment doc exists at `docs/client-preview-alignment.md`; backend health was verified OK. Vercel `web` project SSO protection was disabled so the public alias can open from a text message.
- Final CopyCatch client preview public alias: https://copycatch-client-preview.vercel.app/client-preview. Preview route includes `noindex, nofollow` and OpenGraph image points to the same alias. Final deployment ID: dpl_49VEqf9Z81VnwsP5V8n9b5z9pgeT. Latest pushed commit: c4a1ac4 (`Hide recovery model formula`).
- Amazon is now included in the static Crimplok client preview fallback from verified local product-research files: `2,673` Amazon ASINs screened from the raw export, `191` Amazon records queued for attorney review from the reviewed tiered export, and `62` Amazon sellers. Preview totals are now `8,958` screened, `848` potential infringer/source records, `268` sellers, and `0` source captures imported. The preview uses real product thumbnails for Amazon plus representative Walmart/Etsy/eBay/SHEIN rows, keeps source captures marked pending, and labels the private-client queue as `Potential infringer records` while preserving the counsel-boundary line.
- The client preview source-record inbox was updated to an image-first card layout: potential infringer records now appear before marketplace summary, product images sit above listing titles, mobile product images use nearly the full content width, and the selected-record image panel is taller. Verification passed locally and live: build, typecheck, desktop 1440, mobile 390, all 22 preview images loaded, no console errors, and no mobile horizontal overflow.
- Mobile hero spacing was balanced after screenshot review: the preview summary panel and marketplace summary now fill the available phone content width instead of leaving a loose right gutter. Live QA passed at 390px and 430px widths with equal 20px page gutters, no horizontal overflow, Amazon/totals visible, and 22/22 images loaded.
- The client preview content order was adjusted to hero -> marketplace summary -> potential infringer records, keeping the balanced mobile gutters and image-first record cards. Local and live QA passed at 390px, 430px, and 1440px widths: summary appears below hero, records below summary, no horizontal overflow, Amazon/totals visible, and 22/22 images loaded.
- The top metric formerly showing `Source Captures: 0` now shows `Potential Recovery: $1.7M-$4.2M`. The underlying private-preview model remains `848 records x $2K-$5K`, but the formula/helper line is hidden from the client UI to create curiosity for the call. Treat this as a potentially collectible recovery model, not a legal damages opinion. Local and live QA passed at 390px, 430px, and 1440px widths: recovery range visible, formula hidden, source-captures label absent, no horizontal overflow, Amazon/totals visible, and 22/22 images loaded.
- Completed Growth goal: after Amazon agent and Tech Lead finished cleaned data/final deploy, Growth ran a final polish pass over the CopyCatch client preview/site: copy hierarchy, product-context hero image, black/white favicon, review-state label, Amazon review-focus metrics, mobile/desktop QA, and live deployment verification.
- 2026-07-10 CopyCatch client preview Growth polish final: public alias `https://copycatch-client-preview.vercel.app/client-preview` is live on Vercel deployment `dpl_5a98b9PDyMBadLKeiq5x4oaAD6jL` (`https://web-g3fm28cf9-alan-kozulabscoms-projects.vercel.app`), with `main` at `c90c88c` (`Refine Crimplok case opportunity copy`) after `60b33c9` (`Sync consolidated Crimplok preview data`), `5703848` (`Update Crimplok review state label`), and `b7e6756` (`Add Crimplok preview product context`). Preview now uses the black/white CopyCatch favicon, adds the client product reference image in the hero, shows top `Review state` as `Under attorney review`, and frames the Amazon band as a client-facing `Case opportunity`: `169` high-priority Amazon records, `62` Amazon sellers, and `146` CN/HK Amazon records. The previous internal phrase “Amazon is ready for the first attorney pass” was removed. Live QA passed at 390px mobile and 1440px desktop: no horizontal overflow, product image loaded, recovery range `$1.4M-$3.5M` visible, counsel-boundary line retained, and banned legal-conclusion copy absent. Evidence captures/checkout/jurisdiction screenshots remain pending and are explicitly labeled as pending.

## 2026-07-10 Crimplok 698 consolidated data handoff
- Amazon/Codex built the consolidated Nick-review workbook and backend/preview export at `Product Research/outputs/019f42ad-3d8e-78e2-b110-e449779b85fb/crimplok_698_consolidated/`.
- Nick workbook: `Crimplok 698 - Consolidated Master Review.xlsx` with platform-separated tabs, front columns `Image`, `Tier`, `Confidence`, `Reason`, `Product URL`, 1,153 embedded/anchored images, and visible `Open listing` hyperlink formulas.
- Backend reviewed export: `crimplok-demo-consolidated-reviewed-listings.json` has 1,153 reviewed rows across Amazon + non-Amazon. Preview export: `crimplok-demo-client-preview-strongest-listings.json` has 314 strongest rows only, all `matterId=crimplok-demo`, `decision=include`, `status=qualified`, `tier=1`, confidence >= 0.85, and seller IDs present.
- Preview strongest mix: Amazon 169, Etsy 102, eBay 22, VerticalRetailers 11, SHEIN 6, Walmart 3, AliExpress 1. Amazon qualified set: 191 rows, 169 Tier 1, 22 Tier 2, 62 sellers, countries CN 83 / HK 63 / US 45, 13 unresolved blocked rows, 912 unavailable.
- Tech Lead thread `019f47d9-540c-7913-a781-189ba9a1b37f` was handed the strongest-listings JSON for final preview refresh/deploy. Growth thread `019f47e9-e302-7bf2-880d-09372ce602b6` was handed Amazon counts/caveats for polish. Evidence IDs remain blank/pending until Claude capture exists.
- Tech Lead redeployed the consolidated preview source at commit `60b33c9` to Vercel deployment `dpl_8a4JgWaPZepPgzFwZTN9RLzo8w6s` (`https://web-e5w4n0i9u-alan-kozulabscoms-projects.vercel.app`) and repointed `https://copycatch-client-preview.vercel.app/client-preview`. Live outside-in checks passed: `/client-preview` 200, `10,589` screened, `710` potential matches, `190 / 485` US/non-US with `35 unknown`, Amazon `2,695 / 191`, Walmart `4,020 / 193`, mixed high-confidence sample rows visible, preview-card image 200, and product-reference image 200.
- Amazon/Codex later placed a hold on any further non-Amazon preview refresh until the full marketplace visual regrade is validated. Current deployed platform commit `4412ad1` (`Hide eBay rows from Crimplok preview samples`) keeps marketplace counts unchanged but hides eBay rows from client-facing sample cards. Deployed to Vercel `dpl_2EDXoC5cBW3nr3ccYSdBqykKFMgB` (`https://web-ff5oue8w6-alan-kozulabscoms-projects.vercel.app`) and repointed `https://copycatch-client-preview.vercel.app/client-preview`. Live checks passed: `/client-preview` 200, `10,589` screened, `710` potential matches, `190 / 485` US/non-US with `35 unknown`, sample card section has no eBay listing URLs/labels, and the marketplace summary still shows the existing eBay `1,559 / 97` count pending validated regrade handoff.
- Growth follow-up copy pass committed `c90c88c` (`Refine Crimplok case opportunity copy`) and redeployed/repointed `https://copycatch-client-preview.vercel.app/client-preview` to Vercel deployment `dpl_5a98b9PDyMBadLKeiq5x4oaAD6jL` (`https://web-g3fm28cf9-alan-kozulabscoms-projects.vercel.app`). Client-facing Amazon band now reads `Case opportunity` / `A concentrated Amazon enforcement opportunity is mapped.` and removes the internal phrase `Amazon is ready for the first attorney pass.` Live smoke check passed for the new copy and no mobile horizontal overflow.
- Growth final responsive QA passed on the public preview at 390px, 430px, 768px, and 1440px: no horizontal overflow, all 34 images loaded, product reference image loaded, `Under attorney review` visible, `Case opportunity` copy present, old internal phrase absent, recovery range visible, no console issues, and banned legal-conclusion copy absent. A narrow Fable-safe review prompt was added at `docs/fable-context/client-preview-final-review-request.md`; use it instead of attaching raw product-research folders or broad repo access.
- Fable review request docs were committed at `e0df4f1` (`Add Fable client preview review request`) and deployed to Vercel production `dpl_eTDLE9YCJkwYFPLR8k4EfoXv6mXe` (`https://web-nl3j3o8yh-alan-kozulabscoms-projects.vercel.app`); `https://copycatch-client-preview.vercel.app/client-preview` was repointed to that deployment and live smoke passed.
- Growth removed remaining client-facing `pending` language from the preview record cards and case-opportunity band in commit `886ca3c` (`Replace pending preview labels with rationale copy`). The old source-record/evidence status language was replaced with a plain rationale line: `Visible crimp-lock bead / jewelry fastener features surfaced for counsel's review.` Deployed to Vercel production `dpl_8vWeQMXAf9BsCeP62e8aVVQspdhu` (`https://web-96jgjimhs-alan-kozulabscoms-projects.vercel.app`) and repointed `https://copycatch-client-preview.vercel.app/client-preview`. Live QA passed at 390px, 430px, 768px, and 1440px: no `pending` language, no horizontal overflow, rationale visible in the record section and cards, 34/34 images loaded, and banned legal-conclusion copy absent.
- Growth removed the remaining internal workflow labels from client-facing record cards in commit `13aac87` (`Make Crimplok preview copy client-facing`). Cards now show only `Strong match` plus `Rationale`; `Escalated to investigation`, `Flagged for attorney review`, `Needs review`, `queued`, `pending`, and the old “legal conclusion engine” phrasing are absent from the rendered preview. The hero now reads `Marketplace records organized around your protected feature.` and the case band is framed as a concentrated Amazon opportunity. Deployed to Vercel production `dpl_6LkvR1bn3i8wezA1tphqxZ1dSTSP` (`https://web-erall9ijm-alan-kozulabscoms-projects.vercel.app`) and repointed `https://copycatch-client-preview.vercel.app/client-preview`. Live QA passed at 390px, 430px, 768px, and 1440px: no horizontal overflow, 34/34 images loaded, 32 `Strong match` chips rendered, 33 rationale labels visible, and no console errors.
- Alan flagged two live eBay sample cards as visually weak despite `Strong match` labels. Growth checked the static preview data: both circled rows (`ebay-397828364822` / seller `aukit55`; `ebay-386384497143` / seller `bonusversus_mb`) were `confidence: 0.95`, `tier: 1`, and all 22 eBay preview rows had the same `0.95` confidence. Confidence is therefore not discriminating for eBay. Growth instructed Marketplace thread `019f4393-09e4-73e3-8f71-4dbc11046854` and Amazon thread `019f42ad-3d8e-78e2-b110-e449779b85fb` to visually re-review/rescore eBay using the Amazon standard: promote only clear side-plunger / locking-bead / CrimpLok-like rows; downgrade/exclude generic crimp/spacer/stopper beads from client-facing `Strong match` examples.
- Growth committed `4412ad1` (`Hide eBay rows from Crimplok preview samples`) to temporarily hide eBay rows from the client-facing `Strong-match source records` grid until eBay is visually re-reviewed/rescored. eBay remains in the marketplace summary counts. Deployed to Vercel production `dpl_ES7j89fWchBodcmYSsGuxahzDvkR` (`https://web-60v0sqd0h-alan-kozulabscoms-projects.vercel.app`) and repointed `https://copycatch-client-preview.vercel.app/client-preview`. Live QA passed at 390px, 430px, 768px, and 1440px: marketplace summary includes eBay, records grid has no eBay rows, the two circled titles are absent, 32 `Strong match` cards render, 34/34 images loaded, no horizontal overflow, no console errors, and no banned/internal preview terms.
- Amazon/Codex reported corrected Crimplok 698 data stable for Growth review: full reviewed rows `1,167`, strongest preview rows `388` (Amazon 169, Etsy 135, eBay 63, VerticalRetailers 11, AliExpress 4, Walmart 3, SHEIN 3). Growth updated the preview display to reintroduce eBay from the corrected strongest-only export, use a balanced marketplace sampler for the 32 visible cards, and show row-specific feature rationale when present. The top metrics now separate `Potential Matches` (`674`) from `Strongest Records` (`388`) so client-facing sample cards cite only the preview-safe visual set. Local QA passed at 390px, 430px, 768px, and 1440px: all seven marketplaces appear in the strong-card grid, corrected eBay rows are present, the previous weak eBay titles are absent, row-level side-plunger/locking-peg rationale appears, 34/34 images loaded, and no banned/internal preview terms surfaced.
- Deployed the corrected/regraded Crimplok preview from `main` commit `2551f4a` (`Show regraded strongest preview rationale`) to Vercel production `dpl_8LTxkK88UwDBGT9pzLoLzoipSpCz` (`https://web-mjrb0ltb9-alan-kozulabscoms-projects.vercel.app`) and repointed `https://copycatch-client-preview.vercel.app/client-preview`. Live QA passed at 390px, 430px, 768px, and 1440px: updated metrics `11,224` screened / `674` potential matches / `388` strongest records visible, all seven marketplaces represented in the strong-card grid, corrected eBay visible, weak eBay examples absent, row-level rationale visible, 32 strong-match cards render, 34/34 images loaded, no horizontal overflow, no console errors, and no banned/internal preview terms.
- Growth removed remaining internal preview-gating language from the Crimplok client view: `preview-safe`, `visual set`, `review set`, `Strongest Records`, `Strong-match source records`, `Private preview`, and `Matter preview` are no longer rendered. Replacement copy uses client-facing terms: `Private client view`, `Strong Visual Matches`, `Reviewed across marketplaces`, `Marketplace totals`, and `Strong visual match examples`. Static row reasons were also cleaned so `preview-safe visual feature match` cannot surface in card rationale. Local QA passed at 390px, 430px, 768px, and 1440px: replacement copy present, removed terms absent, corrected eBay still visible, 32 strong-match cards render, 34/34 images loaded, no horizontal overflow, and no console errors.
- Growth committed the client-facing copy cleanup as `8dd4aeb` (`Remove internal preview copy from client view`) and deployed it to Vercel production `dpl_GeAaYsSDj86qP3Go9VHBf3vN9mry` (`https://web-54gyv0kf4-alan-kozulabscoms-projects.vercel.app`), then repointed `https://copycatch-client-preview.vercel.app/client-preview`. Live QA passed at 390px, 430px, 768px, and 1440px: replacement copy present, removed internal terms absent, corrected eBay visible, row-level rationale visible, 32 strong-match cards render, 34/34 images loaded, no horizontal overflow, and no console errors.
- Growth removed the `Reviewed across marketplaces` helper under the `Strong Visual Matches` metric so the box now shows only the label and count. Local QA passed at 390px and 1440px: helper phrase absent, `Strong Visual Matches` remains visible, no internal terms returned, 34/34 images loaded, no horizontal overflow, and no console errors.
- Growth committed `93a56e7` (`Remove strong visual matches helper`) and deployed it to Vercel production `dpl_6i8KSh6FA2Yn6JGQxt9DhfTwepUs` (`https://web-d2y0w5nob-alan-kozulabscoms-projects.vercel.app`), then repointed `https://copycatch-client-preview.vercel.app/client-preview`. Live QA passed: `Reviewed across marketplaces` absent, `Strong Visual Matches` remains visible, no internal terms returned, 34/34 images loaded, no horizontal overflow, and no console errors.
- Growth added a Fable-safe portfolio-expansion review prompt at `docs/fable-context/client-preview-portfolio-expansion-review-request.md`, updated `docs/fable-context/README.md`, and cleaned `docs/fable-context/product-research-summary.safe.md` so future Fable context uses client-facing language (`potential match`, `strong visual match`, `marketplace record`) instead of older internal workflow labels. Prompt asks Fable how to surface more value in the private client preview to impress the client and motivate broader patent portfolio monitoring/enforcement work, while explicitly excluding raw product-research folders, internal workflow notes, source exports, operating procedures, legal conclusions, and collection mechanics.
- Growth committed `2eeb1b2` (`Add Fable portfolio expansion review prompt`) and deployed it to Vercel production `dpl_BBrntcmeF4Ubs8Yy6cER9kMucpAy` (`https://web-1nmwacjb6-alan-kozulabscoms-projects.vercel.app`), then repointed `https://copycatch-client-preview.vercel.app/client-preview`. Smoke check passed: live client view loads, `Private client view` and `Strong Visual Matches` remain present, and `Reviewed across marketplaces` remains absent.
- Alan clarified Fable-prompt handling: for one-time Fable asks, Growth should provide the prompt inline in chat for copy/paste; only create or update markdown files when the prompt/context pack is meant to be reusable, permanent, or evolving. This rule was added to `docs/fable-context/README.md`.
- Growth committed `ad842f5` (`Document one-off Fable prompt preference`) and deployed it to Vercel production `dpl_9T3FyXs5QCmNUYFeJGuYcHK5STY2` (`https://web-jwqee8jbc-alan-kozulabscoms-projects.vercel.app`), then repointed `https://copycatch-client-preview.vercel.app/client-preview`. Smoke check passed: live client view loads, `Private client view` and `Strong Visual Matches` remain present, and `Reviewed across marketplaces` remains absent.
- Amazon/Codex sent Marketplace thread `019f4393-09e4-73e3-8f71-4dbc11046854` a reusable training note so future marketplace cases mirror the Amazon/consolidated process: inventory-first crawl, batch image/contact-sheet screen, detail-harvest only retained rows, strict Strong/Borderline/Exclude/Unable mapping, front workbook columns `Image/Tier/Confidence/Reason/Product URL`, 300x300 in-cell images, normalized backend fields, strongest-only preview export, field/image/manifest verification gates, and no per-row report rebuilds.
- After Alan/Growth spotted weak eBay cards, Amazon/Codex sent Marketplace a targeted eBay re-review request: treat all existing eBay `0.95` scores as stale, re-review the full eBay reviewed set by hero image, remove plain center-hole/spacer/generic crimp beads from Strong, reserve client-preview Strong for clear side-plunger/locking-bead visuals, and regenerate eBay review/backend exports before Tech reintroduces eBay cards. Internal case rubric added at `Product Research/Crimplok 698/Internal Visual Scoring Standard - 698.md`.
- Alan decided the eBay issue implies the whole non-Amazon marketplace lane should be recalibrated. Amazon/Codex sent Marketplace a full regrade directive for all non-Amazon reviewed rows (Walmart/Etsy/eBay/AliExpress/SHEIN/VerticalRetailers/others): regrade from hero images only, ignore stale confidence/title-based Strong labels, audit current Strong rows first, update both main and recalibration fields, rebuild workbooks/backend/preview exports, and report old vs. new Strong counts plus downgraded former Strong rows. Case directive added at `Product Research/Crimplok 698/Marketplace Full Regrade Directive - 698.md`.
- Tech Lead was told to hold any marketplace preview refresh until the Marketplace full regrade is complete and Amazon/Codex independently validates the final Strong/preview-safe rows against the internal visual scoring rubric. Marketplace was asked to ping Amazon/Codex thread `019f42ad-3d8e-78e2-b110-e449779b85fb` with final manifests, reviewed/strongest export paths, old vs. new Strong counts, downgraded former Strong rows, and any rows needing spot-check. Automation heartbeat creation was attempted but unavailable on this host, so the handoff dependency is thread/message based.
- 2026-07-10 Tech Lead redeployed the current eBay-hold preview state after Amazon/Codex instructed no further marketplace preview refresh until the full non-Amazon visual regrade is validated. Source remains `4412ad1` (`Hide eBay rows from Crimplok preview samples`) on `origin/main`. New deployment `dpl_2EDXoC5cBW3nr3ccYSdBqykKFMgB` (`https://web-ff5oue8w6-alan-kozulabscoms-projects.vercel.app`) is aliased to `https://copycatch-client-preview.vercel.app/client-preview`. Live checks passed: `/client-preview` 200, headline counts intact (`10,589`, `710`, `190 / 485`, `35 unknown`), sample-card section has no eBay listing URLs/labels, and the marketplace summary still retains the existing eBay `1,559 / 97` count pending validated regrade handoff.
- 2026-07-10 Amazon/Codex greenlit the corrected full non-Amazon regrade, and Tech Lead refreshed the client preview from the corrected consolidated package. Commits on `origin/main`: `0a42055` (`Refresh Crimplok preview after marketplace regrade`) and `2551f4a` (`Show regraded strongest preview rationale`). Public alias `https://copycatch-client-preview.vercel.app/client-preview` now points to Vercel deployment `dpl_6wkEoFQueQed4WuvyHV27ye4UyPC` (`https://web-m87nlnp4s-alan-kozulabscoms-projects.vercel.app`). Live checks passed: `/client-preview` 200, `11,224` screened, `674` potential matches, `388` strongest records, eBay summary `2,194 / 84`, eBay sample cards reintroduced, previously weak eBay IDs `397828364822`, `386384497143`, `397908534686`, and `157983830638` absent, preview-card image 200, product-reference image 200, and no banned legal-conclusion wording.
- 2026-07-10 Marketplace completed the full non-Amazon visual regrade and Amazon/Codex independently validated it against `Product Research/Crimplok 698/Internal Visual Scoring Standard - 698.md`. Spot-checked nominated strongest rows across eBay/Etsy/Walmart/AliExpress/SHEIN/VerticalRetailers; promoted rows visibly show round/disc bead bodies with side plunger/locking peg features. Backend contract check passed: non-Amazon reviewed rows `976`, non-Amazon strongest-only preview rows `219`, required field gaps `0`, and weak eBay IDs `397828364822`, `386384497143`, `397908534686`, `157983830638` absent from strongest-only preview.
- Amazon/Codex rebuilt the consolidated Crimplok package at `Product Research/outputs/019f42ad-3d8e-78e2-b110-e449779b85fb/crimplok_698_consolidated/`: reviewed JSON `crimplok-demo-consolidated-reviewed-listings.json` has `1,167` rows; strongest preview JSON `crimplok-demo-client-preview-strongest-listings.json` has `388` rows (`Amazon 169`, `Etsy 135`, `eBay 63`, `VerticalRetailers 11`, `AliExpress 4`, `Walmart 3`, `SHEIN 3`), all `matterId=crimplok-demo`, `decision=include`, `status=qualified`, `tier=1`, confidence >= `0.85`. Workbook `Crimplok 698 - Consolidated Master Review.xlsx` was refreshed with `1,167` embedded image anchors/media files and `Open listing` product-link cached display text.
- Amazon/Codex notified Marketplace thread `019f4393-09e4-73e3-8f71-4dbc11046854` that the regrade passed independent QA and sent process feedback for future marketplace scans. Tech Lead thread `019f47d9-540c-7913-a781-189ba9a1b37f` was greenlit to refresh/deploy from the corrected consolidated strongest JSON and can reintroduce eBay cards from that export. Growth thread `019f47e9-e302-7bf2-880d-09372ce602b6` was told the stable package is ready for the final copy/polish pass. Caveats remain: DHgate blocked/no reviewed rows, SHEIN limited to already-collected rows, and evidence capture IDs remain blank until real capture assets exist.
- Later on 2026-07-10 Marketplace completed an additional logged-in eBay `crimp stopper beads` continuation follow-up. The six net-new eBay IDs were all screened as Exclude, but the refreshed Marketplace backend/review package superseded the prior non-Amazon package: non-Amazon reviewed rows `1,488`, non-Amazon strongest rows `237`, eBay review workbook `642` reviewed rows (`81` Strong, `28` Borderline, `530` Exclude, `3` Unable), and weak eBay IDs still absent from strongest-only preview.
- Amazon/Codex rebuilt the consolidated package again from the newer Marketplace backend manifest at `Product Research/outputs/019f42ad-3d8e-78e2-b110-e449779b85fb/crimplok_698_consolidated/`. New consolidated manifest generated `2026-07-10T19:05:13.860Z`: reviewed JSON `crimplok-demo-consolidated-reviewed-listings.json` has `1,679` rows; strongest preview JSON `crimplok-demo-client-preview-strongest-listings.json` has `406` rows (`Amazon 169`, `Etsy 135`, `eBay 81`, `VerticalRetailers 11`, `AliExpress 4`, `Walmart 3`, `SHEIN 3`). Workbook `Crimplok 698 - Consolidated Master Review.xlsx` has `1,679` embedded image anchors/media files and `Open listing` hyperlink cached display text. Strongest export validation passed with `0` bad rows, `0` required-field gaps, and weak eBay IDs `397828364822`, `386384497143`, `397908534686`, `157983830638` absent.
- Amazon/Codex sent Tech Lead thread `019f47d9-540c-7913-a781-189ba9a1b37f` the newer consolidated paths/counts and requested another client-preview refresh/deploy from the `406`-row strongest JSON. Evidence IDs remain blank/pending unless real capture assets exist.
- 2026-07-10 Tech Lead refreshed and deployed the client preview from the newer consolidated package generated `2026-07-10T19:05:13.860Z`. Commits on `origin/main`: `075bd99` (`Refresh Crimplok preview after eBay follow-up`) and `4b2c38e` (`Polish Crimplok client preview messaging`). Public alias `https://copycatch-client-preview.vercel.app/client-preview` now points to Vercel deployment `dpl_9ebd3UZAmwbriVJD39hXmzgH14NQ` (`https://web-ex9byw5lh-alan-kozulabscoms-projects.vercel.app`). Live checks passed: `/client-preview` 200, `11,230` screened, `699` potential matches, `406` strong visual matches, eBay summary `2,200 / 109`, eBay sample cards visible, weak eBay IDs `397828364822`, `386384497143`, `397908534686`, `157983830638` absent, preview-card image 200, product-reference image 200, rationale visible, and no banned legal-conclusion wording.
- Final Vercel deployment ID for that committed-source redeploy: `dpl_9ebd3UZAmwbriVJD39hXmzgH14NQ`.
- Growth redeployed the same rebased `main` source after final Fable-context review and QA. Public alias `https://copycatch-client-preview.vercel.app/client-preview` now points to Vercel deployment `dpl_8HQS7m25A3CuL9TeisZyGfgQStWw` (`https://web-q8pes3yyt-alan-kozulabscoms-projects.vercel.app`). Verification passed: `pnpm build`, `pnpm typecheck`, local responsive QA at 390px/768px/1440px, and live QA at 390px/1440px. Live checks confirmed `11,230` screened, `699` potential matches, `406` strong visual matches, eBay `2,200 / 109`, `$1.4M-$3.5M` modeled collection range, Amazon cluster copy, Next steps/Broader portfolio close, all 34 images loaded, no horizontal overflow, no console errors, weak eBay IDs absent, and internal/risky terms absent.
- Alan flagged that Walmart having only `3` strong visual matches feels unexpectedly low for a generic jewelry-finding product. Amazon/Codex asked Marketplace thread `019f4393-09e4-73e3-8f71-4dbc11046854` to run a Walmart-only re-audit: broaden discovery keywords, re-check Walmart Borderline/Exclude false negatives, and report whether the low count reflects real inventory scarcity vs. collection/screening miss. Tech Lead thread `019f47d9-540c-7913-a781-189ba9a1b37f` was told not to treat the current Walmart count as final if another refresh request arrives before the Walmart audit completes.
- Growth redeployed again after rebasing onto `03e1072` (`Document Walmart preview audit caveat`) so the public alias reflects the latest `main` head. Public alias `https://copycatch-client-preview.vercel.app/client-preview` now points to Vercel deployment `dpl_4asE8LhHVNupuurmegz8vM6XSfCk` (`https://web-jjdk06trv-alan-kozulabscoms-projects.vercel.app`). Final live QA passed at 390px and 1440px: `11,230` screened, `699` potential matches, `406` strong visual matches, eBay `2,200 / 109`, `$1.4M-$3.5M` modeled collection range, Amazon cluster copy, Next steps/Broader portfolio close, all 34 images loaded, no horizontal overflow, no console errors, weak eBay IDs absent, and internal/risky terms absent.
- Tech Lead documented the Walmart audit caveat in platform commit `03e1072` (`Document Walmart preview audit caveat`) and redeployed the current data-stable preview to Vercel production `dpl_43xNpNjGrjXJgz4NT4a5cDJw6yGU` (`https://web-e91ry61r4-alan-kozulabscoms-projects.vercel.app`). Public alias `https://copycatch-client-preview.vercel.app/client-preview` points to that deployment. Live checks passed: `/client-preview` 200, `11,230` screened, `699` potential matches, `406` strong visual matches, eBay `2,200 / 109`, weak eBay IDs absent, preview-card image 200, product-reference image 200, and banned legal-conclusion wording absent. Data is unchanged; Walmart `3` strong visual matches remains provisional pending the Walmart-focused audit.
- Final alias verification after Growth redeploy: `https://copycatch-client-preview.vercel.app/client-preview` points to `dpl_4asE8LhHVNupuurmegz8vM6XSfCk` (`https://web-jjdk06trv-alan-kozulabscoms-projects.vercel.app`). `vercel inspect` confirmed the deployment is Ready, and live `HEAD /client-preview` returned `200`.
- Growth changed the recovery metric label from `Modeled Collection Range` back to `Potential Recovery` in platform commit `ea1ca03` (`Clarify Crimplok recovery estimate label`). The visible metric keeps the `$1.4M-$3.5M` range, while the tooltip now says: `Using CopyCatch's proprietary review technology, we estimate this as potential recovery for this case. Recovery is not guaranteed, and counsel determines any recovery strategy.` The internal `$2K-$5K` range remains unrendered. Deployed to Vercel production `dpl_3gebScj6H27D2BZHSFUHLKPwXhs3` (`https://web-qnvt61krz-alan-kozulabscoms-projects.vercel.app`) and repointed `https://copycatch-client-preview.vercel.app/client-preview`. Verification passed: `pnpm build`, `pnpm typecheck`, local QA at 390px/1440px, and live QA at 390px/1440px with no horizontal overflow, 34/34 images loaded, no console errors, `Potential Recovery` visible, old label absent, tooltip present, and formula terms absent.
- Growth polished the `Potential Recovery` help treatment in platform commit `925d141` (`Polish recovery estimate tooltip`). The oversized clipped panel was replaced with a compact, anchored ink popover that works by hover, keyboard focus, and mobile tap. Tooltip copy now reads: `Using CopyCatch's proprietary sales estimate technology, we estimate the potential recovery for this case. Actual recovery is not guaranteed.` Deployed to Vercel production `dpl_5VMqzRYvsTXQo4VhzDaWt2kaFVGd` (`https://web-jvc9lk4ck-alan-kozulabscoms-projects.vercel.app`) and repointed `https://copycatch-client-preview.vercel.app/client-preview`. Verification passed: production build, sequential monorepo typecheck, local and live QA at 390px/1440px, 34/34 images loaded, tooltip contained within the viewport, no horizontal overflow, and no browser warnings/errors.
- CopyCatch client-preview routing was made matter-specific in platform commit `9100dd5` (`Route Crimplok client preview canonically`). Canonical client URL is now `https://copycatch-client-preview.vercel.app/client-preview/crimplok-698`; the prior `/client-preview` path permanently redirects there. The share title/description now state `CrimpLok 698 Client Review` and `699 potential matches documented across 8 marketplaces for attorney review.` A framework-native 1200x630 Open Graph card includes CopyCatch branding, the protected Bead Buddy Magical CrimpLoks package, `11,230` screened, and `406` strong visual matches. Deployed to Vercel production `dpl_4KQcUGh76HSCKG8BhTMFmHo3YzMp` (`https://web-9r9bi2xjq-alan-kozulabscoms-projects.vercel.app`) and repointed the public alias. Verification passed: build, typecheck, old-link redirect, canonical/OG/Twitter metadata, rendered share-card image, full client page `34/34` images, no horizontal overflow, and no browser warnings/errors.


- 2026-07-10 Tech Lead canonicalized the CrimpLok 698 client route in platform commit 9100dd5 (Route Crimplok client preview canonically). Public client URL is now https://copycatch-client-preview.vercel.app/client-preview/crimplok-698; legacy https://copycatch-client-preview.vercel.app/client-preview redirects with 308 to the canonical route. Final public alias points to Vercel production deployment dpl_4KQcUGh76HSCKG8BhTMFmHo3YzMp (https://web-9r9bi2xjq-alan-kozulabscoms-projects.vercel.app), created from the pushed source after the manual deployment dpl_4VMDUXqnASresEjZmqqwXygNYXnX. Verification passed: canonical route 200, legacy route 308, 11,230 screened, 699 potential matches, 406 Strong Visual Matches, eBay 2,200 / 109, matter-specific metadata present, and https://copycatch-client-preview.vercel.app/client-preview/crimplok-698/opengraph-image returns a 1200 x 630 PNG. No backend/API contract, preview-token, or matterId=crimplok-demo changes were made.
- Growth aligned the CrimpLok client-preview typography and card rhythm in platform commit `b14e683` (`Align CrimpLok preview content rows`). Top metric label is now `Listings Screened`; all metric labels reserve equal row height. Strong-visual-match cards now reserve equal title, match-chip, and rationale rows with a deliberate two-line title clamp, while the `Next steps` and `Broader portfolio` panels reserve matching headline rows at desktop. Deployed to Vercel production `dpl_V5rMVpJY8njPh8YTCJPjcxBsmwJw` (`https://web-804f41tx1-alan-kozulabscoms-projects.vercel.app`) and repointed `https://copycatch-client-preview.vercel.app/client-preview/crimplok-698`. Verification passed: build, typecheck, local 390px and desktop 1440px QA, live desktop QA with exact matching card/title/rationale/headline baselines, `34/34` images loaded, no horizontal overflow, and no browser warnings/errors.
- Growth corrected the CrimpLok share-card brand lockup in commits `bf9a7e9` (`Use CopyCatch wordmark in preview card`) and `fb01e7f` (`Refresh preview card image URL`). The generated Open Graph card now uses the actual `/brand/copycatch-wordmark-black.svg` asset instead of an improvised favicon-plus-text treatment. The metadata image URL is versioned with `?rev=wordmark` to bypass the prior immutable image cache for new Slack/SMS unfurls. Deployed to Vercel production `dpl_HSj9Dz6sT2DyZzqcSPWBY2fYCnW9` (`https://web-lwgb89s26-alan-kozulabscoms-projects.vercel.app`) and repointed `https://copycatch-client-preview.vercel.app/client-preview/crimplok-698`. Verification passed: build, typecheck, live image render, correct updated `og:image` and `twitter:image` URLs, and no browser warnings/errors.

## 2026-07-12 Growth V2 marketing and client workspace polish
- Growth applied the Calibrated Precision direction to the public homepage, `/for-litigators`, `/for-patent-owners`, and `/assessment`, plus a claims-safe assessment confirmation route. The public message remains managed-service and counsel-led: CopyCatch organizes factual marketplace records; legal conclusions remain with counsel.
- The authenticated client portfolio and published-record browser now use a denser image-led factual workspace with portfolio/matter hierarchy, search, marketplace filtering, gallery/list views, and client-safe empty and error states. No imported scores, tiers, internal notes, provenance, or unpublished records were added to client surfaces.
- Local verification passed after production foundations landed: monorepo `pnpm typecheck`, `pnpm build`, desktop 1440px and mobile 390px checks for all public routes, no horizontal overflow, and no browser console errors. The separate static CrimpLok client preview remains out of scope and untouched.
- Growth commit `8d8a02a` (`Polish V2 marketing and client workspace`) was rebased on `d2238b1`, pushed to `main`, and deployed from the correct `web` Vercel project as `dpl_8Uid1k3ToZDfUVUvddpGfEJ28YQf` (`https://web-1wtz4ejl8-alan-kozulabscoms-projects.vercel.app`). The protected pilot alias `https://copycatch-v2-pilot.vercel.app` now points to that release. The separate `https://copycatch-client-preview.vercel.app/client-preview/crimplok-698` alias remains on `dpl_ApKJgXAZcxpxN78tTs9bJkSMVqvE` and was not repointed.
- Vercel's root repository link was found to be a different project with an outdated static-site configuration. Its setting was restored; the deploy used the checked-in `apps/web/.vercel` link to the established `web` project, whose Next.js build completed successfully.

## 2026-07-12 Completed-design audit and V2 public/client release
- All eight resumed Fable 5 Max design projects completed, including IP Monitoring Service Workspace. Growth recorded the full source map and implementation gates in `docs/design/v2-generated-artifact-manifest-2026-07-12.md`; generated `BUILDABLE NOW` labels do not override deployed API, role, allowlist, claims, or copy contracts.
- Growth commit `b23d8fd` (`Polish V2 public and client experience`) was rebased onto Tech audit commit `c165eb6`, pushed to `main`, and deployed from the checked-in `apps/web/.vercel` project as `dpl_GjW7RDY8EfbMweqENHHsgtbb9oGc` (`https://web-3nr5jyb6a-alan-kozulabscoms-projects.vercel.app`). The protected pilot alias `https://copycatch-v2-pilot.vercel.app` now points to that exact release.
- Public improvements: one responsive CopyCatch header/footer system, per-route SEO metadata, assessment confirmation polish, and production 404/loading/service-interruption states. Client improvements: explicit Records navigation, consistent system states, gallery/list accessibility, filter result announcements, lazy controlled media, and an accessible Request Attention composer/count.
- Verification passed from a clean generated state: monorepo `pnpm typecheck`, `pnpm build`, and `pnpm test`; 26/26 dashboard API contract tests; 390x844 and 1440x900 rendered QA across `/`, `/for-litigators`, `/for-patent-owners`, `/assessment`, `/assessment/received`, 404, and `/workspace`; no horizontal overflow; no app-origin console warnings/errors. Browser-extension-only wallet warnings were excluded from app results.
- Outside-in verification: protected pilot `/` `200`, `/workspace` `200`, unknown route `404`, and the separate public `https://copycatch-client-preview.vercel.app/client-preview/crimplok-698` `200`. The public preview was not repointed or restyled.
- Contract-first surfaces remain unshipped: monitoring cycle/scope telemetry, image-rich reports, invitations/member admin, batch/withdrawal/history/audit reads, seller detail/group work, managed-operations setup/import, and active trademark/copyright workflows. Pricing, ROI, proof, security/legal copy, and investor economics remain owner/claims approval first.

## 2026-07-12 Fable 5 Max design sprint resumed
- Fable access resumed after the shared session reset. Growth started eight independent sanitized completion runs in parallel: IP Monitoring Service Workspace, Reports and Communications, Internal Review, Investor Demo Kit, Managed Operations, Access and Account, claims-safe Marketing Library, and Production Foundations consistency/accessibility/handoff.
- The monitoring workspace is the only net-new high-priority system; the other runs audit and finish existing Calibrated Precision projects without starting another visual direction. Marketing Core, Client Workspace, and Multi-IP architecture were already complete and were not regenerated.
- Implementation gates remain explicit: existing contract-backed marketing/client/internal surfaces may be polished; monitoring cycles, report jobs, invitations/members, seller-group detail, publication withdrawal/revisions/batches, audit reads, and operations creation require contracts first; pricing/proof/security/legal/investor metrics require owner or legal approval.
- Design-sprint tracking commit `e8a9301` (`Track resumed V2 design completion sprint`) was rebased and pushed to `main`. Growth's intermediate deployment `dpl_AwYr9ZUbXE3JZtKt2t8ghvK1JADX` was subsequently superseded by Tech's clean committed-source deployment `dpl_B4Qnr2x8mDkTdWhzCrexZPRmS6cY`, which is the authoritative target for `https://copycatch-v2-pilot.vercel.app`. No product code changed in this release; the separate static CrimpLok preview was not repointed.
- Growth closed the completed weekend vertical-slice goal and activated the follow-through implementation goal: after the active Fable runs finish, inventory and claims/contract-audit every artifact; implement remaining contract-backed and approved Calibrated Precision work with Tech; preserve the static preview; complete responsive/accessibility/auth/contract/end-to-end QA; then commit, rebase, deploy, and leave Alan only owner/legal/new-contract decisions.
- The implementation-goal handoff is committed on `main` as `a6fe65e` (`Plan post-design V2 implementation goal`). Vercel deployment `dpl_92fGXif72yDiorK1DazMvq2F5WP8` (`https://web-1vmojs8yn-alan-kozulabscoms-projects.vercel.app`) is Ready and now serves `https://copycatch-v2-pilot.vercel.app`; root and `/workspace` return `200`. The static CrimpLok preview remains separate and returns `200`.

## 2026-07-11 Dashboard V2 seller-context and protected-pilot release
- Platform commit `6985634` (`Clarify unresolved seller identity grouping`) is deployed as Cloud Run revision `dashboard-api-00013-8xn` at 100% traffic from image `dashboard-api:6985634`; Cloud Build `a6aa0d8e-b033-45a7-9951-3800798a1c3f` succeeded. The real dev import produces `2,044` records across `543` seller contexts: `542` identified sellers plus one explicit internal-only `Seller identity not captured` bucket containing `915` unresolved eBay/Walmart records. This prevents a missing seller ID from being presented as a named seller or as client data.
- Growth frontend commits through `27d678c` are deployed to protected Vercel preview `dpl_96dXsD2a2LVZA7PYurVusyFvTHAU` at `https://web-pjmjj30p3-alan-kozulabscoms-projects.vercel.app`; `https://copycatch-v2-pilot.vercel.app` now resolves to that release. It includes server-backed Seller summaries, mobile redirect sign-in, client-role surface hardening, and client-specific authentication language. The public Crimplok preview alias was not changed.
- Live signed-in verification as the internal administrator passed: the Seller lens rendered `543` groups, `2,044` source records, a `50`-context first page, and the explicit unresolved bucket with `915` records; there was no desktop horizontal overflow. The client matter route still rendered only the published record, its approved rationale, and client-safe metadata with no internal navigation or review fields. API health, protected pilot, and public `/client-preview/crimplok-698` each returned `200`; the dashboard API suite remains `22/22` green.
- Growth commit `b19093c` (`Route dashboard entry to authenticated workspace`) is pushed to `main` and deployed as Vercel preview `dpl_EyLUi6ie1CTEXTYsyjvE54z37tvv` (`https://web-covz2316e-alan-kozulabscoms-projects.vercel.app`), aliased to `https://copycatch-v2-pilot.vercel.app`. The stale `/dashboard` surface now returns a `307` to `/workspace`, so the pilot has one authenticated dashboard entry point. Live verification also confirmed the public Crimplok preview at `/client-preview/crimplok-698` remains `200` and untouched.
- Growth commit `41f5172` (`Route login to client workspace`) is pushed to `main`. It retires the stale public `/login` page, which described internal review material but only linked to the static preview, and redirects it to the Firebase-authenticated `/workspace` entry instead. Web typecheck and production build passed. A protected Vercel deployment was attempted, but Vercel rejected it with the free-tier `api-deployments-free-per-day` limit; do not retry for 24 hours. The existing protected pilot remains on `dpl_96dXsD2a2LVZA7PYurVusyFvTHAU`, and the public Crimplok preview was not changed.
- Growth commit `674353c` (`Tighten client navigation on mobile`) is pushed to `main`. The client header now hides its nonessential workspace descriptor below the `sm` breakpoint and uses compact navigation spacing/type there, keeping the persistent Portfolio/Exports controls within a narrow mobile viewport. Web typecheck and production build passed. This is queued with `41f5172` for the next protected Vercel deployment window; no further deployment attempts should be made until the cap resets.
- Platform commit `4d01329` (`Add verified client enrollment binder`) is pushed to `main` and source-aligned in Cloud Run revision `dashboard-api-00014-pfg`, serving 100% traffic after Cloud Build `a78c523f-a173-48cf-b831-1105eeaea889`. `pnpm --filter @copycatch/dashboard-api bind:client` requires a real Firebase UID, verified matching email, and a declared operator-email context; it defaults to dry run and requires `--apply` to write the client-owner membership. The resulting role is `owner` with only `requestAttention` and `export`; `internal` and `publish` remain false. The binder verifies the target through Firebase Auth, refuses internal/publisher identities, records an account audit event with `actorDeclaredEmail` rather than falsely claiming verified operator provenance, and is idempotent. Independent backend verification passed all `26` contracts and typecheck. A real dry run against Alan's Firebase UID was refused with `refusing to bind an internal user as a client`, confirming it makes no privilege-downgrade write. Runbook: `docs/client-enrollment.md`.
- Growth deployed the queued protected frontend through `4d01329` as Vercel deployment `dpl_AD4sjY9Y2wnAuTYNVj6kFan5pbAg` (`https://web-1dejur9od-alan-kozulabscoms-projects.vercel.app`) and moved only `https://copycatch-v2-pilot.vercel.app` to that release. The deployment includes the queued authenticated `/login` redirect and compact mobile client navigation. Vercel production build passed; `/login` returns `307`, `/workspace` returns `200`, and the public static preview at `https://copycatch-client-preview.vercel.app/client-preview/crimplok-698` remains `200` and was neither modified nor repointed.
- Growth commit `707fda5` (`Add V2 design production wave plan`) is pushed to `main`. `docs/design/claude-design-v2-wave-plan.md` inventories the complete public, client, internal, managed-operations, reporting, investor, and multi-IP surface area; labels each item NOW, POLISH, GATED, or DEFER; and supplies nine sanitized Claude Design prompts plus six Fable review prompts. Main was already based on current `origin/main`, so synchronization was a verified fast-forward with no rebase delta and unrelated PM/design worktree changes were left untouched. The protected pilot was rebuilt successfully as Vercel deployment `dpl_613LWK4w4kyXwGoQNVKLUFeNDW6S` (`https://web-eaqerz48d-alan-kozulabscoms-projects.vercel.app`) and only `https://copycatch-v2-pilot.vercel.app` was updated to that release; the public static preview was not repointed.
- Growth commit `37b02db` (`Add client portfolio workspace`) is pushed to `main` and deployed as Vercel preview `dpl_9oXx2AvCGvT3JNxTMMegiuAyzXLE` (`https://web-1m6yhuqyh-alan-kozulabscoms-projects.vercel.app`), aliased to `https://copycatch-v2-pilot.vercel.app`. `/workspace` is now the authenticated account-level portfolio landing view rather than a hard redirect to one matter; it lists client-available patent matters and routes into published records. Live signed-in desktop QA, build, typecheck, and whitespace checks passed. The public Crimplok preview remains untouched.
- Growth commit `682e588` (`Use scalable seller summaries`) is pushed to `main`. It moves the internal Seller lens from a browser-side crawl of all source-record pages to the deployed internal `/sellers` summary contract, with server filters, opaque cursor pagination, review counts, and stable record links. Build, post-build typecheck, and whitespace checks passed. Vercel rejected the follow-up preview deployment because the project exceeded its daily free deployment cap; the protected pilot remains on the prior verified deployment until the quota resets or the project plan is changed.
- Growth commit `8d0b219` (`Use redirect sign-in on mobile`) is pushed to `main`. The protected portal retains desktop Google popup sign-in but uses Firebase redirect sign-in below the mobile breakpoint, avoiding popup fragility on phone browsers. Build, post-build typecheck, and whitespace checks passed; it awaits the same Vercel deployment quota reset as the seller-lens release.
- Growth commit `27d678c` updates the shared Firebase auth state so client routes say `Opening your client workspace` rather than exposing internal-workspace language. Build and typecheck passed; this commit is queued behind the same Vercel daily deployment cap and has not changed the public preview.
- Platform commit `e102e7a` (`Restrict legacy matter routes to internal review`) is deployed as Cloud Run revision `dashboard-api-00012-x7r` with 100% traffic after Cloud Build `d425bc9e-1b66-482a-9e44-07704e78528b` succeeded. Legacy raw listing, sample, and direct evidence URL routes now require internal review in addition to account scope; client memberships are explicitly denied all nine internal surfaces. Independent post-deploy verification passed: API health `200`, all 22 dashboard API contract tests passed, protected V2 pilot `200`, and the public Crimplok preview `200` and unchanged.
- Platform commit `6985634` (`Clarify unresolved seller identity grouping`) supersedes the seller aggregation behavior in revision `dashboard-api-00013-8xn`, serving 100% of Cloud Run traffic after Cloud Build `a6aa0d8e-b033-45a7-9951-3800798a1c3f`. Real dev-data verification reads only seller/review summary fields and returns `2,044` source records as `543` internal contexts in about `608 ms`: `542` identified seller IDs plus one explicit `Seller identity not captured` review bucket containing `915` unresolved eBay/Walmart records. The endpoint returns 50-row cursor pages, server filters/totals, and stable example record IDs. The unresolved bucket is internal-only and is never serialized as a named client seller. Authorization hardening from `e102e7a` remains included.

## 2026-07-11 Dashboard V2 attention/export UI release
- Growth commit `526f997` (`Connect client attention and frozen exports`) is pushed to `main` and deployed as protected Vercel pilot `dpl_AF3cRAkwMQxEhuMkcPTQDXuyBhwc` (`https://web-oz9wxqpsh-alan-kozulabscoms-projects.vercel.app`), aliased at `https://copycatch-v2-pilot.vercel.app`. The existing public static route `https://copycatch-client-preview.vercel.app/client-preview/crimplok-698` was not changed or repointed.
- New client routes: published-record attention thread and `/workspace/patents/crimplok-demo/exports`. New internal routes: `/internal/matters/crimplok-demo/attention` and `/internal/matters/crimplok-demo/exports`. Both rely on Firebase bearer identity and the deployed account-scoped API; no direct Firestore reads or marketplace-image fallbacks were added.
- Live QA passed the complete attention lifecycle on the published Crimplok record: client request `received`, internal `in_review`, factual `responded`, then the client-visible request history/status. This creates an audit-backed bridge without exposing imported assessment, scores, tiers, internal notes, provenance, or reviewer identity.
- The frozen-export UI labels the current capability honestly as a JSON pilot and scopes exports to immutable published snapshots only. Initial live POST QA exposed a runtime IAM gap; Tech corrected it with conditional `roles/storage.objectCreator` access for `dashboard-api-runtime@copycatch-platform-dev.iam.gserviceaccount.com` restricted to the `exports/` object prefix. Retest passed: client-created export `ed8090bf-a26b-4e3f-a5af-b44b43e07a8d` captured one immutable published revision, POST returned `201`, signed-download returned `200`, and the 1,450-byte artifact checksum `5d973958d1d68ca76f3c5250dfa790333b63187572da52ce25c4450d4b08b150` contained only the expected allowlisted client fields. The runtime retains no delete/overwrite permission and cannot write outside `exports/`. Tech commit `71f547a` (`Document least-privilege export storage IAM`) records the binding and verification procedure in `infra/DISPLAY-MEDIA-IAM.md`.
- Frontend verification passed: `pnpm --filter @copycatch/web typecheck`, `pnpm --filter @copycatch/web build`, Vercel build, signed-in authenticated browser QA for review/publication/client record/attention, and mobile client-record visual QA. The Evidence Desk save path now rehydrates controlled media after the review response so a completed review does not drop its candidate image.
- Growth follow-up commit `40d48e2` (`Clarify export workspace audience`) is pushed to `main` and deployed as protected pilot `dpl_345aZ2vuwmnAWZhE1XNqczbkj7Uc` (`https://web-hnwpq7w2q-alan-kozulabscoms-projects.vercel.app`), now aliased at `https://copycatch-v2-pilot.vercel.app`. Internal and client exports share the same contract/UI, while signed-out guidance now correctly identifies the caller’s workspace type.
- Growth commit `9df48e5` (`Add seller review lens`) is pushed to `main` and deployed as protected pilot `dpl_2KNdKUMvd5gt7Zdk8Y3fcm1qQcrs` (`https://web-c4m2x394b-alan-kozulabscoms-projects.vercel.app`), now aliased at `https://copycatch-v2-pilot.vercel.app`. The previously unresolved Internal Shell Sellers tab now groups all `2,044` imported source records into `543` seller contexts, with record count, marketplace scope, pending/strong human-review counts, country, search, and a direct record-review action. Live signed-in QA passed at desktop and 375px mobile with no page-level horizontal overflow; build/typecheck also passed. Public static preview was not repointed.

## 2026-07-11 Dashboard V2 authenticated vertical-slice release
- Alan completed Firebase Google sign-in as `alan@kozulabs.com`; UID `6bvhJaRer1YNkpleYU0UyNbQE813` is bound to `copycatch-demo-account` as internal admin/publisher with review, publish, and member-management permissions. The Cloud Run runtime identity has self-signing permission for short-lived controlled-media URLs.
- Growth commit `93cc719` (`Build publication and client workspaces`) is deployed to protected Vercel pilot deployment `dpl_AosAuiPGnbtozZGBE2M7zZYkwCLq`, aliased at `https://copycatch-v2-pilot.vercel.app`. An authenticated end-to-end proof succeeded: source record `SR-69382B69` was human-reviewed as Strong visual match, saved as review version 1, published as immutable revision 1, and rendered as client record `572e715841fc43d9c2b38b07f3ee1b06ddb12416` with controlled media on desktop and mobile.
- Tech commit `a9951b8` (`Add attention and frozen export contracts`) is pushed to `origin/main`. Cloud Build `cc91c5d5-0b65-4edb-8540-b3cc55f1ed6c` produced exact image tag `a9951b8`, deployed as Cloud Run revision `dashboard-api-00010-zqq` serving 100% of traffic.
- Request Attention is now a versioned, audited lifecycle: `received -> in_review -> responded`. Client creation/read operates only on published records; internal status updates require review access and optimistic `expectedVersion`.
- Frozen export pilot creates immutable published-revision references and a private signed-download `json_v1` artifact from the exact client allowlist. It is intentionally labeled as a pilot JSON artifact; image-rich Excel generation remains later. Client membership requires explicit `requestAttention` and `export` permissions.
- Verification passed: complete monorepo production build, complete monorepo typecheck, complete monorepo test command, and 16/16 dashboard API contract tests. Tests cover attention ordering/version conflicts, export normalization and field stripping, idempotent import preservation, controlled-media separation, publication gates, human-review versioning, and zero internal-field leakage into published client payloads.
- Live revision logs prove Alan's signed-in pilot matter, source-record, controlled-media, and review-write requests return `200/204` on revision `dashboard-api-00010-zqq`. The public static route `https://copycatch-client-preview.vercel.app/client-preview/crimplok-698` was not changed or repointed.

## 2026-07-11 Dashboard V2 weekend vertical slice
- Tech deployed the authenticated, account-scoped source-record API at Cloud Run revision `dashboard-api-00006-pnv` from platform commit `7f9dfd9`. The dev import contains `2,044` unique source records from `2,162` reviewed rows, `503` unique strongest records, `502` controlled display images, and one explicit copy failure. Imported assessment, human review, publication state, and controlled display media remain separate contracts.
- Growth implemented the first Calibrated Precision internal frontend slice under `apps/web/app/internal`, `apps/web/components/dashboard-v2`, and `apps/web/lib/dashboard-v2`: matter Review Scan Grid, controlled-media-only rendering, Evidence Desk detail, responsive internal shell, imported-assessment labeling, and explicit pending human review. The frontend never falls back to marketplace image URLs and does not read Firestore directly.
- The remaining live-pilot access gate is Firebase browser login and role binding. The API requires a Firebase bearer ID token plus account membership and an internal admin/litigator/staff role. No Firebase users existed at the backend handoff, so Alan, Nick, and a test client must each complete one Google sign-in before Tech can bind their UIDs. Do not add a fake static internal token to bypass this boundary.
- Weekend product bar: prove one coherent managed-service loop from authenticated portfolio/matter access through real imported review, Evidence Desk, human decision, immutable Publication Queue snapshot, client Published Records, Request Attention, and frozen export. Preserve `/client-preview/crimplok-698` unchanged until the authenticated slice passes.
- Growth frontend commit `6a08ee3` (`Build authenticated V2 review foundation`) was rebased onto backend review-write commit `6b06906` and pushed to `main`. A non-production Vercel preview was deployed as `dpl_HxiCJNW19HMknRGWbfj6edM7Q9y7` at `https://web-hesvfe79w-alan-kozulabscoms-projects.vercel.app`; the internal route is `/internal/matters/crimplok-demo/review`. The public client-preview alias was not changed. Local and Vercel production builds pass, web typecheck passes, and the 390px protected/configuration state has no overlap. Tech must authorize this exact domain in Firebase/CORS and add only the public Firebase web metadata before the first sign-in.
- The Evidence Desk review-write UI now targets the deployed expected-version PATCH contract: human classification, internal-only note, separate client-facing rationale, fixed confirmation region, `409` latest-version reload, persisted review version, and reversible last change by button or `Z`. Imported assessment remains untouched and client visibility still requires a later immutable publication action. The public static preview remains independent.
- Review-write frontend commit `6508552` (`Connect V2 human review workflow`) was rebased and pushed to `main`. Vercel preview deployment `dpl_A9LwWxfKcHZz2KJ2WCiYAQEbniN5` is aliased at `https://copycatch-v2-pilot.vercel.app`; the internal route is `/internal/matters/crimplok-demo/review`. Vercel build and local typecheck/build pass. The existing public `/client-preview/crimplok-698` alias was not repointed.
- Alan completed the first Firebase sign-in and was bound to `copycatch-demo-account` as internal admin/publisher. Live signed-in QA subsequently proved the Firestore Scan Grid and controlled product images load at the stable pilot after Tech granted the Cloud Run runtime identity self-signing permission for short-lived media URLs.
- Growth implemented the next Calibrated Precision slice against publication API commit `a04efa6`: desktop-only internal Publication Queue with exact client preview/acknowledgment, immutable publish command, responsive authenticated client Published Records list, and published-record detail using only the client allowlist. Request Attention remains non-destructive until its audited endpoint is deployed; export UI follows the frozen-export contract.

## 2026-07-10 CopyCatch V2 import and authenticated-read foundation
- Google Cloud user auth and Application Default Credentials were restored for `alan@kozulabs.com`; Firebase Google sign-in is enabled. Firestore Native, Cloud Run, billing, dedicated service accounts, and private storage were verified in `copycatch-platform-dev`.
- Platform commit `7f9dfd9` (`Build idempotent research import foundation`) is pushed to `origin/main`. Cloud Build `739aeda2-bba8-412b-85d2-d98c605f9766` produced the exact commit image, deployed as Cloud Run revision `dashboard-api-00006-pnv` at `https://dashboard-api-866881757145.us-central1.run.app`.
- Imported manifest `crimplok-demo-20260710230018-c4f6eec909f3`, schema `copycatch.research-import.v1`, checksum `c4f6eec909f35e5e30b04a220789a7d5d958cea9ff1a9328fb8c9f0505e35bd2`. The source contained `2,162` reviewed rows and `595` strongest rows; exact duplicate collapse produced `2,044` unique source records and `503` unique strongest candidates. A repeated completed import returned `created: 0`, `updated: 0`.
- Created private `copycatch-platform-dev-display-media` storage with public access prevention. `502/503` unique strongest-record images copied successfully; `etsy:4351452528` remains explicitly `copy_failed` because the source returns HTTP 404. Display media is separate from evidence assets and delivered only through short-lived signed URLs.
- New internal API routes provide paginated source-record list, detail, and controlled display-media URL responses. Firebase bearer auth, account membership, internal role checks, and strict internal/client serializers are enforced. Outside-in verification passed: health `200`, no-token internal read `401`, invalid scoped preview `403`, and approved Vercel-origin CORS. Seven API/import contract tests pass, including reimport preservation and zero client-field leakage.
- Firebase currently has zero enrolled users. Alan, Nick, and the client test identity must each complete one Google sign-in to create immutable Firebase UIDs before role memberships can be assigned. The public `/client-preview/crimplok-698` route was not changed or repointed.
- P0 authentication is locked to Firebase Web SDK Google sign-in with short-lived user ID tokens sent directly to the dev API; no shared `DASHBOARD_INTERNAL_API_TOKEN` will be created. Vercel project `copycatch-platform` now has public Firebase metadata and the dev API URL configured for Development, Preview, and Production. `copycatch-client-preview.vercel.app` is an authorized Firebase domain and is in the Cloud Run CORS allowlist.
- Platform commit `6b06906` (`Add versioned human review writes`) is pushed to `origin/main` and deployed from a clean commit archive as Cloud Run revision `dashboard-api-00007-qpn`; Cloud Build ID `02f82a21-9434-49bd-8a28-c45a8c2f0d32`. Internal reviewers can `PATCH` a source record review with `expectedVersion`, human review state, client rationale, and internal note. Firestore transactions reject stale versions with `409`, keep imported assessment separate, and create an audit event. Ten API/import/review contract tests pass; live no-token write returns `401` and CORS advertises only `GET, PATCH, OPTIONS` to the approved origin.
- Growth/Tech integrated the Firebase-authenticated Calibrated Precision internal pilot in commits `6a08ee3` (`Build authenticated V2 review foundation`) and `6508552` (`Connect V2 human review workflow`). Stable pilot URL: `https://copycatch-v2-pilot.vercel.app/internal/matters/crimplok-demo/review`; latest Growth deployment at handoff: `dpl_A9LwWxfKcHZz2KJ2WCiYAQEbniN5`. Google sign-in uses short-lived Firebase ID tokens, review writes use optimistic versions with conflict/undo handling, and controlled images hydrate only through the signed-media API. Full typecheck/build/test passed; 390px sign-in QA showed no overflow. The public client-preview alias was not repointed.
- Platform commit `a04efa6` (`Add immutable publication revisions`) is pushed to `origin/main`. Cloud Build `6beb0cd1-adbd-4a86-8580-0bf6346104cb` deployed exact commit image `a04efa6` as Cloud Run revision `dashboard-api-00009-9fv`. Publication Queue reads only human `strong_visual_match` records; publish requires explicit user publish permission, expected human-review version, approved rationale, and controlled media. A Firestore transaction creates immutable numbered revisions, updates the latest pointer, and appends an audit event. Client published-record reads use an exact allowlist and fresh signed media URLs; imported score/tier/internal notes/provenance cannot serialize. Twelve contract tests pass. Outside-in checks: health `200`, no-token publish `401`, no-token client read `401`, approved pilot CORS includes `GET, POST, PATCH, OPTIONS`.
- Firebase Google provider and Vercel public metadata are configured, but the dev Firebase tenant still has zero enrolled users. Alan must complete one Google sign-in at the stable pilot URL before Tech can bind `alan@kozulabs.com` to `internal=true`, `permissions.publish=true`, and the dev admin membership. Nick and the client test identity follow the same one-time enrollment flow later.

## 2026-07-10 Crimplok 698 final consolidated release
- Amazon/Codex consolidated and independently verified the final reviewed package at `Product Research/outputs/019f42ad-3d8e-78e2-b110-e449779b85fb/crimplok_698_consolidated/`: `1,729` reviewed records, `576` Strong Visual Matches, and `202` Borderline records (`778` retained in total). The human review workbook contains `1,729` embedded 300px images anchored to their cells; the strongest-only export has zero preview-policy violations and all reviewed rows have `Product Form` populated.
- Tech Lead committed, rebased, pushed, and deployed platform commit `e585a07`. Public URL: `https://copycatch-client-preview.vercel.app/client-preview/crimplok-698`; legacy `/client-preview` permanently redirects. Vercel deployment `dpl_94QNkQXaTNoSADt3vt42fW93TYSg` is live. Independent live verification returned `200` and the page displays `11,280` screened, `778` potential matches, and `576` Strong Visual Matches. The final strongest-only JSON is an exact match to the deployed preview source.
- Growth consolidated the Dashboard v2 product/UX plan with Tech Lead and Fable feedback at `copycatch-platform/docs/dashboard-v2-product-ux-plan.md`. Highest-merit additions: two-mode triage/detail review, pinned protected-product comparison, dedicated publication queue, server-side client field allowlists, inherited client rationales, defined attention/withdrawal states, and bounded image-rich Excel exports. V1 remains focused on authenticated review, controlled publication, client published records, comments/flags, and exports; advanced seller merging, analytics, threaded comments, and mobile publishing are deferred.
- Dashboard v2 plan commit `689ef19` (`Plan Dashboard v2 product and UX`) was rebased and pushed to `main`. Vercel production deployment `dpl_DdmAZw73K9234SCfCR5sgwaAFkjp` (`https://web-h6g06axx8-alan-kozulabscoms-projects.vercel.app`) completed successfully and the public client-preview alias was repointed. Live verification passed: canonical matter route returned `200` and legacy `/client-preview` returned the expected permanent redirect.

## 2026-07-10 Crimplok 698 non-Amazon final visual re-audit
- The non-Amazon lane completed a fresh all-bucket visual regrade with a shared Amazon-aligned standard: Strong requires a visible round/disc bead plus a distinct solid lateral plunger/locking peg; title wording and inherited flat scores are not evidence.
- Confidence now represents visible feature-match likelihood: Strong `0.85-0.97`, Borderline `0.70-0.84`, Unable about `0.50`, clear Exclude `0.01-0.12`. This fixed the prior eBay failure mode where exclusions still carried `0.95`.
- `Product Form` is now present as `Individual|Kit` on all non-Amazon master and backend reviewed rows. Kits remain in the research/attorney-review set when a qualifying item is visibly present, but unclear/mixed kit collages are not strongest-only preview candidates.
- Final self-contained non-Amazon package: `Product Research/outputs/019f4393-09e4-73e3-8f71-4dbc11046854/crimplok_698_backend_preview/manifest.json`; 1,538 reviewed rows, 407 Strong / strongest-preview rows, 180 Borderline, 934 Exclude, and 17 Unable. The reviewed JSON includes `productForm`, `productVariationId`, `sellerBrandName`, and `sellerUrl`; its manifest embeds marketplace screened/reviewed/strong/borderline/exclude/unable/OOS/blocked counts.
- eBay rose from 81 to 124 Strong after its all-bucket image audit, while the specifically flagged weak rows remain excluded. Walmart’s focused discovery and visual audit produced 130 Strong rows. Retained-row seller-field gaps are zero and the strongest-only preview policy check passed with zero violations.
- Global Codex frontend-design skill installed at `/Users/alan/.codex/skills/frontend-design/SKILL.md` from the current upstream guidance at `anthropics/claude-code/plugins/frontend-design`. The skill now explicitly treats that GitHub source as the upstream source of truth and refreshes against it before frontend work when network access is available. This local global skill applies to future Codex projects on this machine; it does not change general ChatGPT web behavior outside Codex.
- Growth corrected the CrimpLok share-card brand lockup in commits `bf9a7e9` (`Use CopyCatch wordmark in preview card`) and `fb01e7f` (`Refresh preview card image URL`). The generated Open Graph card now uses the actual `/brand/copycatch-wordmark-black.svg` asset instead of an improvised favicon-plus-text treatment. The metadata image URL is versioned with `?rev=wordmark` to bypass the prior immutable image cache for new Slack/SMS unfurls. Deployed to Vercel production `dpl_HSj9Dz6sT2DyZzqcSPWBY2fYCnW9` (`https://web-lwgb89s26-alan-kozulabscoms-projects.vercel.app`) and repointed `https://copycatch-client-preview.vercel.app/client-preview/crimplok-698`. Verification passed: build, typecheck, live image render, correct updated `og:image` and `twitter:image` URLs, and no browser warnings/errors.
## 2026-07-11 mykitchen.bio B2 email integration and B3 handoff
- Tech Lead reviewed and merged Growth PR `#115` (`Port B2 transactional email suite`) into `main` at merge commit `0525c7cf`. The package adds ten Working Cookbook transactional/lifecycle email renderers with HTML/plain-text twins, typed money, escaping, safe links, dark-mode/mobile treatment, and consent-correct unsubscribe behavior while preserving the existing Resend transport.
- Independent acceptance passed: `test:email:templates`, `test:stage2:recovery-refund`, typecheck, production build, diff hygiene, and Vercel preview. Production deployment `dpl_CRbFYf7JMVpEBaKVkikD14WVZT9U` is Ready and aliased to `www.mykitchen.bio` / `mykitchen.bio`; outside-in smoke returned `200`.
- Missing creator/cookbook metadata is omitted rather than invented. Tech follow-ups are typed enrichment of existing receipt/delivery/recovery sends plus server triggers for refunds, payout landed, first draft, founding confirmation, and living-book updates; broadcast sending remains consent-gated.
- Growth completed B3 onboarding/auth in PR `#117`, merged to `main` at `eec59891`. The release ports the approved creator login and draft-ready surfaces, carries the real generated draft through the auth decision, preserves Google and browser-preview paths, adds actionable auth errors, and adds the targeted onboarding visual contract test.
- B3 acceptance passed at the rebased main revision: onboarding visual contract, Stage 1 gates, OAuth recipe handoff, typecheck, production build, responsive checks at 360/390/430/1280 with zero horizontal overflow, and zero browser console warnings/errors. Vercel production deployment `dpl_AVrHH4jWwt6YB1tEFVMGkufWU1w7` is Ready; `www.mykitchen.bio`, `/login`, and `/start/ready` returned `200`.
- Alan changed frontend ownership: Growth/Codex now owns mykitchen.bio frontend implementation and end-to-end UI QA. Fable remains an advisor for content strategy, product reasoning, critique, and creative direction; Growth uses Fable through Alan's logged-in Chrome session and may use Claude Design for approved screens/assets, then independently reconciles every recommendation against canon, contracts, product truth, and the live implementation.
- Fable collaboration requests must ask for explicit principles, assumptions, decision rules, rubrics, tradeoffs, and examples. Do not request hidden chain-of-thought, private system prompts, or attempts to reproduce protected internal reasoning. Fable output is advisory and never overrides Alan's decisions or repository canon.
- Alan designated the Growth/Codex thread as mykitchen.bio's Main Operator and primary project interface. The Main Operator owns the integrated roadmap, day-to-day prioritization, frontend implementation and UI QA, Tech Lead coordination, Sobia management, GTM readiness, and post-launch learning. Alan remains strategic owner and is escalated only for product promises, pricing/economics, legal/tax, material spend, new brand/IA direction, irreversible commitments, and launch activation. Tech Lead owns backend integrity, contracts, schema, payments, infrastructure, security, and deploy mechanics, with stop-the-line authority for correctness and risk. The commercial objective is a durable low-touch software business; income is an objective to validate through usage, conversion, retention, support load, and unit economics, never treated as guaranteed.
- The founder-delegated operator model was synchronized across `AGENTS.md`, `docs/operating-model.md`, and `docs/fable-operating-playbook.md`, rebased on current main, and merged through PR #119 at main `6710f540`. Vercel production deployment `dpl_6ESoS9YCSTSBzHE8E6Ry2NerK9Qu` is Ready and aliases `https://www.mykitchen.bio`; production smoke returned HTTP 200 for `/` and `/login`. Tech Lead received the same lane contract and was asked to continue holding inherited frontend PRs #72/#73/#79 pending the Main Operator's merge/repair/supersede audit.
- Alan adopted the founding commercialization sequence: production-ready invited creator/buyer journey + credible Instagram profile first, then Sobia recruits a controlled founding cohort to onboard, provide behavioral feedback, and attempt real sales. `docs/strategy/founding-creator-cohort-plan.md` defines three activation gates (product/operations, social credibility, acquisition operations), a ten-target A-warm Wave 1, Main Operator batch approval, observed self-service onboarding, funnel diagnosis, and the 5-creators/20-transactions/refund/payout proof target. Alan gives one wave-level go decision rather than approving individual sends; broad outbound and paid traffic remain closed until cohort evidence and the pre-GTM truth review pass.
- The founding cohort plan was merged through PR #120 at main `f2e44fcc`, after rebasing on current main. Production deployment `dpl_NLqJuremL7E3zZ1QzMMEEB4iBETb` is Ready and aliases `https://www.mykitchen.bio`; `/` and `/login` smoke checks returned HTTP 200. Tech Lead received the new engineering acceptance target and the existing hold on PRs #72/#73/#79 remains in force pending the Main Operator audit.
- Alan clarified that the overnight Main Operator goal must run without him in the loop. Active scope: evidence-backed dispositions for inherited frontend PRs #72/#73/#79; live creator-journey truth pass and P0/P1 queue; row-level correction package for Sobia's 15-target second-round workbook; bounded Tech Lead handoffs; and a morning report containing only unavoidable Alan actions. No outreach, paid traffic, offer changes, or public-message changes occur overnight. OpenAI billing for 43 pending independent corpus reviews and Alan's first production Google sign-in remain later owner actions, but neither blocks the overnight deliverables.
- The no-Alan overnight goal was committed in `tasks/overnight-main-operator-goal-2026-07-13.md` and merged through PR #121 at main `5de628f3`; the launch tracker now names the Codex Main Operator as maintainer and points to the active checkpoint. Production deployment `dpl_BHA8S3bjZdftiaUWgUcNU4YgARAs` is Ready, aliases `https://www.mykitchen.bio`, and the homepage smoke check returned HTTP 200. The goal remains active until the frontend dispositions, journey queue, Sobia correction package, and Tech Lead handoffs are complete.
- Fable delivered `docs/fable-operating-playbook.md`, covering the project model, decision hierarchy, creator psychology, messaging/CRO/UX/creative frameworks, ship rubrics, decision traces, contradiction resolution, launch priorities, collaboration protocol, and the pre-ship checklist. It is now second in the canonical docs reading order after `docs/operating-model.md`.
- Canon correction adopted: launch video input means short-form by duration, specifically TikTok, Instagram Reels, and YouTube Shorts up to 10 minutes plus video-file upload. Long-form YouTube remains post-launch and must not be promised as a launch input.
- Frontend self-review is resolved with an independent pre-merge gate: every creator-facing frontend change is reviewed by a separate Codex context that did not implement it. The reviewer verifies canon/product truth, conversion and phone comprehension, reference fidelity at 390/1280 (plus 360/430 for high-traffic mobile), interaction/accessibility states, and runtime quality. P0 blocks merge; P1 needs an explicit disposition.
- Alan taste-gates new visual direction, IA, brand expression, and materially different public messaging. Canon-faithful ports, responsive fixes, accessibility repairs, and implementation corrections may merge on independent review plus automated evidence. New economic, legal, or offer claims always return to Alan.
- The dedicated Claude web advisory chat is now named `MKB`. It was created from Alan's logged-in Chrome session, and its initial charter records the new roles, short-form-only input truth, independent frontend review gate, decision-trace format, and Sobia management boundary. Fable 5 Max was still composing its acknowledgment when browser control was released.
- Growth reviewed `/Users/alan/Downloads/Sobia's 2nd round research.xlsx`: one sheet, 15 creator rows, and all eight requested research columns are present. The batch is not outreach-ready yet. Required repair themes: explicitly resolve `thefeastrecipes` vs `feastrecipes`; correct the approximately 30-day-stale account marked active; distinguish verified paid recipe products from affiliate products, coaching, ordinary recipe posts, and inaccessible/private pages; replace blanket `dms_open = Yes` with actual open/follow-first/unknown evidence; make fresh facts name the real recipe or product; and reflect the captured business email in `best_contact` where appropriate. Nothing sends before repair, product gate, and Alan's GTM call.
- Integration checkpoint `2026-07-13`: mykitchen.bio canonical `main` is synchronized through `77b077d9`, including B2 email integration, B3 onboarding/auth, and the Fable advisory operating-model update. Growth/Codex is the Main Operator for integrated roadmap, frontend, GTM, and launch acceptance; Tech Lead retains backend/platform ownership and stop-the-line authority. Growth is auditing inherited frontend PRs `#72`, `#73`, and stacked `#79`; Codex is holding merges until Growth returns a merge/repair/supersede recommendation. Sobia outreach remains blocked by Beta-Ready and Alan's GTM call.
- The integration checkpoint was committed through PR `#122` and merged to synchronized `main` at `e5c9545a`. Exact merged source deployed successfully as Vercel production `dpl_4YRtBkhEprHdHHAeDJwYng6X98tj`, aliased to `https://www.mykitchen.bio`, `https://mykitchen.bio`, and the canonical Vercel project aliases. PRs `#72`, `#73`, and `#79` remain unmerged under Growth audit.

## 2026-07-12 CopyCatch Matter Loop decision
- Growth used one focused Fable 5 Max adversarial review, then independently reconciled it with the live V2 contracts and Tech's import audit. The accepted next move is one real closed matter loop, not another broad screen wave: validated observation cycle -> cycle-attributed publication -> Attention or authenticated litigator disposition -> client Matter Pulse -> frozen export.
- The authoritative contract plan is `copycatch-platform/docs/monitoring-cycle-matter-pulse-contract-plan.md`. Tech's initial plan commit `41a14b3` established the import-backed Monitoring Cycle, immutable Coverage Snapshot, append-only Matter Events, and client-safe Pulse. Growth refinement commit `0fbb496` added the precise `observations_completed` boundary, freeze-time count reconciliation, internal publication-to-cycle attribution, litigator-only disposition authority, correction by supersession, smaller event vocabulary, live-versus-frozen state separation, and client/investor falsification tests.
- Rejected or deferred Fable suggestions: no software-first repositioning, no reopening the locked assessment CTA, no generic metrics-administration product, no investor KPI theater, and no blanket rewrite of client-specific recovery context. Export verification and portfolio aggregation remain P1.
- First implementation slice: idempotently backfill the existing latest validated import before another import replaces source-record manifest membership; never guess historical scope or cycle attribution; add the client-safe Matter Pulse serializer and role/leakage tests; then Growth connects the authenticated client matter landing view. The separate static CrimpLok preview remains unchanged.
- Repo state at handoff: `main` and `origin/main` include `0fbb496` (`Refine matter loop contract controls`), `c143a14` (`Guard matter pulse metric definitions`), and `090afcc` (`Anchor matter pulse frontend source`) with zero rebase delta. The follow-ups forbid relabeling imported/retained rows as all listings screened without an explicitly validated manifest-summary definition and anchor the future Pulse UI to Calibrated Precision sections `3d`/`3h` with contract corrections for cycle attribution and last-visit semantics. Web typecheck and production build passed. Vercel production deployment `dpl_9BCPB2SfS4rebxtemi7AV9B6Wc1Y` (`https://web-8i6uisbqh-alan-kozulabscoms-projects.vercel.app`) is Ready and serves `https://copycatch-v2-pilot.vercel.app`; root and `/workspace` return `200`. The separate static CrimpLok preview remains unchanged and returns `200`.
- Matter Loop backend commit `954ebb5` (`Build monitoring cycle and matter pulse contracts`) and web adapter commit `8e75179` (`Add client matter pulse adapter`) are rebased on `090afcc` and pushed to `main`. The dev backfill created immutable cycle `crimplok-demo-20260710230018-c4f6eec909f3` from the accepted import with `2,044` deduplicated observed records, one current published record, and one attention request; the client Pulse deliberately omits imported/screened counts. Future imports create the cycle and completion event atomically; publication, attention response/request, and frozen export writes now atomically append domain events. Counsel dispositions require an authenticated internal `litigator` with publisher authority, and corrections supersede rather than mutate prior events.
- Cloud Build `52ca2c13-95c2-4b13-a906-1e77b257851f` built exact API image `954ebb5`; Cloud Run revision `dashboard-api-00015-gx8` serves 100% traffic. The new client-safe route is `GET /api/v1/accounts/:accountId/matters/:matterId/matter-pulse`; internal cycle list/detail and litigator-only matter-event POST routes are also live. No-token Pulse access returns `401`. All 31 dashboard API contracts, monorepo typecheck, monorepo build, and the idempotent backfill dry run/apply passed.
- Protected V2 pilot deployment `dpl_F1nPEdH31vCcNBXapLnqJEcsBkdM` (`https://web-6o2dd2fft-alan-kozulabscoms-projects.vercel.app`) is Ready and aliased at `https://copycatch-v2-pilot.vercel.app`. It contains the exact typed `MatterPulse` client contract and authenticated loader for Growth. `/workspace` returns `200`. The public static CrimpLok preview remains on its separate alias, was not repointed, and returns `200` at `https://copycatch-client-preview.vercel.app/client-preview/crimplok-698`.
- Growth implemented the authenticated client Matter Pulse and consolidated published-record browser in commits `6c16573` (`Build client matter pulse`), `57c9892` (`Polish published record gallery`), and `1161c26` (`Refine sparse published record gallery`). Exact Growth-owned files: `apps/web/components/dashboard-v2/ClientMatterPulse.tsx`, `AuthenticatedClientWorkspace.tsx`, and `ClientPublishedRecords.tsx`. The UI shows the protected asset, latest completed observation cycle, configured versus represented marketplace scope, cycle-attributed publications, attention state, client-visible activity, and links into published records and frozen exports. It deliberately exposes no imported assessment, raw score/tier, checksum, manifest, actor, or collection mechanics.
- Final protected-pilot release: Vercel deployment `dpl_7fqg7JfXevZnD5WU2KbZzt3zwHoZ` (`https://web-i1if5nj2q-alan-kozulabscoms-projects.vercel.app`) is Ready and serves `https://copycatch-v2-pilot.vercel.app`. Web typecheck and production build pass. Authenticated live QA passed at `1440x900` and `390x844`: no horizontal overflow; Matter Pulse data and coverage caveat render; the single-record gallery is intentionally bounded to `460px` desktop and full content width mobile; client actions are `44px`; navigation fits; and no internal assessment, score, tier, checksum, or manifest terms render. The separate static preview remains unchanged and `200`.
- Product-model constraint from Alan: CopyCatch should share one type-aware monitoring-to-outcome spine across delivery modes. IP owners may buy recurring monitoring, episodic scans, and evidence deliverables directly; managed-service customers delegate monitoring and escalation; law firms may refer evidence work or matters for CopyCatch-supported enforcement. Patent remains the GTM wedge while the platform shell stays extensible to trademarks and copyrights. The product should make monitoring a visible pipeline into reviewed records, attention, evidence/export, and authorized escalation without exposing internal collection mechanics. Subscription, per-scan/evidence purchase, referral intake, and escalation actions remain contract-first surfaces; do not add nonfunctional commerce or legal-action controls merely to make the pilot look broader.
- Alan clarified the expected human-touch model: CopyCatch systems and operations perform high-volume collection, comparison, and quality control; attorneys such as Nick are not expected to classify records one by one. Counsel should receive only the promoted high-precision set and organized factual package, then supply the limited legal/strategy decision needed to advance, request more information, continue monitoring, or stop. The product therefore sells and demonstrates outcomes and reduced attorney burden rather than seat usage. “Near-zero false positives” is an internal quality objective, not a claim until validated. Referral percentages and contingent allocations are engagement-specific legal/commercial terms and must stay out of default client UX and public positioning. The planning brief was updated in `docs/dashboard-v2-product-ux-plan.md` to encode this operating model.
- Managed-service operating-model planning commit `2d6c0cd` (`Clarify managed service operating model`) is pushed to synchronized `main`. Exact committed source was deployed as Vercel production `dpl_BwpbnoyQSZh1Ha9fnZHiQnCvdGbw` (`https://web-lwn98nbks-alan-kozulabscoms-projects.vercel.app`) and aliased at `https://copycatch-v2-pilot.vercel.app`. The change is planning-only; no product behavior or public copy changed.
- Growth used one focused Fable product-architecture review and an independent Tech feasibility review to translate the low-attorney-touch model into `docs/managed-service-product-delta-plan.md`. The reconciled direction keeps deep software proof while minimizing counsel burden: Ops uses the real Scan Grid/Evidence Desk/quality/package spine; law firms receive Pulse, a concise but drillable counsel package, a package-bound DecisionRequest, and an immutable deliverable; investors may role-flip through sanitized serializers over the same matter and package IDs. The safe P0 uses immutable internal `PackageRecordSnapshot` objects, an accepted `CounselPackageRevision`, append-only `PackageQualityDecision`, matter-scoped external-counsel capabilities, and a package-bound disposition. Client records derive only from delivered package revisions, never from pre-package publication. Display media remains distinct from conditional `CaptureArtifact` integrity records, and neither hashing nor timestamps are described as legal chain of custody or admissibility. Broad CRM, image-rich styling, referral-firm UI, recurring scheduling, and a standalone promoted state remain outside the first contract slice.
- Planning commit `00a03c0` (`Plan low-touch counsel package workflow`) is pushed to synchronized `main`. Exact committed source was deployed as Vercel production `dpl_3SScofpjQNS13V7QcFqM4dBrKbFX` (`https://web-2ruez03qp-alan-kozulabscoms-projects.vercel.app`) and aliased at `https://copycatch-v2-pilot.vercel.app`. This release adds planning documents only; no live product or API contract changed.

## 2026-07-12 Real attorney-referral product QA decision
- Growth analyzed a current attorney-originated Schedule A referral pattern plus three supplied document classes: a short current-matter AI-assisted draft with explicit proof gaps, a long prior-matter claim-chart reference, and an AI-assisted image-rich technical mapping deck. The product conclusion is that prepared counsel may supply the initial feature hypothesis, but CopyCatch must still run a bounded market-surface go/no-go check before deep research. Counsel receives an Opportunity Brief and later a quality-reviewed package; counsel is not expected to operate internal search or review queues.
- The authoritative sanitized plan is `docs/real-inbound-product-qa-plan.md`, linked from `docs/managed-service-product-delta-plan.md`. It defines `InboundOpportunity`, quarantined `InboundDocument`, `FeatureHypothesis`, pre-scope `MarketSurfaceCheck` and `SurfaceObservation`, `EconomicAssumption`, `MatterScope`, `ClaimProofMatrix`, and `ProofTask`, plus five product QA tests and an end-to-end acceptance test.
- Tech returned `READY` after three blocking controls were incorporated: pre-clearance documents cannot enter ordinary membership, serializers, package assembly, investor fixtures, or downstream automation; directional SurfaceObservations never become SourceRecords/cycle/package/client data and can only seed a new scoped record through explicit derivation; and deep research requires an idempotent server gate over a current operationally accepted hypothesis, completed `go` check, approved current scope, and all clearance gates. `operationally_accepted` means Ops considers the hypothesis sufficient for the bounded check only, not legal validation or counsel approval.
- Commercial figures supplied by a referrer and CopyCatch internal collectability scenarios remain separate provenance-tagged assumptions. Neither may be rendered as damages, recovery, factual research output, or a feature-match substitute. Prior-matter work product remains reference-only and can never satisfy a current-matter claim-proof cell.
- Planning commit `d0eb3b9` (`Plan attorney referral validation workflow`) is pushed to synchronized `main` with zero rebase delta. Exact committed source was deployed as Vercel production `dpl_ShKKZU6mYM92RcX47iQwsZn4DTnN` (`https://web-3fw9p3qzu-alan-kozulabscoms-projects.vercel.app`) and aliased at `https://copycatch-v2-pilot.vercel.app`. Vercel build/typecheck passed; pilot root and `/workspace`, dashboard API health, and the separate static CrimpLok preview all return `200`. This is a planning-only release; no API or product behavior changed.
- Immediate referral decision: do not block the current opportunity on additional product UI. After pre-clearance authorization, run the existing research capability in a bounded discovery-only mode to produce a go/hold/no-go recommendation and proposed deep-research scope. A `go` may then release approved scope to the Amazon and non-Amazon research lanes; `hold` or `no-go` creates no Matter, MonitoringCycle, or full research run. Build Opportunity Intake and Surface Check UI only after this pilot plus at least one additional authorized referral reveal stable repeated fields.
- Planning follow-up commit `ae82421` (`Prioritize referral surface check pilot`) is pushed to synchronized `main` with zero rebase delta. Exact committed source was deployed as Vercel production `dpl_33zgHAc9ro24HtkmXVZShK3WM23D` (`https://web-i89o7mrqr-alan-kozulabscoms-projects.vercel.app`) and aliased at `https://copycatch-v2-pilot.vercel.app`. This remains planning-only; no research run or product/API behavior was started by the release.
- The immediate decision audience is Nick as matter lead. For this attorney-originated request, the bounded check should produce a short internal Surface Check Decision Brief: accepted observable criteria, exact sample boundary, representative relevant/ambiguous/irrelevant observations, visible repetition, reliability of visual review, proof gaps, and a go/hold/no-go recommendation. Its sole purpose is to let Nick promptly tell the referring attorney whether CopyCatch can help, needs more input, or should not proceed under the current scope. It is not a client report, legal conclusion, comprehensive market count, damages view, recovery estimate, or engagement acceptance.
- Planning follow-up commit `4aa6f2d` (`Define referral surface check decision brief`) is pushed to synchronized `main` with zero rebase delta. Exact committed source was deployed as Vercel production `dpl_BBRJsycZrBphKLPQ2DzFq8Tb8ABh` (`https://web-nmz0qynba-alan-kozulabscoms-projects.vercel.app`) and aliased at `https://copycatch-v2-pilot.vercel.app`. Vercel build/typecheck passed; this remains planning-only.

## 2026-07-12 Virtual-bezel opportunity-size correction
- Growth re-read the referral language, supplied current/prior technical materials, public claims of US 9,395,917 B2, and one focused Fable 5 Max category analysis, then independently filtered out unsupported market-size claims and arbitrary numeric promotion thresholds. The commercial read is that `initial product area`, representative families, and `many more target products` signal both more sellers/models within vehicle displays and likely additional product categories.
- The research lanes completed a two-gate criteria audit. Gate 1 now contains 89 current 6.36-inch family candidates across up to 28 identified marketplace or retailer accounts before cross-platform legal-entity consolidation; 14 account records have publicly supported non-U.S. geography, also before consolidation. Gate 2 remains the strict public-image set: 9 current listings across 6 seller accounts, including 5 confirmed non-U.S. accounts. Gate 1 is opportunity discovery; Gate 2 is evidence readiness. Neither is a defendant count, complete census, legal conclusion, or damages view.
- The patent claims reviewed do not state a 6.36-inch limitation. The operational expansion map therefore recommends rapid surface checks, subject to counsel-defined screening criteria, for portable CarPlay/Android Auto displays, motorcycle/powersports CarPlay displays, and vertical or odd-aspect Android head units. Android tablets, POS/payment terminals, smartphones, marine displays, and industrial HMIs remain counsel-first or deferred because of OS ownership, B2B channels, seller concentration, or proof burden.
- The authoritative sanitized strategy is `docs/virtual-bezel-product-area-opportunity-map.md`; `docs/referral-surface-check-result-2026-07-12.md` now records the corrected two-gate result. The internal Nick brief, Jeff reply draft, deeper estimate, and product-area analysis were updated under `Product Research/outputs/019f47e9-e302-7bf2-880d-09372ce602b6/onscreen_6_36_surface_check_2026-07-12/`.
- Planning commit `9e3ce0b` (`Map virtual bezel product-area opportunity`) is pushed to synchronized `main`. Monorepo typecheck and production build passed. Exact committed source was deployed as Vercel production `dpl_5H1p9hWwbkuXCX7Mksxym8KNbDoy` (`https://web-gohy7jsbt-alan-kozulabscoms-projects.vercel.app`) and aliased at `https://copycatch-v2-pilot.vercel.app`. Pilot root, `/workspace`, dashboard API health, and the separate static CrimpLok preview all return `200`; the static preview was not repointed.
- Growth consolidated the initial referral research into a six-page attorney decision brief at `output/pdf/copycatch-6-36-inch-referral-initial-research-summary.pdf`. It presents the GO decision, corrected two-gate counts, three representative product images, Amazon/non-Amazon marketplace reconciliation, the behavior-proof plan, adjacent product-area priorities, response language for Jeff, and five scope questions. The report labels all legal, completeness, entity, and economic boundaries and does not adopt the referrer's revenue/damages/settlement assumptions as CopyCatch findings.
- The PDF was rendered to PNG and visually inspected page by page after two layout passes; logo, image cards, tables, wrapping, footers, page numbers, and hyperlinks are clean. PDF metadata/text extraction checks pass: 6 letter-size pages, 637,024 bytes, no encryption or JavaScript. Monorepo typecheck and production build pass.
- Release commit `86821a4` (`Add referral initial research summary`) is pushed to synchronized `main`; `.gitattributes` now treats PDFs as binary. Exact committed source was deployed as Vercel production `dpl_AjBDC75TuiHsMZESGaVw236ZMLcF` (`https://web-cpnda9l3z-alan-kozulabscoms-projects.vercel.app`) and aliased at `https://copycatch-v2-pilot.vercel.app`. Pilot root, `/workspace`, dashboard API health, and the separate static CrimpLok preview all return `200`; the static preview remains separate and unchanged.

## 2026-07-12 Adjacent automotive marketplace checks
- The non-Amazon research lane completed separate directional checks for portable CarPlay/Android Auto dash displays, motorcycle/powersports displays, and vertical/ultrawide/odd-aspect Android head units. Screen size and aspect ratio are attributes, not patent-screening gates.
- Directional row set: portable `12` Gate 1 / `8` Gate 2; motorcycle `9` / `5`; odd-aspect head units `9` / `3`. Portable ranks first because it has the highest image-ready density, repeated cross-seller hardware families, and the smallest behavior-test matrix; motorcycle ranks second; vehicle-specific odd-aspect units rank third.
- Seller geography is counted only from public seller/business disclosures. Directional unique-seller splits are portable `1 non-U.S. / 0 U.S. / 8 unknown`, motorcycle `3 / 0 / 4`, and odd-aspect `0 / 1 / 6`. Localized Aoocci storefronts require organizational consolidation before any defendant-oriented use.
- Durable outputs are under `Product Research/outputs/019f4393-09e4-73e3-8f71-4dbc11046854/adjacent_automotive_opportunity_check_2026-07-12/`. This remains pre-scope opportunity research; Gate 2 imagery does not prove touch behavior.
- The all-size in-dash v2 addendum broadened the automotive display lane beyond portrait/odd-aspect units. Incremental conventional/floating/vehicle-specific/rotatable results are `15` Gate 1 and `12` Gate 2 listings across `7` identified seller accounts (`4 non-U.S. / 0 U.S. / 3 unknown`).
- Combined all-size in-dash result after deduping Joying: `24` Gate 1 listings across `13` identified sellers (`4 non-U.S. / 1 U.S. / 8 unknown`) and `15` Gate 2 listings across `9` sellers. Conventional 7-inch double-DIN, 9-inch vehicle-specific, and 8–10.1-inch floating/rotatable units materially expand the opportunity; odd aspect ratio is a discovery aid, not a gate.

## 2026-07-12 Automotive touchscreen opportunity summary
- Alan's screen-size correction is adopted: broad all-size in-dash automotive touchscreens are the primary opportunity lane because the independent claims reviewed do not recite a numerical screen size and the referring attorney supplied prior automotive claim work. The initial 6.36-inch family is a useful commercial cluster, not the apparent category boundary. Size and aspect ratio remain recorded attributes and discovery aids, never qualification gates.
- Amazon's finalized all-size addendum contributes `12` incremental current landscape/floating listings across `11` sellers, including `10` confirmed non-U.S. sellers. After deduplication against the prior vertical/odd-aspect set, Amazon's all-size in-dash lower bound is `41` Gate 1 listings / `32` sellers (`27 non-U.S. / 2 U.S. / 3 unknown`) and `34` Gate 2 listings / `25` sellers.
- The non-Amazon all-size lane contributes `24` Gate 1 listings / `13` identified sellers and `15` Gate 2 listings / `9` sellers. Lane-summed directional lower bounds are therefore `65` in-dash Gate 1 listing records across up to `45` accounts/storefronts and `49` Gate 2 records across up to `34` accounts/storefronts. These are audited-window records, not deduplicated legal entities, defendants, a complete census, or an infringement conclusion.
- Strategic order is now all-size in-dash first, motorcycle/powersports second, and portable dash displays third. The six-unit proof plan weights four units toward in-dash geometries (7-inch double-DIN, 10/10.1-inch floating/rotatable, 9-inch vehicle-specific, and portrait/ultrawide) plus one motorcycle and one portable unit.
- Final internal attorney brief: `output/pdf/copycatch-adjacent-automotive-opportunity-summary.pdf`; source: `docs/adjacent-automotive-opportunity-summary-2026-07-12.md`. The PDF is exactly three letter-size pages and was rendered at 144 DPI and visually inspected page by page; image cards, tables, wrapping, links, and disclosure boundaries are clean.
- Release commit `8612371` (`Add automotive touchscreen opportunity summary`) is pushed to synchronized `main` with no rebase delta. Monorepo typecheck and production build passed. Exact committed source was deployed as Vercel production `dpl_B1TvKxyQsEu36YbDDqgFXnWLKf7F` (`https://web-gd0i8rwez-alan-kozulabscoms-projects.vercel.app`) and aliased at `https://copycatch-v2-pilot.vercel.app`. Pilot root, `/workspace`, dashboard API health, and the separate static CrimpLok preview all return `200`; the static preview remains separate and unchanged.

## 2026-07-13 Lead Opportunity Researcher role
- Alan identified a missing front-end research role between inbound intake and marketplace collection. The adopted role name is **Lead Opportunity Researcher**: it owns sourced opportunity interpretation, operational patent/trademark/copyright hypotheses, generic non-brand search architecture, adjacent product-area mapping, bounded market-surface checks, and the reconciled GO/HOLD/NO-GO recommendation. Amazon and non-Amazon agents continue to own full collection, enrichment, screening, and marketplace outputs.
- The durable operating playbook is `/Users/alan/Product Research/Lead Opportunity Researcher Playbook.md`; the reusable case record is `/Users/alan/Product Research/_templates/OPPORTUNITY_RESEARCH_BRIEF_template.md`. Product Research local commit `e3017e1` (`Define lead opportunity researcher role`) contains exactly those two files. That workspace has no configured Git remote, so the commit is local-only and no remote rebase/push is possible or implied.
- The role's mandatory outputs are an Opportunity Interpretation Brief, Search Architecture, Product And Commerce Surface Map, bounded Amazon and non-Amazon briefs, reconciled Decision Brief, and approved lane handoffs on GO. Pre-scope observations remain outside marketplace master datasets, SourceRecords, MonitoringCycles, counsel packages, and client surfaces. Marketplace discoveries can propose scope changes but never silently broaden a case.
- Platform commit `ae3dcb3` (`Define opportunity research lead role`) is pushed to synchronized `main`. It adds `docs/lead-opportunity-researcher-role.md` and links the role from `docs/real-inbound-product-qa-plan.md`. The initial workflow remains versioned briefs rather than new UI; a structured Opportunity Research workspace should wait until several referrals validate stable fields and decisions.
- Monorepo typecheck and production build passed. Exact committed source was deployed as Vercel production `dpl_63HsDgw6pRzCfBcp3okHTtot19Vi` (`https://web-h0r1alyyx-alan-kozulabscoms-projects.vercel.app`) and aliased at `https://copycatch-v2-pilot.vercel.app`. Pilot root, `/workspace`, dashboard API health, and the separate static CrimpLok preview all return `200`; the static preview remains separate and unchanged.
- The persistent-agent startup prompt is `/Users/alan/Product Research/Lead Opportunity Researcher Agent Prompt.md`. It instructs the role to read the durable playbook and brief template, preserve sourced inbound facts, interpret patent/trademark/copyright opportunities operationally, build broad generic search architecture, use separate Gate 1 opportunity and Gate 2 evidence-readiness standards, and coordinate the existing Amazon and non-Amazon lanes without replacing their extraction playbooks.
- Product Research local commit `17e83e5` (`Add lead opportunity researcher agent prompt`) contains exactly that prompt. The Product Research workspace still has no configured remote, so this commit is local-only.
- Platform commit `ae31bd4` (`Reference opportunity researcher agent prompt`) is pushed to synchronized `main` and links the durable role document to the prompt. Monorepo typecheck and production build passed. Exact committed source was deployed as Vercel production `dpl_9uhm5f1uFC1e3vZAeNa5tNiquwCa` (`https://web-2t30egih0-alan-kozulabscoms-projects.vercel.app`) and aliased at `https://copycatch-v2-pilot.vercel.app`. Pilot root, `/workspace`, dashboard API health, and the separate static CrimpLok preview all return `200`; the static preview remains separate and unchanged.

## 2026-07-13 Crimplok 698 Amazon Tier 1 evidence package
- The final Amazon Tier 1 package is complete at `/Users/alan/Product Research/Crimplok 698/Final Deliverables/Amazon Tier 1 CN-HK/`. It contains 118 current evidence-ready listings across 39 sellers: 65 CN rows and 53 HK rows. No seller-country `US` rows are included; storefront display names containing `US` do not alter the CN/HK business disclosure.
- Every retained listing has a product screenshot, seller disclosure coverage, and a Texas checkout/order-review screenshot. Full OCR QA passed 118/118 for Texas indicators, seller text, and `Place your order`, with 0 Illinois indicators. The recipient name is not material; the verified destination is Carrollton, Texas 75006. No order was placed.
- Twelve queue rows are held out: 6 unavailable, 5 Amazon redirects requiring review/dedupe, and `B0G397B8CJ`, whose Add to Cart action failed to retain the target ASIN after three attempts. Chrome `Aw, Snap!` error code 5 is classified as a renderer crash and retried/reloaded, not recorded as an Amazon block.
- The clean external package is `/Users/alan/Product Research/Crimplok 698/Final Deliverables/Amazon CN-HK Final Exports/`. It is a flat eight-file folder containing the neutral-named full report, sanitized 118-row workbook with 118 embedded images and clickable product URLs, 39-defendant merchant list, three court-upload PDFs, and court manifests. No filename, workbook sheet, workbook header, PDF field label, or DOCX text exposes Tier, Confidence, Reason, Rationale, or Borderline. Raw screenshots, internal review fields, OCR audits, contact sheets, and working manifests remain outside the final-export folder.
- A post-delivery browser-control-banner audit OCR-checked all 281 processed product, seller, and checkout images. There were zero hits for `ChatGPT is using this browser` or equivalent control text; the final PDF text also had zero hits. The PDF uses only the processed, banner-removed images.
- The 437-page report is packaged directly in the clean final-export folder as three court parts: Part 1 pages 1-108 is 15.09 MB, Part 2 pages 109-265 is 22.82 MB, and Part 3 pages 266-437 is 21.72 MB. Every part is strictly below 25,000,000 bytes, all 437 pages match the source text page-for-page, and 314 PDF link annotations are preserved. SHA-256 values and page ranges are in the adjacent neutral-named court manifests.
- Per Alan's report-format direction, the research-report PDFs now label numbered sections as `Defendant #` and omit Tier, Confidence, and Visual Reason from product detail pages. The XLSX review fields remain unchanged.
- 2026-07-14 external index cleanup removed all variant labels, option indexes, variation IDs, and variant-count annotations from the 437-page research report and its three court-upload parts. All 118 table-of-contents entries now use only `Product <ASIN/Product ID>: Pages <start>-<end>`; product headings, Product IDs tables, and detail tables likewise omit variant metadata. Automated PDF QA reports 118/118 conforming entries, zero suffix artifacts, zero Variant / Variation ID detail labels, and zero variant-bearing product headings. Internal datasets retain variant metadata for evidence lookup and screenshot matching. Product Research commit `2ac182d` records the generator, QA, manifest, and durable workflow changes.
- A full location OCR audit found 38 active product screenshots and one seller screenshot carrying the superseded Chicago delivery header. All 39 were recaptured from Alan's logged-in Amazon session with Carrollton, Texas 75006 active. The product recapture gate forced `scrollY = 0`, verified the requested ASIN and seller, required a visible main `#landingImage`, and then manually reviewed all 38 replacements across seven contact sheets. Final OCR scanned 281 processed images and the 276 filenames referenced by the dataset have zero Chicago and zero Illinois hits; all 38 replacement product images pass Texas OCR and hero-visibility QA. Part 1 page 8 was independently rendered from the published court PDF and visibly shows the hero image plus Carrollton 75006. Product Research commit `edc9bb2` records the recapture gates, OCR audits, neutral final-export publisher, manifests, and durable workflow updates.
- Durable publication boundary: Tier, confidence, screening reason/rationale, borderline flags, reviewer/model identity, and other internal scoring labels remain in masters and internal review materials only. Attorney-, client-, court-, and other final-facing deliverables omit them unless Alan explicitly requests otherwise for a named deliverable. This rule is recorded in Product Research `AGENTS.md`, `Amazon Extraction Platform Playbook.md`, `Deliverable Field Spec.md`, `Agent Team Strategy.md`, the Claude compile-report handoff memories, and the Crimplok final QA summary.
- 2026-07-14 manual calibration supersedes the earlier correction: `B0F99N15ZB`, `B0G1CGKDY4`, and `B0DS8CBRK4` are Tier 1 because the images visibly show a protruding side plunger. The first two are U.S. sellers and are present only in internal/strongest-preview data; `B0DS8CBRK4` is HK and has a clean product screenshot plus a Texas `/spc` order-review screenshot. `B0D93RJJ6T` is retained only as an internal Tier 2 false-positive review row (plain silicone slider beads, no solid side plunger) and remains absent from the Tier 1 final package and strongest-only preview. The final CN/HK package therefore remains 118 evidence-ready listings across 39 sellers (65 CN, 53 HK), with a 437-page report and three court parts under 25,000,000 bytes. Consolidated data contains 2,162 reviewed rows and 597 strongest-preview rows; Amazon is 171 strong, 19 borderline, and 1 reviewed exclusion.

## 2026-07-13 Nicholas Lee authority-site production release
- `Kozu-Labs/nick-site` was rebuilt as an authority-first inbound site for attorney referrals and active IP-enforcement inquiries. The live six-page P0 is `/`, `/for-attorneys`, `/schedule-a-litigation`, `/about`, `/copycatch`, and `/contact`; the CopyCatch page remains a second-viewport bridge rather than the primary trust anchor.
- Final production uses the Annotated Practice design system, the header wordmark `The Law Office of Nicholas Lee`, and the approved glasses portrait recovered exactly from Firebase Hosting version `a13722686c04447a`. The deployed portrait SHA-256 is `ed2134b249eb2b87b8b205a5043dbf73767677bd75b6ef8dcc76d956c6fa6caa` at 1080x1350. Responsive portrait bounds are 330px desktop and 280px mobile; the full image is shown without cropping.
- Source is synchronized on `main` through `3ac9cb6` (`Version law office stylesheet`), following redesign commit `85473ea`, portrait restoration `39d92cb`, and responsive brand/portrait polish `9fc6bd7`. Firebase target `nick-site` in project `nick-site-web` serves `https://nslegal-ip.com` and `https://nick-site-web.web.app`.
- Release QA passed: all six public routes plus favicon, robots, sitemap, and `llms.txt` return 200; a missing route returns a real 404; the private portal retains `X-Robots-Tag: noindex, nofollow, noarchive`; production portrait bytes match the approved asset; desktop 1440x900 and mobile 390x844 have zero horizontal overflow; the cache-versioned stylesheet is loaded on every route. Lighthouse measured Accessibility 100 and Best Practices 100; the SEO audit set passed aside from a Node/Lighthouse canonical-audit runtime bug.
- Contact/Slack integration was preserved and verified with the clearly labeled automated QA submission ID `xtdDwB4xhkQwJ3XUPvKV`; the endpoint returned 200 and function logs contained no Slack-post failure. Do not repeat that QA lead for visual-only releases.
- Remaining approval gate: Nick/legal must verify every published credential and approve the attorney-advertising prepublication checklist before compliance is treated as final. Clio-derived representative-matter or insight content remains deferred until Alan supplies access and Nick/legal approves the minimum-data workflow.

## 2026-07-13 Nicholas Lee IP-enforcement authority expansion
- Growth completed a competitive/search-landscape analysis for patent infringement and enforcement, Schedule A litigation, trademark infringement, copyright infringement, Amazon IP enforcement, and attorney-referral intent. The permanent strategy and human-writing standard are in `nick-site/docs/marketing/ip-enforcement-competitive-search-analysis-2026-07-13.md`.
- Fable's dedicated CC critique was used as an independent advisory input, not adopted wholesale. Accepted recommendations include attorney-first trust sequencing, the supervision boundary, conflicts-safe owner routing, the Amazon decision tool, and `Schedule A is not automatic`. Rejected or deferred suggestions include unsupported attorney bylines, results/performance claims, software-first positioning, and omission of copyright as a search surface.
- Source commit `bd97a65` (`Expand Nicholas Lee IP enforcement authority site`) was rebased and pushed to `main` before Firebase deployment. The site now has fourteen indexed public routes, including separate patent, trademark, copyright, Amazon enforcement, Insights, and three practice-note pages. Each practice page has distinct decision logic rather than keyword-swapped copy.
- Firebase Hosting target `nick-site` in project `nick-site-web` was deployed successfully. Both `https://nslegal-ip.com` and `https://nick-site-web.web.app` return `200` for all fourteen public routes. Production probes confirmed the new titles and page theses; protected portal routes retain `X-Robots-Tag: noindex, nofollow, noarchive`.
- Desktop and 390px mobile QA passed with no horizontal overflow, correct image framing, full-width mobile CTAs, working navigation, valid canonicals/JSON-LD, a fourteen-URL sitemap, and no broken internal links. Console noise was extension-origin only.
- The existing Slack contact function and Firebase rewrite contract were not changed. `site.js` now includes a non-sensitive `regarding` source field for route-level inquiry attribution. No production form submission was sent during this release.
- Nick/legal approval is still required before active promotion, especially for attorney-advertising compliance, credentials, and legal explanatory copy. Clio/client-derived examples, outcomes, and representative matters remain excluded pending the minimum-data protocol and explicit approval.

## 2026-07-13 mykitchen.bio shared public chrome release
- PR `#123` received independent canon, keyboard, responsive, and route review, then was rebase-merged to `main` as `12187ff2`. Automated evidence passed: typecheck, marketing canon, legal routes, and the 90-route production build.
- Vercel production deployment `dpl_2Gx5ptYPda13DyYtWJQazYhNb26X` is Ready and serves `https://www.mykitchen.bio`, `https://mykitchen.bio`, and the main project aliases.
- Production QA passed at 390px for `/`, `/about`, `/examples`, `/compare`, `/terms`, `/privacy`, `/refund-policy`, `/pricing`, and `/product/recipe-engine`: every route returns `200`, has exactly one header and footer, and has zero horizontal overflow. The mobile menu exposes all 14 canonical destinations.
- Stale PR `#72` was closed as superseded. Studio PR `#124` remains unmerged pending its separate backend auth/durable-claim repair; its frontend files were not edited during this release.

## 2026-07-14 mykitchen.bio overnight Beta-Ready operator audit
- The unattended Main Operator audit is recorded in `tasks/evidence/overnight-beta-ready-operator-report-2026-07-14.md`. It reconciles inherited frontend PRs, the creator and buyer journey against live product truth, Sobia's first founding-wave research, and bounded Tech Lead handoffs. No outreach was sent.
- The evidence package was rebase-merged through PR `#125` at main `d3530917`. Vercel production deployment `dpl_411w1eF15eGqGczuiNdCSLbzAbC7` is Ready and serves the canonical `mykitchen.bio` aliases.
- Shared public chrome is live through PR `#123` / main `12187ff2`; the production crawl returned `200` across audited marketing, product, compare, pricing, and legal routes with canonical navigation present.
- Stale Studio PRs `#73` and `#79` were closed. Draft PR `#124` preserves and repairs their useful shell/Home work against current contracts, including signed video upload and Connect status, but remains intentionally unmerged: all seven primary Studio destinations are still data-blind placeholders and would violate Decision 009 product truth.
- Three P0 workstreams remain before founding outreach: complete the contract-backed creator Studio journey, deliver entitlement-backed buyer cookbook access/recovery after checkout, and repair the preview-auth acceptance evidence so forbidden redirects cannot pass as unlocked access. Tech Lead owns the latter two backend workstreams; Growth/Codex owns the complete Studio port and independent UI QA.
- Sobia's 15-row research was independently reclassified in `Marketing/Sobia first wave QA - 2026-07-14.xlsx` with its operating brief at `Marketing/sobia-first-wave-qa-handoff-2026-07-14.md`. Five targets are near-ready after a final contact/personalization check, three are promising but blocked on identity or paid-product verification, and the remainder were rejected or reclassified. Blanket DM-open claims were not accepted without message-screen evidence.
- Alan is not needed for the overnight work. Later owner-only gates remain: first production Google sign-in, OpenAI reviewer billing for the pending corpus denominator, account-level pixel/TikTok configuration, and the single founding-wave GTM go decision after product, social, and acquisition gates are green.

## 2026-07-14 mykitchen.bio buyer cookbook access release
- PR `#126` passed final independent adversarial review with no P0 or P1 findings and was rebase-merged to `main` as `3c9fbe51`. The release adds exact entitlement-backed buyer recovery, a cookbook-scoped signed HTTP-only session, token-free purchased-cookbook routes, and a dedicated interactive Cook Mode with serving scaling, ingredient check-offs, focused steps, and defensive screen wake lock.
- Recovery rechecks entitlement ID, normalized buyer email, cookbook ID, current status, and subscription paid-through state before private data is queried. No-match, delivery failure, and delivery success expose the same public response; expired or denied routes preserve exact cookbook context for recovery without confirming purchase existence.
- Automated evidence passed: typecheck, buyer-access contracts, recovery/refund contracts, launch contracts, disposable real-Supabase entitlement tests, and the 91-route production build. Production deployment `dpl_FtMzRT3zj8UqRW4GoXWF7Sx1ykDD` is Ready and serves the canonical `mykitchen.bio` production project.
- A disposable production purchase fixture verified the real 303 recovery exchange, Secure/HTTP-only/SameSite=Lax cookbook cookie, token-free cookbook render, recipe Cook Mode content, and immediate redirect to generic denial after the entitlement was marked refunded. The fixture and its owning commerce account were deleted and cleanup was verified.

## 2026-07-13 Nicholas Lee authority-site UX polish
- Claude/Fable completed a route-by-route live-site critique. Growth adopted only evidence-backed, high-leverage recommendations: remove the broken-looking mobile datum ornament and fussy link underlines, elevate Schedule A in navigation, complete the footer note index, and replace startup/operations vocabulary with practitioner language.
- Implementation commit `331f7ac` and release-memory commit `c5900aa` are pushed to synchronized `main`; exact final `main` is deployed to Firebase Hosting at `https://nslegal-ip.com`.
- Live 390px/1440px QA passed with zero horizontal overflow, no console errors, correct uncropped portrait, one H1, Schedule A in navigation, and no text-link underline. All fourteen public routes return `200`; 385 internal links passed with zero failures.
- Unverified attorney bylines, admission dates, profile links, representative matters, performance/results language, and specialization claims remain deferred for Nick/legal approval. Slack intake, functions, and private portal behavior were untouched.

## 2026-07-13 CopyCatch marketing-site Vercel release
- Growth rebuilt the public CopyCatch frontend in the canonical Vercel monorepo at `copycatch-platform/apps/web`. The release adds differentiated homepage, litigator, patent-owner, method, record-anatomy, assessment, confirmation, privacy, and six individual managed-workstream pages while preserving the authenticated workspace/internal routes and the separate static CrimpLok client preview.
- Nicholas Lee appears as service provenance, not per-output oversight. Public copy keeps counsel's legal-analysis boundary explicit and excludes accuracy rates, recovery claims, legal conclusions, court-ready/admissibility language, fake dashboard proof, and internal collection/access/scoring/orchestration mechanics.
- Claude/Fable performed an adversarial rendered-site review at 390px and 1440px. Accepted corrections included a complete mobile navigation and always-visible assessment CTA, a visually hidden honeypot, stronger litigator provenance, one public workstream taxonomy, `ShoppingAgent` to `SampleAgent`, `NegotiAgent` to `StatusAgent`, and removal of the production-facing internal editorial-policy panel. Legacy workstream paths redirect to the new routes.
- The assessment form now sends minimal public-reference intake to the existing restricted Slack lead destination through sensitive Vercel Production and Preview environment values. Preview and production release QA submissions both returned `200` with `{ok:true}` and were labeled as QA/no client data.
- Source commits `e664437`, `4e56139`, and final `a55aa89` are pushed to synchronized `main`. Typecheck, production build, diff hygiene, claims scan, link checks, desktop/mobile route crawls, menu interaction, image loading, and no-overflow/runtime-error checks passed.
- Vercel production deployment `dpl_8Gz7hce7asnqT1wB4F3snWh17oPk` is Ready at `https://web-7otv8ymt6-alan-kozulabscoms-projects.vercel.app` and aliased to `https://copycatch-v2-pilot.vercel.app`. All public routes, `/workspace`, `/internal`, `robots.txt`, `sitemap.xml`, and `llms.txt` return `200`. Vercel hosts receive `X-Robots-Tag: noindex, nofollow`; a future `copycatch.ai` host will remain indexable.
- `copycatch.ai` DNS and the current Firebase-hosted production site were not changed. Frank/Alan's remaining cutover action is to choose the canonical frontend repo/domain deployment, attach `copycatch.ai` to this Vercel project, verify the custom-domain Slack intake once, then update the Nick-site CopyCatch bridge if the destination changes. The separate `https://copycatch-client-preview.vercel.app/client-preview/crimplok-698` remains unchanged and returns `200`.

## 2026-07-14 CrimpLok Amazon correction release
- Alan's authoritative Amazon reclassifications are synchronized across the Amazon master, internal tiered review, consolidated backend exports, and client preview. Tier 1 includes `B0F99N15ZB`, `B0G1CGKDY4`, and `B0DS8CBRK4`; false positive `B0D93RJJ6T` is excluded because it is a plain silicone slider bead without a visible solid side plunger.
- The final CN/HK package contains `118` evidence-ready listings across `39` defendants/sellers: CN `65`, HK `53`, US `0`. Texas checkout QA is `118/118`. The 437-page research PDF omits internal Tier, Confidence, and Reason fields and is split into three court-upload parts below 25 MB. Reconciliation passed across CSV, XLSX, DOCX, PDF, and court splits.
- Current consolidated totals are `2,162` reviewed and `597` strongest-preview records. Amazon contributes `191` reviewed: `171` Strong, `19` Borderline, and `1` excluded-reviewed. Product Research commit is `5b31f3d`; platform commit `8f01940` (`Promote corrected Crimplok matches`) is synchronized on `main`.
- Vercel deployment `dpl_3QHaTS8QMN3kUbF1SLs2czgdDEdt` serves `https://copycatch-client-preview.vercel.app/client-preview/crimplok-698`. Independent outside-in verification returned `200`, found all three promoted ASINs in live HTML, confirmed `B0D93RJJ6T` absent, and confirmed the protected pilot and dashboard API health remain `200`.

## 2026-07-14 CrimpLok Texas evidence-package correction
- Full image OCR found `38` active Amazon product screenshots plus one seller screenshot with a superseded Chicago delivery header. All `39` were recaptured from Alan's authenticated Amazon session with Carrollton, Texas `75006` active. Product capture now gates the requested ASIN, expected seller, top-of-page position, visible `#landingImage`, and Texas header; all `38` product replacements were manually reviewed across seven contact sheets.
- Final QA scanned `281` processed images. All `276` referenced product, seller, and checkout filenames have zero Chicago and zero Illinois hits; all `38` replacement products pass Texas OCR and hero-image visibility. Rendered Part 1 page 8 was visually checked from the published court part and passed.
- The external package at `Product Research/Crimplok 698/Final Deliverables/Amazon CN-HK Final Exports/` contains exactly eight neutral-named files and no subfolders: full PDF, sanitized XLSX, merchant DOCX, three court-upload PDF parts, and CSV/Markdown court manifests. The three parts are `15,085,698`, `22,816,438`, and `21,715,185` bytes, each below 25 MB. Filenames contain no Tier, Confidence, Reason, Rationale, or Borderline terms.
- The workbook contains `118` embedded images, `118` clickable URLs, Defendant-number labeling, and no internal review columns. Product Research commit `edc9bb2` records the correction. This is a local evidence/report release only; platform source/data remains clean at `8f01940`, so no duplicate web deployment was made.
- 2026-07-14 embedded-PDF correction supersedes the earlier location-acceptance statement above. Alan found `B0FP99T535` still showing `Deliver to Nick - Schaumburg 60173` in the delivered PDF. A source-of-truth audit extracted all `275` evidence images from the 437-page report and found `30` product-page images still carrying that Illinois header. All 30 were recaptured from Alan's authenticated Amazon session with exact ZIP `75006`, requested ASIN and seller verified, `scrollY <= 10`, and the visible `#landingImage` in frame; six replacement contact sheets passed manual hero review.
- The rebuilt PDF was audited from its embedded images, not from a working screenshot folder or recapture log. Final result: product pages `118/118` contain `75006`; checkout pages `118/118` contain `75006`; forbidden-location hits for `Nick`, `Schaumburg`, `60173`, Chicago, or Illinois are `0`; embedded evidence counts reconcile to `118` product + `118` checkout + `39` seller = `275`. The corrected `B0FP99T535` report page was rendered from both the full PDF and Court Part 2 and visibly shows Carrollton `75006` with the hero image.
- The flat external package remains exactly eight files and no subfolders. Court parts are `15,085,698`, `22,896,309`, and `21,768,078` bytes, all below 25,000,000 bytes; all 437 pages and 314 hyperlink annotations reconcile. Product Research `main` commit `a464ceb` (`Correct all Amazon product location evidence`) records the exact-ZIP capture gate, embedded-PDF audit, updated manifests, and workflow correction. Product Research has no remote, so this commit is local-only.
- Platform `main` was rebased against `origin/main` with zero delta and remains clean/synchronized at `8f01940`. The unchanged corrected preview source was redeployed at Vercel deployment `dpl_7kq1FoBK1CatevseNhXb2wH9FiA2` (`https://web-7pj2h2duw-alan-kozulabscoms-projects.vercel.app`) and `https://copycatch-client-preview.vercel.app` was repointed. Outside-in checks passed: CrimpLok preview `200`, promoted ASINs `B0F99N15ZB`, `B0G1CGKDY4`, and `B0DS8CBRK4` present, false positive `B0D93RJJ6T` absent, protected pilot `200`, and dashboard API health `200`.

## 2026-07-14 Crimplok Amazon workspace closeout
- Product Research cleanup is committed on local `main` at `269e49b` (`Clean Amazon workspace and lock capture preflight`). The Amazon lane removed 47 superseded pilot/probe, duplicate contact-sheet, obsolete-build, and incomplete-ZIP files totaling 67.16 MB while preserving the master/raw inventory, reusable scripts, internal review materials, 191 hero assets, and a consolidated 171-row strong-match proof sheet. Marketplace and unrelated dirty worktree changes were left untouched.
- The final external package remains one flat eight-file folder at `Crimplok 698/Final Deliverables/Amazon CN-HK Final Exports/`. All three court PDFs remain below 25 MB. The compact audit package is at `Crimplok 698/Amazon CN-HK Final Audit/`, and the cleanup manifest is `Amazon Workspace Cleanup Manifest.md`.
- Retained-row gates pass: 190/190 qualified Amazon rows have a local hero image. The refreshed row-level image index has 190 current qualified rows, excludes corrected false positive `B0D93RJJ6T`, and reflects the promoted decisions for `B0F99N15ZB`, `B0G1CGKDY4`, and `B0DS8CBRK4`.
- Final embedded-PDF OCR remains clean across 275 evidence images: product pages `118/118` show exact ZIP `75006`, checkout pages `118/118` show exact ZIP `75006`, and stale Illinois/location hits are zero. The durable workflow now requires setting the approved Amazon address before capture, verifying the exact ZIP on one representative product page and order-review page, clearing the cart, and locking the address for the batch; see `Crimplok 698/Amazon Capture Preflight.md`.
- CopyCatch platform `main` and `origin/main` remain clean and identical at `8f01940`. The unchanged corrected preview source was redeployed as Vercel deployment `dpl_Dwqe1wohywPBhpfTD8W4m1S2iWLJ` (`https://web-65byrwoqx-alan-kozulabscoms-projects.vercel.app`) and `https://copycatch-client-preview.vercel.app` was repointed. Outside-in verification passed: CrimpLok preview `200`; promoted ASINs present; `B0D93RJJ6T` absent; protected pilot `200`; dashboard API health `200`.

## 2026-07-16 mykitchen.bio paid AI provider smoke
- Ran exactly one preserved hard-corpus candidate through the production-intended provider split: Gemini `gemini-3.1-flash-lite` generation followed by independent OpenAI `gpt-5.4-mini` review. Both paid provider calls succeeded without a billing or quota error.
- Gemini completed in 2,906 ms with 2,748 input and 989 output tokens at an estimated $0.002171. OpenAI completed in 19,744 ms with 2,796 input and 2,773 output tokens at an estimated $0.014575. Combined latency was 22,650 ms and estimated cost was $0.016746, below the authorized $0.10 ceiling.
- The independent reviewer returned `publishable=true`, 100% ingredient and instruction coverage, zero unsupported inventions, placeholders, or noise, and surfaced a source-backed salt-method warning rather than rubber-stamping the draft.
- The fail-closed quality contract passed. The remaining 43 checkpointed candidates were explicitly not run; this smoke is provider and boundary evidence, not a corpus-wide publishability claim.
- Durable evidence: `tasks/evidence/paid-provider-smoke-2026-07-16/quality-benchmark.json` and `tasks/evidence/paid-provider-smoke-2026-07-16/README.md`.

## 2026-07-16 mykitchen.bio native-video benchmark release
- PR `#129` preserved the one-item PlantYou native-video benchmark and was rebase-merged to `main` as `3651003fe4e1f278290e8ebee2ed13a6ce62a94e`. Vercel production deployment `dpl_HChBV5haUZ5RxbMgEgZeonePek15` is Ready, was built from exact commit `3651003`, and serves the canonical `mykitchen.bio` aliases. Outside-in smoke returned `200` for `/` and `/pricing`.
- The native-video run used Instagram source `https://www.instagram.com/p/DYSVzzFRfiM/`. Gemini requested and resolved `gemini-3.1-flash-lite`, completing in 6,175 ms with 1,393 input and 1,876 output tokens at an estimated $0.003162. OpenAI requested `gpt-5.4-mini` and resolved `gpt-5.4-mini-2026-03-17`, completing in 33,535 ms with 8,074 input and 4,165 output tokens at an estimated $0.024798. Combined estimated cost was $0.027960.
- Native-video recipe quality failed, while the benchmark's fail-closed disposition passed. The deterministic Growth audit records one unsupported ingredient identity (`yogurt`), two omitted source-supported ingredients (`maple syrup` and `pepper`), one specificity loss (`cherry tomatoes` to `tomatoes`), invalid provenance timestamps, and the semantic inconsistency in the raw reviewer's aggregate defect count. The draft remained `needsCreatorReview=true` and `publishable=false` and must not be used externally.
- Approved checkpoint: “Gemini materially understood native audiovisual content unavailable in the caption, but the draft failed recipe-fidelity quality: it invented one ingredient identity, omitted two overlay-supported ingredients, weakened one ingredient label, and emitted invalid provenance timestamps. The independent reviewer caught the defects, and the benchmark correctly remained creator-review-only and non-publishable.”
- Durable evidence: `tasks/evidence/paid-native-video-smoke-2026-07-16/quality-benchmark.json`, `README.md`, and `source-context.json`. The remaining 43 checkpointed candidates were not resumed.
- Next quality boundary is strict: the known PlantYou answers and prior defects are a post-generation test oracle only. Future generation may receive only the exact native video, exact caption, programmatically extracted transcript, programmatically extracted OCR/overlay sequence, and generic source-agnostic production rules. Freeze and hash the generic prompt/config before selecting a blind holdout; require both the same-video regression and a blind-holdout pass before a three-source mini-benchmark or any 43-item resume. No rerun was performed as part of this release.

## 2026-07-17 Raveyard business context foundation
- Created the canonical Raveyard business context repository at `/Users/alan/Documents/Raveyard`. Its root `CC.MD` is the concise source of truth; `docs/customer-research-synthesis-2026-07-17.md` and `docs/market-and-positioning-study-2026-07-17.md` preserve evidence and limitations. `AGENTS.md` requires future agents to load this context and protects raw customer PII from Git/public artifacts.
- First-party baseline: 754 published reviews from 2023-03-03 through 2026-07-15 average 4.908/5; 712 are five-star. This is strong but biased evidence: every row is curated `ok`, 66 are admin-sourced and uniformly five-star, and the export contains only published reviews. Do not present the average as unbiased satisfaction proof or reuse aggregated storefront counts as product-specific counts.
- The 156-response February-April 2026 survey shows an experienced audience: among 155 valid experience answers, 66 are intermediate, 49 advanced, 27 beginner, and 13 professional. The primary strategic segment is the serious intermediate producer who can make sounds/loops but struggles to finish, arrange, mix, and master a club-ready track.
- Demand is not education versus assets: 79/155 chose new sounds/presets/packs and 76/155 chose education. Paid full-masterclass intent is 103/155 overall and strongest among intermediates at 53/66. Top help needs are mixing/mastering 44/153, arrangement 36/153, sound design 29/153, kick design 19/153, workflow 15/153, and releasing/branding 10/153.
- Canonical position: Raveyard is the artist-built harder-dance production system that helps committed producers move from raw idea or promising loop to a finished, club-ready record faster. The differentiator is deeper hard-techno/schranz/industrial scene specificity plus sounds, tools, editable workflows, and teaching—not catalog breadth or file count alone.
- Near-term priority: build a start-to-finish flagship centered on arrangement and mixing/mastering, prove it through YouTube/webinar content, and keep a parallel focused-pack cadence. Package education with sounds/projects. Treat 107/151 plugin interest as a discovery signal only; validate one narrow workflow and willingness to pay before engineering a plugin line.
- Immediate trust/usability risks: confusing large-bundle organization, inconsistent promotional pricing, apparent review-count aggregation across products, missing/editability friction, refund/support responsiveness, perpetual 90%-off framing, and a live About Us URL that currently renders placeholder free-download content.

## 2026-07-17 Raveyard Meta placement audit
- Analyzed the cumulative Meta export for 2023-06-17 through 2026-07-17 without placing the raw CSV in Git. The file contains 2,482 campaign-placement-device rows plus one summary row and reconciles to $288,988.70 spend, 4,885 tracked website purchases, $387,638.50 purchase value, and 1.341 all-campaign ROAS.
- The export mixes incompatible evidence: 49 of 121 campaigns spent $103,399.33 with zero tracked purchases. `9.19.25 - CBO - D2- STANDARD - WINNERS - UNCAPPED` ($52,929.29) and `ABO - Diablo - Creative Testing` ($34,887.79) account for $87,817.08 of that spend. Their objective and Pixel/CAPI status must be audited before treating the all-campaign placement totals as sales evidence.
- The decision view retains all placement rows—including zero-purchase rows—inside the 72 campaigns that recorded at least one purchase somewhere. It reconciles to $185,589.37 spend, 4,885 purchases, $387,638.25 value, 2.089 ROAS, $37.99 CPA, and $79.35 AOV. At the requested 2.0 target, implied target CPA is $39.68.
- Stage 1 exclusions for purchase campaigns: Facebook Reels (1.692 ROAS), Facebook Stories (1.554), Audience Network Rewarded Video (0.155), Facebook Feed: Video Feeds (1.446), Facebook In-stream Reels (1.555), Audience Network Native/Banner/Interstitial (0.049), and Facebook Search Results (0.419). Together they spent $12,779.09 at 1.385 ROAS. Keep the separate `Ads on Facebook Reels` placement, which reported 3.393 ROAS on $523.43.
- Borderline controlled exclusions under the literal 2.0 rule: Instagram Reels (1.925 ROAS on $33,023.42), Instagram Explore (1.866 on $1,654.35), and Facebook Marketplace (1.903 on $288.01). Test these separately because the miss is small and the export has no recent-period grain.
- Scaled placements to keep: Instagram Stories (2.299), Instagram Feed (2.154), and Facebook Feed (2.039, monitor closely). Instagram Profile Feed, Explore Home, Right Column, and Messenger Inbox are above target but low volume; do not assume they can scale.
- Durable report: `/Users/alan/Documents/Raveyard/docs/facebook-placement-analysis-2026-07-17.md`. Next evidence must be a 90-day monthly export with objective, attribution setting, campaign/ad set, placement/device, spend, purchases, and purchase value; compare 30/60/90-day weighted ROAS after tracking audit and Stage 1 rollout.
- **Owner correction superseding the placement-cut bullets above:** Alan will not cut placements with meaningful purchase volume merely because placement ROAS is below 2.0. The operative protection threshold is 10 tracked purchases. Facebook Reels, Facebook Stories, In-stream Reels, Feed: Video Feeds, Instagram Reels, Instagram Explore, and Marketplace remain enabled. The narrow exclusion set is Audience Network Rewarded Video (2 purchases, 0.155 ROAS), Audience Network Native/Banner/Interstitial (1 purchase, 0.049), Facebook Search Results (1 purchase, 0.419), plus seven zero-purchase micro-placements totaling $44.30. The complete set spent $2,226.52 for four purchases and $317.68 value (0.143 ROAS). Marketplace remains in learning with eight purchases at 1.903; Threads remains enabled because $11.32 spend is below one target CPA. The durable report was rewritten to make this policy canonical.
- The durable Meta report now includes the complete 27-placement ranking for the 72 purchase-bearing campaigns, sorted by purchases descending with independent spend and ROAS ranks. It reconciles to 4,885 purchases, $185,589.37 spend, and $387,638.25 purchase value. Use this decision view rather than the all-campaign totals until the $103,399.33 zero-purchase campaign block is classified.

## 2026-07-18 Nicholas Lee contact CAPTCHA release
- Nick's contact form at `https://nslegal-ip.com/contact` now uses a visible Google reCAPTCHA Enterprise checkbox. The production key is restricted to `nslegal-ip.com`, `www.nslegal-ip.com`, `nick-site-web.web.app`, and `nick-site-web.firebaseapp.com`; it is not an unrestricted or testing key.
- Client submissions must include the verification token. The deployed `submitContact` function independently validates token validity, the `CONTACT` action, and the approved hostname before rate limiting, Firestore storage, or Slack delivery. CAPTCHA tokens and risk metadata are not stored or posted to Slack.
- The function runtime service account has only `roles/recaptchaenterprise.agent`, which permits creating/annotating assessments rather than administering keys. The existing honeypot, atomic per-IP rate limit, Firestore tee, Slack webhook destination/format, and non-confidential intake fields remain intact.
- Source commit `e04837b` (`Protect contact submissions with reCAPTCHA`) was rebased and pushed to `Kozu-Labs/nick-site` `main` before Firebase deployment. Firebase Hosting target `nick-site` and only the `submitContact` function were deployed successfully in project `nick-site-web`.
- Outside-in API QA passed: missing verification returns `400 captcha_required`; a forged token returns `403 captcha_failed`; the honeypot still returns a silent `200` without creating a lead. Live desktop 1440x900 and mobile 390x844 checks found the 304x78 checkbox, zero horizontal overflow, and no site-origin console errors. No live lead was submitted during CAPTCHA QA.
- `npm audit fix` removed all high and critical findings in the deployed function dependency tree. Eight transitive moderate `uuid` advisories remain behind the current Firebase Admin dependency and require a separately tested breaking Firebase Admin upgrade; they are not introduced as a bypass of the CAPTCHA boundary.
