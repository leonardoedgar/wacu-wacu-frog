import React from 'react';
import {Link} from 'react-router-dom';
import './NavigationBar.css';
import {controlBtnClicked, taskBtnActive} from './Assets';

const NavigationBar = () => {
  return (
    <div className="navigation-bar">
      <Link to="/">
        <img
          src={controlBtnClicked}
          alt="control-button"
          className="control-button"
        />
      </Link>
      <Link to="/task">
        <img
          src={taskBtnActive}
          alt="task-button"
          className="task-button"
        />
      </Link>
    </div>
  );
};

export default NavigationBar;
