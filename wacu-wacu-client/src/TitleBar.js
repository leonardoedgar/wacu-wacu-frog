import React from 'react';
import './TitleBar.css'
import {frogIcon, frogText} from './Assets';

const TitleBar = () => {
  return (
    <div className="title-bar">
      <img src={frogIcon} alt="wacu-wacu-logo" className="frog-icon"/>
      <img src={frogText} alt="wacu-wacu-text" className="frog-text"/>
    </div>
  );
};

export default TitleBar;