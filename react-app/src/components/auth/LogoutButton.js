import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import logout_icon from '../NavBar/images/logout.png';

const LogoutButton = () => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  return (
    <button onClick= { onLogout }>
      <img src= { logout_icon } id='logout_icon' alt= 'Logout_icon'></img>
    </button>
  )
};

export default LogoutButton