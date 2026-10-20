'use client'

import dynamic from 'next/dynamic'
import { Component, useCallback, useEffect, useState, type ReactNode } from 'react'
import { cx } from '../cx'

// If the model or WebGL fails, drop the 3D layer and keep the static collage (R3F's Canvas rethrows child errors).
class SceneBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false }
  static getDerivedStateFromError() {
    return { failed: true }
  }
  render() {
    return this.state.failed ? null : this.props.children
  }
}

// Client loader for the optional 3D layer (ARCHITECTURE-INDEX §5 S1, §9). next/dynamic with
// ssr: false must live in a Client Component (next docs: 02-guides/lazy-loading.md).
const EiffelScene = dynamic(() => import('./EiffelScene'), { ssr: false })

// Desktop two-column hero, fine pointer, motion allowed; otherwise the static collage stays alone.
const QUERY = '(min-width: 1200px) and (pointer: fine) and (prefers-reduced-motion: no-preference)'

export function HeroScene() {
  const [load, setLoad] = useState(false)
  const [ready, setReady] = useState(false)
  const handleReady = useCallback(() => setReady(true), [])

  useEffect(() => {
    const mq = window.matchMedia(QUERY)
    // The pending idle callback or timeout that starts the 3D load. Cleared when the query stops matching and on unmount.
    let cancel: (() => void) | undefined
    const schedule = () => {
      const start = () => setLoad(true)
      if (typeof window.requestIdleCallback === 'function') {
        const id = window.requestIdleCallback(start, { timeout: 2500 })
        cancel = () => window.cancelIdleCallback(id)
      } else {
        const id = window.setTimeout(start, 1500)
        cancel = () => window.clearTimeout(id)
      }
    }
    const onChange = () => {
      cancel?.()
      cancel = undefined
      if (mq.matches) {
        schedule()
      } else {
        setReady(false)
        setLoad(false)
      }
    }
    if (mq.matches) schedule()
    mq.addEventListener('change', onChange)
    return () => {
      mq.removeEventListener('change', onChange)
      cancel?.()
    }
  }, [])

  if (!load) return null
  return (
    <SceneBoundary>
      {/* Cross-fade: the ink-800 ground and the tower fade in together over the static collage. */}
      <div
        aria-hidden="true"
        className={cx(
          'absolute inset-0 bg-ink-800 transition-opacity duration-[var(--dur-slow)] ease-[var(--ease-settle)]',
          ready ? 'opacity-100' : 'opacity-0',
        )}
      >
        <EiffelScene onReady={handleReady} />
      </div>
    </SceneBoundary>
  )
}
