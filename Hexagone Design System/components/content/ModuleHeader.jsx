import React from 'react';

const hc = (h) => 'oklch(68% 0.1 ' + h + ')';

// Module page header: big hued numeral + uppercase serif title, subtitle, intro, slot for ScenarioLabel.
export function ModuleHeader({ n, title, subtitle, intro, hue = 236, children, style }) {
  return (
    <header style={{ display: 'flex', gap: 24, alignItems: 'flex-start', paddingBottom: 28, borderBottom: '1px solid var(--ink-700)', fontFamily: 'var(--font-sans)', ...style }}>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 56, fontWeight: 600, color: hc(hue), lineHeight: 1 }}>{n}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 34, fontWeight: 600, margin: '0 0 4px', textTransform: 'uppercase', color: 'var(--paper-50)' }}>{title}</h1>
        {subtitle && <div style={{ fontSize: 14, color: 'var(--paper-300)', marginBottom: 14 }}>{subtitle}</div>}
        {intro && <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--paper-50-85)', maxWidth: 640, margin: '0 0 16px', textWrap: 'pretty' }}>{intro}</p>}
        {children}
      </div>
    </header>
  );
}
