> **SUPERSEDED (2026-10-17):** the user corrected the request: S3 follows wireframe **1b** (ten equal ModuleCard tiles, 5 × 2), not 1d. This hexagon spec is kept for the record only; see ARCHITECTURE-INDEX.md §5 (S3 改版).

# Spec: S3 hexagon matrix (wireframe 1d) — 2026-10-17

User request: replace the INDEX ten-row module list (S3 body) with wireframe **1d "六边形矩阵 · Hexagone 作为导航"** from `France/Hexagone UI wireframes and design system/Hexagone Wireframes.dc.html` (block `id="1d"`). Wireframe note: "品牌记忆点最强：六边形=法国本土轮廓的别称。10 个点位围绕，hover 切右侧摘要。风险：六边形 6 边 vs 10 模块，需接受「点位」而非「边」。"

## Wireframe 1d (what it shows)

- A flat-top hexagon outline (`clip-path: polygon(25% 0,75% 0,100% 50%,75% 100%,25% 100%,0 50%)`), inside it **GRANDEUR** (gold) and the hint "survolez un côté".
- Ten two-digit numerals around the outline, clockwise from the top: 01 and 02 above the top edge, 03 / 04 / 05 on the right (upper-right edge, right vertex, lower-right edge), 06 and 07 below the bottom edge, 08 / 09 / 10 on the left (lower-left edge, left vertex, upper-left edge). The selected one (04 in the drawing) is highlighted.
- A summary column on the right: "04 · TERRITOIRES" (small), the Why line in large type, "Why / How / What" rows, a module thumbnail, "Explorer →" in gold.
- (The stat row under 1d is NOT repeated here: S2 already shows the stat strip directly above S3.)

## Decisions

1. Keep S3's header row (eyebrow `index.matrix.eyebrow`, h2 `index.matrix.title`, intro `index.matrix.intro`). Only the list body is replaced.
2. **≥ 1024px (`lg:`)**: the hexagon stage (left) + summary panel (right). **< 1024px**: the existing `ModuleRow` list stays exactly as it is (ten points around a hexagon do not fit a phone; the list is the readable, tappable equivalent). Both are rendered; the inactive one is `display:none` (`hidden lg:grid` / `lg:hidden`), so only one is in the accessibility tree. Use `lg:` consistently, never mixed with `min-[Npx]:`.
3. **Selection model**: pointer enter or keyboard focus on a point selects that module; the selection persists when the pointer leaves (otherwise the panel would revert before the visitor reaches "Explore"). Click / Enter on a point navigates to the module (each point is a real link). Server render and no-JS state: 01 ARSENAL selected; all ten points are working links.
4. **Thumbnail**: no photo (existing thumbs are 109×55 crops, only 6 of 10 exist). Use an honest typographic tile: ink-800 block with a 1px ink-700 border, the module numeral very large in the module hue (oklch(68% 0.1 h), ~35% opacity) anchored bottom-left. Replaced by real imagery later without code changes to the panel layout.
5. **GRANDEUR inside the hexagon** follows the wireframe. It is decorative here (`aria-hidden`, `lang="fr" translate="no"`): the page's only h1 GRANDEUR remains in the hero.

## Component

- New client component `src/components/index/HexagonMatrix.tsx` (`'use client'`): receives everything as serializable props from the server `MatrixSection` (no next-intl on the client):
  - `modules: { id, n, hue, href, name, sub, how, what }[]` (sub = Why line; hrefs already locale-prefixed with `getPathname` from `@/i18n/paths`; links render with `next/link`).
  - `labels: { hint, whyLabel, howLabel, whatLabel, explore, selectedLabel }`.
- `MatrixSection.tsx` (server) keeps its header and the `ModuleRow` list (now `lg:hidden`), adds `<HexagonMatrix … />` (`hidden lg:grid`), reading the new keys `modules.<id>.how|what`, `index.matrix.hint|whyLabel|howLabel|whatLabel|explore|selectedLabel`.

## Visual spec (design system wins; DESIGN-LOCK)

- Desktop grid: `lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-16`, vertically centred; stage max width ~600px, aspect about 9:8.
- Hexagon: inline SVG, flat-top, 1px stroke `--gold-700`, no fill; optionally a second inset outline in `--ink-700` (hairline language). Centre: GRANDEUR in Playfair (gold-500, ~clamp(28px,3vw,44px), tracking `--tracking-grandeur`), hint below in Public Sans 12px paper-300.
- Points: absolutely positioned on a ring just outside the outline, distributed 2 / 3 / 2 / 3 as in the wireframe (compute positions from the hexagon geometry, centred on each edge third / vertex). Each point is a `next/link` with: the numeral (Playfair ~30px, module hue), a visually hidden module name so the accessible name reads "04 TERRITOIRES", hit area ≥ 44×44px (round, `rounded-[var(--radius-round)]`).
  - Rest: numeral in hue, transparent.
  - Hover (fine pointer only, Tailwind `hover:` is already gated) / focus: fill `oklch(30% 0.05 h)`.
  - Selected: 1px border in the module hue + the design system's one permitted shadow, the module glow `0 0 40px -8px oklch(68% 0.1 h)`; numeral stays in hue. Gold stays reserved for the action ("Explore").
  - Press: `active:scale-[var(--press-scale)]`.
  - Focus: the global 2px gold `:focus-visible` outline (do not remove).
- Panel: `aria-label={selectedLabel}` on a `<section>`-less wrapper (`role="group"`), contents:
  1. eyebrow: numeral in hue + " · " + module name (IBM Plex Mono or Public Sans 12px, tracking .1em, uppercase).
  2. whyLabel (small label, paper-300) then the Why line (`sub`) in Playfair ~28px / 1.2, paper-50.
  3. `<dl>`: howLabel → how, whatLabel → what (Public Sans 15px, `leading-[var(--lh-body)]`, text-body colour), rows separated by 1px ink-700 hairlines.
  4. Thumbnail tile (decision 4), height ~140px.
  5. DS `Button` (outline, gold) with `icon="arrowRight"`, label `explore`, href = module href.
  - No headings inside the panel (keeps the page outline: 1 h1, 4 h2, 3 h3; `scripts/check-static-html.mjs` enforces it).
  - Not an `aria-live` region (hover would make it chatty); the point links carry the names.
- Motion: on selection change the panel content cross-fades (opacity, `--dur-fast`, settle curve; e.g. key the content and use a CSS `@starting-style` or a one-shot class). No translate on reduced motion; no loops. Section entry keeps the existing `hx-reveal-group` / `hx-reveal-item` hooks (give the hexagon block `hx-reveal-item` with `--i: 0`).

## Acceptance

- `npm run verify` passes (tsc, eslint, messages, banned, build with `/fr` `/en` `/zh` static, static-html incl. 10 module links per locale, 1 h1 / 4 h2 / 3 h3, one visible GDN-2040; JS budget: INDEX route JS ≤ 20 KB gz).
- At 1440: hexagon + panel visible; hovering 04 shows TERRITOIRES and the panel stays on 04 after the pointer leaves; Tab walks 01 → 10 then "Explore", each focus updates the panel.
- At 1023 and 390: the list renders, the hexagon does not; no horizontal overflow.
- No `290` anywhere; R.I.F. figures in `what` carry the scenario marker (copy).
