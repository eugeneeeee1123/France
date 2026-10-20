export interface NavModule { key: string; n: string; name: string; hue: number; }

/**
 * Sticky top navigation: HexMark wordmark, HOME, numbered modules, "+N ▾" overflow menu, search, language menu.
 * Active item = paper-50 + 2px gold underline. Overflow chip turns gold-bordered when the active module lives inside it.
 * @startingPoint section="Navigation" subtitle="Site top bar with overflow + language" viewport="1440x320"
 */
export interface NavBarProps {
  modules?: NavModule[];
  /** 'home' or a module key */
  activeKey?: string;
  /** Modules shown before the overflow chip. Mockup: 7 of 10. */
  maxVisible?: number;
  homeLabel?: string;
  lang?: 'fr' | 'en' | 'zh';
  onLangChange?: (lang: 'fr' | 'en' | 'zh') => void;
  onNavigate?: (key: string) => void;
  onSearch?: () => void;
  brand?: string;
  /** Image logo replacing the HexMark (wordmark still shown). */
  logoSrc?: string;
  logoAlt?: string;
  /** px, default 40 */
  logoHeight?: number;
  style?: React.CSSProperties;
}
export declare function NavBar(props: NavBarProps): JSX.Element;
