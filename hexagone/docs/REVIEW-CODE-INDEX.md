# 4-agent code review of the built INDEX: consolidated

> 2026-10-17 · Brief: `REVIEW-BRIEF-CODE.md` (read-only).
> Reviewers: **Claude subagent** (design system + Vercel Web Interface Guidelines) · **Antigravity / Gemini 3.8 Flash High** (accessibility, UX, motion) · **Codex** (engineering, performance) · **Grok** (spec conformance, adversarial).
> Process notes: Codex 0.147's Windows read-only sandbox is missing its helper (`codex-windows-sandbox-setup.exe`), so Codex reviewed an inline bundle of every source file plus measured build facts (no tool use, read-only by construction). Grok's first run ran out of context; the second run used the same bundle and returned a compact report.
> Orchestrator checks: impeccable detector on the source = 0 findings; on the prerendered HTML (degraded regex mode: the detector's parser modules and puppeteer are not installed) = 1 warning, "world-class" in `en.json` (copy). Every finding below marked ✓ was re-checked in the code by the orchestrator.

## Findings and decisions

| # | Sev | Raised by | Finding | ✓ | Decision / fix |
|---|---|---|---|---|---|
| 1 | major | Grok, Codex, Claude | Footer `scenarioNote` is a second GDN-2040 notice on INDEX (acceptance 4), and `check-static-html` cannot see it | ✓ | Stop rendering `scenarioNote` in the footer; the gate counts visible "GDN-2040" occurrences (must be 1) |
| 2 | major | Claude (+ P0 note) | `fonts-cjk.ts` sits in the shared layout import graph, so `/fr` and `/en` ship ~100 KB gz of render-blocking Noto SC `@font-face` CSS | ✓ | Drop next/font for CJK; on `zh` only, link the Google Fonts CSS for Noto Serif SC 500 / Noto Sans SC 400,600 (the design system's own `fonts.css` source) with preconnect. `fr` / `en` ship no CJK CSS |
| 3 | major | Codex, Claude | 12 font files preloaded per page (223 KB), 6 of them latin-ext; Plex Mono (data, below the fold) preloaded | ✓ | `subsets: ['latin']` (latin-ext stays declared, just not preloaded) and `preload: false` on Plex Mono |
| 4 | major | all four | Timeline year keeps `group-hover:scale-[1.08]` under reduced motion (acceptance 6) | ✓ | `motion-reduce:group-hover:scale-100` |
| 5 | major | agy, Codex, Claude | Footer `<nav>` has no accessible name; no message key exists | ✓ | Copy key `footer.navLabel` (Antigravity) + pass it from the layout |
| 6 | major | agy | Crest home link is 22×40 px below 1200 px (WCAG 2.5.8); its name concatenates the crest alt and the wordmark | ✓ | Link gets `min-w-6 justify-center`, `pointer-coarse:min-w-11 min-h-11`; image `alt=""`, link `aria-label={a11y.home}` |
| 7 | major | agy | Menus stay open when focus tabs out; Escape moves focus to the summary even when focus was elsewhere | ✓ | `focusout` closes a menu when focus leaves it; Escape returns focus only if it was inside |
| 8 | major | agy | Printing: sections not yet revealed print blank (`html.js` hides them) | ✓ | `@media print` forces final state |
| 9 | major | Claude | CJK line-height tier (1.8) never applied (`--lh-body-cjk` unused) | ✓ | `:lang(zh)` re-points body leading tokens; hard-coded 1.6 / 1.45 leading replaced by tokens |
| 10 | minor | Codex | `NBSP` constant is a plain U+0020 in HeroSection and StatsSection, so units can wrap | ✓ (bytes) | `' '` |
| 11 | minor | Claude | "→" is in the copy, so screen readers announce "right arrow" on the primary CTA and the chronology link | ✓ | Remove "→" from both keys (Antigravity); render the DS aria-hidden arrow (`Button icon="arrowRight"`, `CtaLink arrow`) |
| 12 | minor | Claude | Scenario marker glued to the label ("composantesscénario") without parentheses | ✓ | `{' '}({marker})` as in DS readme and Mockup |
| 13 | minor | Claude | Secondary hero CTA is a gold 13 px link; Mockup is a paper 12 px ghost action, 44 px target | ✓ | `Button variant="ghost"` |
| 14 | minor | agy | `CtaLink` lacks a coarse-pointer target size | ✓ | `pointer-coarse:min-h-11` |
| 15 | minor | Claude | Press feedback (`:active` .98) only on Button and ModuleRow | ✓ | Add to nav items, language links, CtaLink, timeline nodes, footer links |
| 16 | minor | agy | Timeline "today" node conveys state by colour only | ✓ | `aria-current="step"` |
| 17 | minor | agy | `<main id="main">` lacks `tabIndex={-1}` for skip-link focus | ✓ | Add `tabIndex={-1}` with focus outline suppressed on main only |
| 18 | minor | agy | Language links appear twice below 768 px (bar + menu panel) | ✓ | Bar copy `hidden md:flex` |
| 19 | minor | Claude | Mobile menu sheet lets scroll chain to the page | ✓ | `overscroll-contain` |
| 20 | minor | Codex | `DisplayTitle` `@starting-style` runs without the `html.js` gate (no-JS still animates) | ✓ | Scope the letter start state to `html.js` |
| 21 | minor | Codex | `HeroScene` reads its media query once | ✓ | Listen for `change`; unmount when it stops matching |
| 22 | minor | Codex | Verification scripts are not wired to an npm script | ✓ | `npm run verify` chains tsc, lint, messages, banned, build, static-html, js-budget |
| 23 | minor | Claude | GRANDEUR line-height 1.1 vs Mockup .9 (~10 px drift at 1440) | ✓ | Pass `leading-[0.9]` from HeroSection |
| 24 | minor | Claude | Nav links left-packed; Mockup centres them | ✓ | `justify-center` |
| 25 | minor | Claude | ModuleRow hover fill touches the numeral and arrow | ✓ | Row `px-4`, list `-mx-4` |
| 26 | minor | Claude | S5 quote column is a filled box; Mockup has two hairline-topped transparent columns | ✓ | Panel gets the top hairline and transparent ground via className |
| 27 | minor | Claude | Design-contract comment is stale (2 rem floor, 3D state on desktop) | ✓ | Update §1 and the layout comment verbatim |
| 28 | minor | Claude | Timeline and ScenarioLabel use Mockup values inside the component; DisplayTitle hard-codes the grandeur size | ✓ | Record as §1.1 rows (Mockup values adopted for INDEX); no refactor |
| 29 | minor | detector | "world-class brands" flagged as a buzzword in `en.json` | ✓ | Antigravity rewrites EN manifesto iii |

## Not adopted

| Finding | By | Why not |
|---|---|---|
| 3D overlay stays opaque after a late error | Codex | False positive: `SceneBoundary` wraps the whole overlay `div`, so the overlay unmounts with the scene |
| Keyboard rotation for the 3D tower | agy | The canvas is aria-hidden decoration, not functionality |
| `aria-current` on module pages / LangSwitch path | Grok | Known limitation; module pages are placeholders; handled when they are built |
| French work title `lang="fr"` inside EN attribution | agy | Needs a copy-structure change (split attribution); deferred |
| `not-found.tsx` locale handling | Codex | Renders under the locale layout, which already sets the request locale |
| Browser-based no-JS check | Codex | Acceptance 5 holds by construction (CSS gated on `html.js`); a headless-browser gate needs puppeteer, not installed |

## Status after the fix wave (2026-10-17)

All 29 adopted findings are applied: copy by Antigravity (copy delta 3: arrows removed from two keys, `footer.navLabel` added, EN "world-class" reworded), code by four Haiku 5.5 tasks (F1 shell/fonts/motion CSS, F2 nav/footer/actions, F3 INDEX/data components, F4 verify script + gate), docs (§1, §1.1 rows) by the orchestrator. The session restarted mid-wave; F1 to F3 were resumed from their transcripts and finished.

Orchestrator adjustments:
- #7: `focusout` closes a menu only when focus lands on a known element outside it (a null `relatedTarget`, e.g. a click on plain text inside the panel, keeps it open; outside clicks are the click listener's job). F1 had flagged the null case as a regression risk.
- #8 (F1): print uses the existing selector shapes (specificity) and `scale: var(--fill, 1) 1`, so the printed timeline keeps its real progress instead of 100 %.
- #24: kept. F2 questioned it against older v2/v3 mockups in git; the Mockup this build follows (`Hexagone UI Mockup.dc.html`, line 19) centres the nav (`justify-content:center`).

Verification:
- `npm run verify` passes end to end: tsc, eslint, check:messages (82 keys), check-banned, `next build` (0 warnings, `/fr` `/en` `/zh` static), check-static-html (now also: exactly one visible "GDN-2040" per locale), check-js-budget (INDEX route JS 10.6 KB / 20 KB; 3D island 257 KiB / 280 KiB).
- Built output: `/fr` and `/en` now link 10.8 KB gz of CSS (was ~111 KB gz with the Noto SC faces); only `/zh` links the Noto SC stylesheet. Font preloads per page: 3 (was 12).
- Browser (dev, 1440 and 390): crest link named "La France en Profondeur, accueil" (image alt empty, 236×40 hit area); three named navs; CTA arrows are aria-hidden icons; marker reads "composantes (scénario)"; no GDN-2040 in the footer; nav centred; no horizontal overflow; zh lede line-height 1.80; Escape closes and returns focus only from inside; focus moving within a menu keeps it open, leaving closes it (dispatched events: the unfocused browser pane does not fire native focus events); console clean.
- Not verified here: print rendering (CSS in place), Lighthouse (needs a real Chrome run), the impeccable detector in full mode (needs its parser modules and puppeteer).
