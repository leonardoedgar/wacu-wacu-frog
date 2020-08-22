import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './TaskPanel.css';
import DeadlineModal from "./DeadlineModal";
import TaskDeletionModal from "./TaskDeletionModal";

const TaskPanel = () => {
  const [isDeletionModalOpen, setDeletionModalOpen] = useState(false);
  return (
    <div className="task-panel">
      <div style={{display: "flex"}}>
        <Link to="/task/create" style={{textDecoration: 'none'}}>
          <button className="task-panel-btn" id="create-btn">create</button>
        </Link>
        <button
          className="task-panel-btn"
          id="delete-btn"
          onClick={() => setDeletionModalOpen(true)}
        >delete</button>
      </div>
      <div className="task-list">
        task 1
      </div>
      <TaskDeletionModal
        isOpen={isDeletionModalOpen}
        setModalOpen={setDeletionModalOpen}
      />
    </div>
  );
};

export default TaskPanel;