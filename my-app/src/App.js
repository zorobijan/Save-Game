import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import PacmanLoader from "react-spinners/PacmanLoader";


function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 6000)
  }, [])
  return (
    <div className="App">
      {loading ? (

        <ClipLoader color={"#36d7b7"} loading={loading} size={100} />

  ): (

      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      )
}</div>
  );
}

export default App;
