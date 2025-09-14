import React, { useState } from "react";
import "./App.css";

const OPS = {
  "+": { p: 1, a: "L" },
  "-": { p: 1, a: "L" },
  "*": { p: 2, a: "L" },
  "/": { p: 2, a: "L" },
  "^": { p: 3, a: "R" },
};

// Convert infix → RPN 
function toRPN(expr) {
  const out = [], stack = [];
  const tokens = expr.match(/\d+(\.\d+)?|[+\-*/^()]|\s+/g)?.filter(t => !t.match(/^\s+$/)) || [];

  for (let t of tokens) {
    if (!isNaN(t)) out.push(t);
    else if (t in OPS) {
      while (stack.length) {
        const top = stack[stack.length - 1];
        if (
          top in OPS &&
          ((OPS[t].a === "L" && OPS[t].p <= OPS[top].p) ||
            (OPS[t].a === "R" && OPS[t].p < OPS[top].p))
        ) {
          out.push(stack.pop());
        } else break;
      }
      stack.push(t);
    } else if (t === "(") stack.push(t);
    else if (t === ")") {
      while (stack.length && stack[stack.length - 1] !== "(") out.push(stack.pop());
      stack.pop();
    }
  }
  return out.concat(stack.reverse());
}

// Evaluate RPN
function evalRPN(rpn) {
  const stack = [];
  for (let t of rpn) {
    if (!isNaN(t)) stack.push(parseFloat(t));
    else {
      const b = stack.pop(), a = stack.pop();
      switch (t) {
        case "+": stack.push(a + b); break;
        case "-": stack.push(a - b); break;
        case "*": stack.push(a * b); break;
        case "/": stack.push(a / b); break;
        case "^": stack.push(a ** b); break;
        default: throw new Error("Unknown operator " + t);
      }
    }
  }
  return stack[0];
}

export default function Calculator() {
  const [expr, setExpr] = useState("");
  const [result, setResult] = useState("");

  const calculate = () => {
    try {
      const rpn = toRPN(expr);
      setResult(evalRPN(rpn).toString());
    } catch {
      setResult("Error");
    }
  };

  const clearAll = () => {
    setExpr("");
    setResult("");
  };

  return (
    <div className="calc-wrapper">
      <div className="calc-container">
        <h2>React Calculator</h2>
        <input
          type="text"
          value={expr}
          onChange={(e) => setExpr(e.target.value)}
          placeholder="Type expression (e.g. 3+5*2)"
        />
        <div className="buttons">
          <button onClick={calculate}>=</button>
          <button className="ac" onClick={clearAll}>AC</button>
        </div>
        <div className="result">{result}</div>
      </div>
    </div>
  );
}
