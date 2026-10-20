# Planning brief: build the INDEX page

You are one of two senior planners (the other plans the same thing in parallel; the orchestrator merges both plans). You do NOT write code or files. Your deliverable is an implementation plan, in your final message, that **Haiku executor agents** will carry out task by task.

## Goal

Implement the INDEX homepage of the Next.js app in
`C:\Users\Eugen\OneDrive\Desktop\Fundamentals of Web Programming2\France\hexagone\`
exactly as specified by `docs\ARCHITECTURE-INDEX.md` (v0.2). That document is the spec; it already absorbed a 4-agent review. Do not reopen its decisions. If you find a real contradiction or something that cannot work, list it under "Spec problems" with your proposed resolution instead of silently changing it.

## Read these first

- `hexagone\docs\ARCHITECTURE-INDEX.md` — the spec (sections §0–§12).
- `hexagone\docs\DESIGN-LOCK.md`, `hexagone\docs\REVIEW-ARCH-v0.1.md` (why each decision was made).
- `hexagone\AGENTS.md` — Next.js 16 has breaking changes; the real docs are in `hexagone\node_modules\next\dist\docs\`. Check every Next-specific API you plan against them.
- `France\agents.md` — project rules: precise edits, never rename existing names, keep comments, no full-file rewrites of existing large files.
- Design system to port: `France\Hexagone Design System\components\**\*.jsx` + `*.d.ts` + `*.prompt.md`, `tokens\*.css` (already copied byte-identical into `hexagone\src\styles\tokens\`), `readme.md`.
- Pixel reference: `France\Hexagone UI wireframes and design system\Hexagone UI Mockup.dc.html`, the `isHome` block (around lines 44–140).
- Current scaffold: `hexagone\package.json`, `next.config.ts`, `src\app\layout.tsx`, `src\app\page.tsx`, `src\app\globals.css`, `tsconfig.json`, `eslint.config.mjs`.
- Copy: `hexagone\messages\fr.json`, `en.json`, `zh.json` (written by the copywriter; being revised right now per `docs\COPY-DELTA-1.md`; plan against the key list below, not against current values).

## Environment facts (verified)

- Windows 11, Git Bash. Project path contains spaces and lives in OneDrive: always quote paths; `npm install` is slow (minutes).
- Node 24.13, npm. Next 16.4.2, React 19.3.0, TypeScript 5, ESLint 9, Tailwind 4 wired through `@tailwindcss/turbopack` in `next.config.ts` (no PostCSS config). `next.config.ts` sets `cacheComponents: true` and `partialPrefetching: true`.
- Not installed yet: `next-intl` (latest 4.14.9, peer `next ^16`), `three` 0.186.1, `@react-three/fiber` 9.8.2 (peer react `>=19 <19.4`, OK), `@react-three/drei` 10.7.9, `@gltf-transform/cli` 4.5.1 (dev).
- Image tooling available: Python PIL 12.2 (`python -I`), and `sharp` in node_modules.
- Assets: `hexagone\public\images\` has `hero-collage.jpg` (really a 744×394 PNG), `degaulle-portrait.jpg` (165×140 PNG), six 109×55 thumbs, `eiffel-sommet-closeup.png` (unused). The Eiffel daylight render was removed by user request: do not use it. Crest: `France\Hexagone Design System\assets\editorial\fff-crest.png` (927×1697, third-party mark, never recolor or distort) = navbar logo + favicon. GLB: `France\blender_eiffel\eiffel_tower_paris_mcp.glb` (2.5 MB).
- The `France` folder is a git repo with many unrelated uncommitted changes by the user. Executors must never run git commands that change state (no add/commit/checkout/stash/reset).

## Message keys (final, after copy delta 1)

`meta.{title,description}` · `a11y.{skipLink,mainNav,home,homeCrest,language,timeline,moreModules({count}),menuOpen,menuClose}` · `nav.{cta,modulesMenu,menu}` · `scenario.{badge,notice,marker,yearSuffix}` · `modules.<id>.{name,sub}` for arsenal, statecraft, epochs, territories, arena, aesthetics, science, economy, francophonie, industry · `index.hero.{eyebrow,subtitle,tagline,lede,ctaPrimary,ctaSecondary,imageAlt}` · `index.heroQuote.{text,translation,attribution}` · `index.stats.{eyebrow,eez,warheads,francophone,continents}` · `index.matrix.{eyebrow,title,intro}` · `index.manifesto.{eyebrow,i,ii,iii}.{title,body}` (eyebrow is a string; i/ii/iii have title/body) · `index.chronology.{eyebrow,open,today,eras.{alesia,revolution,fifthRepublic,today,gdn2040}}` · `index.citation.{eyebrow,text,translation,attribution}` · `footer.{rights,scenarioNote,links.{about,sources,legal,credits}}`.
Executors never write or edit user-facing copy. Every visible string comes from these keys. If a needed string has no key, the task says "STOP and report the missing key".

## Executors

- Haiku 5.5 at max effort, with Read / Write / Edit / Bash / Glob / Grep. Each executor sees only its task text plus the files it reads. No chat history.
- Give each task: exact files it owns (may create/modify), files it reads, precise instructions, code skeletons for anything version-specific or non-obvious, the exact verification commands and the expected result, and a "STOP and report" list for situations where it must not improvise.
- Tasks in the same wave run in parallel and **must own disjoint files**. Only one task in the whole plan touches `package.json` / `package-lock.json` (installs happen once, early).
- Keep tasks small enough that a Haiku agent can finish one in a single focused session (roughly one component family or one page section per task).

## Required phases (from spec §11)

P0 foundation (deps, next.config turbopack.root, remove root layout, `[locale]` layout, proxy, i18n routing/request/navigation, AppConfig typing + key-parity script, fonts-latin / fonts-cjk, globals.css with theme reset and `--nf-*` mapping, 10 placeholder module routes, favicon from crest; gate: `npm run build` shows `/fr`, `/en`, `/zh` prerendered static) → P1 port design-system components to TSX (names and visual props kept; CSS hover/press/focus; href instead of callbacks) → P2 INDEX sections S0–S6 with breakpoints, headings outline, `lang="fr" translate="no"` spans, number formatting → P3 CSS entry motion (`@starting-style`, `html.js` + tiny IntersectionObserver inline script), `<details>` menu Esc script, GLB compression + optional `EiffelScene` island → verification wave (build, lint, tsc, key parity, `290` grep, banned-class grep, JS budget from build output).

## Deliverable format (your final message)

1. **Spec problems** (if any): problem → proposed resolution.
2. **Waves**: for each wave, the list of task IDs that run in parallel, and why their files do not overlap.
3. **Tasks**: for each task:
   - `ID` · title · wave · depends_on
   - `owns`: files created/modified
   - `reads`: files to read first
   - `instructions`: numbered, precise; include code skeletons where version-specific (next-intl 4 with Next 16 proxy + cacheComponents + setRequestLocale, next/font variables, Tailwind 4 `@theme` reset, `@starting-style`, r3f lazy island)
   - `verify`: exact commands + expected output
   - `stop_if`: conditions to stop and report instead of improvising
4. **Orchestrator checks** after each wave (what the orchestrator should look at before releasing the next wave).
5. **Risks** you see, ranked.

Be concrete. Prefer exact file contents or skeletons over prose where a Haiku agent could otherwise guess wrong.
