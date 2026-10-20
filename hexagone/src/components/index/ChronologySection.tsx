import { getFormatter, getLocale, getTranslations } from 'next-intl/server'
import { getPathname } from '@/i18n/paths'
import { getModule } from '@/lib/content/modules'
import { HOME_ERA_FILL_TO, homeEras } from '@/lib/content/timeline-eras'
import { CtaLink } from '../actions/CtaLink'
import { Timeline, type TimelineItem } from '../data/Timeline'
import { QuoteBlock } from '../editorial/QuoteBlock'
import { SectionEyebrow } from '../editorial/SectionEyebrow'

// Years are never grouped (1789, not 1 789); BC years get a real minus sign (U+2212), §4.
const YEAR_FORMAT = { useGrouping: false } as const
const MINUS = '−'

/**
 * S5 (ARCHITECTURE-INDEX §5, §6; Mockup lines 130 to 153): two auto-fit columns.
 * Left: the chronology heading, the link to the full timeline and the five locked nodes
 * (gold fill up to "today", 2040 tagged as scenario). Right: the closing de Gaulle quote
 * as a panel over the portrait at 22%. The section closes the page with 96px below (Mockup).
 */
export async function ChronologySection() {
  const locale = await getLocale()
  const t = await getTranslations('index.chronology')
  const tc = await getTranslations('index.citation')
  const ts = await getTranslations('scenario')
  const format = await getFormatter()

  const items: TimelineItem[] = homeEras.map((e) => ({
    id: e.id,
    yearLabel:
      e.year === null
        ? t('today')
        : e.year < 0
          ? `${MINUS}${format.number(-e.year, YEAR_FORMAT)}`
          : format.number(e.year, YEAR_FORMAT),
    caption: t(`eras.${e.id}`),
    href: getPathname({ locale, href: getModule(e.module)?.route ?? `/${e.module}` }),
    scenario: e.scenario,
    scenarioTag: e.scenario ? ts('yearSuffix') : undefined,
  }))
  const fillToIndex = homeEras.findIndex((e) => e.id === HOME_ERA_FILL_TO)
  // fr carries no translation of the French original (empty string in messages).
  const translation = tc('translation')

  return (
    // hx-reveal: P3 attaches the CSS entry; the class it adds before hydration must not warn.
    <section
      className="hx-reveal mx-auto grid max-w-[var(--container-max)] grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] gap-5 px-5 pb-24 pt-[88px] md:px-[var(--gutter-page)]"
      suppressHydrationWarning
    >
      <div className="flex flex-col border-t border-ink-700 pt-8">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <SectionEyebrow as="h2" variant="lead">
            {t('eyebrow')}
          </SectionEyebrow>
          {/* The message already ends with the arrow, so the component's own arrow is off. */}
          {/* Note: the copy has no arrow now; CtaLink draws its own aria-hidden arrow. */}
          <CtaLink href={getPathname({ locale, href: '/epochs' })} uppercase={false}>
            {t('open')}
          </CtaLink>
        </div>
        <Timeline items={items} fillToIndex={fillToIndex} label={t('eyebrow')} bordered={false} />
      </div>
      <QuoteBlock
        variant="panel"
        ground="rule"
        imageSrc="/images/napoleon-portrait.jpg"
        eyebrow={tc('eyebrow')}
        quote={tc('text')}
        translation={translation || undefined}
        attribution={tc('attribution')}
      />
    </section>
  )
}
