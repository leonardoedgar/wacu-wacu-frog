import React from 'react';
import io from 'socket.io-client';
import './App.css';
import TitleBar from "./TitleBar";
import NavigationBar from "./NavigationBar";
import ControlPanel from "./ControlPanel";

const socket = io();

const App = () => {
  return (
    <div className="app">
      <TitleBar/>
      <NavigationBar/>
      <ControlPanel/>
      <div>
        <button onClick={() => socket.emit('addCounter')
        }>add counter</button>
      </div>
    </div>
  );
}

export default App;
