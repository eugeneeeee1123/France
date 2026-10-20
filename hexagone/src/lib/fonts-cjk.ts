// Note: unused since REVIEW-CODE-INDEX #2 (zh loads Noto SC via a zh-only stylesheet link in [locale]/layout.tsx); kept for reference.
import { Noto_Sans_SC, Noto_Serif_SC } from "next/font/google";

// Chinese font set (ARCHITECTURE-INDEX §4, §7). Mounted on <html> only when
// locale === "zh" by [locale]/layout.tsx. preload: false keeps the CJK slices
// out of the fr/en documents, and with preload off next/font needs no
// `subsets` (its Google loader only requires subsets for preloading); the
// browser fetches the unicode-range slices it actually renders. Options were
// checked against node_modules/next/dist/compiled/@next/font/dist/google/index.d.ts.
// Note: the zh mount described above no longer happens (see the top note); zh now loads Noto SC through the zh-only stylesheet link in [locale]/layout.tsx.

export const notoSerifSC = Noto_Serif_SC({
  weight: ["500"],
  display: "swap",
  preload: false,
  variable: "--nf-noto-serif-sc",
});

export const notoSansSC = Noto_Sans_SC({
  weight: ["400", "600"],
  display: "swap",
  preload: false,
  variable: "--nf-noto-sans-sc",
});
