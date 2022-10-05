import React, { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);

  function Sumar() {
    setCount((sumar) => {
      if (sumar < 10) {
        return sumar + 1;
      }
      return sumar;
    });
  }

  function Restar() {
    setCount((restar) => {
        if (restar > 0) {
          return restar - 1;
        }
        return restar;
      });
  }

  function Reset() {
    setCount(0);
  }

  return (
    <div>
      <h3>Estado actual es: {count} </h3>
      <button className="App-boton" onClick={Sumar}> + </button>
      <button
        className="App-boton"
        onClick={Restar} > - </button>
      <button
        className="App-boton"
        onClick={Reset} > reset </button>

      <button className="App-boton-link">
        <a
          className="App-link"
          href="https://www.instagram.com/tangerine_ink/"
          target="blank"
        >
          {" "}
          Ir a mi instagram
        </a>
      </button>
    </div>
  );
}

export default Count;
