import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../../store/session';
import { login } from '../../../store/session'
import SignUpFormModal from '../SignUpForm/SignUpFormModal';
import CancelIcon from '@material-ui/icons/Cancel';
import './LoginForm.css';
import '../Modal.css'


const LoginForm = ( { setShowModal } ) => {
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

  const Btn = () => {
    if (email && password) {
      return <button style={{backgroundColor:'rgb(255, 0, 80)', color: 'white'}} id= 'login--button' className= 'modal--button' type= 'submit'> Log In </button>
    } else {
      return <button disabled > Log In </button>
    }
  }

  return (
    <>
    <form className= 'modal--container' onSubmit= { handleSubmit }>

      <CancelIcon onClick = { () => setShowModal(false)} className= 'modal--cancel--icon'></CancelIcon>

      <h2 className= 'modal--header'> Log in </h2>

      <div>
        <input
          className= 'modal--input'
          type= 'text'
          placeholder= 'Email'
          value= { email }
          onChange={ (e) => setEmail(e.target.value) }
        />
      </div>

      <div>
        <input
          className= 'modal--input'
          type= 'password'
          placeholder= 'Password' 
          value= { password }
          onChange= { (e) => setPassword(e.target.value)}
        />
      </div>

      <div className= 'modal--button--container'>
        <Btn/>
        {/* <button  id= 'login--button' className= 'modal--button' disabled={!!errors.length} type= 'submit'> Log In </button> */}
        <button  className= 'modal--button' onClick= { () => demoLogin() }> Demo User </button>
      </div>

      <div className= 'modal--form--errors'>
        { errors.map( (error, idx) => <div key= { idx } > { error } </div>) } 
      </div>

      <hr className= 'modal--footer--divider'></hr>
    </form>

      <div className= 'modal--footer--container'>
        <h4 className= 'modal--footer--account'> Don't have an account? </h4>
        {/* Ask a TA on how to close modal */}
        <SignUpFormModal onClick = { () => setShowModal(false) }  className= 'modal--other--link' > Sign Up </SignUpFormModal>
      </div>

    </>
  );
};

export default LoginForm