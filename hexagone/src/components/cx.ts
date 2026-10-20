import type { CSSProperties } from 'react'

/** Joins class names and drops falsy entries. Local on purpose: the components add no dependency. */
export function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ')
}

/**
 * CSSProperties plus custom properties, for the per-instance values that stay inline
 * (ARCHITECTURE-INDEX §7): --h module hue, --i stagger index, --n / --fill timeline geometry.
 */
export type StyleWithVars = CSSProperties & Record<`--${string}`, string | number>
