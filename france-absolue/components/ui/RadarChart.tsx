'use client'

interface RadarData {
  scoring: number
  defense: number
  playmaking: number
  athleticism: number
  impact: number
}

interface RadarChartProps {
  data: RadarData
  color: string
  size?: number
}

const axisLabels = ['SCORING', 'DEFENSE', 'PLAYMAKING', 'ATHLETICISM', 'IMPACT']

export default function RadarChart({ data, color, size = 220 }: RadarChartProps) {
  const values = [data.scoring, data.defense, data.playmaking, data.athleticism, data.impact]
  const center = size / 2
  const radius = size / 2 - 36
  const angleStep = (Math.PI * 2) / 5

  const pointFor = (value: number, i: number) => {
    const angle = angleStep * i - Math.PI / 2
    const r = (value / 100) * radius
    return [center + r * Math.cos(angle), center + r * Math.sin(angle)]
  }

  const dataPoints = values.map((v, i) => pointFor(v, i))
  const dataPath = dataPoints.map(p => p.join(',')).join(' ')

  const rings = [0.25, 0.5, 0.75, 1]

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {/* Background rings */}
      {rings.map((r) => {
        const ringPoints = Array.from({ length: 5 }, (_, i) => pointFor(100 * r, i))
        return (
          <polygon
            key={r}
            points={ringPoints.map(p => p.join(',')).join(' ')}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth={1}
          />
        )
      })}

      {/* Axis lines */}
      {Array.from({ length: 5 }, (_, i) => {
        const [x, y] = pointFor(100, i)
        return (
          <line key={i} x1={center} y1={center} x2={x} y2={y} stroke="rgba(255,255,255,0.06)" strokeWidth={1} />
        )
      })}

      {/* Data shape */}
      <polygon points={dataPath} fill={color} fillOpacity={0.16} stroke={color} strokeWidth={1.5} />

      {/* Data points */}
      {dataPoints.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={2.5} fill={color} />
      ))}

      {/* Labels */}
      {axisLabels.map((label, i) => {
        const [x, y] = pointFor(125, i)
        return (
          <text
            key={label}
            x={x}
            y={y}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="7"
            fontWeight="700"
            letterSpacing="0.08em"
            fill="rgba(255,255,255,0.3)"
          >
            {label}
          </text>
        )
      })}
    </svg>
  )
}
