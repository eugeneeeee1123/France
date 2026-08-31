# DESIGN.md - Project Hexagone

## 1. What this is

Project Hexagone is a trilingual (FR / EN / 中文) editorial atlas exploring France's power across ten dimensions, built around one throughline question: why France remains a global-scale player in the 21st century. Every module (Arsenal, Statecraft, Epochs, Territories, Arena, Aesthetics, Science, Economy, Francophonie, Industry) answers that question through a fixed Why -> How -> What structure defined in the content plan.

Some content (military capability figures) sits inside a declared speculative scenario rather than today's reality. The design has to keep that distinction legible without breaking the documentary tone.

**Register:** a state atlas or museum dossier - not a corporate SaaS site, not a military video game. Gravitas comes from typography, imagery and restraint, not decoration.

## 2. Direction

Three comps were explored. This project follows comps 2 and 3, not comp 1.

- **Comp 1 (not the direction):** flatter, more corporate top-nav treatment. Useful only as the floor we're building above.
- **Comp 2 (kept):** clean top nav, disciplined module grid, calm stat strip. Legibility and restraint.
- **Comp 3 (kept):** cinematic diagonal hero collage, numbered left rail, live coordinate/clock details, timeline scrubber. Ceremony and depth.

Working direction = comp 2's grid discipline as the skeleton, comp 3's cinematic ceremony and wayfinding density as the finish. The module count has grown from 9 to 10 (Industry was added in v2), so whichever nav shape ships needs to hold 10 items plus Home without crowding - comp 2's bare top bar alone can no longer do that. See 8.1.

## 3. Color

The brand already fixed two colors. Every other token derives from them - don't introduce hues outside the module-accent rotation below.

| Token | Value | Use |
|---|---|---|
| `ink-950` | `#00152C` | outer page background |
| `ink-900` | `#001B39` | primary surface (brief-specified base navy) |
| `ink-800` | `#04264B` | raised surfaces: cards, nav bar, footer |
| `ink-700` | `#12385F` | hairlines, dividers, disabled state |
| `paper-50` | `#F3EFE4` | primary text on dark (warm off-white, never pure white) |
| `paper-300` | `#B9C3D1` | secondary/caption text on dark |
| `gold-500` | `#EFB44B` | brief-specified accent. The ONE cross-site action/signal color: links, active nav, primary CTA, key numerals |
| `gold-700` | `#B8863A` | gold on light surfaces, gold borders |

**Tricolor thread** (bleu `#001B39`, blanc `#F8F6F2`, rouge `#E3051C`): reserved for literal flag citations only - the stripe under the hero headline, an occasional section rule. Never a UI color; don't tint a button or background with it.

Pure `#000000` and pure `#FFFFFF` are banned. Use `ink-950` and `paper-50`.

### Module accent rotation

Each module keeps one identity hue at fixed lightness/chroma, so the "hexagon matrix" reads as one system, not ten random colors. Formula: `oklch(68% 0.1 <hue>)` for borders/active states on dark, `oklch(30% 0.05 <hue>)` for hover fills.

| Module | Hue | Module | Hue |
|---|---|---|---|
| 01 Arsenal | 236 (blue) | 06 Aesthetics | 344 (rose) |
| 02 Statecraft | 272 (violet) | 07 Science | 164 (teal-green) |
| 03 Epochs | 56 (amber) | 08 Economy | 308 (magenta) |
| 04 Territories | 200 (cyan-teal) | 09 Francophonie | 128 (green) |
| 05 Arena | 20 (red-orange) | 10 Industry | 92 (olive) |

Module hue is an identity tag for content, never an interactive-action color. If a module hue and the gold accent ever compete on one screen, gold wins - it's the only "click me" signal on the site. Nudge any hue up to 10 degrees if two neighbors read as confusable side by side; keep L/C fixed.

## 4. Typography

Trilingual means every family needs a CJK fallback tier - the rule most likely to get skipped, so it's called out first.

