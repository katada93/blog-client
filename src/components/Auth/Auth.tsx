import { FC } from 'react';
import { DialogTitle, Dialog } from '@mui/material';

export interface IAuthProps {
  open: boolean;
  handleClose: () => void;
}

export const Auth: FC<IAuthProps> = ({ open, handleClose }) => {
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Set backup account</DialogTitle>
    </Dialog>
  );
};
