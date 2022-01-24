import { Link } from 'react-router-dom';

function MobileMenu(props) {
  return (
    <div className='mobile'>
      <div className={`mobile__container ${props.isOpen && 'mobile_opened'}`}>
        <div className='mobile__nav'>
          <Link className='mobile__nav-link' to='/'>
            Home
          </Link>
          <Link className='mobile__nav-link' to='/saved-articles'>
            Saved Articles
          </Link>
          <button
            className='mobile__nav-button'
            type='button'
            onClick={props.onLoginPopupClick}
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
