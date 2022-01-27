import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/NewsExplorer-black.svg';
import logout from '../../images/logout-button.svg';

function Navigation(props) {
  const location = useLocation();

  return (
    <div className='navigation'>
      <img className='navigation__logo' src={logo} alt='navigation logo' />
      <ul className='navigation__nav'>
        <li>
          <Link className='navigation__nav-link' to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link
            to='/saved-articles'
            className={
              location.pathname === '/saved-articles'
                ? 'navigation__nav-link_active'
                : 'navigation__nav-link'
            }
          >
            Saved articles
          </Link>
        </li>
        <li>
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
        </li>
      </ul>
      <button
        type='button'
        className={`'header__nav_mobile-button_dark' ${
          props.isOpen
            ? 'header__nav-mobile-button_open'
            : 'header__nav-mobile-button_dark'
        }`}
        onClick={props.onMobileMenuClick}
      ></button>
      <button
        type='button'
        className={`'header__nav-button_closed' ${
          props.isOpen
            ? 'header__nav-button_closed_dark'
            : 'header__nav-mobile-button_open'
        }`}
        onClick={props.onClose}
      ></button>
    </div>
  );
}

export default Navigation;
