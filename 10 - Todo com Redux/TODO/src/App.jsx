import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="container">
      <h1>Lista de tarefas</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
