import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/NewsExplorer.svg';

function Header(props) {
  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__logo' src={logo} alt='header__logo' />
      </Link>
      <div className='header__nav'>
        <Link className='header__nav-link' to='/'>
          Home
        </Link>
        <Link className='header__nav-link' to='/saved-articles'> Saved articles </Link>
        <button
          className='header__nav-button'
          type='button'
          onClick={props.onLoginPopupClick}
        >
          Sign in
        </button>
      </div>
      <button
        type='button'
        className={`'header__nav_mobile-button' ${
          props.isOpen
            ? 'header__nav_mobile-button_open'
            : 'header__nav_mobile-button'
        }`}
        onClick={props.onMobileMenuClick}
      ></button>
      <button
        type='button'
        className={`'header__nav-button_closed' ${
          props.isOpen
            ? 'header__nav-button_closed'
            : 'header__nav_mobile-button_open'
        }`}
        onClick={props.onClose}
      ></button>
    </header>
  );
}

export default Header;
