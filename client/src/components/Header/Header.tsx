import { useHistory } from 'react-router';
import logo from '../../assets/logo.png';
import { IUser } from '../../types';
import { Link } from 'react-router-dom';
import cl from './Header.module.css';

interface IHeaderProps {
  isAuth: boolean;
  user: IUser;
}

const Header: React.FC<IHeaderProps> = ({ isAuth, user }) => {
  const history = useHistory();

  return (
    <div className={cl.header}>
      <img className={cl.logo} src={logo} alt='Logo' />
      <nav className={cl.nav}>
        <ul className={cl.navList}>
          <li className={cl.navItem}>
            <Link to='/'>Главная</Link>
          </li>
          <li className={cl.navItem}>
            <Link to='/tags'>Категории</Link>
          </li>
          <li className={cl.navItem}>
            <Link to='/about'>О нас</Link>
          </li>
        </ul>
      </nav>
      <div className={cl.actions}>
        <input className={cl.search} type='text' />
        {isAuth ? (
          <img className={cl.headerAvatar} src={user.img} alt='User' />
        ) : (
          <button onClick={() => history.push('/login')} className={cl.login}>
            Войти
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
