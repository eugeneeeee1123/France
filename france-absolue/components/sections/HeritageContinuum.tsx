import Reveal from '@/components/ui/Reveal'
import epochsData from '@/data/epochs-full.json'

import type { Lang } from '@/lib/i18n'

const headings: Record<Lang, { eyebrow: string; title: string }> = {
  zh: { eyebrow: '历史遗迹的层叠', title: '石头没有退场，钢铁只是叠了上去。' },
  fr: { eyebrow: 'La Stratification du Patrimoine', title: "La pierre demeure. L'acier s'y superpose." },
  en: { eyebrow: 'Heritage in Layers', title: 'Stone remained. Steel was layered on top.' },
}

export default function HeritageContinuum({ locale }: { locale: string }) {
  const lang = locale as Lang
  const h = headings[lang]

  return (
    <section className="border-t border-white/[0.06] py-16">
      <div className="container-main">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">{h.eyebrow}</p>
          <h2 className="section-title mt-4 text-white">{h.title}</h2>
        </Reveal>

        <Reveal delay={0.08} className="mt-10 grid gap-px bg-white/[0.04] sm:grid-cols-2 lg:grid-cols-4">
          {epochsData.heritage.map((site) => (
            <div key={site.date} className="bg-[var(--accent-pale)] p-6">
              <span className="font-mono text-[9px] font-bold text-[var(--accent)]">{site.date}</span>
              <h3 className="mt-3 text-base font-black tracking-tight text-white">{site.title[lang]}</h3>
              <p className="mt-3 text-[10.5px] leading-[1.75] text-white/35">{site.text[lang]}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
