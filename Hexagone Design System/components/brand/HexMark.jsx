import React from 'react';

// The hexagon "H" monogram — the site's one signature mark (design.md §6).
export function HexMark({ size = 32, tone = 'gold', letter = 'H', withWordmark = false, wordmark = 'HEXAGONE', filled = false, style }) {
  const color = tone === 'paper' ? 'var(--paper-50)' : 'var(--gold-500)';
  const mark = (
    <span style={{ position: 'relative', width: size, height: size, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
      <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true" style={{ position: 'absolute', inset: 0 }}>
        <polygon points="25,1 75,1 99,50 75,99 25,99 1,50" fill={filled ? 'var(--surface-chip-scrim)' : 'none'} stroke={color} strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
      </svg>
      <span style={{ position: 'relative', fontFamily: 'var(--font-display)', fontSize: Math.round(size * 0.4), lineHeight: 1, color }}>{letter}</span>
    </span>
  );
  if (!withWordmark) return <span style={{ display: 'inline-flex', ...style }} role="img" aria-label={wordmark}>{mark}</span>;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: size >= 30 ? 10 : 10, ...style }}>
      {mark}
      <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 800, letterSpacing: 'var(--tracking-brand)', color: 'var(--paper-50)' }}>{wordmark}</span>
    </span>
  );
}
