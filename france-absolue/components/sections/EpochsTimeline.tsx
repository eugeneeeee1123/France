'use client'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from '@/components/ui/Reveal'
import epochsData from '@/data/epochs-full.json'

import type { Lang } from '@/lib/i18n'

const headings: Record<Lang, { eyebrow: string; title: string }> = {
  zh: { eyebrow: '完整时间线', title: '从高卢到今日，十三个塑造法国的时刻。' },
  fr: { eyebrow: 'Chronologie Complète', title: "De la Gaule à aujourd'hui, treize moments fondateurs." },
  en: { eyebrow: 'Full Timeline', title: 'From Gaul to today — thirteen defining moments.' },
}

export default function EpochsTimeline({ locale }: { locale: string }) {
  const lang = locale as Lang
  const h = headings[lang]
  const [active, setActive] = useState(5) // default: 1789

  const items = epochsData.timeline

  return (
    <section className="border-t border-white/[0.06] py-16">
      <div className="container-main">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">{h.eyebrow}</p>
          <h2 className="section-title mt-4 text-white">{h.title}</h2>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[260px_1fr]">
          {/* Sticky year list */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="flex gap-2 overflow-x-auto pb-3 lg:flex-col lg:gap-0 lg:overflow-visible lg:border-t lg:border-white/[0.06] lg:pb-0">
              {items.map((item, i) => (
                <button
                  key={item.year}
                  onClick={() => setActive(i)}
                  className={`flex shrink-0 items-center gap-3 whitespace-nowrap px-4 py-3.5 text-left transition-colors lg:w-full lg:whitespace-normal lg:border-b lg:border-white/[0.04] ${
                    active === i
                      ? 'bg-[var(--accent)]/10 border-l-2 border-l-[var(--accent)] lg:pl-[14px]'
                      : 'hover:bg-white/[0.02]'
                  }`}
                >
                  <span
                    className="font-mono text-[10px] font-black"
                    style={{ color: active === i ? 'var(--accent)' : 'rgba(255,255,255,0.3)' }}
                  >
                    {item.year}
                  </span>
                  <span className={`hidden text-[10px] lg:block ${active === i ? 'text-white' : 'text-white/30'}`}>
                    {item.label[lang]}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Detail panel */}
          <AnimatePresence mode="wait">
            <motion.article
              key={active}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="min-h-[320px] border-t-2 bg-[#07111f] p-8 sm:p-10"
              style={{ borderTopColor: 'var(--accent)' }}
            >
              <span className="font-mono text-xs font-bold" style={{ color: 'var(--accent)' }}>
                {items[active].year}
              </span>
              <h3 className="mt-6 text-[clamp(1.8rem,3.5vw,3.2rem)] font-black leading-[0.96] tracking-[-0.05em] text-white">
                {items[active].title[lang]}
              </h3>
              <p className="mt-6 max-w-2xl text-[13px] leading-[1.9] text-white/40">
                {items[active].text[lang]}
              </p>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
