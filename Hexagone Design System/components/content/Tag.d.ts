import * as React from "react";
export interface TagProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}
