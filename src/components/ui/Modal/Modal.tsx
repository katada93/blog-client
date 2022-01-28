import styles from './Modal.module.css';
import cn from 'classnames';
import { ModalProps } from './Modal.props';
import { ReactComponent as CloseIcon } from './close.svg';

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
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
        <div onClick={onClose} className={cn(styles.overlay)} {...props}>
          <div onClick={(e) => e.stopPropagation()} className={classes}>
            <span onClick={onClose} className={styles.close}>
              <CloseIcon />
            </span>
            <div className={styles.body}>{children}</div>
          </div>
        </div>
      )}
    </>
  );
};
