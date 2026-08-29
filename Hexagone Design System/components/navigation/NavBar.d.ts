import * as React from "react";
export interface NavBarProps {
  logoSrc?: string;
  brandName?: string;
  brandSub?: string;
  links?: string[];
  activeLink?: string;
  lang?: string;
  ctaLabel?: string;
  onNavigate?: (id: string) => void;
  onCtaClick?: () => void;
  onSearchClick?: () => void;
}
