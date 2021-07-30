import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../../store/session';

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
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
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

  return (
    <form onSubmit={onSignUp}>
      <h2>Sign up for TikTok</h2>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
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


// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux'
// import { useHistory } from 'react-router-dom';
// import { signUp } from '../../../store/session';
// import './SignUpForm.css';

// const SignUpForm = () => {
//     const dispatch = useDispatch();
//     const history = useHistory();
//     const [errors, setErrors] = useState([]);
//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [repeatPassword, setRepeatPassword] = useState('');
//     const user = useSelector(state => state.session.user);

//     const onSignUp = async (e) => {
//         e.preventDefault();
//         if (password === repeatPassword) {
//             const data = await dispatch(signUp(username, email, password));

//             if (data?.errors) {
//                 setErrors(data?.errors)
//             }
//         }
//     };


//     if (user) {
//         return history.push('/');
//     }

//     return (
//         <form className='signUpForm-container' onSubmit={onSignUp}>
//             <ul className="form-errors">
//                 {errors?.map((error, ind) => <li key={ind}>{error}</li>)}
//             </ul>
//             <h2>Welcome to Table For Two!</h2>
//             <div className="signUpForm--element--container">
//                 <input
//                     className="signUpForm--element"
//                     name='username'
//                     type='text'
//                     placeholder='Username *'
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     required
//                 ></input>
//             </div>
//             <div className="signUpForm--element--container">
//                 <input
//                     className="signUpForm--element"
//                     name='email'
//                     type='text'
//                     placeholder='Email *'
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                 ></input>
//             </div>
//             <div className="signUpForm--element--container">
//                 <input
//                     className="signUpForm--element"
//                     name='password'
//                     type='password'
//                     placeholder='Enter Password *'
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                 ></input>
//             </div>
//             <div className="signUpForm--element--container">
//                 <input
//                     className="signUpForm--element"
//                     name='repeat_password'
//                     type='password'
//                     placeholder='Re-enter Password *'
//                     value={repeatPassword}
//                     onChange={(e) => setRepeatPassword(e.target.value)}
//                     required
//                 ></input>
//             </div>
//             <div className="login__button--container">
//                 <button className="button2" type="submit">Submit</button>
//             </div>
//         </form>
//     );
// };

// export default SignUpForm;
