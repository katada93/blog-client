import './Header.css';
import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <div className='header'>
      <a className='logo' href='/'>
        <img src={logo} alt='Logo' />
      </a>
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
