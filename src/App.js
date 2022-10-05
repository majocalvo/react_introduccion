import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Count from "./components/Count";
import Title from "./components/Title";
import Home from "./components/Home";


function App() {


  return (
    <div className="App">
      <header className="App-header">
       <Home/>
      </header>
    </div>
  );
}

export default App;
