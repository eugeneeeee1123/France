import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

// Request config for next-intl 4. `requestLocale` is the matched `[locale]`
// segment (or the explicit locale passed to getTranslations({ locale })).
// Every layout and page calls setRequestLocale(locale) before any next-intl
// API (ARCHITECTURE-INDEX §4), so this never has to read request headers and
// the three locales stay fully prerendered under cacheComponents.
export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
