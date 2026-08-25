import Reveal from '@/components/ui/Reveal'

import type { Lang } from '@/lib/i18n'

interface Row {
  dim: Record<Lang, string>
  left: Record<Lang, string>
  right: Record<Lang, string>
}

interface ComparisonTableProps {
  locale: string
  label: Record<Lang, string>
  leftHeader: string
  rightHeader: string
  rows: Row[]
}

export default function ComparisonTable({ locale, label, leftHeader, rightHeader, rows }: ComparisonTableProps) {
  const lang = locale as Lang

  return (
    <section className="border-t border-white/[0.06] bg-[#07111f] py-16">
      <div className="container-main">
        <Reveal>
          <p className="eyebrow">{label[lang]}</p>
        </Reveal>

        <Reveal delay={0.08} className="mt-8 overflow-x-auto border border-white/[0.06]">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <thead>
              <tr className="border-b border-white/[0.06]">
                <th className="px-5 py-4 text-[9px] font-bold uppercase tracking-[0.1em] text-white/30">—</th>
                <th className="px-5 py-4 text-[10px] font-black uppercase tracking-[0.08em]" style={{ color: 'var(--accent)' }}>
                  {leftHeader}
                </th>
                <th className="px-5 py-4 text-[10px] font-black uppercase tracking-[0.08em] text-gold">
                  {rightHeader}
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.dim[lang]} className="border-b border-white/[0.04] last:border-b-0">
                  <td className="px-5 py-4 text-[11px] font-bold text-white/50">{row.dim[lang]}</td>
                  <td className="px-5 py-4 text-[11px] text-white/65">{row.left[lang]}</td>
                  <td className="px-5 py-4 text-[11px] text-white/65">{row.right[lang]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  )
}
