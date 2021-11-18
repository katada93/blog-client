import { useHistory } from 'react-router';
import './Header.css';
import logo from '../../assets/logo.png';
import { IUser } from '../../types';
import { Link } from 'react-router-dom';

interface IHeaderProps {
  isAuth: boolean;
  user: IUser;
}

const Header: React.FC<IHeaderProps> = ({ isAuth, user }) => {
  const history = useHistory();

  return (
    <div className='header'>
      <img className='logo' src={logo} alt='Logo' />
      <nav className='nav'>
        <ul className='nav-list'>
          <li className='nav-item'>
            <Link to='/'>Главная</Link>
          </li>
          <li className='nav-item'>
            <Link to='/tags'>Категории</Link>
          </li>
          <li className='nav-item'>
            <Link to='/about'>О нас</Link>
          </li>
        </ul>
      </nav>
      <div className='actions'>
        <input className='search' type='text' />
        {isAuth ? (
          <img className='header__avatar' src={user.img} alt='User' />
        ) : (
          <button onClick={() => history.push('/login')} className='login'>
            Войти
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
