import { getTranslations, setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'
import TopicHero from '@/components/sections/TopicHero'
import MetricsStrip from '@/components/sections/MetricsStrip'
import FeatureSections from '@/components/sections/FeatureSections'
import ComparisonTable from '@/components/sections/ComparisonTable'
import statecraftData from '@/data/statecraft.json'

import type { Lang } from '@/lib/i18n'

const heroContent: Record<Lang, { label: string; title: string; desc: string }> = {
  zh: {
    label: 'DIPLOMATIE · EUROPE · AUTONOMIE',
    title: '地缘与政治',
    desc: '从戴高乐主义到印太战略，法国外交的持续命题是如何在联盟内部保持最终决策权，并把欧洲、海外领土与核威慑组织成独立行动空间。',
  },
  fr: {
    label: 'DIPLOMATIE · EUROPE · AUTONOMIE',
    title: 'La Puissance de Décision',
    desc: "Du gaullisme à l'Indo-Pacifique, la diplomatie française cherche à préserver sa liberté de décision au sein des alliances.",
  },
  en: {
    label: 'DIPLOMATIE · EUROPE · AUTONOMIE',
    title: 'The Power to Decide',
    desc: 'From Gaullism to the Indo-Pacific, French diplomacy seeks to preserve freedom of decision within alliances.',
  },
}

const eyebrow: Record<Lang, string> = { zh: '体系，而非孤立政策', fr: 'Systèmes, pas politiques isolées', en: 'Systems, not isolated policies' }
const heading: Record<Lang, string> = {
  zh: '四个支点，构成一套主权外交体系。',
  fr: 'Quatre piliers, un seul système diplomatique souverain.',
  en: 'Four pillars, one sovereign diplomatic system.',
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'nav' })
  return { title: t('statecraft') }
}

export default function StatecraftPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale)
  const lang = locale as Lang
  const hero = heroContent[lang]
  const metrics = statecraftData.metrics.map(m => ({ value: m.value, label: m.label[lang] }))
  const { comparison } = statecraftData

  const comparisonRows = comparison.rows.map(r => ({
    dim: r.dim,
    left: r.gaulle,
    right: r.macron,
  }))

  return (
    <div data-page="statecraft">
      <TopicHero number="03" icon="⚖" label={hero.label} title={hero.title} desc={hero.desc} />
      <MetricsStrip metrics={metrics} />
      <FeatureSections locale={locale} items={statecraftData.sections} eyebrow={eyebrow} heading={heading} />
      <ComparisonTable
        locale={locale}
        label={comparison.label}
        leftHeader="De Gaulle"
        rightHeader="Macron"
        rows={comparisonRows}
      />
    </div>
  )
}
