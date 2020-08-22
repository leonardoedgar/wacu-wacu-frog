import React from 'react';
import ReactModal from 'react-modal';
import  './DeadlineModal.css';

const DeadlineModal = ({isOpen, setModalOpen, selectedDate}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      className="deadline-modal"
      overlayClassName="deadline-modal-overlay"
    >
      <div className="deadline-modal-title">deadline</div>
      <div className="deadline-modal-content">
        <div>
          <span>Date:</span>
          <span style={{margin: "0 0 0 50px"}}>{selectedDate}</span>
        </div>
        <div style={{display: "flex", margin: "20px 0 0 0"}}>
          <div>Time: </div>
          <input type="text" className="deadline-modal-textbox deadline-modal-font" placeholder="hh:mm"/>
          <select
            className="deadline-modal-dropdown-list deadline-modal-font"
            name="time"
            onChange={(event) => console.log(event.target.value)}>
            <option key="am" value="am">am</option>
            <option key="pm" value="pm">pm</option>
          </select>
        </div>
        <div style={{margin: "146px 0 0 0"}}>
          <button
            className="deadline-modal-button deadline-modal-font"
            onClick={() => setModalOpen(false)}
          >cancel</button>
          <button
            className="deadline-modal-button deadline-modal-font deadline-modal-set-btn"
            onClick={() => setModalOpen(false)}
          >set</button>
        </div>
      </div>
    </ReactModal>
  )
};

export default DeadlineModal;