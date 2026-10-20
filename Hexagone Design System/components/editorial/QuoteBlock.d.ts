/**
 * Pull-quote in Playfair italic, no decorative quote glyphs. Max one or two per page.
 * card: 250px hero overlay, ink-800 @85%, gold-700 rule above attribution.
 * panel: 30px-padded ink-900 panel, optional portrait at 22% opacity behind.
 */
export interface QuoteBlockProps {
  quote: React.ReactNode;
  attribution?: React.ReactNode;
  variant?: 'card' | 'panel';
  imageSrc?: string;
  imageSlotId?: string;
  style?: React.CSSProperties;
}
export declare function QuoteBlock(props: QuoteBlockProps): JSX.Element;
