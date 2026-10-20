import React from 'react';
import { HexMark } from '../brand/HexMark.jsx';
import { Icon } from '../icons/Icon.jsx';
import { LangSwitch } from './LangSwitch.jsx';

const H = { fontSize: 11, letterSpacing: 'var(--tracking-label)', color: 'var(--paper-300)', textTransform: 'uppercase', marginBottom: 12 };

export function SiteFooter({
  tagline = 'Comprendre la France dans toute sa complexité, sa richesse et son influence.',
  navLabel = 'Navigation', navLinks = ['À propos', 'Sources', 'Contact', 'Mentions légales'],
  socialLabel = 'Suivez-nous', langLabel = 'Langue', lang = 'fr', onLangChange,
  legal = '© Hexagone. Projet éditorial indépendant.', style,
}) {
  return (
    <footer style={{ borderTop: '1px solid var(--ink-700)', background: 'var(--ink-950)', padding: '48px 40px 24px', fontFamily: 'var(--font-sans)', ...style }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 32, paddingBottom: 28 }}>
        <div>
          <div style={{ marginBottom: 10 }}><HexMark size={24} tone="paper" withWordmark /></div>
          <p style={{ fontSize: 12, color: 'var(--paper-300)', lineHeight: 1.6, maxWidth: 220, margin: 0 }}>{tagline}</p>
        </div>
        <div><div style={H}>{navLabel}</div><div style={{ display: 'flex', flexDirection: 'column', gap: 9, fontSize: 13 }}>{navLinks.map((l) => <a key={l} href="#">{l}</a>)}</div></div>
        <div><div style={H}>{socialLabel}</div><div style={{ display: 'flex', gap: 10 }}>
          {['speech', 'camera', 'play'].map((n) => (
            <a key={n} href="#" aria-label={n} style={{ width: 28, height: 28, border: '1px solid var(--ink-700)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--paper-300)' }}><Icon name={n} size={12} /></a>
          ))}
        </div></div>
        <div><div style={H}>{langLabel}</div><LangSwitch value={lang} onChange={onLangChange} /></div>
      </div>
      <div style={{ borderTop: '1px solid var(--ink-700)', padding: '18px 0 0', textAlign: 'center', fontSize: 11.5, color: 'var(--paper-300)' }}>{legal}</div>
    </footer>
  );
}
