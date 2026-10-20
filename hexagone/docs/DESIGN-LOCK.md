# Hexagone — Design Lock

<!-- Locked design decisions (ui-setup design lock, adapted to the Hexagone Design System).
     Every agent re-reads this before touching UI and must obey it.
     Values live in src/styles/tokens/*.css, copied verbatim from ../../Hexagone Design System/tokens/.
     To change a value: change it in the design system first, then re-sync the copy. -->

- App domain:          Editorial atlas / state dossier (not SaaS, not a game)
- Skin:                Hexagone Design System (dark-only ink ramp)
- Key color (accent):  Gold #EFB44B — the ONLY action/signal color. Gold rule #B8863A.
- Wayfinding hues:     One per module, oklch(68% 0.1 h); hover fill oklch(30% 0.05 h). Never body text, never "click me".
- Neutrals:            Ink #00152C / #001B39 / #04264B / #12385F · Paper #F3EFE4 (body 85%) · Secondary #B9C3D1. No pure black or white.
- Radius personality:  Sharp. 0 everywhere. Exceptions: overflow chip 14px, timeline nodes and social buttons 50%.
- Shadows:             None. Only exception: active module card glow 0 0 40px -8px in module hue.
- Borders:             1px #12385F hairlines divide sections; rule-bounded, not boxed.
- Gradients:           Only the two image scrims (--scrim-hero, --scrim-thumb).
- Blur / glass:        None.
- Motion seed:         Silk — settle curve cubic-bezier(.16,1,.3,1); 100 / 180 / 320 / 700 ms; transform + opacity only; once per element; no loops; reduced motion collapses to opacity.
- Type:                Playfair Display (display, numerals, quotes) · Public Sans (UI, body) · IBM Plex Mono (data only) · Noto Serif SC / Noto Sans SC for 中文 (+10% line-height).
- Iconography:         Thin-line 1.5px stroke, no fills. The two-digit numeral (01–10) is the primary wayfinding device and is never replaced by an icon.
- Voice:               Dossier register. No emoji, no exclamation marks, no em-dashes in shipped copy, French spacing before ":".
- Canon:               R.I.F. / GDN-2040 for every figure; speculative figures marked (scénario); one GDN-2040 notice per page.
- Locked:              2026-10-16
