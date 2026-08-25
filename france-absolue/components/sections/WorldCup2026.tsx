import Reveal from '@/components/ui/Reveal'
import sportData from '@/data/sport.json'

import type { Lang } from '@/lib/i18n'

const headings: Record<Lang, { eyebrow: string; title: string }> = {
  zh: { eyebrow: 'FIFA 世界杯 26', title: '第三颗星，是一项国家工程。' },
  fr: { eyebrow: 'Coupe du Monde FIFA 26', title: 'La troisième étoile, un projet national.' },
  en: { eyebrow: 'FIFA World Cup 26', title: 'A third star — a national endeavour.' },
}

export default function WorldCup2026({ locale }: { locale: string }) {
  const lang = locale as Lang
  const h = headings[lang]
  const { matches, note } = sportData.worldCup2026

  return (
    <section className="border-t border-white/[0.06] py-16">
      <div className="container-main">
        <Reveal className="max-w-4xl">
          <p className="eyebrow">{h.eyebrow}</p>
          <h2 className="section-title mt-4 text-white">{h.title}</h2>
        </Reveal>

        <Reveal delay={0.08} className="mt-10 grid border border-white/[0.06] bg-[#07111f] lg:grid-cols-[0.6fr_1.4fr]">
          {/* Jersey panel */}
          <div className="grid min-h-[280px] place-items-center bg-blue p-10 text-white">
            <div className="text-center">
              <span className="text-[11px] tracking-[0.3em]">FRANCE</span>
              <strong className="mt-7 block text-[7rem] font-black leading-none tracking-[-0.1em]">10</strong>
              <b className="text-sm font-black tracking-[0.1em]">MBAPPÉ</b>
            </div>
          </div>

          {/* Match list */}
          <div className="p-7 sm:p-10">
            {matches.map((m) => (
              <div key={m.date} className="grid gap-2 border-b border-white/[0.06] py-6 sm:grid-cols-[80px_1fr_140px] sm:items-center">
                <span className="font-mono text-[10px] font-bold text-blue-light">{m.date}</span>
                <b className="text-lg font-black tracking-[-0.03em] text-white sm:text-xl">{m.teams}</b>
                <small className="text-[10px] text-white/30 sm:text-right">{m.city}</small>
              </div>
            ))}
            <p className="mt-7 max-w-2xl text-[11px] leading-[1.85] text-white/35">{note[lang]}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
