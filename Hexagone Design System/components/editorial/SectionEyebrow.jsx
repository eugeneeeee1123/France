import React from 'react';

// Eyebrow label. centered = rule · TEXT · rule (section opener). lead = short dash + TEXT (hero).
export function SectionEyebrow({ children, variant = 'centered', style }) {
  const text = <span style={{ fontSize: 12, letterSpacing: 'var(--tracking-eyebrow-wide)', color: 'var(--paper-300)', textTransform: 'uppercase' }}>{children}</span>;
  if (variant === 'lead') return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-sans)', ...style }}>
      <span style={{ width: 16, height: 1, background: 'var(--paper-300)' }} />{text}
    </div>
  );
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, fontFamily: 'var(--font-sans)', ...style }}>
      <span style={{ width: 100, height: 1, background: 'var(--ink-700)' }} />{text}<span style={{ width: 100, height: 1, background: 'var(--ink-700)' }} />
    </div>
  );
}
