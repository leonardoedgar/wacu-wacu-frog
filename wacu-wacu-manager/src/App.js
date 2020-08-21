import React from 'react';
import io from 'socket.io-client';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import TitleBar from "./TitleBar";
import NavigationBar from "./NavigationBar";
import ControlPanel from "./ControlPanel";
import TaskPanel from "./TaskPanel";
import TaskCreatorPanel from "./TaskCreatorPanel";

const socket = io();

const App = () => {
  return (
    <div className="app">
      <TitleBar/>
      <BrowserRouter>
        <Route exact path="/" component={() =>
          <span>
            <NavigationBar/>
            <ControlPanel/>
          </span>
        }/>
        <Route exact path="/task" component={() =>
          <span>
            <NavigationBar/>
            <TaskPanel/>
          </span>
        }/>
        <Route exact path="/task/create" component={() =>
          <span>
            <TaskCreatorPanel/>
          </span>
        }/>
        <Route exact path="/task/delete" component={() =>
          <span>
            <NavigationBar/>
            <TaskPanel/>
            Delete
          </span>
        }/>
      </BrowserRouter>
      {/*<div>*/}
      {/*  <button onClick={() => socket.emit('addCounter')*/}
      {/*  }>add counter</button>*/}
      {/*</div>*/}
    </div>
  );
}

export default App;
