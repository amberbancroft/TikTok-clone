import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from '../../../store/session';
// import { getUsers } from '../../../store/user';
import LoginFormModal from '../LoginForm/LoginFormModal';
import ValidateEmail from '../../utils';
import CancelIcon from '@material-ui/icons/Cancel';
import './SignUpForm.css';
import '../Modal.css';

const SignUpForm = ({ setShowModal }) => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();


  const onSignUp = async (e) => {
    e.preventDefault();
    setErrors([]);
    let newErrors = []

    if (!ValidateEmail(email)) {
      newErrors.push('Please provide a valid email address')
    }

    if (username.length < 1) {
      newErrors.push('Please provide a valid username')
    }
    else if (username.length > 15) {
      newErrors.push('Please provide a valid username no longer than 15 characters')
    }

    if (password.length < 6) {
      newErrors.push('Please provide a password longer than 6 characters')
    }

    if (password !== repeatPassword) {
      newErrors.push('Please make passwords match')
    }

    if (!newErrors.length) {
      const data = await dispatch(signUp(username, email, password));
      if (data?.errors) {
        setErrors(data?.errors)
      }
    }

    else {
      setErrors(newErrors)
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  const Btn = () => {
    if (username && email && password && repeatPassword) {
      return <button style={{ backgroundColor: 'rgb(255, 0, 80)', color: 'white' }} id='signup--button' className='modal--button' type='submit'> Sign Up </button>
    } else {
      return <button disabled > Sign up </button>
    }
  }

  return (
    <>
      <form className='modal--container' onSubmit={onSignUp}>

        <CancelIcon onClick={() => setShowModal(false)} className='modal--cancel--icon'></CancelIcon>

        <h2 className='modal--header'> Sign up </h2>
        {/* <button onClick={() => console.log(users)}>pop </button> */}
        <div>
          <input
            className='modal--input'
            type='text'
            name='username'
            placeholder='Username'
            onChange={updateUsername}
            value={username}
          ></input>
        </div>

        <div>
          <input
            className='modal--input'
            type='text'
            placeholder='Email'
            onChange={updateEmail}
            value={email}
          ></input>
        </div>

        <div>
          <input
            className='modal--input'
            type='password'
            placeholder='Password'
            onChange={updatePassword}
            value={password}
          ></input>
        </div>

        <div>
          <input
            className='modal--input'
            type='password'
            placeholder='Repeat Password'
            onChange={updateRepeatPassword}
            value={repeatPassword}
          ></input>
        </div>

        <div className='modal--button--container'>
          <Btn />
        </div>

        <div className='modal--form--errors'>
          {errors.map((error, idx) => <div key={idx} > {error} </div>)}
        </div>

        <hr className='modal--footer--divider'></hr>

      </form>

      <div className='modal--footer--container'>
        <h4 className='modal--footer--account'> Have an account? </h4>
        <LoginFormModal onClick={() => setShowModal(false)}  id='signup--modal--link'/>
      </div>

    </>
  );
};

export default SignUpForm