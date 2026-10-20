import React from 'react';

// Path data copied verbatim from UI Mockup v3.0 inline SVGs (thin-line, 24px grid).
const PATHS = {
  search: [['circle', { cx: 11, cy: 11, r: 7 }], ['path', { d: 'M21 21l-4.3-4.3' }]],
  arrowRight: [['path', { d: 'M5 12h14M13 6l6 6-6 6' }]],
  compass: [['circle', { cx: 12, cy: 12, r: 9 }], ['path', { d: 'M15 9l-2 6-6 2 2-6 6-2z' }]],
  sun: [['circle', { cx: 12, cy: 12, r: 3 }], ['path', { d: 'M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1' }]],
  document: [['path', { d: 'M7 3h7l4 4v14H7z' }], ['path', { d: 'M14 3v4h4' }], ['path', { d: 'M9 13h6M9 17h6' }]],
  target: [['circle', { cx: 12, cy: 12, r: 8 }], ['circle', { cx: 12, cy: 12, r: 3.5 }]],
  person: [['path', { d: 'M12 12a4 4 0 100-8 4 4 0 000 8zM4 21c0-4.4 3.6-7 8-7s8 2.6 8 7' }]],
  speech: [['path', { d: 'M4 5h16v11H9l-5 4V5z' }]],
  anchor: [['circle', { cx: 12, cy: 5, r: 2 }], ['path', { d: 'M12 7v13M6 13a6 6 0 0012 0M4 13h3M17 13h3' }]],
  star: [['path', { d: 'M12 3l2.5 5.6 6.1.6-4.6 4.1 1.3 6-5.3-3.1-5.3 3.1 1.3-6-4.6-4.1 6.1-.6z' }]],
  camera: [['rect', { x: 4, y: 4, width: 16, height: 16, rx: 3 }], ['circle', { cx: 12, cy: 12, r: 3.5 }]],
  play: [['path', { d: 'M8 5l11 7-11 7V5z' }]],
  hexagon: [['polygon', { points: '6,1.5 18,1.5 23,12 18,22.5 6,22.5 1,12' }]],
};

export const ICON_NAMES = Object.keys(PATHS);

export function Icon({ name, size = 16, strokeWidth = 1.5, color = 'currentColor', title, style }) {
  const parts = PATHS[name];
  if (!parts) return null;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth}
      role={title ? 'img' : undefined} aria-hidden={title ? undefined : true} aria-label={title}
      style={{ display: 'block', flex: 'none', ...style }}>
      {parts.map(([tag, attrs], i) => React.createElement(tag, { key: i, ...attrs }))}
    </svg>
  );
}
