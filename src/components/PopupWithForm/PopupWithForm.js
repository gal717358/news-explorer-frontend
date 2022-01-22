// import { Link } from 'react-router-dom';

function PopupWithForm(props) {
  return (
    <div
      className={`user-form user-form_type_${props.name} ${
        props.isOpen && 'user-form_opened'
      }`}
    >
      <div className='user-form__container'>
        <button
          onClick={props.onClose}
          type='button'
          className='user-form__close-button'
          aria-label='close button'
          name='close button'
        />
        <form name={`${props.formName}`} /*onSubmit={props.onSubmit}*/>
          <fieldset className='user-form__fieldset'>
            <h2 className='user-form__title'>{`${props.title}`}</h2>
            {props.children}
            <button
              className='user-form__submit-button'
              type='button'
              name='submit-button'
            >
              {`${props.buttonTitle}`}
            </button>
          </fieldset>
        </form>
        <p className='user-form__switch'>
          or
          <button
            type='button'
            aria-label='change button'
            className='user-form__switch-link'
            name='handle Switch'
            onClick={props.switch}
          >
            {`${props.linkTitle}`}
          </button>
        </p>
      </div>
    </div>
  );
}

export default PopupWithForm;
