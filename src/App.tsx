import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonCounter from './components/ButtonCounter';



function App() {
  const [count, setCount] = useState(0);

  function increaseCounter() {
    setCount(count + 1);
  }

  function decreaseCounter() {
    if (count > 0) {
        setCount(count - 1);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <ButtonCounter increaseCounter={increaseCounter} decreaseCounter={decreaseCounter} count={count}/>
        </p>
      </header>
    </div>
  );
}

export default App;
