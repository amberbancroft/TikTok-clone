import React, { useState } from 'react';
import { Modal } from '../../../context';
import LoginForm from '../LoginForm';

const LoginFormModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick= { () => setShowModal(true) } id= 'official--login--button' style={{cursor: 'pointer', background: 'rgb(255, 0, 80)'}}> Log In </button>
      { showModal && (
        <Modal onClose= { () => setShowModal(false) }>
          <LoginForm setShowModal= { setShowModal }/>
        </Modal>
      )}
    </>
  )
};

export default LoginFormModal
