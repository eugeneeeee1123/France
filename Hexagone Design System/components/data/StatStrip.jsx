import React from 'react';
import { Icon } from '../icons/Icon.jsx';

// Hairline-separated stat row (design.md §8.3). open = homepage strip with icons; boxed = module page.
export function StatStrip({ items = [], variant = 'open', style }) {
  const boxed = variant === 'boxed';
  return (
    <div style={{ display: 'flex', fontFamily: 'var(--font-sans)', ...(boxed ? { border: '1px solid var(--ink-700)' } : { borderTop: '1px solid var(--ink-700)', borderBottom: '1px solid var(--ink-700)' }), ...style }}>
      {items.map((it, i) => (
        <div key={i} style={{ flex: 1, minWidth: 0, padding: boxed ? 18 : '20px 8px', borderRight: i < items.length - 1 ? '1px solid var(--ink-700)' : 'none', textAlign: 'center' }}>
          {!boxed && it.icon && <Icon name={it.icon} size={15} color="var(--paper-300)" style={{ margin: '0 auto 9px' }} />}
          <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: boxed ? 19 : 18, color: 'var(--gold-500)', fontVariantNumeric: 'tabular-nums' }}>{it.value}</div>
          <div style={{ fontSize: boxed ? 10.5 : 10, color: 'var(--paper-300)', marginTop: boxed ? 5 : 4, ...(boxed ? {} : { textTransform: 'uppercase', letterSpacing: '.05em' }) }}>{it.label}</div>
        </div>
      ))}
    </div>
  );
}
