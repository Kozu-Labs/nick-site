# Nick Site — Project Memory

> **Primary memory file for the nick-site project.** Update every session with current state, decisions, and progress. The Cowork session (sales ops, LinkedIn, outreach) manages this file. Claude Code should read it at the start of every session.

---

## Project Overview
Professional website for **Nicholas Lee** — IP attorney (20+ years) and CopyCatch CEO/co-founder. This is Nick's law firm site for **The Law Office of Nicholas Lee**. It must be live and polished BEFORE outreach begins, because every attorney who gets a connection request or cold email will Google him.

## People
- **Nick (Nicholas Lee)** — Subject of the site. IP attorney, CopyCatch CEO. Chicago-based.
- **Frank** (frank@taverncommunity.com) — Managing the project, making design/content decisions. Runs the Cowork session.
- **Alan** — Developer, runs Claude Code sessions.

---

## Infrastructure
- **GitHub repo**: github.com/Kozu-Labs/nick-site (public)
- **Firebase project**: nick-site-web
- **Firebase hosting target**: nick-site
- **Default URL**: nick-site-web.web.app / nick-site-web.firebaseapp.com
- **Custom domain**: nslegal-ip.com (to be linked manually later)
- **Deploy command**: `firebase deploy --only hosting:nick-site`

---

## Brand Guide Reference
**READ THIS FIRST:** The shared brand guide lives at `BRAND-GUIDE.md` in the workspace root (`Copycatch-Sales-Outreach/BRAND-GUIDE.md`). It contains the full color system, typography specs, design principles, and tone of voice. The LinkedIn banners and all outreach materials already follow this guide. The website MUST be visually cohesive with them.

### Quick Reference (from Brand Guide)
```
Background:     #050505   (near black — primary)
Surface:        #0A0A0C   (charcoal — cards, nav, alt sections)
Violet:         #623CEA   (CopyCatch primary accent — CTAs, highlights)
Violet Light:   #A78BFA   (hover states, secondary accents)
White:          #FFFFFF   (headlines, primary text)
Text:           #E8E8E8   (body text)
Text Muted:     #808080   (captions, de-emphasized)
Font:           Manrope   (Google Fonts — all weights 300-800)
```

