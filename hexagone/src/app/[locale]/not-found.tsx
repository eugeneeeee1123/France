import { getLocale, getTranslations } from "next-intl/server";
// Note: next/link instead of the next-intl Link. That one is a client component that reads the
// intl context, which this app does not mount; getPathname (server-safe) builds the prefixed href.
import Link from "next/link";
import { getPathname } from "@/i18n/paths";

// Renders inside [locale]/layout.tsx whenever notFound() is thrown under a
// locale, so the request locale is already set by the layout. There is no
// dedicated 404 copy in messages/ yet, so the page only offers the way home
// (a11y.home); a copy key can be added by the copywriter later.
export default async function NotFound() {
  const t = await getTranslations("a11y");
  const locale = await getLocale();

  return (
    <main id="main">
      <Link href={getPathname({ locale, href: "/" })}>{t("home")}</Link>
    </main>
  );
}
