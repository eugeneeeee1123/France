import { getTranslations, setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'
import TopicHero from '@/components/sections/TopicHero'
import MetricsStrip from '@/components/sections/MetricsStrip'
import InteractiveMapSection from '@/components/sections/InteractiveMapSection'
import ReliefSection from '@/components/sections/ReliefSection'
import RegionTabs from '@/components/sections/RegionTabs'
import territoriesData from '@/data/territories.json'

import type { Lang } from '@/lib/i18n'

const heroContent: Record<Lang, { label: string; title: string; desc: string }> = {
  zh: {
    label: 'OUTRE-MER · OCÉANS · PRÉSENCE',
    title: '全球地理纵深',
    desc: '法国不仅位于欧洲。海外省与海外领地让法国横跨大西洋、印度洋、太平洋与南极周边，形成全球第二大的专属经济区。',
  },
  fr: {
    label: 'OUTRE-MER · OCÉANS · PRÉSENCE',
    title: 'La France des Océans',
    desc: "Les territoires ultramarins projettent la France dans l'Atlantique, l'océan Indien, le Pacifique et les mers australes.",
  },
  en: {
    label: 'OUTRE-MER · OCÉANS · PRÉSENCE',
    title: 'France Across the Oceans',
    desc: 'Overseas territories project France across the Atlantic, Indian Ocean, Pacific, and Southern seas.',
  },
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'nav' })
  return { title: t('territories') }
}

export default function TerritoriesPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale)
  const lang = locale as Lang
  const hero = heroContent[lang]
  const metrics = territoriesData.metrics.map(m => ({ value: m.value, label: m.label[lang] }))

  return (
    <div data-page="territories">
      <TopicHero number="05" icon="◉" label={hero.label} title={hero.title} desc={hero.desc} />
      <MetricsStrip metrics={metrics} />
      <InteractiveMapSection locale={locale} />
      <ReliefSection locale={locale} />
      <RegionTabs locale={locale} />
    </div>
  )
}
