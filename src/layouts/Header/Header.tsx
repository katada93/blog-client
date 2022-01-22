import { ReactComponent as MenuIcon } from '../../assets/menu.svg';
import { ReactComponent as NotificationIcon } from '../../assets/bell.svg';
import { ReactComponent as PersonIcon } from '../../assets/person.svg';
import styles from './Header.module.css';
import { Button } from '../../components';
import { useState } from 'react';
import { Auth } from '..';

export const Header = () => {
  const [showAuthModal, setShowAuthModal] = useState<boolean>(true);

  return (
    <>
      <header>
        <div className={styles.headerInner}>
          <span className={styles.burger}>
            <MenuIcon />
          </span>
          <div className={styles.search}>
            <input type='text' placeholder='Поиск' />
          </div>
          <Button variant='secondary'>Новая запись</Button>
          <span className={styles.notification}>
            <NotificationIcon />
          </span>
          <div onClick={() => setShowAuthModal(true)} className={styles.login}>
            <PersonIcon />
            <span>Войти</span>
          </div>
          <Auth
            isOpen={showAuthModal}
            handleClose={() => setShowAuthModal(false)}
          >
            Auth
          </Auth>
        </div>
      </header>
    </>
  );
};
