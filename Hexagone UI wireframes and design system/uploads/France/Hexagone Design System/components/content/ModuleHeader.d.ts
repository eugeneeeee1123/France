/** Module page masthead: 56px Playfair numeral in module hue + 34px uppercase serif title + subtitle + intro. */
export interface ModuleHeaderProps {
  n: string;
  title: string;
  subtitle?: string;
  intro?: string;
  hue?: number;
  /** Usually a <ScenarioLabel> for speculative modules */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function ModuleHeader(props: ModuleHeaderProps): JSX.Element;
