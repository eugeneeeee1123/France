import { getTranslations, setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'
import TopicHero from '@/components/sections/TopicHero'
import MetricsStrip from '@/components/sections/MetricsStrip'
import FeatureSections from '@/components/sections/FeatureSections'
import InfoGrid from '@/components/sections/InfoGrid'
import economyData from '@/data/economy.json'

import type { Lang } from '@/lib/i18n'

const heroContent: Record<Lang, { label: string; title: string; desc: string }> = {
  zh: {
    label: 'INDUSTRIE · LUXE · AGRICULTURE',
    title: '帝国经济',
    desc: '从CAC40跨国企业到全球农业出口，从奢侈品垄断到旅游霸权，法国经济体系展示了一种独特的工业组织哲学。',
  },
  fr: {
    label: 'INDUSTRIE · LUXE · AGRICULTURE',
    title: "L'Économie Impériale",
    desc: "Des multinationales du CAC 40 aux exportations agricoles mondiales, du monopole du luxe à l'hégémonie touristique.",
  },
  en: {
    label: 'INDUSTRIE · LUXE · AGRICULTURE',
    title: 'The Imperial Economy',
    desc: 'From CAC 40 multinationals to global agricultural exports, from luxury monopoly to tourism hegemony.',
  },
}

const eyebrow: Record<Lang, string> = { zh: '四个支柱产业', fr: 'Quatre piliers industriels', en: 'Four Industrial Pillars' }
const heading: Record<Lang, string> = {
  zh: '经济实力不是数字，而是产业生态。',
  fr: "La puissance économique n'est pas un chiffre, c'est un écosystème industriel.",
  en: 'Economic power is not a number — it is an industrial ecosystem.',
}

const cac40Label: Record<Lang, string> = { zh: 'CAC 40 重点企业', fr: 'Entreprises phares du CAC 40', en: 'CAC 40 Highlights' }

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'nav' })
  return { title: t('economy') }
}

export default function EconomyPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale)
  const lang = locale as Lang
  const hero = heroContent[lang]
  const metrics = economyData.metrics.map(m => ({ value: m.value, label: m.label[lang] }))

  const cac40Cards = economyData.cac40Highlights.map(c => ({
    key: c.name,
    title: c.name,
    sub: c.sector,
  }))

  return (
    <div data-page="economy">
      <TopicHero number="09" icon="📈" label={hero.label} title={hero.title} desc={hero.desc} />
      <MetricsStrip metrics={metrics} />
      <FeatureSections locale={locale} items={economyData.sections} eyebrow={eyebrow} heading={heading} />
      <InfoGrid locale={locale} label={cac40Label} cards={cac40Cards} cols={3} />
    </div>
  )
}
