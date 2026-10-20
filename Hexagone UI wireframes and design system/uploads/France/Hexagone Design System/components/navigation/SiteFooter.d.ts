/** Four-column footer on ink-950: mark + tagline, navigation links, social circles, language. */
export interface SiteFooterProps {
  tagline?: string;
  navLabel?: string;
  navLinks?: string[];
  socialLabel?: string;
  langLabel?: string;
  lang?: 'fr' | 'en' | 'zh';
  onLangChange?: (lang: 'fr' | 'en' | 'zh') => void;
  legal?: string;
  style?: React.CSSProperties;
}
export declare function SiteFooter(props: SiteFooterProps): JSX.Element;
