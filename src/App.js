import React from "react";
import "./App.css";
import { TodoApp } from "./ToDo";

function App() {
  return (
    <div className="App">
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <TodoApp />
    </div>
  );
}

export default App;
