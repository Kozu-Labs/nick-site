# CopyCatch + Nicholas Lee — Brand Guide

> **Shared between Cowork (LinkedIn, outreach, marketing) and Claude Code (nick-site, website).** Both sessions should reference this file for visual consistency.

---

## Brand Philosophy

Nick isn't a typical lawyer building a website, and CopyCatch isn't a typical legal tech startup. The brand needs to communicate two things simultaneously:

1. **Credibility** — 20+ years of IP litigation experience, named partner at a respected firm, serious attorney
2. **Innovation** — Built an AI tool that fundamentally changes how Schedule A cases work, tech-forward, modern

The visual identity should feel like **a senior attorney who also happens to be fluent in technology** — not a tech bro who passed the bar, and not a stuffy lawyer who hired someone to build a website. Think: Harvey AI meets a partner-level law firm bio. Clean, confident, dark, modern.

---

## Color System

### Primary Palette

| Role | Color | Hex | RGB | Usage |
|------|-------|-----|-----|-------|
| **Background (Dark)** | Near Black | `#050505` | 5, 5, 5 | Primary page/section backgrounds |
| **Background (Alt)** | Charcoal | `#0A0A0C` | 10, 10, 12 | Nav overlays, cards, secondary sections |
| **Primary Accent** | CopyCatch Violet | `#623CEA` | 98, 60, 234 | Primary CTA, brand marks, key highlights |
| **Primary Accent Light** | Soft Violet | `#A78BFA` | 167, 139, 250 | Secondary highlights, hover states, subtle accents |
| **Text Primary** | White | `#FFFFFF` | 255, 255, 255 | Headlines, primary text |
| **Text Secondary** | Light Gray | `#E8E8E8` | 232, 232, 232 | Body text, descriptions |
| **Text Tertiary** | Medium Gray | `#D8D8D8` | 216, 216, 216 | Captions, metadata, subtle labels |
| **Text Muted** | Gray | `#808080` | 128, 128, 128 | Placeholders, de-emphasized text |

### Supporting Accents (Use Sparingly)

| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| Blue | `#3B82F6` | 59, 130, 246 | Links, informational elements |
| Green | `#30A46C` | 48, 164, 108 | Success states, positive metrics |
| Amber | `#F5A623` | 245, 166, 35 | Warnings, attention, featured items |
| Cyan | `#06B6D4` | 6, 182, 212 | Data visualization, tech accents |
| Red | `#E5484D` | 229, 72, 77 | Errors, critical, urgency |

### Light Mode Alternative (for contexts requiring light backgrounds)

For platforms that don't support dark mode well (some email clients, print materials, certain LinkedIn contexts):

| Role | Color | Hex |
|------|-------|-----|
| Background | Off-White | `#FAFAFA` |
| Surface | White | `#FFFFFF` |
| Text Primary | Near Black | `#0A0A0C` |
| Text Secondary | Dark Gray | `#404040` |
| Text Muted | Medium Gray | `#808080` |
| Primary Accent | CopyCatch Violet | `#623CEA` |
| Accent Light | Soft Violet bg | `#623CEA` at 8% opacity |

---

## Typography

### Primary Font: Manrope

Manrope is a geometric sans-serif with a modern, clean feel. It works at all sizes and has excellent weight range.

| Use Case | Weight | Size (Web) | Size (Print/Image) |
|----------|--------|------------|---------------------|
| Hero Headlines | ExtraBold (800) | 48-72px | 52-72pt |
| Section Headlines | Bold (700) | 32-40px | 36-44pt |
| Sub-Headlines | SemiBold (600) | 24-28px | 26-30pt |
| Body Text | Regular (400) | 16-18px | 18-20pt |
| Captions/Labels | Medium (500) | 12-14px | 13-15pt |
| Small Labels | Light (300) | 11-12px | 12-13pt |

### Font Files

Located at: `Manrope (1)/static/` in the workspace root

- `Manrope-ExtraBold.ttf` — Headlines, hero text, big stats
- `Manrope-Bold.ttf` — Section headers, emphasis
- `Manrope-SemiBold.ttf` — Sub-headers, CTA text
- `Manrope-Medium.ttf` — UI labels, navigation
- `Manrope-Regular.ttf` — Body text, descriptions
- `Manrope-Light.ttf` — Captions, metadata, de-emphasized text

