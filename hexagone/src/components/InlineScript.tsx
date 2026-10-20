'use client'

/**
 * Inline script that runs while the browser parses the server HTML, before React hydrates
 * (next/dist/docs/01-app/02-guides/preventing-flash-before-hydration.md, "Extracting a reusable component").
 * Rendered on the server it is text/javascript and runs; rendered on the client it is text/plain, so
 * React does not log "Encountered a script tag while rendering React component" and nothing runs twice.
 * suppressHydrationWarning covers the type mismatch between the two.
 */
export function InlineScript({ html }: { html: string }) {
  return (
    <script
      type={typeof window === 'undefined' ? 'text/javascript' : 'text/plain'}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
