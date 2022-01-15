import { ReactComponent as MenuIcon } from '../../assets/menu.svg';
import { ReactComponent as NotificationIcon } from '../../assets/bell.svg';
import { ReactComponent as PersonIcon } from '../../assets/person.svg';
import styles from './Header.module.css';
import { Button } from '../../components';
// import cn from 'classnames';

export const Header = () => {
  return (
    <header>
      <div className={styles.headerInner}>
        <span className={styles.burger}>
          <MenuIcon />
        </span>
        <div className={styles.search}>
          <input type='text' placeholder='Поиск' />
        </div>
        <Button variant='primary'>Новая запись</Button>
        <span className={styles.notification}>
          <NotificationIcon />
        </span>
        <div className={styles.login}>
          <PersonIcon />
          <span>Войти</span>
        </div>
      </div>
    </header>
  );
};
