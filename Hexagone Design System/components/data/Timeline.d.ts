/**
 * Horizontal era scrubber: -52 · 1789 · 1815 · 1870 · 1940 · 1958 · Aujourd'hui. Each node = jump link into Epochs.
 * Controlled (activeIndex) or uncontrolled (defaultActiveIndex, defaults to last = today).
 */
export interface TimelineProps {
  eras: Array<{ year: string; caption: string }>;
  activeIndex?: number;
  defaultActiveIndex?: number;
  onSelect?: (index: number, era: { year: string; caption: string }) => void;
  bordered?: boolean;
  style?: React.CSSProperties;
}
export declare function Timeline(props: TimelineProps): JSX.Element;
