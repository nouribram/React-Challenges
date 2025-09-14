import React, { useState } from "react";
import "./App.css";


function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if(!input.trim()) return;
    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };


  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      <div className="input-section">
        <input 
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new todo"
        />
        <button onClick={addTodo}>Add</button>
      </div>


      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;