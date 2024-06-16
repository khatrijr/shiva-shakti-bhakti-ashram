import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>SHIVA SHAKTI BHAKTI ASHRAM.</p>
        <img src={logo as any} className="App-logo" alt="logo" />
        <p className="App-link">Bhojpur, Nepal.</p>
      </header>
    </div>
  );
}

export default App;
