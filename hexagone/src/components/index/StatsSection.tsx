import { getFormatter, getTranslations } from 'next-intl/server'
import { indexStats } from '@/lib/content/index-stats'
import { ScenarioLabel } from '../content/ScenarioLabel'
import { StatStrip, type StatItem } from '../data/StatStrip'

const NBSP = '\u00A0'

/**
 * S2 (ARCHITECTURE-INDEX §5, §12-2; Mockup lines 94 to 104): the single GDN-2040 notice of the page
 * directly above the four R.I.F. figures. Values are numbers formatted per locale (§4):
 * compact notation for the EEZ, "~" for the approximate warhead count, a no-break space before units.
 */
export async function StatsSection() {
  const t = await getTranslations('index.stats')
  const ts = await getTranslations('scenario')
  const format = await getFormatter()

  const items: StatItem[] = indexStats.map((s) => {
    const number = format.number(s.value, s.compact ? { notation: 'compact' } : undefined)
    return {
      value: `${s.approx ? '~' : ''}${number}${s.unit ? `${NBSP}${s.unit}` : ''}`,
      label: t(s.id),
      scenario: s.scenario,
      scenarioMarker: s.scenario ? ts('marker') : undefined,
    }
  })

  return (
    // hx-reveal: P3 attaches the CSS entry; the class it adds before hydration must not warn.
    <section className="hx-reveal mx-auto max-w-[var(--container-max)] px-5 md:px-[var(--gutter-page)]" suppressHydrationWarning>
      <h2 className="sr-only">{t('eyebrow')}</h2>
      <ScenarioLabel badge={ts('badge')}>{ts('notice')}</ScenarioLabel>
      <StatStrip variant="open" items={items} />
    </section>
  )
}
