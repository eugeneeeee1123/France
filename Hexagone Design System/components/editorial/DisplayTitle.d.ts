/**
 * Monumental Playfair title, uppercase. hero = clamp(2.2rem,4.4vw,3.8rem) / .02em (mockup H1);
 * grandeur = clamp(3rem,14vw,9rem) / .05em (GRANDEUR treatment). accentWord turns ONE word gold.
 * reveal: per-letter fade + rise, 20ms stagger, settle curve; never a typewriter. Reduced-motion → instant.
 */
export interface DisplayTitleProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'div';
  size?: 'hero' | 'grandeur';
  accentWord?: string;
  reveal?: boolean;
  style?: React.CSSProperties;
}
export declare function DisplayTitle(props: DisplayTitleProps): JSX.Element;
