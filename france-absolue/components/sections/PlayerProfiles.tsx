import Reveal from '@/components/ui/Reveal'
import RadarChart from '@/components/ui/RadarChart'
import sportData from '@/data/sport.json'

import type { Lang } from '@/lib/i18n'

const headings: Record<Lang, { eyebrow: string; title: string }> = {
  zh: { eyebrow: '两个坐标', title: '同一种法国野心。' },
  fr: { eyebrow: 'Deux Icônes', title: 'Une même ambition française.' },
  en: { eyebrow: 'Two Icons', title: 'One French ambition.' },
}

export default function PlayerProfiles({ locale }: { locale: string }) {
  const lang = locale as Lang
  const h = headings[lang]
  const [wembanyama, mbappe] = sportData.players

  return (
    <section className="border-t border-white/[0.06] bg-[#07111f] py-16">
      <div className="container-main">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">{h.eyebrow}</p>
          <h2 className="section-title mt-4 text-white">{h.title}</h2>
        </Reveal>

        <div className="mt-12 flex flex-col gap-16">
          {[wembanyama, mbappe].map((player, i) => (
            <Reveal key={player.key} delay={i * 0.08}>
              <article className="grid items-center gap-10 lg:grid-cols-[1fr_auto_1fr]">

                {/* Left: bio (alternates side via order on desktop) */}
                <div className={i % 2 ? 'lg:order-3' : ''}>
                  <span className="font-mono text-[9px] font-bold tracking-[0.1em] text-blue uppercase">
                    {player.sport[lang]} · {player.club}
                  </span>
                  <h3 className="mt-4 text-[clamp(2rem,4vw,3.4rem)] font-black leading-[0.88] tracking-[-0.06em] text-white">
                    {player.firstName} {player.lastName}
                  </h3>
                  <p className="mt-5 max-w-md text-[12px] leading-[1.85] text-white/40">
                    {player.bio[lang]}
                  </p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {player.honors[lang].map((honor) => (
                      <span
                        key={honor}
                        className="border border-white/[0.08] px-3 py-1.5 text-[9px] font-bold tracking-[0.04em] text-white/50"
                      >
                        {honor}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Middle: radar chart */}
                <div className="flex flex-col items-center gap-3">
                  <RadarChart data={player.radar} color="#1f55d5" />
                  <div className="grid grid-cols-3 gap-px bg-white/[0.04]">
                    {player.stats.map((s) => (
                      <div key={s.label} className="bg-navy px-4 py-3 text-center">
                        <div className="text-lg font-black tracking-tight text-blue-light">{s.value}</div>
                        <div className="mt-1 text-[7px] font-bold tracking-[0.1em] text-white/25 uppercase">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="hidden lg:block" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
