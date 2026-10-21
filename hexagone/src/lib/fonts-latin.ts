import { IBM_Plex_Mono, Playfair_Display, Public_Sans } from "next/font/google";

// Latin font set, self-hosted by next/font (no request to Google at runtime).
// Weights are the locked set from ARCHITECTURE-INDEX §7. The CSS variables are
// named --nf-* and re-declared into --font-display / --font-sans / --font-mono
// in globals.css. Options were checked against
// node_modules/next/dist/compiled/@next/font/dist/google/index.d.ts.

// Preloading (REVIEW-CODE-INDEX #3): `subsets` only selects which subsets get a preload tag
// (font.md, `subsets`). latin-ext stays declared and loads on demand, it is just not preloaded.
// Plex Mono (data, below the fold) sets preload: false, so it is not preloaded on every page.

// next/font/google applies `style` to every listed weight, so asking for the
// 400 italic also produces 500 and 600 italic faces; there is no per-weight
// style option.
// 2026-10-21 (user decision): 700 added for the GRANDEUR title (DisplayTitle size="grandeur"); like the others it also brings a 700 italic face.
export const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--nf-playfair",
});

export const publicSans = Public_Sans({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--nf-public-sans",
});

export const plexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  preload: false,
  variable: "--nf-plex-mono",
});
