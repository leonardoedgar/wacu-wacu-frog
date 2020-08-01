import React from 'react';
import './TitleBar.css'

const TitleBar = () => {
  return (
    <div className="title-bar">
      <img src="./images/frog-icon.png" alt="wacu-wacu-logo" className="frog-icon"/>
      <img src="./images/frog-text.png" alt="wacu-wacu-text" className="frog-text"/>
    </div>
  );
};

export default TitleBar;