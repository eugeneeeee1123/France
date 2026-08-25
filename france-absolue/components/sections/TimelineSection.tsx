'use client'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from '@/components/ui/Reveal'
import timelineData from '@/data/epochs-timeline.json'

interface TimelineSectionProps { locale: string }

export default function TimelineSection({ locale }: TimelineSectionProps) {
  const [active, setActive] = useState(4) // default: 1940
  const lang = (locale as 'zh' | 'fr' | 'en')
  const items = timelineData
  const progress = (active / (items.length - 1)) * 100

  return (
    <section className="border-t border-white/[0.05] px-[var(--container-x)] py-16">
      <Reveal>
        <div className="mb-12 flex items-center justify-center gap-3">
          <span className="text-xs text-gold/40">✦</span>
          <p className="text-[9px] font-bold tracking-[0.28em] text-white/25 uppercase text-center">
            LES MOMENTS QUI ONT FAÇONNÉ LA FRANCE · 塑造法国的历史断裂点
          </p>
          <span className="text-xs text-gold/40">✦</span>
        </div>
      </Reveal>

      {/* Timeline track */}
      <div className="relative pb-10">
        <div className="absolute left-0 right-0 top-2 h-px bg-white/[0.07]">
          <div
            className="h-full bg-gradient-to-r from-gold to-gold/20 transition-all duration-700"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="relative grid grid-cols-4 gap-y-8 sm:grid-cols-7">
          {items.map((item, i) => (
            <button
              key={item.year}
              onClick={() => setActive(i)}
              className="flex flex-col items-center gap-3.5 text-center"
            >
              <div
                className={`relative z-[2] h-4 w-4 flex-shrink-0 rounded-full border-2 transition-all duration-200 ${
                  active === i
                    ? 'border-gold bg-gold shadow-gold'
                    : 'border-white/15 bg-navy hover:border-gold/50'
                }`}
              />
              <div className={`text-[13px] font-black tracking-[-0.03em] transition-colors ${
                active === i ? 'text-gold' : 'text-white/40'
              }`}>
                {item.year}
              </div>
              <div className="max-w-[90px] text-[8px] leading-[1.5] tracking-[0.04em] text-white/25">
                {item.label[lang]}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Detail card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 gap-7 border border-white/[0.06] border-t-2 border-t-gold bg-[#07111f] p-7 sm:grid-cols-[140px_1fr] sm:p-9"
        >
          <div className="text-5xl font-black leading-none tracking-[-0.08em] text-gold/30 sm:text-7xl">
            {items[active].year}
          </div>
          <div>
            <h3 className="mb-3 text-xl font-black tracking-[-0.04em] text-white sm:text-2xl">
              {items[active].title[lang]}
            </h3>
            <p className="max-w-2xl text-[12px] leading-[1.85] text-white/40">
              {items[active].text[lang]}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
