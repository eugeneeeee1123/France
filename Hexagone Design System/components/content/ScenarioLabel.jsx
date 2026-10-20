import React from 'react';

// Speculative-content disclosure (design.md §10) — the single most important integrity rule.
export function ScenarioLabel({ children, style }) {
  return (
    <div role="note" style={{ display: 'inline-block', border: '1px solid var(--gold-700)', color: 'var(--paper-300)', padding: '7px 14px', fontFamily: 'var(--font-sans)', fontSize: 11, letterSpacing: '.04em', maxWidth: 520, lineHeight: 1.5, ...style }}>{children}</div>
  );
}
