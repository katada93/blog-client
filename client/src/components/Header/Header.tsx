import { useHistory } from 'react-router';
import './Header.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../features/store';

const Header = () => {
  const history = useHistory();
  const { isAuth, user } = useSelector(({ auth }: RootState) => auth);

  return (
    <div className='header'>
      <Link className='logo' to='/'>
        <img src={logo} alt='Logo' />
      </Link>
      <nav className='nav'>
        <ul className='nav-list'>
          <li className='nav-item'>
            <a href='/'>Главная</a>
          </li>
          <li className='nav-item'>
            <a href='/tags'>Категории</a>
          </li>
          <li className='nav-item'>
            <a href='/about'>О нас</a>
          </li>
        </ul>
      </nav>
      <div className='actions'>
        <input className='search' type='text' />
        {isAuth ? (
          <span>{user.name}</span>
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
