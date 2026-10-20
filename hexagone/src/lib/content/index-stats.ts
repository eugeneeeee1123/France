/**
 * The four R.I.F. figures of the INDEX stat strip (ARCHITECTURE-INDEX §6, D5).
 * Values are numbers; the page formats them per locale with next-intl (format.number).
 * Labels come from messages/<locale>.json under index.stats.<id>.
 */
export interface IndexStat {
  id: 'eez' | 'warheads' | 'francophone' | 'continents'
  value: number
  /** Unit appended after a no-break space; empty when the figure is a plain count. */
  unit: string
  /** Compact notation (11M / 11 M / 1100万). */
  compact?: boolean
  /** Approximate figure: rendered with a leading "~". */
  approx?: boolean
  /** Speculative (R.I.F. / GDN-2040) figure: carries the scenario marker. */
  scenario: boolean
}

export const indexStats: readonly IndexStat[] = [
  { id: 'eez', value: 11_000_000, unit: 'km²', compact: true, scenario: false }, // 11M km² / 1100万 km²
  { id: 'warheads', value: 700, unit: '', approx: true, scenario: true }, // R.I.F. setting, four components (content plan §01, §02)
  { id: 'francophone', value: 57, unit: '', scenario: false },
  { id: 'continents', value: 6, unit: '', scenario: false },
]
