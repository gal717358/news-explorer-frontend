import { Link } from 'react-router-dom';

function InfoToolTip(props) {
  return (
    <div className={`user-form ${props.isOpen && 'user-form_opened'} `}>
      <div className='user-form__container'>
        <fieldset className='user-form__fieldset'>
          <h1 className='user-form__title'>
            Registration successfully completed!
          </h1>
          <button
            onClick={props.isClose}
            type='button'
            className='user-form__close-button'
            aria-label='close button'
            name='close button'
          />
          <Link to='/register' className='user-form__switch-link'>
            Sign in
          </Link>
        </fieldset>
      </div>
    </div>
  );
}

export default InfoToolTip;
