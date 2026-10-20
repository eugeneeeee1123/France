import React from 'react';
import { Icon } from '../icons/Icon.jsx';

const hc = (h) => 'oklch(68% 0.1 ' + h + ')';

// Numbered module tile for the homepage matrix (design.md §8.2, mockup v3 grid).
export function ModuleCard({ n, name, hue = 236, bullets = [], imageSrc, imageSlotId, imagePlaceholder, active = false, href = '#', onClick, style }) {
  const [hover, setHover] = React.useState(false);
  const canHover = () => typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const accent = hc(hue);
  const lit = active || hover;
  const img = imageSrc
    ? <img src={imageSrc} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
    : React.createElement('image-slot', { id: imageSlotId || ('hx-thumb-' + n), shape: 'rect', placeholder: imagePlaceholder || (name + ' — photo, cool navy grade'), style: { display: 'block', width: '100%', height: '100%' } });
  return (
    <a href={href} onClick={onClick}
      onMouseEnter={() => canHover() && setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'flex', flexDirection: 'column', border: '1px solid ' + (hover ? 'var(--gold-500)' : active ? accent : 'var(--ink-700)'), textDecoration: 'none', overflow: 'hidden',
        background: 'var(--ink-800)', boxShadow: active ? 'var(--glow-module) ' + accent : 'none', fontFamily: 'var(--font-sans)',
        transform: hover ? 'translateY(var(--lift-card))' : 'none',
        transition: 'transform var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)', ...style }}>
      <div style={{ height: 120, position: 'relative', background: 'var(--ink-900)' }}>
        {img}
        <div style={{ position: 'absolute', inset: 0, background: 'var(--scrim-thumb)', pointerEvents: 'none' }} />
        <span style={{ position: 'absolute', left: 10, bottom: 8, fontFamily: 'var(--font-display)', fontSize: 22, color: hover ? 'var(--gold-500)' : accent, pointerEvents: 'none' }}>{n}</span>
      </div>
      <div style={{ padding: 14, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: 'var(--tracking-nav)', color: 'var(--paper-50)', textTransform: 'uppercase', marginBottom: 8 }}>{name}</div>
        <div style={{ fontSize: 11, color: 'var(--paper-300)', lineHeight: 1.7, marginBottom: 8 }}>{bullets.map((b, i) => <div key={i}>{b}</div>)}</div>
        <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'flex-end', color: lit ? 'var(--gold-500)' : 'var(--paper-300)' }}><Icon name="arrowRight" size={14} strokeWidth={1.8} /></div>
      </div>
    </a>
  );
}
