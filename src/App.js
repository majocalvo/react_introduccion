import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);


  return (
    <div className="App">
      <header className="App-header">
        <h1>Desafío 1 React : Estados</h1>
        <h2 className="App-contador">Contador</h2>
        <h3>Estado actual es: {count} </h3>
        <button className="App-boton"
          onClick={() =>
            setCount((sumar) => {
              if (sumar < 10) {
                return sumar + 1;
              }
              return sumar;
            })
          }
        >
          +
        </button>
        <button className="App-boton"
          onClick={() =>
            setCount((restar) => {
              if (restar > 0) {
                return restar - 1;
              }
              return restar;
            })
          }
        >
          -
        </button>
        <button className="App-boton" onClick={() => setCount(0)}>reset</button>

        <button className="App-boton-link">
          <a className="App-link" href="http://majocalvo.github.io" target="blank">
            {" "}
            Ir a mi web de turismo
          </a>
        </button>
      </header>
    </div>
  );
}

export default App;
