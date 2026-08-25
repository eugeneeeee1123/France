import Reveal from '@/components/ui/Reveal'
import sportData from '@/data/sport.json'

import type { Lang } from '@/lib/i18n'

const headings: Record<Lang, { eyebrow: string; title: string }> = {
  zh: { eyebrow: '足球的近代记忆', title: '三个改变法国足球的年份。' },
  fr: { eyebrow: 'Mémoire récente du football', title: 'Trois années qui ont marqué le football français.' },
  en: { eyebrow: 'Recent Football Memory', title: 'Three years that shaped French football.' },
}

export default function FootballHistory({ locale }: { locale: string }) {
  const lang = locale as Lang
  const h = headings[lang]

  return (
    <section className="border-t border-white/[0.06] bg-[#07111f] py-16">
      <div className="container-main">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">{h.eyebrow}</p>
          <h2 className="section-title mt-4 text-white">{h.title}</h2>
        </Reveal>

        <Reveal delay={0.08} className="mt-10 grid gap-px bg-white/[0.04] sm:grid-cols-3">
          {sportData.history.football.map((item) => (
            <div key={item.year} className="bg-navy p-7">
              <div className="text-4xl font-black tracking-[-0.05em] text-blue-light">{item.year}</div>
              <h3 className="mt-4 text-base font-black tracking-tight text-white">{item.title[lang]}</h3>
              <p className="mt-3 text-[10.5px] leading-[1.75] text-white/35">{item.text[lang]}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
