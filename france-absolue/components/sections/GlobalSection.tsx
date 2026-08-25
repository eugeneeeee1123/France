'use client'
import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'

interface GlobalSectionProps { locale: string }

const pins = [
  { name: 'PARIS',              left: '42%', top: '26%' },
  { name: 'MARTINIQUE',         left: '22%', top: '46%' },
  { name: 'GUYANE · KOUROU',    left: '21%', top: '57%' },
  { name: 'LA RÉUNION',         left: '60%', top: '64%' },
  { name: 'NOUVELLE-CALÉDONIE', left: '83%', top: '72%' },
  { name: 'POLYNÉSIE FR.',      left: '8%',  top: '74%' },
]

export default function GlobalSection({ locale }: GlobalSectionProps) {
  return (
    <section className="grid grid-cols-1 gap-12 border-t border-white/[0.05] px-[var(--container-x)] py-16 lg:grid-cols-[1fr_1.4fr] lg:items-center">
      <Reveal>
        <p className="mb-4 text-[8px] font-bold tracking-[0.24em] text-gold uppercase">✦ UN EMPIRE DISCRET · 隐秘的帝国</p>
        <h2 className="mb-4 text-[clamp(1.8rem,3vw,3.2rem)] font-black leading-[0.92] tracking-[-0.06em] text-white">
          UNE PRÉSENCE<br />UNIVERSELLE
        </h2>
        <p className="mb-7 max-w-sm text-[11px] leading-[1.85] text-white/30">
          De l&apos;Europe à l&apos;Atlantique, de l&apos;océan Indien au Pacifique, la France déploie ses territoires
          et son influence aux quatre coins du globe. 11 millions de km² d&apos;océan. 4 continents. Une seule République.
        </p>
        <Link
          href={`/${locale}/territories`}
          className="btn-gold no-underline"
        >
          EXPLORER LA CARTE →
        </Link>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="relative h-[260px] overflow-hidden border border-white/[0.05] bg-white/[0.015]">
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse at 25% 55%,rgba(31,78,216,0.06) 0%,transparent 50%),
                radial-gradient(ellipse at 75% 40%,rgba(200,168,75,0.04) 0%,transparent 50%)
              `,
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[80px] font-black text-white/[0.02] tracking-[-0.1em] select-none">MONDE</span>
          </div>

          {pins.map((pin) => (
            <div
              key={pin.name}
              className="absolute flex flex-col items-center gap-1"
              style={{ left: pin.left, top: pin.top }}
            >
              <div className="relative h-[7px] w-[7px] rounded-full bg-gold">
                <span className="absolute inset-[-3.5px] animate-ripple rounded-full border border-gold/30" />
              </div>
              <span className="whitespace-nowrap font-mono text-[7px] tracking-[0.1em] text-gold/70">
                {pin.name}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
