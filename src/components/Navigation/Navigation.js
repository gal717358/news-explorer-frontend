import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/NewsExplorer-black.svg';
import logout from '../../images/logout-button.svg';

function Navigation(props) {
  return (
    <div className='navigation'>
      <img className='header__logo' src={logo} alt='header__logo' />
      <div className='header__nav'>
        <Link className='navigation__nav-link' to='/'>
          Home
        </Link>
        <Link className='navigation__nav-link' to='/saved-articles'>
          Saved articles
        </Link>

        <div className='navigation__user-bar'>
          <button className='navigation__nav-button' type='button'>
            Elise
            <img
              className='navigation__logout-image'
              src={logout}
              alt='logout-button'
            />
          </button>
        </div>
      </div>
      <button
        type='button'
        className={`'header__nav_mobile-button_dark' ${
          props.isOpen
            ? 'header__nav_mobile-button_open'
            : 'header__nav_mobile-button_dark'
        }`}
        onClick={props.onMobileMenuClick}
      ></button>
      <button
        type='button'
        className={`'header__nav-button_closed' ${
          props.isOpen
            ? 'header__nav-button_closed_dark'
            : 'header__nav_mobile-button_open'
        }`}
        onClick={props.onClose}
      ></button>
    </div>
  );
}

export default Navigation;
