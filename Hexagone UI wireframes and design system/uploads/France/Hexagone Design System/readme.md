# Hexagone Design System

Design system for **Project Hexagone** — a trilingual (FR / EN / 中文) editorial atlas exploring France's power across ten modules (Arsenal, Statecraft, Epochs, Territories, Arena, Aesthetics, Science, Economy, Francophonie, Industry) plus the INDEX homepage. One throughline question: *why is France still a global-scale player?* Every module answers it with a fixed **Why → How → What** structure. Part of the content (military figures, "R.I.F. / GDN-2040" world) is a declared speculative scenario and must stay labeled as such.

Register: a state atlas or museum dossier. Not a SaaS site, not a military video game. Gravitas comes from typography, imagery and restraint.

## Sources
All read from the attached local folder `France/` (read-only):
- `France/Design rules and wireframe setup/design.md` — **source of truth** for color, type, grid, motion, components, voice (it says so in §13).
- `France/Design rules and wireframe setup/UI Mockup v3.0.dc.html` and `UI Mockup v3.0 - Arsenal.dc.html` — latest combined comp; exact pixel values for components and the UI kit were lifted from here. (v1/v2 mockups and wireframes also present.)
- `France/hexagone-content-plan-v2.md` — 3,979-line content plan (module Why/How/What table, stack brief: Next.js 14 + Tailwind + Framer Motion + next-intl).
- `France/TODO.md`, `France/PROGRESS.md`, `France/agents.md` — build log (Next.js repo with `modules.ts`, `WhyHowWhat.tsx`, `RelatedCapabilities.tsx`, Industry graph). The repo itself was **not** attached.
- `France/protoype_index_final.png`, `France/module_prototype.png`, `codex1–3.png` — rendered comps (copied to `uploads/ref/`).
- `France/Hexagone Design System/` — an earlier design-system attempt (Inter + gold hairlines). Superseded by design.md; only its image crops were reused.
- `France/blender_eiffel/` — Blender Eiffel Tower renders/GLBs.

## Index
- `styles.css` — entry point; `@import`s only.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `motion.css`, `base.css`.
- `components/` — React primitives (see list below), one `@dsCard` per folder.
- `guidelines/` — 20 foundation specimen cards (Colors, Type, Spacing, Motion, Brand).
- `ui_kits/website/` — click-through Home + Module pages (`index.html`, `HomeScreen.jsx`, `ModuleScreen.jsx`, `data.js`).
- `templates/hexagone-site/` — **prototype template** (`HexagoneSite.dc.html` + `data.js`): scroll-driven home (split-hero scrub, per-letter reveal, word-by-word statement highlight, count-up figures, pinned horizontal module gallery, hexagon-to-full-bleed image reveal, scroll-scrubbed era timeline) and module pages (numeral parallax, image zoom, staggered reveals, next-module link). Apple-style choreography expressed in Hexagone tokens: settle curve, transform/opacity only, reduced-motion respected, translucent nav (tweak `navGlass`). Tweaks: `motion`, `navGlass`, `startRoute`.
- `assets/` — `logo-lockup.png`, `logo-mark.png` (prototype rooster, alt), `images/` (module thumbs, hero collage, de Gaulle portrait, Eiffel renders).
- `image-slot.js` — drop-in image placeholder used by the kit (from the source folder).
- `uploads/ref/` — reference comps.
- `SKILL.md`, `thumbnail.html`.

