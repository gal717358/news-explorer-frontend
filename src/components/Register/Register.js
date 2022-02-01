import { useEffect, useState } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Register(props) {
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateLogin = () => {
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

    if (!props.values.name) {
      errors.name = 'Name is required';
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateLogin(props.values));
    setIsSubmitted(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitted) {
      props.onSubmit();
    }
  }, [errors, isSubmitted, props]);

  return (
    <PopupWithForm
      name='register'
      title='Sign Up'
      isOpen={props.isOpen}
      buttonTitle='Sign Up'
      linkTitle='Sign In'
      onClose={props.isClose}
      switch={props.onSwitchClick}
      onSubmit={handleSubmit}
    >
      <label className='user-form__input-label'>Email</label>
      <input
        className='user-form__input'
        type='text'
        name='email'
        id='email-register'
        placeholder='Enter email'
        value={props.values.email}
        onChange={props.handleChange}
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
        id='password-register'
        placeholder='Enter password'
        value={props.values.password}
        onChange={props.handleChange}
      />
      {errors.password && (
        <p style={{ fontSize: 13, margin: '0px 0px 10px', color: 'red' }}>
          {errors.password}
        </p>
      )}
      <label className='user-form__input-label'>Username</label>
      <input
        className='user-form__input'
        type='text'
        name='name'
        id='username-register'
        placeholder='Enter username'
        value={props.values.username}
        onChange={props.handleChange}
      />
      {errors.name && (
        <p style={{ fontSize: 13, margin: '0px 0px 10px', color: 'red' }}>
          {errors.name}
        </p>
      )}
    </PopupWithForm>
  );
}

export default Register;
