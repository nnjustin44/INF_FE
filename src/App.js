import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./timer.js";
// import * as moment from "moment;"

function App() {
  return (
    <div className="App">
      <title>Intermitant Fasting</title>
      <header className="App-header">
        Intermitant Fasting</header>
      <body className="body">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p className="timer">
         
          <code> Timer</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org" //Change link to databse record
          target="_blank"
          rel="noopener noreferrer"
        >
          Go To Record
        </a>
      </body>
    </div>
  );
}

export default App;
