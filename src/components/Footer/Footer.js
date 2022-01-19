import { Link } from 'react-router-dom';
import githubIcon from '../../images/github-icon.svg';
import facebookIcon from '../../images/facebook-icon.svg';
function Footer() {
  return (
    <div className='footer'>
      <div className='footer__container'>
        <div className='footer__links'>
          <div className='footer__nav'>
            <Link className='footer__link' to='/'>
              Home
            </Link>
            <a href='https://practicum.yandex.com' className='footer__link'>
              Practicum by Yandex
            </a>
          </div>
          <div className='footer__social-icons'>
            <a href='https://github.com/gal717358'>
              <img src={githubIcon} alt='github-icon' />
            </a>
            <a href='https://www.facebook.com/gal.buzaglo.7'>
              <img src={facebookIcon} alt='github-icon' />
            </a>
          </div>
        </div>
        <p className='footer__copyright'>
          © 2021 News-explorer, Powered by Gal Buzaglo
        </p>
      </div>
    </div>
  );
}

export default Footer;