| Role | Latin family | CJK fallback | Notes |
|---|---|---|---|
| Display (hero, H1, "GRANDEUR" treatment) | Playfair Display | Noto Serif SC | Brief named Didot; Didot isn't a licensable web font, Playfair Display is the standard open substitute with the same monumental transitional-serif character. Test the Chinese fallback at hero scale - if it reads too heavy, use the UI sans for the 中文 hero instead of forcing a serif match. |
| UI / body | Public Sans | Noto Sans SC | Humanist grotesk, not Inter/Roboto/Arial. Bump line-height ~10% for CJK paragraphs vs. Latin. |
| Data (coordinates, timestamps, tabular stats) | IBM Plex Mono | numerals only | Small data accents only ("48.8566° N", a stat's leading digits) - never for prose. |

**Scale (desktop):** hero `clamp(3rem, 14vw, 9rem)` (matches the brief's 14-18vw callout, capped so it never runs away), H1 56-72px, H2 36-44px, H3 24-28px, body 16-18px, caption/eyebrow 11-12px uppercase with 0.06-0.08em tracking. Never below 16px for body text.

**The GRANDEUR treatment:** letter-spacing 0.03-0.06em ("monument inscription," not a tight headline). Entrance is a per-letter fade + rise (spring) - never a typewriter reveal; the brief is explicit that typewriter is too casual for this register.

Two families total (serif display + sans UI), plus the mono accent used sparingly for data. Don't add a third display face.

### 4.1 Color × type pairing rules

Every text role has exactly one sanctioned color pairing. Don't improvise a new combination on the fly.

| Role | Family / weight | Color | Case / tracking |
|---|---|---|---|
| Hero display ("GRANDEUR") | Playfair Display, 500-600 | `paper-50`, or `gold-500` for one emphasized word max | Uppercase, 0.03-0.06em |
| H1 / H2 | Playfair Display, 500 | `paper-50` | Sentence/title case, normal tracking |
| H3 / card title | Public Sans, 600-700 | `paper-50` | Title case |
| Body copy | Public Sans, 400 | `paper-50` at ~85% opacity (full-strength white-on-navy vibrates over long paragraphs) | Sentence case |
| Secondary / caption text | Public Sans, 400-500 | `paper-300` | Sentence case |
| Eyebrow / label | Public Sans, 600, 11-12px | `paper-300`, or the active module's accent hue when the label belongs to that module | Uppercase, 0.06-0.08em |
| Data / coordinates / timestamps | IBM Plex Mono, 400-500 | `paper-300` at rest, `gold-500` when the number is the point (a stat's headline figure) | Tabular figures, no letter-spacing |
| Link (inline) | inherits surrounding family | `gold-500`, underline on hover | No case change |
| Nav item - inactive | Public Sans, 500 | `paper-300` | Uppercase, 0.04em |
| Nav item - active | Public Sans, 600 | `paper-50`, with a `gold-500` numeral/indicator | Uppercase, 0.04em |
| Quote / pull-quote | Playfair Display italic, 400 | `paper-50` | Sentence case, no decorative quote-mark glyphs |
| Module numeral (01-10) | Playfair Display, 500 | that module's accent hue at rest, `gold-500` on hover/active | Always two digits |

**Never:**
- Gold-on-gold or hue-on-same-hue (e.g. gold text on a gold-tinted hover fill) - swap the text to `paper-50` when a fill already carries the accent.
- A module accent hue as body-copy text color - hues are for numerals, borders, icons and hover glow only, never for reading text.
- Two display-weight serif blocks stacked directly on each other - alternate serif display with sans body/caption so the page has visible rhythm.
- Mono for anything longer than a short data string (no mono paragraphs, no mono nav labels).

## 5. Grid & spacing

- Max content width 1520px - this is a dense atlas, wider than a typical 1200px marketing page.
- 12-column grid, 8px base spacing unit.
- Section rhythm: `py-24` to `py-32` desktop. Content density runs higher than a landing page (stats, specs, timelines all live here), but sections still breathe - don't default to cockpit-tight padding just because the content is data-heavy.
- Standard breakpoints: 640 / 768 / 1024 / 1280 / 1536. Any sidebar, rail, or diagonal hero collapses to a single column below 768px; a left nav rail becomes a drawer, a right thumbnail rail becomes a horizontal scroller or folds into the drawer.
- The leading-zero numeral (01-10) is the primary wayfinding device across nav, cards, timeline and footer - keep its position and weight consistent everywhere it appears.

## 6. Iconography & the hexagon mark

- One thin-line geometric icon family, one stroke weight, no mixing with filled icons, no emoji.
- Icons are secondary wayfinding; the module numeral is primary. Don't let an icon substitute for the numeral.
- The hexagon (crest shape, "H" monogram) is the site's one signature mark. Use it deliberately: the masthead crest, a section-opening marker, maybe a wax-seal-style stamp in a footer. One hexagon moment per page is plenty - repeating it as a background pattern everywhere cheapens it.

## 7. Imagery

- Every photograph gets the same cool navy-leaning grade so the whole site reads as one film, not a stock-photo grab bag.
- Archival material (paintings, historic photography for Epochs) keeps its own texture (grain, period color) rather than being forced into the photo grade - it's cited material, not a product shot.
- Arsenal / Industry hardware (Rafale F5/F6, Corbeau bomber, PANG-class carriers, etc.) is speculative - it doesn't exist today. Until real concept art is produced, use clearly labeled placeholders ("concept art needed: Corbeau bomber, three-quarter view") rather than presenting a render as if it were a real current-day photograph. This is a factual-integrity rule, not just a style rule.
- Real-world modules (Territories, Aesthetics, Arena, Francophonie, and the real parts of Science like Ariane) can use real reference photography placeholders at design stage.

## 8. Components

**8.1 Navigation** - must hold Home + 10 modules, a 3-way language switch, and eventually search, without crowding. Comp 2's bare top bar was sized for 9 items and is already tight; it needs either an overflow affordance or to hand the primary role to comp 3's numbered rail. Candidates to test at wireframe stage: (A) numbered left rail, (B) top bar with a "+N" overflow group, (C) a minimal floating bar that opens a full-screen numbered drawer. Whichever ships must show the current section, support the language switch, and collapse to one clean drawer pattern on mobile.

**8.2 Module card** - number + icon + title + one-line hook + module accent hue + arrow. Fixed aspect ratio across the set. Hover reveals the accent as a thin glow or underline, not a full-color flood - the card stays mostly ink/paper, the accent marks it.

**8.3 Stat strip** - icon + large tabular numeral + label, separated by hairlines, no card boxes around each stat. Real numbers only, unless explicitly marked as part of the speculative scenario (see 10).

**8.4 Timeline** - horizontal or vertical era markers: -52, 1789, 1815, 1870, 1940, 1958, Today. Each node carries a year and a two-line caption and doubles as a jump link into Epochs. This is shared connective tissue across modules per the content plan, not a homepage-only widget.

**8.5 Map module** - dark line-art world map, French territories lit as points, hover/click reveals the name. Serves the "quiet empire" narrative - understated, not a data-dashboard globe.

**8.6 Quote block** - large serif pull-quote + attribution. Max one or two per page. No em-dash inside the quote as a design flourish.

**8.7 Why -> How -> What triptych** - a fixed three-part template reused verbatim at the top of every module page, reading that module's why/how/what fields from the content plan. Recognizable by the user's second module visit.

**8.8 Related-capabilities row** - small footer card row cross-linking to a module's related modules (the content plan's `links` field). Text + arrow, not a second full card treatment.

## 9. Motion

Ceremonial, not bouncy. Every animation either helps wayfinding (something moved, appeared, or is now active) or adds gravitas (the hero reveal) - nothing moves purely for decoration.

### 9.1 Timing tokens

| Token | Duration | Easing | Use |
|---|---|---|---|
| `instant` | 100ms | linear | Focus ring, active/pressed state |
| `fast` | 180ms | `cubic-bezier(0.4,0,0.2,1)` (ease-out) | Hover glow, underline, color shifts |
| `base` | 320ms | `cubic-bezier(0.16,1,0.3,1)` (ease-out-expo, "settle") | Card reveal, section fade+rise, drawer open |
| `slow` | 600-800ms | `cubic-bezier(0.16,1,0.3,1)` | Hero title reveal, page-level transitions |
| `spring` | - | spring(stiffness 120, damping 18) / Framer Motion equivalent | Per-letter title reveal, timeline scrubber snap |

Never use a linear or ease-in-out default from a CSS reset - always pick from this table.

### 9.2 Entrance patterns

- **Per-letter title reveal** (the GRANDEUR treatment): each letter fades in (opacity 0→1) and rises (`translateY(0.4em)→0`) on the `spring` curve, staggered 18-24ms per letter. Never a typewriter/character-by-character reveal - too casual for the register.
- **Section entry**: whole block fades + rises (`translateY(16px)→0`, `base` duration), triggered once on first scroll into view. Don't repeat on every scroll back into view.
- **Module grid stagger**: cards reveal in reading order, 40-60ms stagger between cards, `base` duration. Cap the stagger so the last of 10 cards never lags more than ~500ms behind the first.
- **Numeral/stat count-up**: headline tabular numerals may count up from 0 on first view, `slow` duration, linear digit interpolation (not spring). Keep this narrow - headline stats only, not every number on the page.

### 9.3 Interaction states

- **Hover (card, nav item)**: accent hue appears as a thin border glow or underline (never a full-color background flood), `fast` duration. Optional 1-2px translateY lift on cards only.
- **Active / pressed**: scale to 0.98 or opacity to 0.85, `instant` duration, so pressing feels immediate.
- **Focus** (keyboard): a `gold-500` outline appears with no transition delay - focus must never feel like it's "catching up."
- **Nav rail expand/collapse**: width/opacity cross-fade, `base` duration; icon labels fade in only after the rail width has settled, never simultaneously (fading both together smears).

### 9.4 Page & section transitions

- Route/module changes cross-fade outgoing and incoming content (`base`-`slow`), no slide or wipe transitions.
- The diagonal hero collage panels may parallax at a very low rate on scroll (max ~8-10% scroll-speed differential between layers) - the one parallax allowance, because it reads as depth in a photographic collage, not a gimmick. No parallax anywhere else.

### 9.5 Timeline scrubber

The one moment allowed to feel playful: dragging or clicking a node snaps to it with the `spring` token, the connecting line redraws to fill up to that point, and the active year scales up slightly (1.0→1.08) while adjacent years dim to `paper-300`.

### 9.6 Reduced motion

Every pattern above needs a static equivalent: with `prefers-reduced-motion: reduce`, per-letter/stagger reveals become instant opacity swaps (no translate, no stagger delay), parallax is disabled, count-ups jump straight to the final number.

### 9.7 Performance rule

Animate only `transform` and `opacity`. Never animate `width`, `height`, `top`/`left`, box-shadow spread, or `filter: blur()` on scroll-driven or frequent interactions - use `transform: scale()`/`translate()` instead.

### 9.8 Banned

No parallax beyond the single 9.4 allowance, no particle effects, no infinite decorative loops (no perpetually-spinning icons, no looping shimmer sweeps), no bounce/elastic overshoot easing anywhere - it undercuts the gravitas.

## 10. Voice, language, and the speculative-content rule

- French carries the ceremonial register (titles, "GRANDEUR," pull-quotes); English and Chinese are full, dignified translations, not shortened summaries.
- Short, declarative, dossier-register sentences. No marketing filler verbs.
- The site mixes real present-day facts with a declared fictional scenario (a speculative military buildout). This must stay legible at all times: a persistent, small, dignified label or methodology note distinguishes "today" figures from scenario figures. Never present speculative hardware or force levels as if they're today's real French military. This is the single most important content-integrity rule on the site.
- No em-dashes anywhere in shipped copy.

## 11. Accessibility floor

- Body text on `ink-900`/`ink-950` must clear WCAG AA (4.5:1); check `paper-50`-on-navy and `gold-500`-on-navy specifically - gold-on-navy is the site's signature pairing and the one most likely to ship unchecked.
- Never distinguish a module by hue alone - numeral and label travel with the hue every time.
- Full keyboard nav for the module rail/drawer and the timeline scrubber; visible focus states in `gold-500`.
- Site is dark-only by design - that's a deliberate choice, not a missed `prefers-color-scheme`.

## 12. Anti-patterns (banned outright)

- AI-purple/blue glow gradients. The only "glow" here is the gold accent used as light, not a gradient wash.
- Pure black or pure white anywhere.
- A second, redundant numbering scheme stacked on top of the module numerals (no "00 / INDEX"-style eyebrow above a card that already carries "01").
- Decorative status dots with no real semantic state.
- Generic card look (white box + border + shadow) - these cards live on navy; elevation comes from a hairline border and the accent hue, not a drop shadow.
- Three equal generic feature cards as a section - the module grid is the one place a grid of cards is earned; elsewhere, vary the layout family.
- Stock "diverse team" photography, fake div-based screenshots, hand-rolled decorative SVG illustrations.
- Mixing icon libraries or icon weights.
- Em-dashes anywhere in copy.

## 13. Build notes

- Target stack per the content plan: Next.js 14 + Tailwind + Framer Motion. This design phase (this file + the wireframe) is stack-agnostic; implementation should also read the project's own react-best-practices and react-animation references at build time.
- This file is the source of truth for visual and content-integrity decisions. If a future comp or request contradicts it, flag the conflict instead of silently picking one.
