'use client'
import { useEffect, useState } from 'react'

export default function ParisClock() {
  const [time, setTime] = useState('--:--:--')

  useEffect(() => {
    const tick = () => {
      const paris = new Date().toLocaleTimeString('fr-FR', {
        timeZone: 'Europe/Paris',
        hour: '2-digit', minute: '2-digit', second: '2-digit',
      })
      setTime(paris)
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="flex items-center gap-2 font-mono text-[9px] tracking-[0.16em] text-white/25">
      <span className="relative flex h-[6px] w-[6px]">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60" />
        <span className="relative inline-flex h-[6px] w-[6px] rounded-full bg-gold" />
      </span>
      <span>HEURE À PARIS</span>
      <span className="text-white/40">{time}</span>
    </div>
  )
}
