import React, {useState} from 'react';
import './App.css';
import io from 'socket.io-client';
import TitleBar from "./TitleBar";
import TaskPanel from "./TaskPanel";
const socket = io();

const App = () => {
  // const [counter, setCounter] = useState(-1);
  // socket.on('updateState', (newState) => {
  //   setCounter(newState["counter"])
  // });
  return (
    <div className="app">
      <TitleBar/>
      <TaskPanel/>
      {/*Counter: {counter}*/}
    </div>
  );
}

export default App;
