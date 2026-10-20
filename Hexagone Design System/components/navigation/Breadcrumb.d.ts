/** Plain-text trail "Home / 01 ARSENAL", 12px paper-300. Last item is the current page. */
export interface BreadcrumbProps {
  items: Array<string | { label: string; key?: string }>;
  onNavigate?: (key: string, index: number) => void;
  style?: React.CSSProperties;
}
export declare function Breadcrumb(props: BreadcrumbProps): JSX.Element;
