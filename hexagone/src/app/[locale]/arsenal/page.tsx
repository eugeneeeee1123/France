import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

// P0 placeholder route so the INDEX matrix link does not 404 (§4); the module
// body (Why / How / What, RelatedCapabilities, Timeline) is built in a later phase.
export default async function ArsenalPage({ params }: PageProps<"/[locale]/arsenal">) {
  const { locale } = await params;
  // The layout already rejects unknown locales; this check narrows the type
  // to Locale, which setRequestLocale requires, and keeps rendering static (§4).
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations("modules.arsenal");

  return (
    <main id="main">
      <h1>{t("name")}</h1>
    </main>
  );
}
