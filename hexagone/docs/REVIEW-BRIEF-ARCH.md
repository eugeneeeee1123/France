# Review brief: INDEX architecture v0.1

You are one of four independent reviewers. This is a **read-only** review: do not create, edit or delete any file, do not run git, do not install packages. Your whole deliverable is your final message.

## What to review

Primary: `C:\Users\Eugen\OneDrive\Desktop\Fundamentals of Web Programming2\France\hexagone\docs\ARCHITECTURE-INDEX.md` (the INDEX homepage architecture for a Next.js site).
Also in scope: `docs\DESIGN-LOCK.md`, `docs\COPY-BRIEF-INDEX.md` in the same folder, and `C:\Users\Eugen\OneDrive\Desktop\Fundamentals of Web Programming2\France\PRODUCT.md`.

## Sources of truth to check it against

- Design system: `C:\Users\Eugen\OneDrive\Desktop\Fundamentals of Web Programming2\France\Hexagone Design System\` (`readme.md`, `tokens\*.css`, `components\**\*.jsx`, `templates\hexagone-site\HexagoneSite.dc.html`).
- Wireframes: `...\France\Hexagone UI wireframes and design system\Hexagone Wireframes.dc.html` (INDEX directions 1a–1d; the user chose **1b + 1c depth axis**).
- Pixel reference: `...\France\Hexagone UI wireframes and design system\Hexagone UI Mockup.dc.html` (the INDEX section is the `isHome` block).
- Content plan: `...\France\hexagone-content-plan-v2.md`, especially lines 8–132 (narrative layer and INDEX) and the technical brief from line 3476.
- Project rules: `...\France\agents.md` (precise edits, no renames, keep comments).
- Scaffold: `...\France\hexagone\` is a fresh `create-next-app` 16.4.2 project (Next 16, React 19, Tailwind 4). Next.js 16 docs ship in `hexagone\node_modules\next\dist\docs\` if present; prefer them over memory for anything version-specific.

## User decisions that are NOT up for debate

1. Stack is Next.js (new project). 2. INDEX follows wireframe 1b + 1c depth axis. 3. Every figure uses the R.I.F. / GDN-2040 scenario values from the content plan, no real-vs-scenario toggle. 4. All copy is written by Antigravity (Gemini) with the humanizer and avoid-ai-writing skills. 5. The design system's rules beat generic design-taste rules.

## Report format (your final message, nothing else)

### A. Findings
A table, most severe first, at most 15 rows:

| # | Severity (blocker / major / minor) | Doc section | Problem (one sentence, concrete) | Evidence (file:line or quote) | Proposed fix (one sentence) |

Only report problems you can point to with evidence. No praise, no restating the doc.

### B. Open questions (§12 of the architecture doc)
For each of the 7 questions: your answer in one line + one-line reason.

### C. One thing missing
The single most important thing the architecture does not cover at all, if any.
