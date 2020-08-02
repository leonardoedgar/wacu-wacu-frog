import React from 'react';
import './TaskPanel.css';

const TaskPanel = () => {
  return (
    <div className="task-panel">
      <div style={{display: "flex"}}>
        <button className="task-panel-btn" id="create-btn">create</button>
        <button className="task-panel-btn" id="delete-btn">delete</button>
      </div>
      <div className="task-list">
        task 1
      </div>
    </div>
  );
};

export default TaskPanel;