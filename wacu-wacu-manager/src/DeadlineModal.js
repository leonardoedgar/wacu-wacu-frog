import React from 'react';
import  './DeadlineModal.css';
import ModalWindow from "./ModalWindow";

const DeadlineModal = ({isOpen, setModalOpen, selectedDate}) => {
  return (
    <ModalWindow
      isOpen={isOpen}
      title="deadline"
    >
      <div>
        <span>Date:</span>
        <span style={{margin: "0 0 0 50px"}}>{selectedDate}</span>
      </div>
        <div style={{display: "flex", margin: "20px 0 0 0"}}>
          <div>Time: </div>
          <input type="text" className="deadline-modal-textbox modal-font" placeholder="hh:mm"/>
          <select
            className="deadline-modal-dropdown-list modal-font"
            name="time"
            onChange={(event) => console.log(event.target.value)}>
            <option key="am" value="am">am</option>
            <option key="pm" value="pm">pm</option>
          </select>
        </div>
        <div style={{margin: "146px 0 0 0"}}>
          <button
            className="modal-font modal-button"
            onClick={() => setModalOpen(false)}
          >cancel</button>
          <button
            className="modal-font modal-button deadline-modal-set-btn"
            onClick={() => setModalOpen(false)}
          >set</button>
        </div>
    </ModalWindow>
  )
};

export default DeadlineModal;