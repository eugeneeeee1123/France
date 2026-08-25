import { getTranslations, setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'
import TopicHero from '@/components/sections/TopicHero'
import MetricsStrip from '@/components/sections/MetricsStrip'
import FeatureSections from '@/components/sections/FeatureSections'
import InfoGrid from '@/components/sections/InfoGrid'
import aestheticsData from '@/data/aesthetics.json'

import type { Lang } from '@/lib/i18n'

const heroContent: Record<Lang, { label: string; title: string; desc: string }> = {
  zh: {
    label: 'DESIGN · INDUSTRIE · ART DE VIVRE',
    title: '文化与工业美学',
    desc: '法国的软实力不只来自奢侈品。航空、铁路、航天、时装、餐饮与葡萄酒共享一种标准：技术必须被转化为可识别的形式与体验。',
  },
  fr: {
    label: 'DESIGN · INDUSTRIE · ART DE VIVRE',
    title: "L'Esthétique Française",
    desc: "L'influence française relie ingénierie, forme, usage et art de vivre, de l'aéronautique à la haute couture.",
  },
  en: {
    label: 'DESIGN · INDUSTRIE · ART DE VIVRE',
    title: 'The French Aesthetic',
    desc: 'French influence connects engineering, form, use, and art de vivre, from aerospace to haute couture.',
  },
}

const eyebrow: Record<Lang, string> = { zh: '工程与生活美学', fr: 'Ingénierie et art de vivre', en: 'Engineering and Art de Vivre' }
const heading: Record<Lang, string> = {
  zh: '法国美学最稳定的特征，是让技术、制度和生活方式共同塑造形式。',
  fr: 'La constante esthétique française : technique, institutions et art de vivre façonnent ensemble la forme.',
  en: 'The constant of French aesthetics: technique, institutions, and lifestyle together shape form.',
}

const domainsLabel: Record<Lang, string> = { zh: '四大文化领域', fr: 'Quatre domaines culturels', en: 'Four Cultural Domains' }

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'nav' })
  return { title: t('aesthetics') }
}

export default function AestheticsPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale)
  const lang = locale as Lang
  const hero = heroContent[lang]
  const metrics = aestheticsData.metrics.map(m => ({ value: m.value, label: m.label[lang] }))

  const domainCards = aestheticsData.domains.map(d => ({
    key: d.key,
    title: d.title,
    items: d.items,
  }))

  return (
    <div data-page="aesthetics">
      <TopicHero number="07" icon="✦" label={hero.label} title={hero.title} desc={hero.desc} />
      <MetricsStrip metrics={metrics} />
      <FeatureSections locale={locale} items={aestheticsData.sections} eyebrow={eyebrow} heading={heading} />
      <InfoGrid locale={locale} label={domainsLabel} cards={domainCards} cols={4} />
    </div>
  )
}
