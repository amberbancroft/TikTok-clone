import React, { useState, useEffect } from 'react';
import { Modal } from '../../context';
import UploadForm from '../Upload/index';
import upload from '../NavBar/images/upload.png';

function UploadFormModal() {
  const [showModal, setShowModal] = useState(false);

  const openMenu = () => {
    if (showModal) return;
    setShowModal(true)
  };

  useEffect(() => {
    if (!showModal) return;

    const menu = () => {
      setShowModal(false)
    }

    return () => document.removeEventListener('click', menu)
  }, [showModal]);

  return (
    <>
      <button onClick= { openMenu }>
        <img 
          data-bs-toggle= 'tooltip' 
          data-bs-placement= 'bottom' 
          title= 'upload' src= { upload } 
          className= 'navbar-icon' 
          alt= 'homepageUpload'
        />
      </button>

      { showModal && (
        <Modal onClose= { () => setShowModal(false) }>
          <UploadForm setShowModal= { setShowModal } />
        </Modal>
      )}
    </>
  )
};

export default UploadFormModal