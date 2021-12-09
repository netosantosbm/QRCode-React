import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import QRCodeCanvas from './QRCodeCanvas';

function App() {
  const [text, setText] = useState("")
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input onChange={(element) => { setText(element.target.value)}}></input>  
        <QRCodeCanvas text={text}></QRCodeCanvas>
      </header>
      
    </div>
  );
}

export default App;
