import React from 'react';
import './ControlPanel.css';

const ControlPanel = () => {
  return (
    <div className="control-panel">
      <div>
        <img src="./images/arrow-up.png" alt="arrow-up-icon" className="arrow" id="vertical-arrow"/>
      </div>
      <div style={{display: "flex"}}>
        <img src="./images/arrow-left.png" alt="left-arrow-icon" className="arrow" id="left-arrow"/>
        <img src="./images/arrow-right.png" alt="right-arrow-icon" className="arrow" id="right-arrow"/>
      </div>
      <div>
        <img src="./images/arrow-down.png" alt="arrow-down-icon" className="arrow" id="vertical-arrow"/>
      </div>
    </div>
  );
};

export default ControlPanel;