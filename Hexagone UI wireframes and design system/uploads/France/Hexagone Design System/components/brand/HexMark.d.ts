/**
 * Hexagon "H" monogram, optionally with the HEXAGONE wordmark.
 * Sizes from mockup: 32 nav (gold), 24 footer (paper), 100 hero crest (gold, filled).
 */
export interface HexMarkProps {
  size?: number;
  tone?: 'gold' | 'paper';
  letter?: string;
  withWordmark?: boolean;
  wordmark?: string;
  /** Translucent ink fill behind the mark (hero crest over imagery) */
  filled?: boolean;
  style?: React.CSSProperties;
}
export declare function HexMark(props: HexMarkProps): JSX.Element;
