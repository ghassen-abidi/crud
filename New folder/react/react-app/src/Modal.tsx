import React from 'react'

function Modal({ show, children, onClose }: any) {

  if (!show) return null;
  return (
    <>
      <div className="overlay" onClick={onClose}></div>
      <div className="modal-body">
        <button onClick={onClose} className='x-close'>X</button>
        <div>
        {children}
        </div>
        </div>
    </>
  );
}

export default Modal
