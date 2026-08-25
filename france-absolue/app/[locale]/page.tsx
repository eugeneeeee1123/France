import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import Reveal from '@/components/ui/Reveal'
import HeroSection from '@/components/sections/HeroSection'
import ModulesGrid from '@/components/sections/ModulesGrid'
import RIFSection from '@/components/sections/RIFSection'
import TimelineSection from '@/components/sections/TimelineSection'
import GlobalSection from '@/components/sections/GlobalSection'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'site' })
  return { title: t('name') }
}

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <>
      <HeroSection locale={locale} />
      <MetricsBar />
      <ModulesGrid locale={locale} />
      <RIFSection locale={locale} />
      <TimelineSection locale={locale} />
      <GlobalSection locale={locale} />
      <QuoteSection />
    </>
  )
}

function MetricsBar() {
  const metrics = [
    { val: '551,695 km²', lbl: 'Superficie totale · Métropole' },
    { val: '11,000,000 km²', lbl: 'ZEE · 2ème mondiale' },
    { val: '68M+', lbl: 'Population · 2024' },
    { val: '57 PAYS', lbl: 'Francophonie · OIF' },
    { val: '2ÈME', lbl: 'Puissance maritime mondiale' },
    { val: 'P5 · VETO', lbl: 'Conseil de Sécurité ONU' },
  ]
  return (
    <div className="metric-grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
      {metrics.map((m) => (
        <div key={m.val} className="px-6 py-5">
          <div className="text-xl font-black tracking-tight text-white">{m.val}</div>
          <div className="mt-1.5 text-[8px] font-medium tracking-[0.12em] text-white/25 uppercase leading-relaxed">{m.lbl}</div>
        </div>
      ))}
    </div>
  )
}

function QuoteSection() {
  return (
    <section className="border-t border-white/[0.05] py-16 text-center">
      <Reveal>
        <div className="mb-3 font-serif text-5xl leading-none text-gold/15">&ldquo;</div>
        <p className="mx-auto max-w-2xl text-[clamp(1rem,2vw,1.5rem)] font-light italic leading-relaxed text-white/40">
          La France n&apos;est pas un pays, c&apos;est une civilisation.
        </p>
        <p className="mt-5 text-[9px] font-bold tracking-[0.28em] text-gold uppercase">
          — Charles de Gaulle
        </p>
      </Reveal>
    </section>
  )
}
