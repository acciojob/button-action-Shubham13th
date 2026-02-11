import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [state, setState] = useState(false);


  const handleClick = () => {
    setState(true);

  }
  return (
    <div className="App" id="main">
      <p id="para" className={state ? "show" : "hide"}>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
      <button id="click" onClick={handleClick}>click</button>
    </div>
  );
}

export default App