### Design Principles (Mandatory)
1. **Dark-first** — Dark background with light text is the default. This is intentional.
2. **Generous whitespace** — 80-120px vertical section padding. Let elements breathe.
3. **Subtle glass/blur effects** — Use rgba backgrounds at ~0.95 opacity for depth.
4. **Purple as signal** — CopyCatch Violet (#623CEA) for CTAs and key moments. Don't overuse.
5. **Typography does the heavy lifting** — Big bold Manrope for headlines, light for supporting. Hierarchy through weight contrast.
6. **No traditional legal clichés** — No gavels, scales, courthouse columns, shield icons, or serif fonts. Credibility comes from Nick's record and the design quality itself.

### What This Brand Is NOT
- Not a traditional law firm (no navy, no gold, no serif fonts)
- Not a flashy tech startup (no neon gradients, no excessive animation)
- Not corporate (no stock photos of handshakes)
- Not cheap (no cluttered layouts, no aggressive CTAs)

### CSS Font Stack
```css
font-family: 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

---

## Site Goals (Priority Order)
1. **Credibility landing page** — When attorneys Google "Nicholas Lee IP attorney" after receiving a connection request or email, this site needs to make them think "legitimate, experienced attorney with an interesting tech angle"
2. **Reinforce dual identity** — Practicing IP attorney (20+ years) AND legal tech builder (CopyCatch CEO). The site should present both as complementary, not contradictory
3. **Serve two audiences** — (a) Fellow IP attorneys who received outreach and are vetting Nick, (b) Brand owners / e-commerce sellers / inventors looking for IP counsel
4. **Drive action** — For attorneys: connect on LinkedIn, schedule a call about CopyCatch. For brand owners: contact for legal representation or CopyCatch investigation

---

## Nick's Background (for site content)

### Career Timeline
| Period | Role | Organization | Location | Notes |
|--------|------|-------------|----------|-------|
| ~1991–1995 | BS Biochemistry & Chemistry | Purdue University | West Lafayette, IN | Science background — can understand technical patent subject matter |
| ~2001–2004 | JD, Intellectual Property Law | DePaul University College of Law | Chicago, IL | |
| Apr 2005 | Illinois Bar License | | | |
| ~2005–Feb 2025 | Named Partner | Bishop Diehl & Lee, Ltd. | Schaumburg, IL | Nearly 20 years. Boutique IP firm. Built comprehensive IP practice from associate to named partner. |
| Feb 2025–Oct 2025 | Member | Dickinson Wright PLLC | Chicago, IL | Large firm (475+ attorneys, 19 offices). Title was "Member" — NOT partner. Left because hourly billing model didn't work for the Schedule A cases he wanted to bring. |
| Oct 2025–Present | Founder & IP Attorney | The Law Office of Nicholas Lee | Chicago, IL | Solo IP litigation practice |
| Oct 2025–Present | CEO & Co-Founder | CopyCatch.AI | Chicago, IL | Built to solve the pre-filing cost problem he experienced firsthand |

### The Origin Story (USE THIS for narrative sections)
Nick spent nearly 20 years as a named partner at Bishop Diehl & Lee, a boutique IP firm in Chicago's northwest suburbs. He developed deep expertise in Schedule A litigation — multi-defendant e-commerce infringement cases targeting counterfeiters across platforms like Amazon, Temu, and AliExpress.

When he moved to Dickinson Wright (a large firm), he kept running into the same problem: the pre-filing investigation for Schedule A cases consumed enormous time and resources. Even successful cases barely broke even, especially on contingency — associates still bill their hours whether a case is contingent or not, and the investigation phase was eating into everything.

So he built CopyCatch. It automates the pre-filing investigation — infringer sourcing, evidence collection, sales estimation, and court-ready report generation. What used to take weeks now takes a fraction of that. It makes contingency cases profitable — cases firms would have turned down become cases worth taking.

He still practices IP law full-time. CopyCatch isn't a pivot away from law — it's a tool he built because he needed it, and now other attorneys can use it too.

### Key Facts
- 53 years old
- Chicago-based
- 20+ years practicing IP law
- Licensed in 11 jurisdictions: California, Oregon, Idaho, Florida, Texas, Delaware, Pennsylvania, Washington D.C., New Jersey, New York, and Illinois (state and federal courts)
- Practices before Federal Courts, TTAB, and USPTO
- Built career on referrals and reputation — never done marketing before this
- Korean-American (but don't emphasize ethnicity in marketing)

---

## Practice Areas (THESE ARE FINAL — use exactly as listed)

| Practice Area | Subtitle/Description | Notes |
|---------------|---------------------|-------|
| **Patent** | Prosecution & Litigation | Both filing patents and enforcing them in court |
| **Trademark** | Enforcement & TTAB Proceedings | Registration, opposition, cancellation, enforcement |
| **Copyright** | Infringement & DMCA | Copyright enforcement including DMCA takedowns |
| **Schedule A** | Multi-Defendant IP Litigation | The bread-and-butter — multi-defendant cases against online infringers |
| **E-Commerce IP Enforcement** | Contingency-Based Representation | CopyCatch makes contingency cases profitable — this is the differentiator |
| **IP Strategy** | Registration, Counseling & Portfolio | Advisory work — helping brands register the right IP types so they have enforceable rights |

### Practice Areas NOT to Include
- ~~Trade Secrets~~ — Nick doesn't do trade secret work
- ~~Brand Protection~~ — Too generic, sounds like MCA takedown services (cease & desist mills)
- ~~Anti-Counterfeiting~~ — Too narrow. Counterfeiting (fake goods) is a subset of IP infringement. Nick handles the full spectrum. Use "E-Commerce IP Enforcement" instead
- ~~Trade Dress~~ — Not a primary focus area
- ~~"75+ Online Marketplaces"~~ — Not yet true. Aspirational. Do not claim on any public materials

---

## CopyCatch Section (for the site)

CopyCatch should have a prominent but secondary section on the site. It reinforces the "attorney + tech" dual identity. The messaging should be clear that Nick built this to solve his own problem, and now offers it as a managed service.

### CopyCatch Value Props
1. **90% less manual work on pre-filing investigation** — Infringer sourcing, evidence collection automated
2. **90% lower cost** — Making contingency cases profitable for the firm
3. **Court-ready evidence reports** — Actual court-admissible documentation
4. **Automated infringer sourcing & evidence collection** — The grunt work CopyCatch handles
5. **Makes contingency cases profitable** — THE core pitch. The word "profitable" is key.

### The Economics (UNDERSTAND THIS — it drives all messaging)
- E-commerce IP infringement involves many sellers across marketplaces → requires **Schedule A** (one case, multiple defendants)
- Schedule A pre-filing investigation requires massive **paralegal and associate hours** — identifying infringers, collecting evidence, estimating damages
- That investigation cost is what makes these cases too risky for firms — most IP attorneys don't touch Schedule A because of it
- **CopyCatch replaces those paralegal/associate hours** with automation
- With investigation cost gone, the risk is gone → Schedule A cases become **viable on contingency**
- Viable contingency = **profitable for attorneys** + **affordable for brands**
- The chain: CopyCatch removes investigation cost → contingency viable → attorneys profit → brands get enforcement

### Messaging Rules for CopyCatch (FOLLOW EXACTLY)
- Always say "pre-filing investigation" — that's the specific phase CopyCatch automates
- Always say "makes contingency cases profitable" — not "makes cases work" or "makes economic sense"
- Never claim "75+ marketplaces" — aspirational only, not current capability
- Nick's 20 years = credential as a PRACTITIONER representing clients. Do NOT say "20 years helping attorneys"
- "E-Commerce IP Enforcement" not "Anti-Counterfeiting" — counterfeiting is a subset of infringement
- Do NOT say "IP enforcement cases aren't profitable" — general IP enforcement on hourly is fine. The problem is specifically Schedule A / e-commerce cases where contingency is necessary but unprofitable without CopyCatch
- The industry problem isn't just infringement — it's that the economic model for tackling e-commerce infringement at scale is broken. Schedule A + contingency + CopyCatch is the fix

### CopyCatch Pricing (DO NOT PUT ON THE WEBSITE)
Pricing is $5K flat per new case, $2.5K subsequent. This is shared only in direct conversations, not on public pages or marketing materials.

### CopyCatch Links
- Website: copycatch.ai
- The site should link to copycatch.ai where appropriate but should NOT try to replicate the CopyCatch site

---

## LinkedIn Banners — Canonical Copy (website must be cohesive)
The LinkedIn cover photo slideshow (5 banners, 1584x396px) is the first thing recipients see. The website copy must align with this messaging. Current banner copy:

- **Slide 1**: "IP ATTORNEY · CEO, COPYCATCH.AI" / "Nicholas Lee" / "Intellectual Property Litigation & Strategy" / "20+ years in patent, trademark & copyright law"
- **Slide 2**: Practice areas grid — Patent, Trademark, Copyright, Schedule A, E-Commerce IP Enforcement (Contingency-Based Representation), IP Strategy
- **Slide 3**: Quote "The investigation costs more than the case is worth." → "CopyCatch makes contingency cases profitable."
- **Slide 4**: 90% less manual work on pre-filing investigation / 90% lower cost making contingency cases profitable
- **Slide 5**: IP Attorneys: "Take on contingency cases that are actually profitable. CopyCatch automates pre-filing investigation." | Brand Owners: "Enforce your IP without the upfront legal costs. Contingency-based representation."

---

## Two Audiences — Content Strategy

### Audience 1: IP Attorneys (Primary for outreach phase)
These are fellow practitioners receiving connection requests and cold emails from Nick. They'll Google him and land here. They need to see:
- A legitimate attorney with real credentials and a 20-year track record
- Someone who still practices (not a tech CEO who left law)
- An interesting tool (CopyCatch) that might be useful to their practice
- A reason to respond to the connection request / email

**Tone for this audience:** Peer-to-peer. Attorney talking to attorney. Confident but not salesy.

### Audience 2: Brand Owners / E-Commerce Sellers / Inventors
These are potential clients — brands being ripped off on Amazon, inventors whose patents are being infringed, e-commerce sellers dealing with counterfeits. They need to see:
- An experienced IP attorney who understands e-commerce
- Technology capability (CopyCatch) that makes enforcement feasible
- Clear next steps to get help

**Tone for this audience:** Expert advisor. Authoritative but approachable.

---

## Site Structure (Recommended)

This is a suggested structure — Claude Code should build a single-page or minimal multi-page site. Single-page with smooth scroll sections is preferred for this stage.

### Hero Section
- Nick's name, title, tagline
- The dual identity: IP Attorney + CopyCatch CEO
- CTA: "Schedule a Consultation" or "Learn More" (scroll to relevant section)
- Consider a professional photo if available (TBD — may need to use without for now)

### About / Story Section
- The origin story narrative (see above)
- Career highlights: 20+ years, named partner, 11 jurisdictions
- Education: Purdue BS + DePaul JD
- Key message: Still practicing full-time. CopyCatch was built from practice, not away from it.

### Practice Areas Section
- The 6 practice areas listed above
- Brief descriptions for each
- Visual treatment: cards, grid, or clean list — not bullet points

### CopyCatch Section
- What it does (pre-filing investigation automation)
- Key stats: 90% less time, 90% lower cost, 75+ marketplaces
- Link to copycatch.ai for more info
- Position as: "I built this because I needed it. Now you can use it too."

### Contact / CTA Section
- Email: nick@nslegal-ip.com (for legal inquiries)
- LinkedIn: linkedin.com/in/nicholas-lee-ip-attorney
- CopyCatch: copycatch.ai (for attorneys interested in the tool)
- Attorney advertising disclaimer: "Attorney advertising. This communication is for informational purposes."
- Jurisdictions list

---

## Coordinated Presence (What Exists Elsewhere)

The website doesn't exist in isolation. Here's what else is live or being built:

### LinkedIn Profile (being optimized in Cowork session)
- URL: linkedin.com/in/nicholas-lee-ip-attorney
- Headline: "IP Attorney & Litigator | 20+ Years Patent, Trademark & Copyright | CEO, CopyCatch.AI"
- About section: First-person origin story (same narrative as site)
- Banner: 5-slide slideshow using brand colors (dark bg + violet accents)
- Connection request messages segmented by 4 ICPs

### CopyCatch Website (copycatch.ai — already live)
- Dark theme, violet accents (the brand colors in our guide came FROM this site)
- Cat mascot logo
- Tech-forward presentation
- The nick-site should feel like a visual sibling of copycatch.ai — same family, different personality

### Outreach Emails (being drafted in Cowork session)
- Sent from nick@nslegal-ip.com (peer tone) or nick@copycatch.ai (tech angle)
- Problem-focused, no pricing
- Recipients will click through to both the LinkedIn profile and the website

---

## Technical Requirements
- Static site deployed to Firebase Hosting
- All source lives in `public/` directory
- Must be responsive (mobile-first — attorneys check LinkedIn on phones)
- Fast load times (no heavy frameworks needed for a site this simple)
- SEO basics: proper meta tags, og:image, structured data for attorney/legal practice
- Firebase target name is `nick-site`
- Google Fonts for Manrope (don't self-host — use `fonts.googleapis.com`)

### Suggested Tech Stack
- Plain HTML/CSS/JS (simplest, fastest, most maintainable for a small site)
- OR: Astro/11ty if a static site generator is preferred
- Tailwind CSS is fine if Claude Code prefers it, but custom CSS with the brand tokens works too
- No React/Vue/Angular needed — this is a content site, not an app

---

## Current State (as of March 9, 2026)
- **Infrastructure**: Repo created, Firebase configured, placeholder deployed ✅
- **Brand guide**: Written and shared ✅
- **Practice areas**: Finalized ✅
- **Origin story**: Written ✅
- **Site structure**: Recommended (see above) — Claude Code should adapt as needed
- **Design**: Follow BRAND-GUIDE.md — dark-first, Manrope, CopyCatch Violet accents
- **Content**: All narrative content is in this file — Claude Code can pull directly from it
- **Photos**: No professional photos available yet — design without photos for now, leave placeholder capability

## What Claude Code Should Do Next
1. Read BRAND-GUIDE.md for the full visual spec
2. Build the site structure (single-page recommended)
3. Implement all sections with the content from this file
4. Deploy to Firebase
5. Share the live URL for Frank to review

---

## Session Log
- **March 9, 2026 (Claude Code)**: Initial setup — created GitHub repo (Kozu-Labs/nick-site), Firebase project (nick-site-web), hosting target (nick-site), placeholder page.
- **March 9, 2026 (Cowork)**: Wrote comprehensive site brief with practice areas, origin story, brand guide reference, content strategy, two-audience framework, and site structure recommendations. All content finalized for Claude Code to build from.
+
### 2026-07-13 — Claude-assisted authority-site UX polish
- A full live-site critique was run in the dedicated Claude/Fable CC thread across the homepage, attorney funnel, Schedule A and IP practice pages, Insights, About, CopyCatch boundary, and Contact. Recommendations were treated as advisory: the release accepted only changes supported by the live site and current positioning.
- High-merit changes shipped: the disconnected homepage datum line and `01` marker are suppressed on mobile; text links use a clean arrow-led treatment without underlines; Schedule A is elevated into primary navigation and listed first in the footer practice hierarchy; all three published notes are exposed in the footer.
- Copy now uses practitioner language: “matter,” “question,” “first look,” and “focused public-record review” replace “opportunity,” “market-surface assessment,” “bounded assessment,” and other product/operations jargon. The About page’s first-person voice is consistent.
- Deferred rather than guessed: attorney bylines, admission dates, ARDC/profile links, results, representative matters, performance language, and any “expert” or specialization claim. Those remain Nick/legal approval items.
- Release commit `331f7ac` (`Polish Nicholas Lee authority site`) is pushed to synchronized `main` and deployed to Firebase Hosting target `nick-site` in project `nick-site-web`.
- Live QA at `https://nslegal-ip.com` passed at 390px and 1440px: no horizontal overflow, one H1, correct cache-versioned stylesheet, clean mobile hero, uncropped portrait, Schedule A navigation, no text-link underlines, no console errors, and all fourteen public routes return `200`. A static link audit checked 385 internal links with zero failures.
- The Slack contact function, Firebase function rewrites, private portal, and form submission behavior were not changed or re-tested because this release was public content/CSS only.
