import { Link } from 'react-router-dom';
import logoutLight from '../../images/logout.png';

function NavigationMobile(props) {
  return (
    <div className={`mobile__container ${props.isOpen && 'mobile_opened'}`}>
      <div className='mobile__nav_dark'>
        <Link className='header__nav-link' to='/'>
          Home
        </Link>
        <Link className='header__nav-link' to='/saved-articles'>
          Saved articles
        </Link>
        <button className='navigation__nav-button_dark' type='button'>
          Elise
          <img
            className='navigation__logout-image_dark'
            src={logoutLight}
            alt='logout-button'
          />
        </button>
      </div>
    </div>
  );
}

export default NavigationMobile;
