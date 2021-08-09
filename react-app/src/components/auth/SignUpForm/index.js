import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../../store/session';
import  ValidateEmail  from '../../utils'
import './SignUpForm.css';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    let newErrors = []

    if (!ValidateEmail(email)) {
      newErrors.push('Please provide a valid email address')
    }

    if(username.length < 1) {
      newErrors.push('Please provide a valid username')
    } 
    else if(username.length > 15) {
      newErrors.push('Please provide a valid username no longer than 15 characters')
    } 

    if (password.length < 6) {
      newErrors.push('Please provide a password longer than 6 characters')
    }

    if(!newErrors.length) {

        const data = await dispatch(signUp(username, email, password));
          if (data?.errors) {
            setErrors(data?.errors)
          }
    }
    else {
      setErrors(newErrors)
    }
    // if (password === repeatPassword) {
    // }
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

  return (
    <form className='signUpForm-container' onSubmit={onSignUp}>
      <h2>Sign up for TikTok</h2>
      <div className="form-errors">
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
        <br></br>
      </div> 
      <div>
        <label>User Name</label>
        <input
          type='text'
          name='username'
          onChange={updateUsername}
          value={username}
        ></input>
      </div>
      <div>
        <label>Email</label>
        <input
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div>
        <label>Password</label>
        <input
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div>
        <label>Repeat Password</label>
        <input
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <button type='submit'>Sign Up</button>
    </form>
  );
};

export default SignUpForm;
