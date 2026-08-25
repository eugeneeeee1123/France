import Reveal from '@/components/ui/Reveal'
import arsenalData from '@/data/arsenal-real.json'

import type { Lang } from '@/lib/i18n'

const headings: Record<Lang, { eyebrow: string; title: string }> = {
  zh: { eyebrow: '体系，而非孤立武器', title: '四条作战链，组成同一套主权系统。' },
  fr: { eyebrow: 'Systèmes, pas objets isolés', title: 'Quatre chaînes opérationnelles, un seul système souverain.' },
  en: { eyebrow: 'Systems, not isolated objects', title: 'Four operational chains, one sovereign system.' },
}

export default function FeatureBranches({ locale }: { locale: string }) {
  const lang = locale as Lang
  const h = headings[lang]

  return (
    <section className="container-main border-t border-white/[0.06] py-16">
      <Reveal className="max-w-3xl">
        <p className="eyebrow">{h.eyebrow}</p>
        <h2 className="section-title mt-4 text-white">{h.title}</h2>
      </Reveal>

      <div className="mt-10 border-t border-white/[0.06]">
        {arsenalData.branches.map((branch, i) => (
          <Reveal key={branch.key} delay={i * 0.05}>
            <article className="grid gap-6 border-b border-white/[0.06] py-7 md:grid-cols-[70px_0.8fr_1.4fr] md:items-start">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs" style={{ color: 'var(--accent)' }}>0{i + 1}</span>
                <span className="text-xl" style={{ color: 'var(--accent)' }}>{branch.icon}</span>
              </div>
              <div>
                <p className="font-mono text-[9px] font-bold tracking-[0.1em]" style={{ color: 'var(--accent)' }}>
                  {branch.subtitle}
                </p>
                <h3 className="mt-2 text-xl font-black tracking-tight text-white sm:text-2xl">{branch.title[lang]}</h3>
              </div>
              <p className="max-w-2xl text-[12px] leading-[1.85] text-white/40">{branch.text[lang]}</p>
            </article>
          </Reveal>
        ))}
      </div>

      {/* Industrial groups */}
      <Reveal delay={0.2} className="mt-10 grid grid-cols-2 gap-px bg-white/[0.04] sm:grid-cols-4">
        {arsenalData.industrialGroups.map((g) => (
          <div key={g.name} className="bg-navy p-5">
            <div className="text-sm font-black text-white">{g.name}</div>
            <div className="mt-2 text-[9px] font-bold uppercase tracking-[0.08em]" style={{ color: 'var(--accent)' }}>
              {g.focus[lang]}
            </div>
            <div className="mt-2 text-[10px] text-white/30">{g.products}</div>
          </div>
        ))}
      </Reveal>
    </section>
  )
}
