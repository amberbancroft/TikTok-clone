import React, { useState } from 'react';
import { Modal } from '../../../context';
import SignUpForm from '../SignUpForm';

const SignUpFormModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick= { () => setShowModal(true) } style={{cursor: 'pointer'}}> Sign Up </button>
      { showModal && (
        <Modal onClose= { () => setShowModal(false) }>
          <SignUpForm setShowModal= { setShowModal }/>
        </Modal>
      )}
    </>
  )
};

export default SignUpFormModal