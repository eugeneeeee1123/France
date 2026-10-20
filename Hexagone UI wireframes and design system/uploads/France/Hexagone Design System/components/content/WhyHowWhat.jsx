import React from 'react';
import { Icon } from '../icons/Icon.jsx';

const hc = (h) => 'oklch(68% 0.1 ' + h + ')';

const LABELS = { fr: ['Pourquoi', 'Comment', 'Quoi'], en: ['Why', 'How', 'What'], zh: ['为什么', '如何', '是什么'] };

// Fixed three-part template at the top of every module (design.md §8.7).
export function WhyHowWhat({ why, how, what, hue = 236, lang = 'fr', labels, style }) {
  const L = labels || LABELS[lang] || LABELS.fr;
  const cols = [['compass', L[0], why], ['sun', L[1], how], ['document', L[2], what]];
  return (
    <section style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 28, borderTop: '1px solid var(--ink-700)', borderBottom: '1px solid var(--ink-700)', padding: '32px 0', fontFamily: 'var(--font-sans)', ...style }}>
      {cols.map(([icon, label, text]) => (
        <div key={label}>
          <Icon name={icon} size={24} color={hc(hue)} style={{ marginBottom: 12 }} />
          <div style={{ fontSize: 12, letterSpacing: 'var(--tracking-label)', color: hc(hue), marginBottom: 10 }}>{label}</div>
          <p style={{ fontSize: 14, lineHeight: lang === 'zh' ? 1.8 : 1.6, color: 'var(--paper-50-85)', margin: 0, textWrap: 'pretty' }}>{text}</p>
        </div>
      ))}
    </section>
  );
}
