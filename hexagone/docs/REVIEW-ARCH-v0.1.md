# 4-agent review of ARCHITECTURE-INDEX v0.1 — consolidated

> 2026-10-16 · Reviewers (read-only, same brief `REVIEW-BRIEF-ARCH.md`):
> **Grok** (requirements traceability) · **Antigravity / Gemini 3.8 Flash High** (UX, motion, a11y) · **Codex** (Next 16 engineering) · **Claude subagent** (design-system fidelity + Vercel Web Interface Guidelines)
> Raw reports: `%TEMP%\hexagone-delegate\review-arch\{grok,agy,codex}.md` + Claude transcript. 58 findings in, deduplicated to the list below.

## Open questions: votes

| Q | Grok | agy | Codex | Claude | Result |
|---|---|---|---|---|---|
| 1 Hero layout | Mockup | Mockup (compact on mobile) | Mockup, measure LCP | Mockup's real 50/50 auto-fit grid | **Mockup split, auto-fit grid** (4–0) |
| 2 GDN-2040 notice | under nav | above stats | above stats | above stats, Arsenal band pattern | **Above the stat strip** (3–1) |
| 3 Depth-entry rail | no | no | no | no | **Not in v1** (4–0) |
| 4 Nav wordmark | HEXAGONE | HEXAGONE (+ sr text) | La France en Profondeur | La France en Profondeur (HexMark `wordmark` prop) | **Tie 2–2 → user decides** |
| 5 Copy in messages | yes, keep why/how/what reachable by id | yes | yes + typing/parity | yes, map `id`→DS `key` | **Adopted** (4–0) |
| 6 Narrow-screen depth axis | horizontal bar | hide | horizontal bar | hide | **Tie 2–2 → Claude decides: hide <768px.** A horizontal bar is a new component that exists in neither the DS nor the Mockup; the axis is `aria-hidden` decoration. |
| 7 i18n library | next-intl | next-intl | native root-params | next-intl + prove in P0 | **next-intl 4** (3–1), with a P0 proof build under `cacheComponents` (Codex's caveats adopted) |

## Accepted findings → change in v0.2

| # | Sev | Raised by | Finding | Change |
|---|---|---|---|---|
| 1 | blocker | agy, Claude, Codex | GRANDEUR, Reveal and CountUp would SSR in their hidden start state: blank without JS, LCP waits for hydration | Server always renders the final state. Entry animation is CSS-only, gated by `@starting-style` / an `html.js` class; GRANDEUR letters `aria-hidden` + one sr-only word |
| 2 | blocker | Claude | Mockup and DS disagree on most INDEX primitives with no rule for who wins | New §1.1 reconciliation table. Rule: **composition from the Mockup, component styling and tokens from the DS** |
| 3 | blocker | Codex, Claude | `--font-display: var(--font-display)` is circular; next/font variables collide with token names | next/font outputs `--nf-*`; tokens re-declared once after import |
| 4 | blocker | Codex | Scaffold root layout hard-codes `<html lang="en">` | `[locale]/layout.tsx` owns `<html>`/`<body>` |
| 5 | blocker | Grok | Five home timeline nodes disagree across Mockup and copy brief | Locked in `timeline-eras.ts`: −52, 1789, 1958, Aujourd’hui, 2040 (scénario); gold fill to "Aujourd’hui" |
| 6 | blocker | agy, Claude | 390px breaks: 320px quote card, 5-column timeline squash, header wider than viewport; no mobile nav spec | Breakpoint table from the Mockup (1400/1200/1184/1040/768/390/320) + mobile nav disclosure spec |
| 7 | blocker | Grok | GDN-2040 notice contract contradicts itself | One band above the stat strip; per-figure `scénario` marker; footer line is a content-boundary statement, not a second notice |
| 8 | blocker | Codex | next-intl and Motion are not installed | P0 installs next-intl. Motion is **not** needed for INDEX v1 (CSS-only motion) and is deferred to the Timeline overlay |
| 9 | major | Grok | INDEX Why/How/What + RelatedCapabilities from the content plan silently dropped | Explicit v1 kill, recorded in §0 (Mockup has neither; the matrix already links all ten) |
| 10 | major | Grok, agy | 1c reduced to a ruler without saying so | §1 states: v1 axis = static altitude ornament, 5 ticks; 1c layer narrative out of scope |
| 11 | major | Grok | "Six module previews" in hero, matrix icons, two-panel 58/42 collage, hero crest: dropped silently | Recorded as Mockup/DS overrides in §0 |
| 12 | major | Grok, Claude | Renames break the "keep DS names" rule (`NavBar`→`SiteHeader`, `timeline-eras.ts`→`eras.ts`, new `ChronologyBand`, `CitationPanel`) | Use DS `NavBar`, `Timeline`, `QuoteBlock variant="panel"`, BRIEF `timeline-eras.ts`; additions declared |
| 13 | major | Claude | DS primitives keep hover/press in React state + callbacks → would all become client components | Ports move hover/press/focus to CSS and take `href` instead of callbacks; visual prop names kept |
| 14 | major | Claude, Grok | Language switch built from buttons, ARIA menu roles without keyboard model, search with no target | LangSwitch = three `<Link locale hrefLang>`; overflow = disclosure; search removed from v1 |
| 15 | major | Codex, Claude | Font plan: one module for Latin + CJK, no weights, CJK preloaded on every locale | `fonts-latin.ts` / `fonts-cjk.ts`; weights locked; Noto `preload:false`, attached only on `zh` |
| 16 | major | Codex | proxy matcher unspecified | Matcher excludes `_next`, `_vercel`, `api`, dotted files |
| 17 | major | Codex | No rule for how strings reach client islands | Server translates and passes props; no client message provider on INDEX |
| 18 | major | Codex, Claude | JS budget unmeasurable | Budget restated as INDEX route-specific JS from build output, excluding framework chunks |
| 19 | major | Codex | `setRequestLocale` needed in every static layout/page and metadata | Spelled out in §4; P0 proof build |
| 20 | major | Claude | Only `<html lang>` planned; French strings on en/zh pages, hard-coded figures | `lang="fr" translate="no"` on GRANDEUR, brand line, French quotes; stats as numbers through `format.number` |
| 21 | major | agy, Claude | Reduced-motion plan wrong (tokens keep 120ms) and Motion JS ignores tokens | Reduced motion = 120ms opacity only, from tokens, all in CSS |
| 22 | major | Claude, Codex | LCP is probably the collage, not GRANDEUR; `priority` deprecated in Next 16 | Collage uses `preload` / `fetchPriority="high"` + `sizes`; LCP measured, not asserted |
| 23 | major | Claude, Codex | Acceptance criteria miss the required states and Mockup fidelity; HTML comment can't be emitted from JSX | Added: no-JS render, reduced motion, full Tab sequence, Mockup overlay at 1440, 320px reflow, static output of 3 locales; contract comment checked in source |
| 24 | major | agy | Matrix row `aria-label` hides numeral and subtitle | Row is a plain link; accessible name = its text; `rowLabel` key removed |
| 25 | major | agy | Count-up on 6 / 57 / ~700 adds stutter, delays reading | CountUp dropped from v1 |
| 26 | major | agy | Duplicate gold CTA in header and hero | Header CTA hidden on INDEX |
| 27 | major | agy | Mobile: collage pushes stats and matrix two screens down | <768px: collage becomes a 16:9 band after the CTAs, hero quote card hidden (the closing citation stays) |
| 28 | major | Grok | `~700` without its "four components" caption; nothing stops 290 shipping | Label carries "quatre composantes"; CI grep fails on `290` in `messages/` and `src/` |
| 29 | major | Grok, Claude | GRANDEUR type spec changed silently | Locked: `clamp(3rem, 16.5cqi, 9rem)`, `.05em`, weight 400, gold, `lang="fr"` |
| 30 | minor | agy, Claude | Heading outline undefined; sticky header hides focus targets | h1 GRANDEUR, one h2 per section (sr-only where the Mockup shows only an eyebrow), h3 manifesto; `scroll-padding-top` |
| 31 | minor | agy, Claude | Hover not gated for touch | All hover inside `@media (hover:hover) and (pointer:fine)` |
| 32 | minor | Claude | `color-scheme`, `theme-color`, 24px targets, placeholder social links | `viewport` export; 24×24 min (44 on coarse pointers); social links dropped |
| 33 | minor | Claude | Lint grep misses Tailwind 4 names; default palette still on | `@theme` resets `--color-*`, `--shadow-*`, `--inset-shadow-*`, `--drop-shadow-*`, `--blur-*`, `--radius-*` |
| 34 | minor | Codex | Turbopack root warning breaks "0 warnings" | `turbopack.root` set in `next.config.ts` |
| 35 | minor | Grok, Claude | Nav: ACCUEIL item and 1400px collapse | No ACCUEIL item (HexMark is the home link, DS NavBar); labels `01 ARSENAL`; collapse to "MODULES ▾" below 1400px |
| 36 | minor | agy, Claude, Claude-own | Copy fixes (see "Copy delta" below) | Delta brief to Antigravity |

## Not adopted

| Finding | Raised by | Why not |
|---|---|---|
| Hide the hero quote card on desktop because two de Gaulle quotes is duplication | agy | The Mockup has both; kept on desktop, hidden only <768px |
| Render EN/中文 quote translation as primary | agy | DS readme: French carries the ceremonial register (quotes). French stays primary, translation set small beneath |
| Make the depth axis scroll-driven | agy (option) | 1c's scroll narrative is explicitly out of v1 scope (finding 10) |
| Native `next/root-params` instead of next-intl | Codex | Outvoted 3–1; ICU placeholders and `format.number` are needed. Codex's static-rendering caveats are adopted instead |

## Still open → user

1. ~~**Nav wordmark** (tie 2–2)~~ → resolved by the user mid-review: the FFF crest is the nav logo (home link) and favicon; the wordmark beside it follows the content-plan naming rule, LA FRANCE EN PROFONDEUR.
2. **Images** (Claude reviewer, verified by orchestrator): every `.jpg` in `Hexagone Design System/assets/images/` is a small PNG crop: hero collage 744×394, de Gaulle portrait 165×140, module thumbs 109×55. The Mockup hero slot needs ~1320×1200 on 2× screens. Only the Blender Eiffel renders (1080×1350) are usable. Source, licence and resolution need a decision before P2.

## Copy delta for Antigravity (sent after v0.2)

- `index.stats.warheads`: drop "opérationnelles / Operational / 作战" (not in source); say warheads across four components.
- 中文 stat labels: standalone noun phrases, no leading measure words.
- `index.manifesto.iii.body`: the source says world-class **brands**, not industries.
- FR `meta.description`: no "refuse" (adds intent not in source).
- 中文 `scenario.notice`: remove the repeated 推演 / 现实事实.
- 中文 `index.chronology.eras.gdn2040`: ≤ 10 字.
- FR `index.stats.francophone`: ≤ 32 chars.
- Remove `index.matrix.rowLabel` and `a11y.search`; add `nav.modulesMenu` (collapsed nav label) and `a11y.menuOpen` / `a11y.menuClose`.
