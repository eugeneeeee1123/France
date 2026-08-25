import { getTranslations, setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'
import TopicHero from '@/components/sections/TopicHero'
import MetricsStrip from '@/components/sections/MetricsStrip'
import FeatureSections from '@/components/sections/FeatureSections'
import InfoGrid from '@/components/sections/InfoGrid'
import francophonieData from '@/data/francophonie.json'

import type { Lang } from '@/lib/i18n'

const heroContent: Record<Lang, { label: string; title: string; desc: string }> = {
  zh: {
    label: 'LANGUE · INFLUENCE · AVENIR',
    title: '法语帝国',
    desc: '法语不只是法国的语言。57个国家的官方语言，全球第五大语言，到2050年，非洲的人口结构可能让法语使用者超过中文母语者。',
  },
  fr: {
    label: 'LANGUE · INFLUENCE · AVENIR',
    title: "L'Empire de la Langue",
    desc: "Le français n'est pas seulement la langue de la France. Officiel dans 57 pays, 5e langue mondiale.",
  },
  en: {
    label: 'LANGUE · INFLUENCE · AVENIR',
    title: 'The Language Empire',
    desc: "French is not only France's language. Official in 57 countries, the world's 5th most spoken language.",
  },
}

const eyebrow: Record<Lang, string> = { zh: '语言作为软实力', fr: 'La langue comme puissance douce', en: 'Language as Soft Power' }
const heading: Record<Lang, string> = {
  zh: '四个支点，构成全球最大的语言共同体之一。',
  fr: "Quatre piliers formant l'une des plus grandes communautés linguistiques au monde.",
  en: 'Four pillars forming one of the world\'s largest linguistic communities.',
}

const regionsLabel: Record<Lang, string> = { zh: '法语圈区域分布', fr: 'Répartition régionale francophone', en: 'Francophone Regional Distribution' }

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'nav' })
  return { title: t('francophonie') }
}

export default function FrancophoniePage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale)
  const lang = locale as Lang
  const hero = heroContent[lang]
  const metrics = francophonieData.metrics.map(m => ({ value: m.value, label: m.label[lang] }))

  const regionCards = francophonieData.regions.map(r => ({
    key: r.key,
    title: r.name,
    sub: r.countries,
  }))

  return (
    <div data-page="francophonie">
      <TopicHero number="10" icon="🌐" label={hero.label} title={hero.title} desc={hero.desc} />
      <MetricsStrip metrics={metrics} />
      <FeatureSections locale={locale} items={francophonieData.sections} eyebrow={eyebrow} heading={heading} />
      <InfoGrid locale={locale} label={regionsLabel} cards={regionCards} cols={4} />
    </div>
  )
}
