/** "MODULES LIÉS  02 STATECRAFT →  08 ECONOMY →" — hairline-topped row of gold text links. */
export interface RelatedLinksProps {
  label?: string;
  links: Array<{ key: string; n: string; name: string }>;
  onNavigate?: (key: string) => void;
  style?: React.CSSProperties;
}
export declare function RelatedLinks(props: RelatedLinksProps): JSX.Element;
