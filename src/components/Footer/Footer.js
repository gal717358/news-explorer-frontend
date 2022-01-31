import { Link } from 'react-router-dom';
import githubIcon from '../../images/github-icon.svg';
import facebookIcon from '../../images/facebook-icon.svg';
function Footer() {
  return (
    <div className='footer'>
      <div className='footer__container'>
        <div className='footer__links'>
          <ul className='footer__nav'>
            <li>
              <Link className='footer__link' to='/'>
                Home
              </Link>
            </li>
            <li>
              <a
                href='https://practicum.yandex.com'
                className='footer__link'
                target='blank'
              >
                Practicum by Yandex
              </a>
            </li>
          </ul>
          <ul className='footer__social-icons'>
            <li>
              <a href='https://github.com/gal717358' target='blank'>
                <img src={githubIcon} alt='github-icon' />
              </a>
            </li>
            <li>
              <a href='https://www.facebook.com/gal.buzaglo.7' target='blank'>
                <img src={facebookIcon} alt='github-icon' />
              </a>
            </li>
          </ul>
        </div>
        <p className='footer__copyright'>
          © {new Date().getFullYear()} News-explorer, Powered by Gal Buzaglo
        </p>
      </div>
    </div>
  );
}

export default Footer;
