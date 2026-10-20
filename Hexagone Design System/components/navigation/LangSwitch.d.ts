/** Trilingual switch (fr / en / zh). Active = paper-50, inactive = paper-300. */
export interface LangSwitchProps {
  value?: 'fr' | 'en' | 'zh';
  onChange?: (lang: 'fr' | 'en' | 'zh') => void;
  /** inline: "FR EN 中" row (footer). menu: "FR ▾" trigger + dropdown (nav). */
  variant?: 'inline' | 'menu';
  style?: React.CSSProperties;
}
export declare function LangSwitch(props: LangSwitchProps): JSX.Element;
