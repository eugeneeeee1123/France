import type { ReactNode } from 'react'
import Image from 'next/image'
import { cx } from '../cx'

/**
 * Hero right column (ARCHITECTURE-INDEX §5 S1, §9; Mockup lines 79 to 82): a box of
 * clamp(420px, 42vw, 600px) (a 16:9 band below 768px, after the CTAs) holding the single-cut
 * collage (clip-path, object-fit cover) under the hero scrim. The ink-800 ground shows while the
 * image loads at a fixed ratio, so there is no layout shift. The image is the LCP candidate:
 * preloaded from <head> (Next 16 `preload`, which replaces the deprecated `priority`), high fetch
 * priority, half the viewport from 1200px. Overlays (quote card, coordinates) come in as children
 * and are positioned against the box, outside the clipped layer.
 */
export interface HeroCollageProps {
  src: string
  alt: string
  children?: ReactNode
  className?: string
}

export function HeroCollage({ src, alt, children, className }: HeroCollageProps) {
  return (
    // 2026-10-20 (user decision): a taller panel, clamp(460px, 46vw, 680px) (was clamp(420px, 42vw, 600px)).
    // 2026-10-21 (user decision): the panel takes the image's own 3:2 ratio at every width (was a fixed height on md and up, 16:9 below), so the whole collage shows and nothing is cropped by object-cover.
    <div className={cx('relative aspect-[3/2]', className)}>
      <div className="absolute inset-0 overflow-hidden bg-ink-800 [clip-path:polygon(14%_0,100%_0,100%_100%,0_100%)]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1200px) 50vw, 100vw"
          preload
          fetchPriority="high"
          className="object-cover object-right"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-[image:var(--scrim-hero)]" />
        {/* P3 mount point for the optional EiffelScene island (§5 hero right panel): stays empty, and hidden while empty. */}
        {/* Note: on desktop, HeroScene fills this mount point once the idle callback fires (T3.3); elsewhere it stays empty and hidden. */}
        {/* 2026-10-20 (user decision): the desktop 3D tower layer is off so the hero keeps showing the collage image; to restore it, import HeroScene from './HeroScene' and render <HeroScene /> inside this div. */}
        <div data-hero-3d="" className="absolute inset-0 empty:hidden" />
      </div>
      {children}
    </div>
  )
}
