import React from 'react';

// Literal flag citation — the only place bleu/blanc/rouge appear (design.md §3).
export function TricolorRule({ width = 170, height = 4, gap = 5, palette = 'muted', style }) {
  const c = palette === 'brief'
    ? ['var(--brand-navy)', 'var(--brand-white)', 'var(--brand-red)']
    : ['var(--tricolor-bleu)', 'var(--tricolor-blanc)', 'var(--tricolor-rouge)'];
  return (
    <div role="presentation" style={{ display: 'flex', gap, width, ...style }}>
      {c.map((bg, i) => <span key={i} style={{ height, flex: 1, background: bg }} />)}
    </div>
  );
}
