/**
 * Why → How → What triptych (motive → system → outcome). Icons compass / sun / document in the module hue.
 */
export interface WhyHowWhatProps {
  why: React.ReactNode;
  how: React.ReactNode;
  what: React.ReactNode;
  hue?: number;
  /** Picks default labels: Pourquoi/Comment/Quoi · Why/How/What · 为什么/如何/是什么 */
  lang?: 'fr' | 'en' | 'zh';
  labels?: [string, string, string];
  style?: React.CSSProperties;
}
export declare function WhyHowWhat(props: WhyHowWhatProps): JSX.Element;