## Components
- **brand/** — `HexMark` (hexagon "H" monogram ± HEXAGONE wordmark), `TricolorRule`
- **actions/** — `Button` (outline / ghost, 44px), `CtaLink` (gold text CTA + arrow)
- **icons/** — `Icon` (13 thin-line glyphs copied from mockup SVGs)
- **navigation/** — `NavBar` (7 visible + "+N ▾" overflow, search, language), `LangSwitch`, `Breadcrumb`, `SiteFooter`
- **content/** — `ModuleCard`, `ModuleHeader`, `WhyHowWhat`, `ScenarioLabel`, `RelatedLinks`
- **data/** — `StatStrip` (open / boxed), `Timeline` (era scrubber)
- **editorial/** — `DisplayTitle` (hero / GRANDEUR, per-letter reveal), `SectionEyebrow`, `QuoteBlock` (card / panel)

### Intentional additions
- `Icon` — wrapper so the mockup's inline SVG paths are reusable.
- `Button` — the outline/ghost buttons appear only in the prototype PNGs, not in mockup code; values estimated from the image.
- `DisplayTitle` — codifies design.md §4/§9.2 GRANDEUR treatment.

## Content fundamentals
- **Voice:** short, declarative, dossier-register sentences. No marketing filler verbs, no exclamation marks, no emoji. Third-person, institutional; no "you" except in navigational imperatives ("Explorez…", "Commencer l'exploration").
- **Language:** French carries the ceremonial register (hero titles, GRANDEUR, quotes). EN and 中文 are full, dignified translations, never summaries. Chinese labels: 中 for the language switch, 为什么 / 如何 / 是什么 for Why/How/What.
- **Casing:** module names and nav in UPPERCASE ("01 ARSENAL"); hero H1 uppercase serif; body sentence case; eyebrows uppercase tracked.
- **Numerals:** two-digit module numerals 01–10 are the primary wayfinding device everywhere. Stats in mono with locale grouping ("11,000,000", "67M+", "2e", "P5").
- **Integrity:** speculative figures always carry a ScenarioLabel and "(scénario)" in their label. Speculative hardware gets a labeled placeholder ("Concept art requis — Rafale F5…"), never a fake photo.
- **Punctuation:** no em-dashes in shipped copy (design.md §10). French spacing before ":" ("…2035-2040 : sous-marins…").
- **Examples:** "La France n'est pas un pays, c'est une idée" · "Explorez la France dans toutes ses dimensions" · "Scénario prospectif 2035-2040. Ces chiffres décrivent un scénario, pas la situation actuelle." · "© Hexagone. Projet éditorial indépendant."

## Visual foundations
- **Color:** dark-only. Ink ramp `#00152C / #001B39 / #04264B / #12385F`, warm paper text `#F3EFE4` (body at 85%), secondary `#B9C3D1`, gold `#EFB44B` as the one action/signal color, `#B8863A` for gold rules. Pure black/white banned. Tricolor only as a literal flag stripe. Each module owns a hue at fixed `oklch(68% 0.1 h)` (numerals, borders, icons, glow) with `oklch(30% 0.05 h)` hover fills; hue never colors body text and never competes with gold for "click me".
- **Type:** Playfair Display (display, numerals, italic quotes) + Public Sans (UI/body) + IBM Plex Mono (data only). CJK tier: Noto Serif SC / Noto Sans SC, +10% line-height. Hero uppercase .02em; GRANDEUR .05em. Nav 11/700/.03em; eyebrow 12/.1em; card titles 13/700.
- **Backgrounds:** flat ink fields. Imagery only inside frames: the diagonal two-panel hero collage (clip-paths at 58%/42%) and 120px card thumbs. No textures, no patterns, no decorative gradients; the only gradients are image-protection scrims (`--scrim-hero`, `--scrim-thumb`).
- **Imagery:** one cool navy-leaning grade across photos; archival paintings keep their own grain; speculative hardware = labeled placeholder.
- **Layout:** 1520px max, 12-col, 8px base, 40px page gutters, 56px hero insets, 20px grid gap. Sticky top nav (ink-900, hairline bottom). Sections divided by 1px ink-700 hairlines rather than boxes; stat strips and Why/How/What are rule-bounded, not carded.
- **Cards:** ink-800 fill, 1px ink-700 border, square corners, no drop shadow. Active = module-hue border + `0 0 40px -8px` hue glow. Hover = gold border, 2px lift, gold numeral/arrow.
- **Corners:** 0 everywhere; 14px for the overflow chip; 50% for timeline nodes and social buttons.
- **Borders:** hairline 1px ink-700; scenario label and quote attribution use gold-700; active nav = 2px gold underline.
- **Shadows:** none, except the module hue glow on the active card.
- **Transparency/blur:** hero overlays only — quote card `rgba(4,38,75,.85)`, crest fill `rgba(0,21,44,.55)`, portrait at 22% opacity. No backdrop blur.
- **Motion:** ceremonial, not bouncy. `instant 100ms` (focus/press), `fast 180ms` standard ease (hover color), `base 320ms` and `slow 700ms` on the settle curve `cubic-bezier(.16,1,.3,1)`. Section entry = fade + 16px rise, once. Grid stagger 50ms. Per-letter title reveal 20ms stagger, never typewriter. Timeline: gold line fill + 1.08 year scale. Transform/opacity only; no parallax except the hero collage; no loops; reduced-motion collapses to opacity swaps (tokens handle it).
- **Hover:** color shift to paper-50 (nav), underline (links/CTA), gold border + lift (cards), 8% gold wash (outline button). Gated behind `(hover: hover)`.
- **Press:** scale .98 at 100ms, no bounce. **Focus:** 2px gold outline, no transition.

## Iconography
- Single thin-line family, 24px grid, stroke 1.5 (1.6 search, 1.8 arrows), no fills, never mixed with filled sets. The 13 glyphs in `components/icons/Icon.jsx` are copied path-for-path from the mockup's inline SVGs (Lucide-like but hand-authored in the comp). For anything missing, **Lucide** at 1.5px stroke is the nearest CDN match — flagged as a substitution.
- Icons are secondary; the two-digit numeral is primary and must never be replaced by an icon.
- Unicode used as glyphs only in two places from the source: `▾` (dropdown) and `→` (inline link arrow). No emoji anywhere.
- The hexagon is the one signature mark: masthead, footer, one hero crest. Never a background pattern.

## Logo
The mockups and design.md use the **hexagon "H" monogram + HEXAGONE wordmark** (built as geometry + type, see `HexMark`). The homepage prototype PNG instead shows a gold rooster "La France en Profondeur" lockup; its low-res crops live in `assets/logo-lockup.png` / `logo-mark.png` as an alternate pending a decision. No vector logo file was supplied.

## Editorial assets
- `assets/editorial/fff-crest.png` — Fédération Française de Football crest, supplied by the user. Used as the nav logo (`NavBar logoSrc`) in the prototype template and website UI kit, and as Arena module imagery. Third-party trademark: archival / non-commercial use per the project owner; do not recolor or modify it.

## Fonts
Loaded from Google Fonts (`tokens/fonts.css`) — no binaries were supplied. design.md names Didot for display; Playfair Display is its stated open substitute. TODO.md mentions Neue Haas Grotesk / 思源宋体; design.md (newer) chose Public Sans / Noto. Supply licensed files if you want to self-host.
