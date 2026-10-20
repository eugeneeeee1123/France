/**
 * Module tile: 120px image (thumb scrim) with Playfair numeral in the module hue, uppercase title, 4 bullets, arrow.
 * active = hue border + 40px hue glow + gold arrow. hover = gold border, 2px lift, gold numeral/arrow.
 * Without imageSrc it renders an <image-slot> (load image-slot.js on the page).
 */
export interface ModuleCardProps {
  /** Two-digit numeral "01"–"10" */
  n: string;
  name: string;
  /** oklch hue from the module rotation (236 arsenal … 92 industry) */
  hue?: number;
  bullets?: string[];
  imageSrc?: string;
  imageSlotId?: string;
  imagePlaceholder?: string;
  active?: boolean;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  style?: React.CSSProperties;
}
export declare function ModuleCard(props: ModuleCardProps): JSX.Element;
