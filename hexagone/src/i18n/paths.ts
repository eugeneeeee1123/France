import type { Locale } from "next-intl";

// Server-safe replacement for next-intl's createNavigation().getPathname. Importing that module
// from a Server Component registers next-intl's client Link (BaseLink) as a client reference and
// ships about 13 KB gzip of next-intl client runtime to every route, even when no Link renders.
// Same name and call shape, so call sites only change their import path. Valid because routing.ts
// uses localePrefix "always" and no localized pathnames: every URL is /<locale><href>.
export function getPathname({ locale, href }: { locale: Locale; href: string }): string {
  return href === "/" ? `/${locale}` : `/${locale}${href}`;
}
