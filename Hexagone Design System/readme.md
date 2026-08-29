# Hexagone Design System

Design system for **Project Hexagone** (R.I.F. - *La République Impériale de France*) - a fictional "what-if" alt-history mega-site imagining France as a maximalist global superpower. Three-language (中/FR/EN) editorial/museum-grade site, 11 content modules (ARSENAL, INDUSTRY, TERRITORIES, STATECRAFT, SCIENCE, ECONOMY, FRANCOPHONIE, AESTHETICS, SPORT, EPOCHS, INDEX) answering one question: *why is France still not an ordinary mid-size European power?*

**Source**: `uploads/hexagone-content-plan-v2.md` - full content plan (3726 lines), the only material provided. No codebase or Figma was attached; this design system is built from that spec (colors, type, motion, and component intent are explicitly defined there) plus one reference photo of the FFF crest (used only as a color/mood reference - see Logo below).

Stack assumed by the content plan: Next.js 14 + TypeScript + Tailwind + Framer Motion + next-intl (3-language) + Radix/shadcn for accessible primitives. This design system is framework-agnostic (plain CSS custom properties + React components) so it applies regardless of final stack choices.

## Index
- `styles.css` - root stylesheet, import this
- `tokens/` - colors, typography, spacing, base resets
- `components/` - React UI primitives (see below)
- `guidelines/` - specimen cards (Design System tab)
- `assets/` - icons, logo mark, textures
- `ui_kits/index/` - INDEX.HTML homepage recreation

## Logo
A real logo now exists: the user supplied a full homepage prototype (`uploads/protoype_index_final.png`) showing the site's actual mark - an original gold rooster silhouette inside a hexagon medallion, paired with the serif wordmark "LA FRANCE" and a tracked "EN PROFONDEUR" subtitle. This is the fictional site's own designed mark, distinct from any real federation's crest. It has been cropped directly from the prototype into `assets/logo-lockup.png` (full lockup) and `assets/logo-mark.png` (rooster medallion alone) and is now the system's logo of record; the earlier "HEXAGONE" wordmark placeholder is retired. The working title "Hexagone" / "R.I.F." remains the internal project name; "La France en Profondeur" is the on-site brand.

## Content fundamentals
- **Voice**: authoritative, encyclopedic, museum-placard register - declarative sentences, dense factual specificity (exact tonnages, unit counts, dates), no marketing fluff, no exclamation points.
- **Structure**: every module answers **Why → How → What** (motive → system → outcome) - this triad is the site's core rhetorical device, not just a section label.
- **Trilingual**: 中文 / Français / English via next-intl. French terms of art (*grandeur*, *tous azimuts*, *dissuasion nucléaire*) are kept untranslated as deliberate texture - they signal authenticity, not decoration.
- **Numbers as texture**: dense stat tables and named hardware (ship classes, missile designations) are a feature, not clutter - this is a "codex" register, closer to a strategy-game manual or naval almanac than a marketing site.
- **No emoji.** No casual address ("you"/"你") - third-person, institutional "the Republic" framing throughout.
- **Quotes**: historical figures (de Gaulle) get a distinct treatment - French original set large, translation set small beneath.

## Visual foundations
- **Palette**: deep navy `#001B39` (primary surface) + champagne gold `#EFB44B` (primary accent) + tricolor red `#E3051C` (sparing, semantic/alert use only) + off-white `#F8F6F2` (paper surfaces, inverted sections) + near-black ink `#000D1F` (deepest shade / text on paper). Gold-on-navy is the site's signature contrast; red is never a background, only a small accent (flags, alerts, rare data highlights).
- **Type**: Playfair Display (or Didot/Bodoni-style) for all display/hero type - large, tracked-out (`0.05em`), monumental/engraved character, never condensed or casual. Noto Serif SC pairs for Chinese headings. Inter for UI chrome (buttons, labels, data tables) - the only sans in the system, reserved for function over form.
- **Backgrounds**: solid navy fields are the default; a subtle SVG grain/noise overlay (`opacity 0.03–0.05`) sits over everything to kill flat digital sterility and add a "filmic"/museum-print feel. No gradients as decoration (gradients appear only inside the metallic gold logo mark itself). Full-bleed hero imagery/3D (Eiffel Tower, Rafale, aircraft carriers) sourced from CC-licensed Sketchfab GLB models, not stock photography.
- **Motion**: spring physics, not linear easing - Framer Motion springs (`stiffness 120, damping 14, mass 0.8`) give elements a slight overshoot-and-settle "bounce" on scroll-into-view, fired once per element (never on repeat scroll). Reserved for cards/module tiles/timeline nodes - **never** on navigation (must feel instant) or on long body paragraphs (springs read as frivolous on dense text) or on frequent micro-interactions like button hover.
- **Hover states**: module cards reveal their assigned accent color on hover; links brighten gold → brighter gold, no color-inversion tricks.
- **Press states**: standard opacity dip, no bounce (springs are reserved for entrance, not for taps).
- **Borders**: hairline only (`1px`, low-opacity gold ~18–22%), never heavy strokes; no colored left-border accent cards.
- **Corners**: sharp-to-barely-rounded - `2–4px` radii on cards/inputs, pills only for tags/badges. Monumental typography does not pair with soft, bubbly UI.
- **Cards**: near-transparent gold-tinted fill over navy, hairline gold border, soft dark drop shadow with a 1px gold top-hairline - no colored left-border, no heavy inner shadow.
- **Transparency/blur**: reserved for overlay surfaces only (Timeline overlay scrim, modal backdrops) - not used decoratively on cards.
- **Imagery mood**: cool navy-toned or true-to-life military/industrial photography and 3D renders (aircraft carriers, jets, satellites) - no warm lifestyle photography, no desaturated black & white filters.

## Iconography
No icon font or SVG icon set was provided in source material. Recommendation: a thin-stroke line icon set (Lucide-style, 1.5px stroke, matches the "single continuous line" logo brief) rendered in gold on navy, sized 20–24px for nav/UI. No emoji anywhere on the site. Unicode glyphs are not used as icons. Copy real Lucide SVGs into `assets/icons/` as needed per component - flagged here as a **substitution** since no bespoke icon set exists yet.

## Components
Standard primitive set (no component library source was provided, so this follows the "no source defines components" branch): Button, Badge, Card, ModuleCard, StatBlock, WhyHowWhat, Tag, NavBar, Divider.

## Caveats / open asks
1. **No real logo file** - using wordmark only. If you have (or want) an original Gallic-rooster mark, supply it or ask me to design an original (non-FFF) silhouette per the content plan's own brief.
2. **No codebase/Figma attached** - everything here is derived from the content-plan markdown's explicit design directives, not from live code. If a Next.js repo exists, connect it and I'll re-ground components against it.
3. **3D/GLB assets, real photography, and Sketchfab models** referenced in the plan are not fetched here - I don't have network access to download them; flagged as a gap.
4. Only the homepage (INDEX) UI kit is built so far - the other 10 module pages share the same primitives but aren't individually recreated yet.

**Ask**: tell me which module page(s) to build next as full UI-kit screens, and whether to design an original rooster mark now.
