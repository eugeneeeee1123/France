import React from 'react';

const LANGS = [{ code: 'fr', label: 'FR' }, { code: 'en', label: 'EN' }, { code: 'zh', label: '中' }];

// FR / EN / 中 switch. inline = footer row; menu = nav "FR ▾" dropdown.
export function LangSwitch({ value = 'fr', onChange, variant = 'inline', style }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const close = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    const esc = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('pointerdown', close); document.addEventListener('keydown', esc);
    return () => { document.removeEventListener('pointerdown', close); document.removeEventListener('keydown', esc); };
  }, [open]);
  const btn = (l, extra) => (
    <button key={l.code} type="button" onClick={() => { onChange && onChange(l.code); setOpen(false); }} aria-pressed={l.code === value}
      style={{ background: 'none', border: 0, padding: 0, cursor: 'pointer', font: 'inherit', fontSize: 13, color: l.code === value ? 'var(--paper-50)' : 'var(--paper-300)', ...extra }}>{l.label}</button>
  );
  if (variant === 'inline') return <div style={{ display: 'flex', gap: 12, fontFamily: 'var(--font-sans)', ...style }}>{LANGS.map((l) => btn(l))}</div>;
  const cur = LANGS.find((l) => l.code === value) || LANGS[0];
  return (
    <div ref={ref} style={{ position: 'relative', fontFamily: 'var(--font-sans)', ...style }}>
      <button type="button" aria-haspopup="listbox" aria-expanded={open} onClick={() => setOpen(!open)}
        style={{ background: 'none', border: 0, padding: 0, cursor: 'pointer', font: 'inherit', fontSize: 12, color: 'var(--paper-300)' }}>{cur.label} ▾</button>
      {open && (
        <div role="listbox" style={{ position: 'absolute', right: 0, top: 'calc(100% + 10px)', background: 'var(--ink-800)', border: '1px solid var(--ink-700)', padding: 8, display: 'flex', flexDirection: 'column', minWidth: 72, zIndex: 'var(--z-dropdown)' }}>
          {LANGS.map((l) => btn(l, { padding: '8px 10px', textAlign: 'left', fontSize: 12 }))}
        </div>
      )}
    </div>
  );
}
