import Reveal from '@/components/ui/Reveal'
import arsenalData from '@/data/arsenal-real.json'

import type { Lang } from '@/lib/i18n'

const headings: Record<Lang, { eyebrow: string; title: string }> = {
  zh: { eyebrow: '全球部署 OPEX', title: '海外行动的近代历史。' },
  fr: { eyebrow: 'Déploiement mondial OPEX', title: "L'histoire récente des opérations extérieures." },
  en: { eyebrow: 'Global Deployment OPEX', title: 'A recent history of overseas operations.' },
}

export default function OpexSection({ locale }: { locale: string }) {
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
          {arsenalData.opex.map((op) => (
            <div key={op.name[lang]} className="bg-[var(--accent-pale)] p-6">
              <div className="font-mono text-[9px] font-bold text-[var(--accent)]">{op.period}</div>
              <h3 className="mt-3 text-base font-black tracking-tight text-white">{op.name[lang]}</h3>
              <p className="mt-3 text-[10.5px] leading-[1.7] text-white/35">{op.desc[lang]}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
