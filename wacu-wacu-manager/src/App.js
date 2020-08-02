import React from 'react';
import io from 'socket.io-client';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import TitleBar from "./TitleBar";
import NavigationBar from "./NavigationBar";
import ControlPanel from "./ControlPanel";
import TaskPanel from "./TaskPanel";

const socket = io();

const App = () => {
  return (
    <div className="app">
      <TitleBar/>
      <BrowserRouter>
      <NavigationBar/>
        <Route exact path="/" component={ControlPanel}/>
        <Route exact path="/task" component={TaskPanel}/>
      </BrowserRouter>
      {/*<div>*/}
      {/*  <button onClick={() => socket.emit('addCounter')*/}
      {/*  }>add counter</button>*/}
      {/*</div>*/}
    </div>
  );
}

export default App;
