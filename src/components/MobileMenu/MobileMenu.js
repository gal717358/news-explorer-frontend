import { Link } from 'react-router-dom';

function MobileMenu(props) {
  return (
    // <div className={'mobile__container mobile_opened'}>
    <div className={`mobile__container ${props.isOpen && 'mobile_opened'}`}>
      <div className='mobile__nav'>
        <Link className='header__nav-link' to='/'>
          Home
        </Link>
        <button
          className='header__nav-button'
          type='button'
          onClick={props.onLoginPopupClick}
        >
          Sign in
        </button>
      </div>
    </div>
  );
}

export default MobileMenu;
