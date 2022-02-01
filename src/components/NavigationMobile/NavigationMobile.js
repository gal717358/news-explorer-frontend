import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logoutLight from '../../images/logout.png';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';


function NavigationMobile(props) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className='mobile'>
      <div className={`mobile__container ${props.isOpen && 'mobile_opened'}`}>
        <div className='mobile__nav_dark'>
          <Link className='header__nav-link' to='/'>
            Home
          </Link>
          <Link className='header__nav-link' to='/saved-articles'>
            Saved articles
          </Link>
          <button className='navigation__nav-button_dark' type='button'>
          {currentUser.name}
            <img
              className='navigation__logout-image_dark'
              src={logoutLight}
              alt='logout-button'
              onClick={props.logout}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavigationMobile;
