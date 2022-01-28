import { ReactComponent as MenuIcon } from '../../../assets/menu.svg';
import { ReactComponent as NotificationIcon } from '../../../assets/bell.svg';
import { ReactComponent as PersonIcon } from '../../../assets/person.svg';
import styles from './Header.module.css';
import { useState } from 'react';
import { Auth } from '..';
import { Button } from '../../ui';

export const Header: React.FC = () => {
  const [showAuth, setShowAuth] = useState<boolean>(false);

  return (
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
        <div onClick={() => setShowAuth(true)} className={styles.login}>
          <PersonIcon />
          <span>Войти</span>
        </div>
        <Auth isOpen={showAuth} onClose={() => setShowAuth(false)}>
          Auth
        </Auth>
      </div>
    </header>
  );
};
