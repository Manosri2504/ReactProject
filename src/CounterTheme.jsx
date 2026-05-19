import React, { useState } from "react";
import "./CounterTheme.css";

function CounterTheme() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "container dark" : "container light"}>
      <div className="card">

        <h1>Counter & Theme Toggle</h1>

        <h2>{count}</h2>

        <div className="buttons">
          <button onClick={() => setCount(count + 1)}>
            Increment
          </button>

          <button onClick={() => setCount(count - 1)}>
            Decrement
          </button>

          <button onClick={() => setCount(0)}>
            Reset
          </button>
        </div>

        <button
          className="themeBtn"
          onClick={() => setDarkMode(!darkMode)}
        >
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </button>

      </div>
    </div>
  );
}

export default CounterTheme;