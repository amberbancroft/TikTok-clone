import React, { useState } from 'react';
import { Modal } from '../../context';
import UploadForm from '../Upload/index';
import upload from '../NavBar/images/upload.png'

function UploadFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>
        <img data-bs-toggle="tooltip" data-bs-placement="bottom" title="upload" src={upload} className="navbar-icon" alt="homepageUpload"></img>
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <UploadForm />
        </Modal>
      )}
    </>
  );
}

export default UploadFormModal;