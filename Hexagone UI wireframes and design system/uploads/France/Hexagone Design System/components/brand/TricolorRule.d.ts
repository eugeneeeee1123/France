/** Three-band flag stripe under a hero headline or as a rare section rule. */
export interface TricolorRuleProps {
  /** px, default 170 (mockup hero) */
  width?: number | string;
  height?: number;
  gap?: number;
  /** muted = mockup-rendered (#2F4A8C/#F3EFE4/#A8402F, readable on navy); brief = #001B39/#F8F6F2/#E3051C for light grounds */
  palette?: 'muted' | 'brief';
  style?: React.CSSProperties;
}
export declare function TricolorRule(props: TricolorRuleProps): JSX.Element;
