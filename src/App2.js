import './App.css';
import React from 'react'

fetch('192.168.2.9:8080/topics')
  .then(response => response.json())
  .then(json => console.log(json))

function App2() {
  return (
    <div className="App">
     
    </div>
  );
}
export default App2;
