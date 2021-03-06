import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Calendar from 'react-calendar';
import {completeBtnIcon, backBtnIcon} from './Assets';
import "./TaskCreatorPanel.css";
import 'react-calendar/dist/Calendar.css';
import "./Calendar.css";
import DeadlineModal from "./DeadlineModal";


const TaskCreatorPanel = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <div className="task-creator-panel">
      <div className="task-creator-title-bar task-creator-label">create new task</div>
      <div className="name-bar">
        <div className="name-label task-creator-label">name</div>
        <input type="text" className="task-creator-textbox"/>
      </div>
      <div className="task-bar">
        <div className="task-label task-creator-label">task</div>
        <input type="text" className="task-creator-textbox" width="3000px"/>
      </div>
      <div className="deadline-bar">
        <div className="deadline-label task-creator-label">deadline</div>
        <div style={{margin: "0 0 0 58px"}}>
          <Calendar
            onChange={(date, event) => {
              setSelectedDate(date)
              setModalOpen(true);
            }}
          value={selectedDate}
        />
        </div>
      </div>
      <div style={{margin: "100px 0 0 100px"}}>
        <Link to="/task">
          <img
            src={backBtnIcon}
            className="task-creator-btn back-btn"
            alt="back-button"/>
        </Link>
        <Link to="/task">
          <img
            src={completeBtnIcon}
            className="task-creator-btn complete-btn"
            alt="complete-button"/>
        </Link>
      </div>
      <div>
      <DeadlineModal
        isOpen={isModalOpen}
        setModalOpen={setModalOpen}
        selectedDate={selectedDate.toDateString()}
      >
      </DeadlineModal>
      </div>
    </div>
  )
};

export default TaskCreatorPanel;