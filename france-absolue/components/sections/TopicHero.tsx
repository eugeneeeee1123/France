import Reveal from '@/components/ui/Reveal'

interface TopicHeroProps {
  number: string
  icon: string
  label: string
  title: string
  desc: string
}

export default function TopicHero({ number, icon, label, title, desc }: TopicHeroProps) {
  return (
    <section className="bg-[var(--accent-pale)] pt-16">
      <div className="container-main grid min-h-[560px] items-center gap-10 py-12 lg:grid-cols-[0.7fr_1.3fr]">
        <Reveal>
          <div className="flex items-center gap-4 text-[var(--accent)]">
            <span className="font-mono text-xs font-bold">{number} / 09</span>
            <span className="text-2xl leading-none">{icon}</span>
          </div>
          <p className="mt-8 font-mono text-[11px] font-bold tracking-[0.13em] text-[var(--accent)]">
            {label}
          </p>
          <h1 className="page-hero-title mt-5 font-black leading-[0.88] tracking-[-0.07em] text-white"
            style={{ fontSize: 'clamp(2.6rem,5.5vw,5.5rem)' }}>
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-[13px] leading-[1.85] text-white/45">
            {desc}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
