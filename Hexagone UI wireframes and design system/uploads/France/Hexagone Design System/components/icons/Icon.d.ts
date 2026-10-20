export type IconName = 'search' | 'arrowRight' | 'compass' | 'sun' | 'document' | 'target' | 'person' | 'speech' | 'anchor' | 'star' | 'camera' | 'play' | 'hexagon';

/** Thin-line icon from the Hexagone mockup set. Single stroke weight, no fills. */
export interface IconProps {
  name: IconName;
  /** px. Mockup sizes: 12 (social), 14 (nav/arrows), 15 (stat strip), 24 (Why/How/What) */
  size?: number;
  /** 1.5 default; 1.6 search; 1.8 arrows */
  strokeWidth?: number;
  color?: string;
  /** Accessible label. Omit for decorative icons (aria-hidden). */
  title?: string;
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element | null;
export declare const ICON_NAMES: IconName[];
