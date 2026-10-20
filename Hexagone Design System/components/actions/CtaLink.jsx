import React from 'react';
import { Icon } from '../icons/Icon.jsx';

// Gold uppercase text CTA with arrow — the mockup's primary call to action.
export function CtaLink({ children, href = '#', onClick, size = 13, uppercase = true, arrow = true, style }) {
  const [hover, setHover] = React.useState(false);
  const canHover = () => typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(hover: hover)').matches;
  return (
    <a href={href} onClick={onClick}
      onMouseEnter={() => canHover() && setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--gold-500)', fontFamily: 'var(--font-sans)', fontSize: size,
        fontWeight: uppercase ? 600 : 400, letterSpacing: uppercase ? 'var(--tracking-label)' : 0, textTransform: uppercase ? 'uppercase' : 'none',
        textDecoration: hover ? 'underline' : 'none', textUnderlineOffset: 3, cursor: 'pointer', ...style }}>
      {children}
      {arrow && (uppercase
        ? <Icon name="arrowRight" size={16} strokeWidth={1.8} />
        : <span aria-hidden="true">→</span>)}
    </a>
  );
}
