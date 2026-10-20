import type { ModuleId } from './modules'

/**
 * The five locked nodes of the INDEX timeline (ARCHITECTURE-INDEX §6; REVIEW-ARCH-v0.1 #5).
 * The full era list for the timeline overlay is a later phase. Captions come from
 * messages/<locale>.json under index.chronology.eras.<id>; the "today" node shows
 * index.chronology.today instead of a year.
 */
export interface HomeEra {
  id: 'alesia' | 'revolution' | 'fifthRepublic' | 'today' | 'gdn2040'
  /** Astronomical year (negative = BC); null for the present day. */
  year: number | null
  /** Module the node links into. */
  module: ModuleId
  /** Speculative node (GDN-2040): tagged with scenario.yearSuffix. */
  scenario: boolean
}

export const homeEras: readonly HomeEra[] = [
  { id: 'alesia', year: -52, module: 'epochs', scenario: false },
  { id: 'revolution', year: 1789, module: 'epochs', scenario: false },
  { id: 'fifthRepublic', year: 1958, module: 'statecraft', scenario: false },
  { id: 'today', year: null, module: 'territories', scenario: false },
  { id: 'gdn2040', year: 2040, module: 'arsenal', scenario: true }, // gold line stops at today; the 2040 segment stays a hairline
]

/** The gold fill of the timeline runs up to this node (inclusive). */
export const HOME_ERA_FILL_TO: HomeEra['id'] = 'today'
