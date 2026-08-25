'use client'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import territoriesData from '@/data/territories.json'

import type { Lang } from '@/lib/i18n'

const titleByLang: Record<Lang, string> = {
  zh: '河流与山脉，决定法国如何连接欧洲。',
  fr: 'Fleuves et montagnes organisent la France en Europe.',
  en: 'Rivers and mountains connect France to Europe.',
}

export default function ReliefSection({ locale }: { locale: string }) {
  const lang = locale as Lang
  const [active, setActive] = useState(0)
  const items = territoriesData.relief
  const current = items[active]

  return (
    <section className="border-t border-white/[0.06]">
      <div className="grid lg:grid-cols-[0.86fr_1.14fr]">
        <div className="container-main !max-w-none px-6 py-14 sm:px-10 sm:py-16 lg:pr-12">
          <h2 className="text-[clamp(2rem,4.2vw,3.6rem)] font-black leading-[0.96] tracking-[-0.05em] text-white">
            {titleByLang[lang]}
          </h2>
          <div className="mt-9 flex flex-col">
            {items.map((item, i) => (
              <button
                key={item.key}
                onClick={() => setActive(i)}
                className={`flex items-center gap-4 border-b border-white/[0.06] py-4 text-left transition-colors ${
                  active === i ? 'text-white' : 'text-white/30 hover:text-white/60'
                }`}
              >
                <span className="font-mono text-[10px]" style={{ color: active === i ? 'var(--accent)' : undefined }}>0{i + 1}</span>
                <b className="text-sm font-bold">{item.title[lang]}</b>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.article
            key={current.key}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex min-h-[320px] flex-col justify-center gap-5 border-t border-white/[0.06] bg-[#07111f] px-6 py-12 sm:px-10 lg:border-l lg:border-t-0"
          >
            <span className="text-4xl" style={{ color: 'var(--accent)' }}>⛰</span>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-white/30">{current.place[lang]}</p>
              <h3 className="mt-3 text-2xl font-black tracking-tight text-white">{current.title[lang]}</h3>
              <p className="mt-4 max-w-md text-[12px] leading-[1.85] text-white/40">{current.text[lang]}</p>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
    </section>
  )
}
