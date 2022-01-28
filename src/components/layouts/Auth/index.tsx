import styles from './Auth.module.css';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import { Main } from './Main';
import { ModalProps } from '../../ui/Modal/Modal.props';
import { Modal } from '../../ui';

export type FormType = 'main' | 'login' | 'register';

export const Auth: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const isTablet = useMediaQuery({ query: '(max-width: 867px)' });
  const [status, setStatus] = useState<FormType>('register');
  const [formType, setFormType] = useState<FormType>('main');

  const toggleStatus = () => {
    if (formType !== 'main') {
      setFormType('main');
    }

    setStatus(status === 'login' ? 'register' : 'login');
  };

  const toggleFormType = () => {
    setFormType(status);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} fullScreen={isTablet}>
      <div className={styles.form}>
        <div className={styles.image}></div>
        <div className={styles.content}>
          <h2 className={styles.title}>
            {status === 'login' ? 'Вход в аккаунт' : 'Регистрация'}
          </h2>
          <Main formType={formType} onToggle={toggleFormType} />
          <div className={styles.footer}>
            {status !== 'login' && 'Есть аккаунт? '}
            <span className={styles.link} onClick={toggleStatus}>
              {status !== 'login' ? 'Войти' : 'Регистрация'}
            </span>
          </div>
        </div>
      </div>
    </Modal>
  );
};
