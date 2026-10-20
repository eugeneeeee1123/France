/**
 * Gold text call-to-action with trailing arrow.
 * uppercase=true: hero CTA ("Commencer l'exploration →", 13px/600/.06em).
 * uppercase=false: inline panel link ("Explorer la carte →", 13px, unicode arrow).
 */
export interface CtaLinkProps {
  children: React.ReactNode;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  size?: number;
  uppercase?: boolean;
  arrow?: boolean;
  style?: React.CSSProperties;
}
export declare function CtaLink(props: CtaLinkProps): JSX.Element;
