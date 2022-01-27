import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Login(props) {
  return (
    <PopupWithForm
      name='login'
      title='Sign In'
      buttonTitle='Sign in'
      linkTitle='Sign up'
      isOpen={props.isOpen}
      onClose={props.isClose}
      switch={props.onSwitchClick}
    >
      <label className='user-form__input-label'>Email</label>
      <input
        className='user-form__input'
        type='text'
        name='Email'
        id='email-login'
        placeholder='Enter email'
        minLength={2}
        maxLength={30}
        required
      />
      <label className='user-form__input-label'>Password</label>
      <input
        className='user-form__input'
        type='password'
        name='Password'
        id='password-login'
        placeholder='Enter password'
        minLength={2}
        maxLength={30}
        required
      />
    </PopupWithForm>
  );
}

export default Login;
