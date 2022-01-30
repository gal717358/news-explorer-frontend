import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logout from '../../images/logout.png';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function MobileMenu(props) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className='mobile'>
      <div className={`mobile__container ${props.isOpen && 'mobile_opened'}`}>
        <div className='mobile__nav'>
          <Link className='mobile__nav-link' to='/'>
            Home
          </Link>
          {props.isLoggedIn ? (
            <Link className='mobile__nav-link' to='/saved-articles'>
              Saved Articles
            </Link>
          ) : (
            ''
          )}

          {props.isLoggedIn ? (
            <button className='mobile__nav-button' type='button'>
              {currentUser.name}
              <img
                className='mobile__logout-image'
                src={logout}
                alt='logout-button'
                onClick={props.logout}
              />
            </button>
          ) : (
            <button
              className='mobile__nav-button'
              type='button'
              onClick={props.onLoginPopupClick}
            >
              Sign in
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
