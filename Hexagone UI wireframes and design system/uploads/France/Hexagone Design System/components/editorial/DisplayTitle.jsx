import React from 'react';

// Monumental serif title. reveal=true runs the GRANDEUR per-letter fade+rise (design.md §9.2) once on mount.
export function DisplayTitle({ children, as = 'h1', size = 'hero', accentWord, reveal = false, style }) {
  const [shown, setShown] = React.useState(!reveal);
  React.useEffect(() => { if (!reveal) return; const id = requestAnimationFrame(() => setShown(true)); return () => cancelAnimationFrame(id); }, [reveal]);
  const fs = size === 'grandeur' ? 'var(--fs-grandeur)' : 'var(--fs-hero)';
  const ls = size === 'grandeur' ? 'var(--tracking-grandeur)' : 'var(--tracking-hero)';
  const text = typeof children === 'string' ? children : null;
  let idx = 0;
  const renderWord = (w, wi) => {
    const gold = accentWord && w.replace(/[^\p{L}]/gu, '').toLowerCase() === accentWord.toLowerCase();
    return (
      <span key={wi} style={{ display: 'inline-block', whiteSpace: 'nowrap', color: gold ? 'var(--gold-500)' : undefined }}>
        {reveal ? Array.from(w).map((ch) => {
          const i = idx++;
          return <span key={i} style={{ display: 'inline-block', opacity: shown ? 1 : 0, transform: shown ? 'none' : 'translateY(var(--rise-letter))',
            transition: 'opacity var(--dur-slow) var(--ease-settle), transform var(--dur-slow) var(--ease-settle)', transitionDelay: 'calc(var(--stagger-letter) * ' + i + ')' }}>{ch}</span>;
        }) : w}
      </span>
    );
  };
  const content = text ? text.split(/(\s+)/).map((w, wi) => /^\s+$/.test(w) ? w : renderWord(w, wi)) : children;
  return React.createElement(as, {
    'aria-label': text || undefined,
    style: { fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: fs, lineHeight: 1.1, letterSpacing: ls, textTransform: 'uppercase', color: 'var(--paper-50)', margin: 0, textWrap: 'balance', ...style },
  }, content);
}
