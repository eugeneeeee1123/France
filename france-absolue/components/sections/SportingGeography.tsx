'use client'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from '@/components/ui/Reveal'
import sportData from '@/data/sport.json'

import type { Lang } from '@/lib/i18n'

const headings: Record<Lang, { eyebrow: string; title: string }> = {
  zh: { eyebrow: '体育地理', title: '法国国土，本身就是竞技场。' },
  fr: { eyebrow: 'Géographie Sportive', title: "Le territoire français, terrain de jeu lui-même." },
  en: { eyebrow: 'Sporting Geography', title: "French territory itself is the arena." },
}

export default function SportingGeography({ locale }: { locale: string }) {
  const lang = locale as Lang
  const h = headings[lang]
  const [active, setActive] = useState(0)
  const regions = sportData.geography
  const current = regions[active]

  return (
    <section className="border-t border-white/[0.06] py-16">
      <div className="container-main">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">{h.eyebrow}</p>
          <h2 className="section-title mt-4 text-white">{h.title}</h2>
        </Reveal>

        <Reveal delay={0.08} className="mt-10 grid border border-white/[0.06] bg-[#07111f] lg:grid-cols-[260px_1fr]">
          <div className="border-b border-white/[0.06] lg:border-b-0 lg:border-r">
            {regions.map((r, i) => (
              <button
                key={r.key}
                onClick={() => setActive(i)}
                className={`block w-full border-b border-white/[0.04] px-7 py-5 text-left text-[12px] font-bold tracking-[0.02em] transition-colors ${
                  active === i ? 'bg-blue/10 text-blue-light border-l-2 border-l-blue pl-[26px]' : 'text-white/35 hover:text-white'
                }`}
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
              className="grid min-h-[260px] content-center p-9"
            >
              <span className="font-mono text-[9px] font-bold text-blue">0{active + 1} / 0{regions.length}</span>
              <h3 className="mt-5 text-[clamp(2rem,4vw,3.2rem)] font-black tracking-[-0.05em] text-white">{current.name[lang]}</h3>
              <p className="mt-4 max-w-xl text-[12px] leading-[1.85] text-white/35">{current.desc[lang]}</p>
            </motion.div>
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  )
}
