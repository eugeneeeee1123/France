import React from 'react';

// Era timeline (design.md §8.4/§9.5): nodes are buttons; active node gold, year scales 1.08, gold line fills up to it.
export function Timeline({ eras = [], activeIndex, defaultActiveIndex, onSelect, bordered = true, style }) {
  const last = eras.length - 1;
  const [inner, setInner] = React.useState(defaultActiveIndex != null ? defaultActiveIndex : last);
  const active = activeIndex != null ? activeIndex : inner;
  const pick = (i) => { setInner(i); onSelect && onSelect(i, eras[i]); };
  const progress = last > 0 ? active / last : 0;
  return (
    <div style={{ borderTop: bordered ? '1px solid var(--ink-700)' : 'none', padding: '44px 40px', position: 'relative', fontFamily: 'var(--font-sans)', ...style }}>
      <div style={{ position: 'absolute', left: 95, right: 95, top: 58, height: 1, background: 'var(--ink-700)' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'var(--gold-700)', transformOrigin: 'left center', transform: 'scaleX(' + progress + ')', transition: 'transform var(--dur-base) var(--ease-settle)' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', position: 'relative' }}>
        {eras.map((e, i) => {
          const on = i === active;
          return (
            <button key={e.year} type="button" onClick={() => pick(i)} aria-pressed={on}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', textAlign: 'center', width: 110, background: 'none', border: 0, padding: 0, cursor: 'pointer', font: 'inherit', color: 'inherit' }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: on ? 'var(--gold-500)' : 'var(--paper-300)', margin: '0 auto 10px', transition: 'background-color var(--dur-fast) var(--ease-standard)' }} />
              <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: 15, color: on ? 'var(--gold-500)' : 'var(--paper-50)', transform: on ? 'scale(1.08)' : 'none', transition: 'transform var(--dur-base) var(--ease-settle), color var(--dur-fast) var(--ease-standard)' }}>{e.year}</div>
              <div style={{ fontSize: 11, color: 'var(--paper-300)', marginTop: 6 }}>{e.caption}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
