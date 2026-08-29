import * as React from "react";
export interface ModuleCardProps {
  number: string;
  title: string;
  titleFr: string;
  description: string;
  accent?: string;
  image?: string;
  onClick?: () => void;
}
