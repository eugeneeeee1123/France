# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js App Router (v16) + TypeScript + Tailwind CSS v4 + Motion + next-intl, in `France/hexagone/`. Chosen by the user on 2026-10-16 ("Next.js 新项目"). The older `France - Copy/france-absolue` repo is not reused.

## Users

Readers who want to understand why France still operates at global scale, reading in French, English or Chinese. They arrive at the INDEX, pick one of ten modules, and follow cross-links between modules. (inferred from the content plan; the user has not described a primary audience beyond the trilingual readership)

## Product Purpose

A trilingual editorial atlas, public name **La France en Profondeur** (internal code name HEXAGON). One throughline question: why is France, in the 21st century, still not an ordinary European middle power? Eleven pages (INDEX + ten modules: Arsenal, Statecraft, Epochs, Territories, Arena, Aesthetics, Science, Economy, Francophonie, Industry) each answer it from one angle with a fixed Why → How → What structure.

## Positioning

Not an encyclopedia and not a military game: a state atlas or museum dossier where every page answers the same question, and the modules are wired together (related-capability links, a shared timeline, a globe) so the ten answers read as one system.

## Operating Context

- Source of truth for content: `hexagone-content-plan-v2.md` (module Why/How/What table, page inventories, technical brief).
- Build log and task list: `TODO.md`, `PROGRESS.md`, kept in sync. Agent rules: `agents.md` (precise edits, no refactors, keep comments).
- Team: Claude orchestrates; Antigravity (`agy`), Codex and Grok CLIs take delegated tasks; reviews run with all four.
- All user-facing copy is written by Antigravity on `gemini-3.8-flash-high` using the `humanizer` and `avoid-ai-writing` skills. Claude writes the brief only.

## Capabilities and Constraints

- Trilingual FR / EN / 中文 via next-intl; French carries the ceremonial register; GRANDEUR is never translated.
- Canon: every figure uses the R.I.F. / GDN-2040 setting already written in the content plan (`whatRif`, `valueRif`). No real-versus-scenario toggle. (user decision 2026-10-16)
- Speculative figures carry a scenario label; one GDN-2040 notice per page, at the top. Speculative hardware gets a labeled placeholder, never a fake photo.
- 3D models, the interactive globe and the industry graph load lazily and client-side only.
- Open: whether the visible wordmark is HEXAGONE (design system) or La France en Profondeur (content plan naming rule). `<title>` and share cards use La France en Profondeur per the content plan.

## Brand Commitments

- Visual authority: `Hexagone Design System/` (tokens, components, readme). Dark-only ink ramp, gold as the single action color, per-module oklch hue, Playfair Display + Public Sans + IBM Plex Mono, square corners, hairline rules, ceremonial settle-curve motion.
- Voice: short declarative dossier sentences, no exclamation marks, no emoji, no em-dashes in shipped copy, French spacing before colons.
- Wireframes: `Hexagone UI wireframes and design system/` (INDEX = direction 1b + 1c depth axis, as realized in the UI Mockup).

## Evidence on Hand

- Images: `Hexagone Design System/assets/images/` (hero collage, de Gaulle portrait, Eiffel renders, six module thumbs), `blender_eiffel/` renders and GLBs, `assets/editorial/fff-crest.png` (third-party crest, editorial use only).
- Absent and must not be faked: vector logo file, licensed self-hosted fonts, photos of speculative hardware (Rafale F5/F6, Corbeau, PANG-class), thumbs for Science, Economy, Francophonie, Industry.

## Product Principles

1. One question, eleven answers: every page states its Why first.
2. The modules are a system: every page links out to related capabilities.
3. Fiction is labeled: the R.I.F. scenario is the canon, and it always says so.
4. Gravitas through restraint: typography and imagery carry weight, not effects.

## Accessibility & Inclusion

WCAG 2.2 AA (inferred default). Reduced motion collapses choreography to opacity swaps. CJK text gets its own line-height tier. All interactive visuals (graph, globe, timeline) need a text or list equivalent.
