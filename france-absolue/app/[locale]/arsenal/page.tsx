import { getTranslations, setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'
import TopicHero from '@/components/sections/TopicHero'
import MetricsStrip from '@/components/sections/MetricsStrip'
import NuclearDeterrence from '@/components/sections/NuclearDeterrence'
import FeatureBranches from '@/components/sections/FeatureBranches'
import OpexSection from '@/components/sections/OpexSection'
import RIFForceStructure from '@/components/sections/RIFForceStructure'
import arsenalData from '@/data/arsenal-real.json'

import type { Lang } from '@/lib/i18n'

const heroContent: Record<Lang, { label: string; title: string; desc: string }> = {
  zh: {
    label: 'DÉFENSE · INDUSTRIE · SOUVERAINETÉ',
    title: '军工与霸权',
    desc: '法国是欧盟内部少数拥有核威慑、航空、潜艇、导弹与陆战装备完整自主链条的国家。技术主权在这里不是口号，而是工业组织方式。',
  },
  fr: {
    label: 'DÉFENSE · INDUSTRIE · SOUVERAINETÉ',
    title: "L'Arsenal Souverain",
    desc: "La souveraineté française repose sur une chaîne industrielle complète, de la dissuasion nucléaire à l'aéronautique et aux forces navales.",
  },
  en: {
    label: 'DÉFENSE · INDUSTRIE · SOUVERAINETÉ',
    title: 'The Sovereign Arsenal',
    desc: 'French sovereignty rests on an integrated industrial chain spanning nuclear deterrence, aerospace, naval power and land systems.',
  },
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'nav' })
  return { title: t('arsenal') }
}

export default function ArsenalPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale)
  const lang = locale as Lang
  const hero = heroContent[lang]
  const metrics = arsenalData.metrics.map(m => ({ value: m.value, label: m.label[lang] }))

  return (
    <div data-page="arsenal">
      <TopicHero
        number="02"
        icon="⚔"
        label={hero.label}
        title={hero.title}
        desc={hero.desc}
      />
      <MetricsStrip metrics={metrics} />
      <NuclearDeterrence locale={locale} />
      <FeatureBranches locale={locale} />
      <OpexSection locale={locale} />
      <RIFForceStructure locale={locale} />
    </div>
  )
}
