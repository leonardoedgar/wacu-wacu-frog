import React from 'react';
import ReactModal from 'react-modal';
import "./ModalWindow.css";

const ModalWindow = ({isOpen, title, children}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      className="modal"
      overlayClassName="modal-overlay"
    >
      <div className="modal-title modal-font">{title}</div>
      <div className="modal-content modal-font">{children}</div>
    </ReactModal>
  )
};

export default ModalWindow;