import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../../store/session';
import { login } from '../../../store/session'
import './LoginForm.css';


const LoginForm = () => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);

    const data = await dispatch(login(email, password))
    if (data) { 
      setErrors(data)
    }
  };

  const demoLogin = () => {
    setEmail('demo@aa.io');
    setPassword('password');
    return dispatch(sessionActions.login(email, password))
  };

  return (
    <form className= 'form-container' onSubmit= { handleSubmit }>
      <ul className= 'form-errors'>
        { errors.map( (error, idx) => <li key= { idx } > { error } </li>) } 
      </ul>

      <h2> Log in </h2>

      <div className= 'login--element--container'>
        <input
          className= 'login--element'
          type= 'text'
          placeholder= 'Email'
          value= { email }
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className= 'login--element--container'>
        <input
          className= 'login--element'
          type= 'password'
          placeholder= 'Password' 
          value= { password }
          onChange= { (e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button  type= 'submit' > Log In </button>

      <button  onClick= { () => demoLogin() }> Demo User </button>

      <hr id='poop'></hr>

      <div className= 'footer--container'>
        <h4> Don't have an account? </h4>
        <button> Sign Up </button>
      </div>

    </form>
  );
};

export default LoginForm