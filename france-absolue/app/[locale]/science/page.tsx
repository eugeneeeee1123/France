import { getTranslations, setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'
import TopicHero from '@/components/sections/TopicHero'
import MetricsStrip from '@/components/sections/MetricsStrip'
import FeatureSections from '@/components/sections/FeatureSections'
import Reveal from '@/components/ui/Reveal'
import scienceData from '@/data/science.json'

import type { Lang } from '@/lib/i18n'

const heroContent: Record<Lang, { label: string; title: string; desc: string }> = {
  zh: {
    label: 'ESPACE · NUCLÉAIRE · MATHÉMATIQUES',
    title: '科学天工',
    desc: '从库鲁航天中心到布尔巴基学派，从核能体系到诺贝尔奖传统，法国在科学领域的影响力远超其人口规模所能解释的范畴。',
  },
  fr: {
    label: 'ESPACE · NUCLÉAIRE · MATHÉMATIQUES',
    title: 'Le Génie Scientifique',
    desc: "Du Centre Spatial Guyanais au groupe Bourbaki, l'influence scientifique française dépasse largement ce que sa population expliquerait.",
  },
  en: {
    label: 'ESPACE · NUCLÉAIRE · MATHÉMATIQUES',
    title: 'Scientific Genius',
    desc: "From the Guiana Space Centre to the Bourbaki group, France's scientific influence far exceeds what its population would explain.",
  },
}

const eyebrow: Record<Lang, string> = { zh: '体系性的科学领导力', fr: 'Leadership scientifique systémique', en: 'Systemic Scientific Leadership' }
const heading: Record<Lang, string> = {
  zh: '四个领域，证明法国科学不是偶然。',
  fr: 'Quatre domaines prouvant que la science française n\'est pas un hasard.',
  en: "Four domains proving French science is no accident.",
}

const laureatesLabel: Record<Lang, string> = { zh: '菲尔兹奖得主精选', fr: 'Médailles Fields sélectionnées', en: 'Selected Fields Medalists' }

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'nav' })
  return { title: t('science') }
}

export default function SciencePage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale)
  const lang = locale as Lang
  const hero = heroContent[lang]
  const metrics = scienceData.metrics.map(m => ({ value: m.value, label: m.label[lang] }))

  return (
    <div data-page="science">
      <TopicHero number="08" icon="⚛" label={hero.label} title={hero.title} desc={hero.desc} />
      <MetricsStrip metrics={metrics} />
      <FeatureSections locale={locale} items={scienceData.sections} eyebrow={eyebrow} heading={heading} />

      <section className="border-t border-white/[0.06] py-16">
        <div className="container-main">
          <Reveal>
            <p className="eyebrow">{laureatesLabel[lang]}</p>
          </Reveal>
          <Reveal delay={0.08} className="mt-8 grid gap-px bg-white/[0.04] sm:grid-cols-2 lg:grid-cols-4">
            {scienceData.fieldsLaureates.map((l) => (
              <div key={l.name} className="bg-[var(--accent-pale)] p-6">
                <span className="font-mono text-[9px] font-bold" style={{ color: 'var(--accent)' }}>{l.year}</span>
                <h3 className="mt-3 text-base font-black tracking-tight text-white">{l.name}</h3>
                <p className="mt-2 text-[10px] text-white/35">{l.field[lang]}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>
    </div>
  )
}
