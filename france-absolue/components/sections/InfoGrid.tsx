import Reveal from '@/components/ui/Reveal'

import type { Lang } from '@/lib/i18n'

interface InfoCard {
  key: string
  title: Record<Lang, string> | string
  sub?: Record<Lang, string> | string
  items?: string[]
}

interface InfoGridProps {
  locale: string
  label: Record<Lang, string>
  cards: InfoCard[]
  cols?: 2 | 3 | 4
}

export default function InfoGrid({ locale, label, cards, cols = 4 }: InfoGridProps) {
  const lang = locale as Lang
  const colClass = { 2: 'sm:grid-cols-2', 3: 'sm:grid-cols-3', 4: 'sm:grid-cols-2 lg:grid-cols-4' }[cols]

  return (
    <section className="border-t border-white/[0.06] py-16">
      <div className="container-main">
        <Reveal>
          <p className="eyebrow">{label[lang]}</p>
        </Reveal>

        <Reveal delay={0.08} className={`mt-8 grid gap-px bg-white/[0.04] ${colClass}`}>
          {cards.map((card) => {
            const title = typeof card.title === 'string' ? card.title : card.title[lang]
            const sub = card.sub ? (typeof card.sub === 'string' ? card.sub : card.sub[lang]) : null
            return (
              <div key={card.key} className="bg-[var(--accent-pale)] p-6">
                <h3 className="text-base font-black tracking-tight text-white">{title}</h3>
                {sub && <p className="mt-2 text-[10px] text-white/35">{sub}</p>}
                {card.items && (
                  <div className="mt-4 flex flex-col gap-2">
                    {card.items.map((item) => (
                      <span key={item} className="text-[10.5px] leading-[1.6] text-white/35">{item}</span>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
