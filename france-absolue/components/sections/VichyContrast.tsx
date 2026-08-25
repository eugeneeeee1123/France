import Reveal from '@/components/ui/Reveal'
import epochsData from '@/data/epochs-full.json'

import type { Lang } from '@/lib/i18n'

export default function VichyContrast({ locale }: { locale: string }) {
  const lang = locale as Lang
  const { label, vichy, freeFrance } = epochsData.vichyVsFreeFrance

  return (
    <section className="border-t border-white/[0.06] bg-[#07111f] py-16">
      <div className="container-main">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">{label[lang]}</p>
          <h2 className="section-title mt-4 text-white">1940–1944</h2>
        </Reveal>

        <Reveal delay={0.08} className="mt-10 grid overflow-hidden border border-white/[0.06] sm:grid-cols-2">
          {/* Vichy side */}
          <div className="border-b border-white/[0.06] bg-gradient-to-br from-[#1a0d08] to-[#100704] p-8 sm:border-b-0 sm:border-r sm:p-10">
            <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-[#a44735] uppercase">{vichy.period}</span>
            <h3 className="mt-4 text-2xl font-black tracking-tight text-white">{vichy.title[lang]}</h3>
            <p className="mt-5 text-[12px] leading-[1.9] text-white/40">{vichy.text[lang]}</p>
          </div>

          {/* Free France side */}
          <div className="bg-gradient-to-bl from-[#06101e] to-[#020610] p-8 sm:p-10">
            <span className="font-mono text-[9px] font-bold tracking-[0.16em] text-blue-light uppercase">{freeFrance.period}</span>
            <h3 className="mt-4 text-2xl font-black tracking-tight text-white">{freeFrance.title[lang]}</h3>
            <p className="mt-5 text-[12px] leading-[1.9] text-white/40">{freeFrance.text[lang]}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
