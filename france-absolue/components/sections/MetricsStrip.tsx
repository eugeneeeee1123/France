interface Metric {
  value: string
  label: string
}

export default function MetricsStrip({ metrics }: { metrics: Metric[] }) {
  return (
    <div className="metric-grid grid-cols-2 sm:grid-cols-4">
      {metrics.map((m) => (
        <div key={m.value + m.label} className="px-6 py-5">
          <div className="text-2xl font-black tracking-tight" style={{ color: 'var(--accent)' }}>{m.value}</div>
          <div className="mt-1.5 text-[8px] font-medium tracking-[0.1em] text-white/30 uppercase leading-relaxed">{m.label}</div>
        </div>
      ))}
    </div>
  )
}
