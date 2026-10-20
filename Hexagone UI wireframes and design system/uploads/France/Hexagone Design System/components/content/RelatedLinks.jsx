import React from 'react';

// Footer cross-link row (design.md §8.8): text + arrow, not cards.
export function RelatedLinks({ label = 'Modules liés', links = [], onNavigate, style }) {
  return (
    <div style={{ display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap', padding: '18px 0', borderTop: '1px solid var(--ink-700)', fontFamily: 'var(--font-sans)', fontSize: 13, ...style }}>
      <span style={{ fontWeight: 600, letterSpacing: '.04em', color: 'var(--paper-300)', textTransform: 'uppercase', fontSize: 11 }}>{label}</span>
      {links.map((l) => (
        <a key={l.n} href="#" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate(l.key); }}>{l.n} {l.name} →</a>
      ))}
    </div>
  );
}
