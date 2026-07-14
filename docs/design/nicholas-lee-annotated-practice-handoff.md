# Nicholas Lee — The Annotated Practice

**Status:** Fable strategy consolidated; Claude Design nine-file page set complete; production implementation in QA
**Claude Design project:** https://claude.ai/design/p/c782815a-b488-4122-80b3-5c1414ebe3a0

## Direction

The site behaves like an annotated patent figure of the practice: near-white paper, black ink, one deep annotation green, fine leader lines, and mono reference numerals tied to real content. Precision is the aesthetic. Nicholas Lee is the first-viewport trust signal; CopyCatch appears only as below-the-fold provenance and on the separate-company bridge page.

## Tokens

| Token | Value |
|---|---|
| Paper | `#FCFCFA` |
| Panel | `#F0F2EE` |
| Ink | `#111311` |
| Slate | `#575D57` |
| Line | `#C9CEC7` |
| Annotation green | `#1E5748` |
| Green deep | `#14392F` |
| Error | `#A33B32` |

Typography uses Source Serif 4 for display/body, Inter for UI, and IBM Plex Mono for annotations unless licensed Signifier, Tiempos, or Söhne files are later supplied.

## P0 Routes

- `/`
- `/for-attorneys`
- `/schedule-a-litigation`
- `/about`
- `/copycatch`
- `/contact`
- `404.html`

## Non-Negotiable Boundaries

- Nick's existing `public/nick.png` is used as provided. Do not generate or alter his face.
- No CopyCatch logo, product screenshot, or product claim in the homepage first viewport.
- CopyCatch is a separate company. Its records are produced and reviewed by CopyCatch.
- Legal services require conflicts review and a separate engagement.
- Contact intake asks for public identifiers and a non-confidential outline only.
- Monitoring-only demand visibly exits the law-practice path.
- The form posts to `/api/submitContact`; it never writes to Firestore from the browser.
- Existing Firebase portal/API rewrites stay intact.

## Banned Claims

Do not publish unapproved uses of: `specialist`, `expert`, `court-ready`, `litigation-grade`, `admissible`, `chain of custody`, guarantees, win rates, performance numbers, `Ready for counsel`, `Attorney reviewed`, attorney supervision, law-firm backing, or outcome/recovery claims.

## Verification Register

The current implementation uses facts already published on the existing site: more than two decades in practice, Illinois admission, Purdue University, DePaul University College of Law, Chicago location, and `nslee@nslegal-ip.com`. Nick or a designated legal reviewer must verify these facts and approve the final page set before the redesigned site is treated as advertising-compliance complete.

The standing pre-publication checklist lives at `docs/marketing/attorney-advertising-prepublication-checklist.md` and applies to every future public page, article, result reference, and CopyCatch surface that identifies Nick.
