import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { ChronologySection } from "@/components/index/ChronologySection";
import { HeroSection } from "@/components/index/HeroSection";
import { ManifestoSection } from "@/components/index/ManifestoSection";
import { MatrixSection } from "@/components/index/MatrixSection";
import { StatsSection } from "@/components/index/StatsSection";

// Next 16.4 route segment config (03-file-conventions/02-route-segment-config/ensureStatic.md):
// the complete server-rendered INDEX route must stay static, so the build fails if a later
// change adds request-time rendering (§4, D10).
export const ensureStatic = "navigation";

// INDEX (ARCHITECTURE-INDEX §5): a Server Component that only assembles the five
// sections S1 to S5 between the layout's NavBar (S0) and SiteFooter (S6). Each
// section reads its own strings from messages/<locale>.json; the headings outline is
// h1 GRANDEUR, one h2 per section, h3 for the three manifesto items.
export default async function IndexPage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  // The layout already rejects unknown locales; this check narrows the type
  // to Locale, which setRequestLocale requires, and keeps rendering static (§4).
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return (
    <main id="main" tabIndex={-1} className="focus-visible:outline-none">
      <HeroSection />
      <StatsSection />
      <MatrixSection />
      <ManifestoSection />
      <ChronologySection />
    </main>
  );
}
