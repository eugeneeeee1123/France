# Code review brief: INDEX page (built)

You are one of four independent reviewers of a finished homepage. **Read-only**: do not create, edit or delete any file, do not run git commands that change state, do not install packages, do not start, stop or build anything (a dev server is already running on port 3000 and a fresh production build is in `.next/`). Your whole deliverable is your final message.

## What was built

A trilingual (fr / en / zh) editorial homepage, "La France en Profondeur", in Next.js 16.4 (App Router, `cacheComponents`), React 19.3, Tailwind CSS 4, next-intl 4, plus an optional Three.js island (react-three-fiber 9). Project root:
`C:\Users\Eugen\OneDrive\Desktop\Fundamentals of Web Programming2\France\hexagone\`

## In scope

- Source: `src/**` except `src/styles/tokens/` (byte-identical copies of the design system tokens), plus `scripts/*.mjs`, `messages/*.json`, `next.config.ts`.
- Built output you may read: `.next/server/app/fr.html`, `en.html`, `zh.html` (prerendered HTML), `.next/static/chunks/*` (CSS and JS), `.next/diagnostics/route-bundle-stats.json`.
- Live pages (if your tool can fetch): `http://localhost:3000/fr`, `/en`, `/zh`.

## Sources of truth

- Spec: `hexagone/docs/ARCHITECTURE-INDEX.md` (v0.2; §1 has the acceptance criteria, §1.1 the Mockup-vs-design-system rulings, §5 the section map, §7 styling rules, §8 motion, §9 performance and accessibility). `docs/DESIGN-LOCK.md`. `France/PRODUCT.md`.
- Design system: `France/Hexagone Design System/` (`readme.md`, `components/**/*.jsx`, `tokens/*.css`).
- Pixel reference: the `isHome` block of `France/Hexagone UI wireframes and design system/Hexagone UI Mockup.dc.html`.
- Project rules: `France/agents.md`. Next 16 docs: `hexagone/node_modules/next/dist/docs/` (prefer over memory).

## Decisions that are NOT findings

R.I.F. scenario figures everywhere (no real-world toggle); copy is written by a separate copywriter (judge whether code uses keys correctly, not the prose itself); the hero collage and de Gaulle portrait are known low-resolution placeholders (744×394, 165×140) pending new assets; the 3D island lazy-chunk cap was raised to 280 KiB on purpose; language links on module pages go to the other locale's home (module pages are placeholders); the dev-only console message "Encountered a script tag while rendering React component" comes from the documented inline-script pattern (`02-guides/preventing-flash-before-hydration.md`). The FFF crest is a user-supplied third-party mark used as the logo by user decision.

## Report format (your final message, nothing else)

### A. Findings
At most 20 rows, most severe first. Only problems you can point to with evidence (file:line, built-output excerpt, or a measured value). No praise, no style nitpicks without user impact.

| # | Severity (blocker / major / minor) | Area (code / design-system / a11y / perf / spec) | File:line | Problem (one concrete sentence) | Evidence | Fix (one sentence, specific) |

### B. Acceptance criteria (spec §1, items 1–11)
One line each: pass / fail / not verifiable by you, with the evidence you used.

### C. The single highest-value fix
One paragraph.
