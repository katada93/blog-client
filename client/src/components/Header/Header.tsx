import './Header.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
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
        <button className='login'>Войти</button>
      </div>
    </div>
  );
};

export default Header;
