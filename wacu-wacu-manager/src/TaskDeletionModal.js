import React from 'react';
import ModalWindow from "./ModalWindow";
import "./TaskDeletionModal.css";


const TaskDeletionModal = ({isOpen, setModalOpen}) => {
  return (
    <ModalWindow
      isOpen={isOpen}
      title="Are you sure?"
    >
      <div style={{margin: "0 0 0 -146px", "text-align": "center", color: "#acacac"}}>
        Do you really want to delete this task? This process cannot be undone
      </div>
      <div style={{margin: "100px 0 0 0"}}>
        <button
          className="modal-button modal-font"
          onClick={() => setModalOpen(false)}
        >cancel</button>
        <button
          className="modal-font modal-button deletion-modal-cancel-btn"
          onClick={() => setModalOpen(false)}
        >delete</button>
      </div>
    </ModalWindow>
  )
};

export default TaskDeletionModal;