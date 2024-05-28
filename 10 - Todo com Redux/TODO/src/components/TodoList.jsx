import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toogleTodo, removeTodo, filterTodo } from "../slices/todoSlice";

function TodoList() {
  const { list, filter } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const filteredList = list.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "completed") return todo.completed;
    if (filter === "incomplete") return !todo.completed;
  });
  return (
    <div>
      <button onClick={() => dispatch(filterTodo("all"))}>Todas</button>
      <button onClick={() => dispatch(filterTodo("completed"))}>
        Completas
      </button>
      <button onClick={() => dispatch(filterTodo("incomplete"))}>
        Incompletas
      </button>
      <ul>
        {filteredList.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() => dispatch(toogleTodo(todo.id))}
              className={todo.completed ? "line-through" : null}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
