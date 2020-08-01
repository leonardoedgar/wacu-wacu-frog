import React, {useState} from 'react';
import './App.css';
import io from 'socket.io-client';
const socket = io();

function App() {
  const [counter, setCounter] = useState(-1);
  socket.on('updateState', (newState) => {
    setCounter(newState["counter"])
  });
  return (
    <div>
      Counter: {counter}
    </div>
  );
}

export default App;
