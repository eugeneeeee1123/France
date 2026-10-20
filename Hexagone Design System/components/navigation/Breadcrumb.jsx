import React from 'react';

export function Breadcrumb({ items = [], onNavigate, style }) {
  return (
    <nav aria-label="Breadcrumb" style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--paper-300)', display: 'flex', gap: 6, flexWrap: 'wrap', ...style }}>
      {items.map((it, i) => {
        const last = i === items.length - 1;
        const label = typeof it === 'string' ? it : it.label;
        return (
          <React.Fragment key={i}>
            {last ? <span aria-current="page">{label}</span>
              : <a href="#" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate(it.key || label, i); }} style={{ color: 'var(--paper-300)' }}>{label}</a>}
            {!last && <span aria-hidden="true">/</span>}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
