import { Button, Modal } from '../../components';
import styles from './Auth.module.css';
import { ReactComponent as MailIcon } from '../../assets/mail.svg';
import { ReactComponent as GoogleIcon } from '../../assets/google.svg';
import { ReactComponent as GithubIcon } from '../../assets/github.svg';
import { ModalProps } from '../../components/Modal/Modal.props';
import { useMediaQuery } from 'react-responsive';

export const Auth = ({ isOpen, handleClose }: ModalProps) => {
  const isTablet = useMediaQuery({ query: '(max-width: 867px)' });

  return (
    <Modal isOpen={isOpen} handleClose={handleClose} fullScreen={isTablet}>
      <div className={styles.form}>
        <div className={styles.image}></div>
        <div className={styles.content}>
          <h2 className={styles.title}>Регистрация</h2>
          <div className={styles.actions}>
            <Button variant='secondary' fullWidth>
              <MailIcon /> <span>Почта</span>
            </Button>
            <Button variant='secondary' fullWidth>
              <GithubIcon /> <span>Github</span>
            </Button>
            <Button variant='secondary' fullWidth>
              <GoogleIcon /> <span>Google</span>
            </Button>
          </div>
          <div className={styles.footer}>Есть аккаунт? Войти</div>
        </div>
      </div>
    </Modal>
  );
};
