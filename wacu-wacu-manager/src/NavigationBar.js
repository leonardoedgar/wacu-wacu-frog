import React from 'react';
import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <div className="navigation-bar">
      <img src="./images/control-button-clicked.png" alt="control button" className="control-button"/>
      <img src="./images/task-button-active.png" alt="task-button" className="task-button"/>
    </div>
  );
};

export default NavigationBar;