### Fallback Stack
```css
font-family: 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

---

## Logo & Mascot

- **CopyCatch logo**: Cat mascot icon + "CopyCatch" wordmark + superscript "AI"
- The cat mascot is playful but professional — it's a distinctive mark that stands out in legal tech (where everyone else uses scales of justice or pillars)
- Logo should always appear in white on dark backgrounds, or dark on light backgrounds
- Don't put the logo on busy backgrounds or over images without a solid backdrop

---

## Design Principles

### 1. Dark-First
The brand lives in dark mode. Dark backgrounds with light text is the default. This is intentional — it signals tech-forward, modern, different from every other law firm's white-background-blue-text website.

### 2. Generous White Space
Let elements breathe. The CopyCatch site uses massive spacing between sections. This communicates confidence and sophistication — the opposite of cluttered legal marketing.

### 3. Subtle Glass/Blur Effects
Background elements use transparency and blur (the `rgba` backgrounds at 0.95 opacity). This creates depth without visual noise.

### 4. Purple as the Signal
CopyCatch Violet (`#623CEA`) is the brand's signature. Use it for primary CTAs, key accent moments, and anywhere you want the eye to go. Don't overuse it — its power comes from restraint.

### 5. Typography Does the Heavy Lifting
Instead of relying on images, icons, or decorative elements, let the typography create hierarchy. Big, bold Manrope ExtraBold for headlines. Light weight for supporting text. The contrast between weights creates visual interest.

### 6. No Traditional Legal Clichés
No gavels, no scales of justice, no courthouse columns, no shield icons, no serif fonts trying to look "prestigious." The credibility comes from Nick's track record and the quality of the design itself.

---

## Application Guidelines

### LinkedIn Banners (1584 x 396px)
- Use dark background (`#050505` or `#0A0A0C`)
- Primary accent: CopyCatch Violet for key elements
- Keep content right of center (profile photo covers bottom-left)
- Manrope font throughout
- Respect the spacious, minimal aesthetic

### Website (nick-site / Firebase)
- Dark mode default
- Full Manrope font stack
- CopyCatch Violet for CTAs and key interactive elements
- Supporting colors for data/features sections
- Generous section padding (80-120px vertical)
- Max content width ~1200px

### Email Templates
- Light mode is safer for email (dark mode rendering is inconsistent)
- Use the light mode palette
- CopyCatch Violet for CTA buttons and accent elements
- Manrope may not render in email — use the fallback stack
- Keep layouts simple, single-column

### Social Media / Content
- Dark backgrounds preferred for image posts
- CopyCatch Violet accent
- Manrope ExtraBold for any text overlay
- The cat mascot can be used as a watermark or avatar

---

## Tone of Voice (for copy/messaging)

| Attribute | Description |
|-----------|-------------|
| **Confident** | Nick knows his stuff. 20+ years. Don't hedge. |
| **Direct** | Short sentences. No legalese in marketing. Say what you mean. |
| **Peer-to-peer** | Attorney talking to attorney, or expert talking to brand owner. Never salesy. |
| **Problem-first** | Lead with the pain point, then the solution. Not features-first. |
| **Modern** | This is 2026. AI is the tool, not the gimmick. Matter-of-fact about technology. |

---

## What This Brand Is NOT

- Not a traditional law firm (no navy, no gold, no serif fonts, no "established in..." language)
- Not a flashy tech startup (no neon gradients, no excessive animation, no startup jargon)
- Not corporate (no stock photos of handshakes, no "synergy," no mission statement speak)
- Not cheap (no cluttered layouts, no aggressive CTAs, no countdown timers)

---

## Quick Reference: Key Values

```
Background:     #050505
Surface:        #0A0A0C
Violet:         #623CEA
Violet Light:   #A78BFA
White:          #FFFFFF
Text:           #E8E8E8
Text Muted:     #808080
Font:           Manrope (all weights)
```

---

*Last updated: March 9, 2026*
*For use by: Cowork (LinkedIn/outreach) + Claude Code (nick-site/website)*
