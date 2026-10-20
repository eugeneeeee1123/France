import { defineRouting } from "next-intl/routing";

// D7: fr is the default locale; every URL carries its locale prefix (/fr, /en, /zh).
export const routing = defineRouting({
  locales: ["fr", "en", "zh"],
  defaultLocale: "fr",
  localePrefix: "always",
});
