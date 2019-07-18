import React from "react";
import "./App.css";
import Nasa from './components/api/Nasa'
import Api from './components/api/Api'

function App() {
  return (
    <div className="App">
      <p>
        <Nasa limit={10} />
        <Api limit={10}/>
      </p>
    </div>
  );
}

export default App;
