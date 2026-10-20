# Hexagone website — UI kit

Click-through recreation of **UI Mockup v3.0** (`France/Design rules and wireframe setup/UI Mockup v3.0.dc.html` + `UI Mockup v3.0 - Arsenal.dc.html`), the "combined best of codex2 + codex3" comp that `design.md` names as the working direction.

## Screens
- **Home** (`HomeScreen.jsx`) — diagonal two-panel hero collage, live Paris clock, hex crest, per-letter title reveal, tricolor rule, de Gaulle quote card, coordinates; stat strip; 5×2 module matrix; era timeline; map + quote panels.
- **Module** (`ModuleScreen.jsx`) — breadcrumb, numeral header, scenario label, hero image slot, Why/How/What, boxed stat strip, body + diagram, related links. Arsenal carries the mockup's French copy; the other nine modules use the content plan's 中文 Why/How/What table verbatim with a source note.

## Interactions
Nav (7 visible + "+3 ▾" overflow) · FR/EN/中 in nav and footer · module cards open module pages · breadcrumb / related links · timeline nodes (click a historic year → Epochs) · hero CTA scrolls to the matrix · route + language persist in localStorage.

## Not in source, deliberately omitted
Search results, timeline overlay, interactive globe, Industry network graph, article ("À la une") rail — specified in TODO/content plan but no comp exists.
