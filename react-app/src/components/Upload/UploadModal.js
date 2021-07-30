import React, { useState } from 'react';
import { Modal } from '../../context';
import UploadForm from '../Upload/index';

function UploadFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Upload</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <UploadForm />
        </Modal>
      )}
    </>
  );
}

export default UploadFormModal;