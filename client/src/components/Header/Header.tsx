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
            <a href='/'>Home</a>
          </li>
          <li className='nav-item'>
            <a href='/tags'>Tags</a>
          </li>
          <li className='nav-item'>
            <a href='/about'>About</a>
          </li>
        </ul>
      </nav>
      <div className='actions'>
        <input className='search' type='text' />
        <button className='login'>Login</button>
      </div>
    </div>
  );
};

export default Header;
