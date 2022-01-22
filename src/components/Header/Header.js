import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/NewsExplorer.svg';

function Header(props) {
  const location = useLocation();
  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__logo' src={logo} alt='header__logo' />
      </Link>
      <ul className='header__nav'>
        <li>
          <Link
            to='/'
            className={
              location.pathname === '/'
                ? 'header__nav-link_active'
                : 'header__nav-link'
            }
          >
            Home
          </Link>
        </li>
        <li>
          <Link className='header__nav-link' to='/saved-articles'>
            {' '}
            Saved articles{' '}
          </Link>
        </li>
        <li>
          <button
            className='header__nav-button'
            type='button'
            onClick={props.onLoginPopupClick}
          >
            Sign in
          </button>
        </li>
      </ul>
      <button
        type='button'
        className={`'header__nav-mobile-button' ${
          props.isOpen
            ? 'header__nav-mobile-button_open'
            : 'header__nav-mobile-button'
        }`}
        onClick={props.onMobileMenuClick}
      ></button>
      <button
        type='button'
        className={`'header__nav-button_closed' ${
          props.isOpen
            ? 'header__nav-button_closed'
            : 'header__nav-mobile-button_open'
        }`}
        onClick={props.onClose}
      ></button>
    </header>
  );
}

export default Header;
