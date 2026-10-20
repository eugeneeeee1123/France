import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

// P2 placeholder route so the footer link does not 404 (§5 S6); the page body is a
// later phase. Same pattern as the module placeholders.
export default async function AboutPage({ params }: PageProps<"/[locale]/about">) {
  const { locale } = await params;
  // The layout already rejects unknown locales; this check narrows the type
  // to Locale, which setRequestLocale requires, and keeps rendering static (§4).
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations("footer.links");

  return (
    <main id="main">
      <h1>{t("about")}</h1>
    </main>
  );
}
