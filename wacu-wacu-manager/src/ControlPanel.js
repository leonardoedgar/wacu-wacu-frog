import React from 'react';
import './ControlPanel.css';
import {arrowUpIcon, arrowLeftIcon, arrowRightIcon, arrowDownIcon} from './Assets';

const ControlPanel = () => {
  return (
    <div className="control-panel">
      <div>
        <img src={arrowUpIcon} alt="arrow-up-icon" className="arrow" id="vertical-arrow"/>
      </div>
      <div style={{display: "flex"}}>
        <img src={arrowLeftIcon} alt="left-arrow-icon" className="arrow" id="left-arrow"/>
        <img src={arrowRightIcon} alt="right-arrow-icon" className="arrow" id="right-arrow"/>
      </div>
      <div>
        <img src={arrowDownIcon} alt="arrow-down-icon" className="arrow" id="vertical-arrow"/>
      </div>
    </div>
  );
};

export default ControlPanel;