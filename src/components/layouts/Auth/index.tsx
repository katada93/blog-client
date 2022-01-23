import styles from './Auth.module.css';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';
import { Main } from './Main';
import { ModalProps } from '../../ui/Modal/Modal.props';
import { Modal } from '../../ui';

export type FormStatus = 'login' | 'register';
export type FormType = 'main' | 'login' | 'register';

export const Auth = ({ isOpen, handleClose }: ModalProps) => {
  const isTablet = useMediaQuery({ query: '(max-width: 867px)' });
  const [status, setStatus] = useState<FormStatus>('register');
  const [formType, setFormType] = useState<FormType>('main');

  const toggleStatus = () => {
    if (formType !== 'main') {
      setFormType('main');
    }

    setStatus(status === 'login' ? 'register' : 'login');
  };

  const onToggleFormType = () => {
    setFormType(status);
  };

  return (
    <Modal isOpen={isOpen} handleClose={handleClose} fullScreen={isTablet}>
      <div className={styles.form}>
        <div className={styles.image}></div>
        <div className={styles.content}>
          <h2 className={styles.title}>
            {status === 'login' ? 'Вход в аккаунт' : 'Регистрация'}
          </h2>
          <Main formType={formType} onToggleFormType={onToggleFormType} />
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
