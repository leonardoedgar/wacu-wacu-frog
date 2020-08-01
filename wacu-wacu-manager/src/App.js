import React from 'react';
import './App.css';
import io from 'socket.io-client';
const socket = io();

function App() {
  return (
    <div>
      <button onClick={() => socket.emit('addCounter')
      }>add counter</button>
    </div>
  );
}

export default App;
