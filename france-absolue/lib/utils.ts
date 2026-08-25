export function cn(...inputs: (string | false | null | undefined)[]) {
  return inputs.filter(Boolean).join(' ')
}

export const pageAccents: Record<string, string> = {
  arsenal:      '#d54a36',
  statecraft:   '#3159a7',
  territories:  '#0787a7',
  sport:        '#1f55d5',
  epochs:       '#a44735',
  aesthetics:   '#a63f72',
  science:      '#2d7a4f',
  economy:      '#8b6914',
  francophonie: '#6b3fa0',
}

export const pagePales: Record<string, string> = {
  arsenal:      '#251714',
  statecraft:   '#0d1525',
  territories:  '#041118',
  sport:        '#06101f',
  epochs:       '#1a0d08',
  aesthetics:   '#180a12',
  science:      '#061009',
  economy:      '#100c04',
  francophonie: '#0d0618',
}
