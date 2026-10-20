import React from 'react';
import { HexMark } from '../brand/HexMark.jsx';
import { Icon } from '../icons/Icon.jsx';
import { LangSwitch } from './LangSwitch.jsx';

function NavItem({ active, onClick, children }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a href="#" onClick={(e) => { e.preventDefault(); onClick && onClick(); }} aria-current={active ? 'page' : undefined}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ fontSize: 11, fontWeight: 700, letterSpacing: 'var(--tracking-nav)', textDecoration: 'none', whiteSpace: 'nowrap',
        color: active || hover ? 'var(--paper-50)' : 'var(--paper-300)', paddingBottom: 13, marginBottom: -13,
        borderBottom: '2px solid ' + (active ? 'var(--gold-500)' : 'transparent'), transition: 'color var(--dur-fast) var(--ease-standard)' }}>{children}</a>
  );
}

// Top bar: mark + HOME + first N modules + "+N ▾" overflow, search, language (mockup v3, design.md §8.1 option B).
export function NavBar({ modules = [], activeKey = 'home', maxVisible = 7, homeLabel = 'HOME', lang = 'fr', onLangChange, onNavigate, onSearch, brand = 'HEXAGONE', logoSrc, logoAlt = '', logoHeight = 40, style }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const close = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    const esc = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('pointerdown', close); document.addEventListener('keydown', esc);
    return () => { document.removeEventListener('pointerdown', close); document.removeEventListener('keydown', esc); };
  }, [open]);
  // Responsive fit: measure every item in a hidden row, show as many as fit (≤ maxVisible), rest go to "+N ▾".
  const rowRef = React.useRef(null);
  const measureRef = React.useRef(null);
  const [fit, setFit] = React.useState(maxVisible);
  React.useLayoutEffect(() => {
    const row = rowRef.current, meas = measureRef.current;
    if (!row || !meas || typeof ResizeObserver === 'undefined') return;
    const calc = () => {
      const ws = Array.from(meas.children).map((c) => c.getBoundingClientRect().width);
      const GAP = 24, CHIP = 64;
      const avail = row.clientWidth;
      let used = ws[0] || 0, n = 0;
      const limit = Math.min(maxVisible, modules.length);
      for (let i = 0; i < limit; i++) {
        const restAfter = modules.length - (i + 1);
        const need = used + GAP + ws[i + 1] + (restAfter > 0 ? GAP + CHIP : 0);
        if (need > avail) break;
        used += GAP + ws[i + 1]; n = i + 1;
      }
      setFit(n);
    };
    calc();
    const ro = new ResizeObserver(calc); ro.observe(row);
    return () => ro.disconnect();
  }, [modules, maxVisible, homeLabel]);
  const visible = modules.slice(0, fit);
  const overflow = modules.slice(fit);
  const overflowActive = overflow.some((m) => m.key === activeKey);
  const go = (k) => { setOpen(false); onNavigate && onNavigate(k); };
  return (
    <nav style={{ display: 'flex', alignItems: 'center', gap: 26, padding: '16px 40px', borderBottom: '1px solid var(--ink-700)', position: 'sticky', top: 0, background: 'var(--ink-900)', zIndex: 'var(--z-nav)', fontFamily: 'var(--font-sans)', ...style }}>
      <a href="#" onClick={(e) => { e.preventDefault(); go('home'); }} style={{ flex: 'none', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
        {logoSrc
          ? <><img src={logoSrc} alt={logoAlt} style={{ height: logoHeight, width: 'auto', display: 'block' }} /><span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 800, letterSpacing: 'var(--tracking-brand)', color: 'var(--paper-50)' }}>{brand}</span></>
          : <HexMark size={32} withWordmark wordmark={brand} />}
      </a>
      <div ref={rowRef} style={{ display: 'flex', alignItems: 'center', gap: 24, flex: 1, minWidth: 0, position: 'relative' }}>
        <div ref={measureRef} aria-hidden="true" style={{ position: 'absolute', left: 0, top: 0, visibility: 'hidden', pointerEvents: 'none', display: 'flex', whiteSpace: 'nowrap' }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 'var(--tracking-nav)' }}>{homeLabel}</span>
          {modules.map((m) => <span key={m.key} style={{ fontSize: 11, fontWeight: 700, letterSpacing: 'var(--tracking-nav)' }}>{m.n} {m.name}</span>)}
        </div>
        <NavItem active={activeKey === 'home'} onClick={() => go('home')}>{homeLabel}</NavItem>
        {visible.map((m) => <NavItem key={m.key} active={activeKey === m.key} onClick={() => go(m.key)}>{m.n} {m.name}</NavItem>)}
        {overflow.length > 0 && (
          <div ref={ref} style={{ position: 'relative' }}>
            <button type="button" aria-haspopup="menu" aria-expanded={open} onClick={() => setOpen(!open)}
              style={{ font: 'inherit', fontSize: 11, fontWeight: 700, cursor: 'pointer', color: overflowActive || open ? 'var(--paper-50)' : 'var(--paper-300)', background: 'none',
                border: '1px solid ' + (overflowActive ? 'var(--gold-500)' : 'var(--ink-700)'), borderRadius: 'var(--radius-chip)', padding: '5px 12px' }}>+{overflow.length} ▾</button>
            {open && (
              <div role="menu" style={{ position: 'absolute', top: 'calc(100% + 10px)', left: 0, background: 'var(--ink-800)', border: '1px solid var(--ink-700)', padding: 8, display: 'flex', flexDirection: 'column', minWidth: 170, zIndex: 'var(--z-dropdown)' }}>
                {overflow.map((m) => (
                  <a key={m.key} role="menuitem" href="#" onClick={(e) => { e.preventDefault(); go(m.key); }}
                    style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 10px', fontSize: 12, color: 'var(--paper-50)', textDecoration: 'none', background: activeKey === m.key ? 'var(--ink-700)' : 'transparent' }}>
                    <span style={{ fontFamily: 'var(--font-display)', color: 'oklch(68% 0.1 ' + m.hue + ')', fontSize: 13 }}>{m.n}</span>{m.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 12, color: 'var(--paper-300)' }}>
        <button type="button" aria-label="Rechercher" onClick={onSearch} style={{ background: 'none', border: 0, padding: 0, color: 'inherit', cursor: 'pointer' }}><Icon name="search" size={14} strokeWidth={1.6} /></button>
        <span style={{ borderLeft: '1px solid var(--ink-700)', paddingLeft: 14 }}><LangSwitch variant="menu" value={lang} onChange={onLangChange} /></span>
      </div>
    </nav>
  );
}
