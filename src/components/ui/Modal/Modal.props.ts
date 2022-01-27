import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ModalProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isOpen: boolean;
  fullScreen?: boolean;
  handleClose: () => void;
}
