import React from 'react';
import { Icon } from '../icons/Icon.jsx';

// Outline / ghost button. Square corners; press = instant scale .98; hover = faint gold wash.
export function Button({ children, variant = 'outline', icon, iconPosition = 'end', disabled = false, onClick, href, type = 'button', style }) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const canHover = () => typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(hover: hover)').matches;
  const outline = variant === 'outline';
  const color = disabled ? 'var(--text-disabled)' : outline ? 'var(--gold-500)' : 'var(--paper-50)';
  const s = {
    display: 'inline-flex', alignItems: 'center', gap: 10, minHeight: 44, padding: outline ? '0 18px' : '0 4px',
    border: outline ? '1px solid ' + (disabled ? 'var(--ink-700)' : 'var(--gold-500)') : '1px solid transparent', borderRadius: 0,
    background: outline && hover && !disabled ? 'rgba(239,180,75,0.08)' : 'transparent', color,
    fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 600, letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase',
    cursor: disabled ? 'not-allowed' : 'pointer', textDecoration: 'none',
    transform: press && !disabled ? 'scale(0.98)' : 'none',
    transition: 'transform var(--dur-instant) var(--ease-standard), background-color var(--dur-fast) var(--ease-standard)', ...style,
  };
  const ic = icon ? (variant === 'ghost' && icon === 'play'
    ? <span style={{ width: 28, height: 28, borderRadius: '50%', border: '1px solid ' + (disabled ? 'var(--ink-700)' : 'var(--gold-500)'), display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: disabled ? 'var(--ink-700)' : 'var(--gold-500)' }}><Icon name="play" size={11} /></span>
    : <Icon name={icon} size={16} strokeWidth={1.8} />) : null;
  const handlers = {
    onMouseEnter: () => canHover() && setHover(true), onMouseLeave: () => { setHover(false); setPress(false); },
    onPointerDown: () => setPress(true), onPointerUp: () => setPress(false),
  };
  const content = <>{iconPosition === 'start' && ic}{children}{iconPosition === 'end' && ic}</>;
  if (href && !disabled) return <a href={href} onClick={onClick} style={s} {...handlers}>{content}</a>;
  return <button type={type} disabled={disabled} aria-disabled={disabled} onClick={onClick} style={s} {...handlers}>{content}</button>;
}
