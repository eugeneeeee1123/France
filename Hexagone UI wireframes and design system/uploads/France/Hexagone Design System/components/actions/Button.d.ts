import type { IconName } from '../icons/Icon';

/**
 * Outline (gold hairline) or ghost (paper text) button, 44px min touch target, square corners.
 * Taken from the homepage/module prototype images ("COMMENCER L'EXPLORATION →", "▷ VOIR LA VIDÉO").
 */
export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'outline' | 'ghost';
  icon?: IconName;
  iconPosition?: 'start' | 'end';
  disabled?: boolean;
  onClick?: React.MouseEventHandler;
  href?: string;
  type?: 'button' | 'submit';
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;
