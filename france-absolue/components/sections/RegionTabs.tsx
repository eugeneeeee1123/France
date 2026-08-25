'use client'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from '@/components/ui/Reveal'
import territoriesData from '@/data/territories.json'

import type { Lang } from '@/lib/i18n'

const headings: Record<Lang, { eyebrow: string; title: string }> = {
  zh: { eyebrow: 'A COUNTRY IN FOUR OCEANS', title: '领土分散，主权相连。' },
  fr: { eyebrow: 'UN PAYS DANS QUATRE OCÉANS', title: 'Territoires dispersés, souveraineté unie.' },
  en: { eyebrow: 'A COUNTRY IN FOUR OCEANS', title: 'Scattered territories, unified sovereignty.' },
}

export default function RegionTabs({ locale }: { locale: string }) {
  const lang = locale as Lang
  const h = headings[lang]
  const [active, setActive] = useState(0)
  const regions = territoriesData.regions
  const current = regions[active]

  return (
    <section className="border-t border-white/[0.06] bg-[#07111f] py-16">
      <div className="container-main">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">{h.eyebrow}</p>
          <h2 className="section-title mt-4 text-white">{h.title}</h2>
        </Reveal>

        <Reveal delay={0.08} className="mt-10 grid border border-white/[0.06] bg-navy lg:grid-cols-[280px_1fr]">
          <div className="border-b border-white/[0.06] lg:border-b-0 lg:border-r">
            {regions.map((r, i) => (
              <button
                key={r.key}
                onClick={() => setActive(i)}
                className={`block w-full border-b border-white/[0.04] px-7 py-5 text-left text-[12px] font-bold transition-colors ${
                  active === i ? 'bg-[var(--accent)]/10 text-white border-l-2' : 'text-white/35 hover:text-white'
                }`}
                style={active === i ? { borderLeftColor: 'var(--accent)', paddingLeft: '26px' } : {}}
              >
                {r.name[lang]}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.key}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="grid min-h-[320px] content-between p-8 sm:p-10"
            >
              <span className="font-mono text-[9px] font-bold" style={{ color: 'var(--accent)' }}>
                0{active + 1} / 0{regions.length}
              </span>
              <div>
                <h3 className="text-[clamp(2rem,4.5vw,4rem)] font-black leading-none tracking-[-0.05em] text-white">
                  {current.name[lang]}
                </h3>
                <p className="mt-5 text-base font-bold text-white/50">{current.territories}</p>
                <p className="mt-4 max-w-xl text-[12px] leading-[1.85] text-white/35">{current.desc[lang]}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  )
}
