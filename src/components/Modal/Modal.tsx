import styles from './Modal.module.css';
import cn from 'classnames';
import { ModalProps } from './Modal.props';
import { ReactComponent as CloseIcon } from './close.svg';

export const Modal = ({
  isOpen,
  handleClose,
  children,
  className,
  ...props
}: ModalProps): JSX.Element => {
  return (
    <>
      {isOpen && (
        <div className={cn(className, styles.overlay)} {...props}>
          <div className={styles.window}>
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
