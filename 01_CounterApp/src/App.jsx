import React, { useState } from "react";
import "./App.css"; 

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));
  const reset = () => setCount(0);

  return (
    <div className="counter-container">
      <div className="counter-box">
        <h1 className="counter-title">Counter</h1>
        <p className="counter-value">{count}</p>
        <div className="buttons">
          <button onClick={decrement} className="btn btn-red">-</button>
          <button onClick={reset} className="btn btn-gray">Reset</button>
          <button onClick={increment} className="btn btn-green">+</button>
        </div>
      </div>
    </div>
  );
};

export default Counter; 
