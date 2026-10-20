---
target: INDEX page (hexagone/src/app/[locale]/page.tsx)
total_score: 17
max_score: 32
na_heuristics: 7,10
p0_count: 2
p1_count: 6
timestamp: 2026-10-20T16-48-05Z
slug: src-app-locale-page-tsx
---
Method: dual-agent (A: Claude design-review sub-agent · B: Claude detector sub-agent), plus GPT-5.6 Sol (xhigh; GPT-6.1 Sol rejected for the ChatGPT account) and Grok 4.7 (high).

## Design Health Score (Assessment A)
| # | Heuristic | Score | Key issue |
|---|---|---|---|
| 1 | Visibility of system status | 2 | Nothing shows that modules are unfinished |
| 2 | Match with the real world | 2 | R.I.F./GDN-2040 unexplained; "open timeline" opens module 03; "+3" chip cryptic |
| 3 | User control and freedom | 3 | Skip link, Escape closes menus; exits are dead ends |
| 4 | Consistency and standards | 2 | Three timeline labels, one destination; arrow styles differ; zh heading diverges from fr/en |
| 5 | Error prevention | 2 | Fiction easily read as fact; "57 countries" unmarked |
| 6 | Recognition rather than recall | 2 | One line per card; principles not tied to modules |
| 7 | Flexibility and efficiency | n/a | Reading surface |
| 8 | Aesthetic and minimalist design | 3 | Coherent; stats too small, manifesto text only |
| 9 | Error recovery | 1 | Every exit lands on a bare placeholder page |
| 10 | Help and documentation | n/a | Editorial surface |
| Total | | 17/32 (53%) | Acceptable |

## Design specificity
Surface specific (ink and gold, GRANDEUR, « » quotes, 01–10 numerals, coordinates, scenario labels), structure generic (big word + big image, four numbers, 5x2 cards, three columns, timeline). No atlas or dossier devices: no map, file numbers, sources or footnotes. Detector: CLI 0 findings; browser 11 (zh) / 13 (fr), mostly small-text rules; false positives: closed-dropdown occlusion x3, CTA padding x2 (44px tall), display-type tracking, all-caps labels. Measured contrast passes everywhere (card sub-line 8.52:1); global 2px gold focus outline present.

## What is missing (consensus)
1. P0 The question is not on the page (G, K, A). One thesis or question line under the tricolour rule; do not restore removed hero items.
2. P1 The ten modules are not shown as one system; manifesto comes after the cards with a hidden heading (G, K, A). Order question, principles, evidence, modules, or group cards under I/II/III; optional relationship diagram (G).
3. P1 No map in an atlas (G, A). Static hairline world map with overseas territories, EEZ, six continents, figures annotated and linked.
4. P0/P1 Every exit is a placeholder (G, K, A). Finish one module; "in preparation" template for the rest; mark cards.

## Priority issues
- P0 Navigation hard-codes activeKey="home" and pathname="/" in layout (G). Command: harden.
- P1 Evidence is a whisper: 18px values, 10px labels, no context, no links, no sources (A, G, K, B). Command: bolder.
- P1 Scenario integrity: ~700 beside real figures; R.I.F./GDN-2040 unexplained; 57 unmarked (G, A). Command: clarify / harden.
- P1 Mobile: ten single-column cards ~2,560px; slanted crop eats Marianne below md (G, K, A). Command: adapt.
- P1 Imagery: one golden-hour grade across all plates; 2:1 plates in 120px windows (G, K, A). Command: layout / colorize.
- P1 zh fonts from Google Fonts render-blocking and unreachable in mainland China (G, A). Command: optimize.

## Persona red flags
- Jordan: no sentence says what the site asks; "开始探索" silently means module 01 and lands on a one-word page; jargon first; "+3" unclear; ten equal cards.
- Casey (390px): no question in the first screen; collage starts ~660px down; matrix ~2,560px; 10px labels; language switch only in the menu.
- Sam: h1 announces only GRANDEUR; three "timeline" links go to Epochs (WCAG 2.4.4); "today" node aria-current but links to Territories; hero alt names 4 of 7 subjects; module page titles do not change.

## Minor observations
Card hover fill hidden under images; manifesto III "global brands" weakens the state argument; "today" chronology node is filler (use 1966); Napoléon portrait shows a hard rectangle; the two quotes do not answer each other; "~" ASCII tilde and "1100万 km²"; 11px nav links; FR module names mix French and English; metadata lacks alternates/OG; MutationObserver and suppressHydrationWarning heavy; future client islands need error.tsx; dead code (DepthAxis, EiffelScene, HeroScene, ModuleRow, empty 3D mount) and drifted comments; unused message keys; StatStrip keyed by label; zh rights line reads like a software project.

## Disagreements
Matrix heading: G calls it campaign language, K calls it the best line. FFF crest as logo: G would replace it (owner's earlier decision). Contrast: K worried, B measured all passing. All reviewers agree not to restore the removed hero furniture.

## Questions to consider
1. If a reader leaves after the first screen, what will they say the site argues beyond "France is grand"?
2. Why does an atlas that ends on "policy is in geography" contain no map?
3. Ten doors to empty rooms, or one finished module and nine visibly in preparation?
