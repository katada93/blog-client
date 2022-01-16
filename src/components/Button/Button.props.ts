import { DetailedHTMLProps, ReactNode, ButtonHTMLAttributes } from 'react';

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  loading?: boolean;
  children: ReactNode;
}
