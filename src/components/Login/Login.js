import { useState, useEffect } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Login(props) {
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errors = {};
    if (!props.values.email) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(props.values.email)) {
      errors.email = 'Email address is invalid';
    }

    if (!props.values.password) {
      errors.password = 'Password is required';
    } else if (props.values.password.length < 4) {
      errors.password = 'Password need to be more then 4 characters';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(props.values));
    setIsSubmitted(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitted) {
      props.onSubmit();
    }
  }, [errors, isSubmitted, props]);

  return (
    <PopupWithForm
      name='login'
      title='Sign In'
      buttonTitle='Sign in'
      linkTitle='Sign up'
      isOpen={props.isOpen}
      onClose={props.isClose}
      switch={props.onSwitchClick}
      onSubmit={handleSubmit}
    >
      <label className='user-form__input-label'>Email</label>
      <input
        className='user-form__input'
        type='text'
        name='email'
        id='email-login'
        placeholder='Enter email'
        onChange={props.handleChange}
        value={props.values.email}
      />
      {errors.email && (
        <p style={{ fontSize: 13, margin: '0px 0px 10px', color: 'red' }}>
          {errors.email}
        </p>
      )}
      <label className='user-form__input-label'>Password</label>
      <input
        className='user-form__input'
        type='password'
        name='password'
        id='password-login'
        placeholder='Enter password'
        value={props.values.password}
        onChange={props.handleChange}
      />
      {errors.password && (
        <p style={{ fontSize: 13, margin: '0px 0px 10px', color: 'red' }}>
          {errors.password}
        </p>
      )}
    </PopupWithForm>
  );
}

export default Login;
