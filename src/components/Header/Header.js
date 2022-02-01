import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/NewsExplorer.svg';
import logout from '../../images/logout.png';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Header(props) {
  const currentUser = useContext(CurrentUserContext);

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
        {props.isLoggedIn ? (
          <li>
            <Link className='header__nav-link' to='/saved-articles'>
              Saved articles
            </Link>
          </li>
        ) : (
          ''
        )}

        <li>
          {props.isLoggedIn ? (
            <button className='header__nav-button_light' type='button'>
              {currentUser.name}
              <img
                className='header__logout-image'
                src={logout}
                alt='logout-button'
                onClick={props.logout}
              />
            </button>
          ) : (
            <button
              className='header__nav-button'
              type='button'
              onClick={props.onLoginPopupClick}
            >
              Sign in
            </button>
          )}
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
        className={`'header__nav-mobile-button_closed' ${
          props.isOpen
            ? 'header__nav-mobile-button_closed'
            : 'header__nav-mobile-button_open'
        }`}
        onClick={props.onClose}
      ></button>
    </header>
  );
}

export default Header;
