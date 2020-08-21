import React from 'react';
import {Link} from 'react-router-dom';
import './TaskPanel.css';

const TaskPanel = () => {
  return (
    <div className="task-panel">
      <div style={{display: "flex"}}>
        <Link to="/task/create" style={{textDecoration: 'none'}}>
          <button className="task-panel-btn" id="create-btn">create</button>
        </Link>
        <Link to="/task/delete" style={{textDecoration: 'none'}}>
          <button className="task-panel-btn" id="delete-btn">delete</button>
        </Link>
      </div>
      <div className="task-list">
        task 1
      </div>
    </div>
  );
};

export default TaskPanel;