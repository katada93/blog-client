import styles from './Modal.module.css';
import cn from 'classnames';
import { ModalProps } from './Modal.props';
import { ReactComponent as CloseIcon } from './close.svg';

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  handleClose,
  fullScreen = false,
  children,
  ...props
}) => {
  const classes = cn(styles.window, {
    [styles.fullScreen]: fullScreen,
  });

  return (
    <>
      {isOpen && (
        <div className={cn(styles.overlay)} {...props}>
          <div className={classes}>
            <span onClick={handleClose} className={styles.close}>
              <CloseIcon />
            </span>
            <div className={styles.body}>{children}</div>
          </div>
        </div>
      )}
    </>
  );
};
