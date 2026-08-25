import { getTranslations, setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'
import TopicHero from '@/components/sections/TopicHero'
import MetricsStrip from '@/components/sections/MetricsStrip'
import EpochsTimeline from '@/components/sections/EpochsTimeline'
import VichyContrast from '@/components/sections/VichyContrast'
import HeritageContinuum from '@/components/sections/HeritageContinuum'
import epochsData from '@/data/epochs-full.json'

import type { Lang } from '@/lib/i18n'

const heroContent: Record<Lang, { label: string; title: string; desc: string }> = {
  zh: {
    label: 'RÉVOLUTION · GUERRE · RÉPUBLIQUE',
    title: '历史引擎',
    desc: '法国历史并非平滑展开，而是由革命、帝国、总体战、抵抗与重建不断断裂。每一次危机都重新定义国家、共和国与公民。',
  },
  fr: {
    label: 'RÉVOLUTION · GUERRE · RÉPUBLIQUE',
    title: 'Les Ruptures Françaises',
    desc: "L'histoire française avance par ruptures : révolution, empire, guerre totale, résistance et reconstruction.",
  },
  en: {
    label: 'RÉVOLUTION · GUERRE · RÉPUBLIQUE',
    title: 'The French Ruptures',
    desc: 'French history moves through ruptures: revolution, empire, total war, resistance, and reconstruction.',
  },
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'nav' })
  return { title: t('epochs') }
}

export default function EpochsPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale)
  const lang = locale as Lang
  const hero = heroContent[lang]
  const metrics = epochsData.metrics.map(m => ({ value: m.value, label: m.label[lang] }))

  return (
    <div data-page="epochs">
      <TopicHero
        number="04"
        icon="⌛"
        label={hero.label}
        title={hero.title}
        desc={hero.desc}
      />
      <MetricsStrip metrics={metrics} />
      <EpochsTimeline locale={locale} />
      <VichyContrast locale={locale} />
      <HeritageContinuum locale={locale} />
    </div>
  )
}
