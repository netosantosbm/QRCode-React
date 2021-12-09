import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import QRCodeCanvas from './QRCodeCanvas';

function App() {
  const [text, setText] = useState("")
  return (
    
    <div className="App">
        <form>
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Gerador de QR-Code</h3>
        <input onChange={(element) => { setText(element.target.value)}}></input>  
        
        </form>
        <div className="Container">
        <QRCodeCanvas  text={text}></QRCodeCanvas>
        </div>
      </div>
  );
}

export default App;
