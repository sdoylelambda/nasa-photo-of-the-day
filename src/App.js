import React from "react";
import "./App.css";
import Nasa from './components/api/Nasa'
import Api from './components/api'

function App() {
  return (
    <div className="App">
      <p>
        <Nasa />
        <Api />
      </p>
    </div>
  );
}

export default App;
