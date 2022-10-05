import React, { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Estado actual es: {count} </h3>
      <button
        className="App-boton"
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
      <button
        className="App-boton"
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
      <button className="App-boton" onClick={() => setCount(0)}>
        reset
      </button>

      <button className="App-boton-link">
        <a
          className="App-link"
          href="http://majocalvo.github.io"
          target="blank"
        >
          {" "}
          Ir a mi web de turismo
        </a>
      </button>
    </div>
  );
}

export default Count;
