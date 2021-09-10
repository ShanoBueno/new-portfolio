import React from 'react'

function Modal() {

  return (
    <div className="modalBackdrop">
      <div className="modalContainer">
        <p>
          Photo Description
        </p>
        <button type="button">
          Close this modal
        </button>
      </div>
    </div>
  );
}

export default Modal;