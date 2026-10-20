import React from 'react';

// Serif italic pull-quote. card = hero overlay (250px, ink-800 85%); panel = section panel over a dimmed portrait.
export function QuoteBlock({ quote, attribution, variant = 'card', imageSrc, imageSlotId, style }) {
  if (variant === 'panel') {
    const bg = imageSrc
      ? <img src={imageSrc} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      : imageSlotId ? React.createElement('image-slot', { id: imageSlotId, shape: 'rect', placeholder: 'Portrait, dimmed background', style: { display: 'block', width: '100%', height: '100%' } }) : null;
    return (
      <figure style={{ margin: 0, background: 'var(--ink-900)', padding: 30, position: 'relative', overflow: 'hidden', fontFamily: 'var(--font-sans)', ...style }}>
        {bg && <div style={{ position: 'absolute', inset: 0, opacity: 0.22 }}>{bg}</div>}
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
          <blockquote style={{ margin: '0 0 12px', fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 19, lineHeight: 1.5, color: 'var(--paper-50)', textWrap: 'pretty' }}>{quote}</blockquote>
          {attribution && <figcaption style={{ fontSize: 12, color: 'var(--paper-300)' }}>{attribution}</figcaption>}
        </div>
      </figure>
    );
  }
  return (
    <figure style={{ margin: 0, width: 250, background: 'var(--surface-overlay)', border: '1px solid var(--ink-700)', padding: 18, fontFamily: 'var(--font-sans)', ...style }}>
      <blockquote style={{ margin: '0 0 10px', fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 15, lineHeight: 1.5, color: 'var(--paper-50)' }}>{quote}</blockquote>
      {attribution && <figcaption style={{ borderTop: '1px solid var(--gold-700)', paddingTop: 7, width: 'fit-content', fontSize: 11.5, color: 'var(--paper-300)' }}>{attribution}</figcaption>}
    </figure>
  );
}
