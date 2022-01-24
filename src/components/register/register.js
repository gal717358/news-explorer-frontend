import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Register(props) {
  return (
    <PopupWithForm
      name='register'
      title='Sign Up'
      isOpen={props.isOpen}
      buttonTitle='Sign Up'
      linkTitle='Sign In'
      onClose={props.isClose}
      switch={props.onSwitchClick}
    >
      <label className='user-form__input-label'>Email</label>
      <input
        className='user-form__input'
        type='text'
        name='email'
        id='email-register'
        placeholder='Enter email'
        minLength={2}
        maxLength={30}
        required
        onChange={props.handleChange}
      />
      <label className='user-form__input-label'>Password</label>
      <input
        className='user-form__input'
        type='password'
        name='Password'
        id='password-register'
        placeholder='Enter password'
        minLength={2}
        maxLength={30}
        required
        onChange={props.handleChange}
      />
      <label className='user-form__input-label'>Username</label>
      <input
        className='user-form__input'
        type='text'
        name='username'
        id='username-register'
        placeholder='Enter username'
        minLength={2}
        maxLength={30}
        required
        onChange={props.handleChange}
      />
    </PopupWithForm>
  );
}

export default Register;
