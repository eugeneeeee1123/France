import type { IconName } from '../icons/Icon';

/**
 * Stat strip: mono gold numerals over small labels, hairline dividers, no per-stat boxes.
 * open (home): top/bottom hairlines, 15px icon, 18px value, 10px uppercase label.
 * boxed (module): full hairline frame, 19px value, 10.5px sentence-case label.
 */
export interface StatStripProps {
  items: Array<{ value: string; label: string; icon?: IconName }>;
  variant?: 'open' | 'boxed';
  style?: React.CSSProperties;
}
export declare function StatStrip(props: StatStripProps): JSX.Element;
