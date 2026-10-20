/**
 * Structure of the ten numbered modules (ARCHITECTURE-INDEX §6): id, numeral, route, hue,
 * cross links, era references, navigation visibility. No copy lives here: names and sub
 * titles are read from messages/<locale>.json under modules.<id>.
 * Order and hues follow the design system (tokens/colors.css --hue-<id>).
 */
export type ModuleId =
  | 'arsenal'
  | 'statecraft'
  | 'epochs'
  | 'territories'
  | 'arena'
  | 'aesthetics'
  | 'science'
  | 'economy'
  | 'francophonie'
  | 'industry'

export interface Module {
  id: ModuleId
  /** '01' to '10', the primary wayfinding symbol (never replaced by an icon). */
  n: string
  route: `/${ModuleId}`
  /** oklch hue of the module colour, same value as --hue-<id>. */
  hue: number
  /** RelatedCapabilities: the "关联模块" column of the content plan table (§00). */
  links: ModuleId[]
  /** Ids from timeline-eras.ts whose node leads into this module. */
  era: string[]
  /** The module page carries R.I.F. figures and opens with a ScenarioLabel. */
  scenario?: boolean
  /** The first seven sit in the bar at >= 1400px; 08 to 10 live in the "+3 ▾" disclosure. */
  navVisible: boolean
}

export const modules: readonly Module[] = [
  {
    id: 'arsenal',
    n: '01',
    route: '/arsenal',
    hue: 236,
    links: ['industry', 'territories'],
    era: ['fifthRepublic', 'gdn2040'],
    scenario: true,
    navVisible: true,
  },
  {
    id: 'statecraft',
    n: '02',
    route: '/statecraft',
    hue: 272,
    links: ['arsenal', 'francophonie'],
    era: ['fifthRepublic'],
    navVisible: true,
  },
  {
    id: 'epochs',
    n: '03',
    route: '/epochs',
    hue: 56,
    // The content plan links ÉPOQUES to every module (it feeds the site-wide timeline).
    links: ['arsenal', 'statecraft', 'territories', 'arena', 'aesthetics', 'science', 'economy', 'francophonie', 'industry'],
    era: ['alesia', 'revolution'],
    navVisible: true,
  },
  {
    id: 'territories',
    n: '04',
    route: '/territories',
    hue: 200,
    links: ['industry', 'arsenal'],
    era: ['today'],
    scenario: true,
    navVisible: true,
  },
  {
    id: 'arena',
    n: '05',
    route: '/arena',
    hue: 20,
    links: ['statecraft'],
    era: [],
    navVisible: true,
  },
  {
    id: 'aesthetics',
    n: '06',
    route: '/aesthetics',
    hue: 344,
    links: ['francophonie'],
    era: [],
    navVisible: true,
  },
  {
    id: 'science',
    n: '07',
    route: '/science',
    hue: 164,
    links: ['industry', 'economy'],
    era: [],
    navVisible: true,
  },
  {
    id: 'economy',
    n: '08',
    route: '/economy',
    hue: 308,
    links: ['industry', 'francophonie'],
    era: [],
    navVisible: false,
  },
  {
    id: 'francophonie',
    n: '09',
    route: '/francophonie',
    hue: 128,
    links: ['aesthetics', 'statecraft'],
    era: [],
    navVisible: false,
  },
  {
    id: 'industry',
    n: '10',
    route: '/industry',
    hue: 92,
    links: ['arsenal', 'territories', 'economy'],
    era: [],
    navVisible: false,
  },
]

export function getModule(id: string): Module | undefined {
  return modules.find((m) => m.id === id)
}

export function getRelatedModules(id: string): Module[] {
  const current = getModule(id)
  if (!current) return []
  return current.links.map((linkId) => getModule(linkId)).filter((m): m is Module => m !== undefined)
}
