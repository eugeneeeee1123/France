import { getTranslations, setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'
import MetricsStrip from '@/components/sections/MetricsStrip'
import SportHeroBanner from '@/components/sections/SportHeroBanner'
import PlayerProfiles from '@/components/sections/PlayerProfiles'
import WorldCup2026 from '@/components/sections/WorldCup2026'
import FootballHistory from '@/components/sections/FootballHistory'
import SportingGeography from '@/components/sections/SportingGeography'
import sportData from '@/data/sport.json'

import type { Lang } from '@/lib/i18n'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'nav' })
  return { title: t('sport') }
}

export default function SportPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale)
  const lang = locale as Lang
  const metrics = sportData.metrics.map(m => ({ value: m.value, label: m.label[lang] }))

  return (
    <div data-page="sport">
      <SportHeroBanner locale={locale} />
      <MetricsStrip metrics={metrics} />
      <PlayerProfiles locale={locale} />
      <WorldCup2026 locale={locale} />
      <FootballHistory locale={locale} />
      <SportingGeography locale={locale} />
    </div>
  )
}
