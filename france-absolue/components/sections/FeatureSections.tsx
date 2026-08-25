import Reveal from '@/components/ui/Reveal'

import type { Lang } from '@/lib/i18n'

interface FeatureItem {
  icon: string
  title: Record<Lang, string>
  subtitle: string
  text: Record<Lang, string>
}

interface FeatureSectionsProps {
  locale: string
  items: FeatureItem[]
  eyebrow: Record<Lang, string>
  heading: Record<Lang, string>
}

export default function FeatureSections({ locale, items, eyebrow, heading }: FeatureSectionsProps) {
  const lang = locale as Lang

  return (
    <section className="container-main py-16">
      <Reveal className="max-w-3xl">
        <p className="eyebrow">{eyebrow[lang]}</p>
        <h2 className="section-title mt-4 text-white">{heading[lang]}</h2>
      </Reveal>

      <div className="mt-10 border-t border-white/[0.06]">
        {items.map((item, i) => (
          <Reveal key={item.subtitle} delay={i * 0.05}>
            <article className="grid gap-6 border-b border-white/[0.06] py-7 md:grid-cols-[70px_0.8fr_1.4fr] md:items-start">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs" style={{ color: 'var(--accent)' }}>0{i + 1}</span>
                <span className="text-xl" style={{ color: 'var(--accent)' }}>{item.icon}</span>
              </div>
              <div>
                <p className="font-mono text-[9px] font-bold tracking-[0.1em]" style={{ color: 'var(--accent)' }}>
                  {item.subtitle}
                </p>
                <h3 className="mt-2 text-xl font-black tracking-tight text-white sm:text-2xl">{item.title[lang]}</h3>
              </div>
              <p className="max-w-2xl text-[12px] leading-[1.85] text-white/40">{item.text[lang]}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
