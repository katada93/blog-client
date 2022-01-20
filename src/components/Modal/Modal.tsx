import styles from './Modal.module.css';
import cn from 'classnames';
import { ModalProps } from './Modal.props';
import { ReactComponent as CloseIcon } from './close.svg';

export const Modal = ({
  isOpen,
  handleClose,
  fullScreen = false,
  children,
  className,
  ...props
}: ModalProps): JSX.Element => {
  return (
    <>
      {isOpen && (
        <div className={cn(className, styles.overlay)} {...props}>
          <div
            className={cn(styles.window, {
              [styles.fullScreen]: fullScreen,
            })}
          >
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
