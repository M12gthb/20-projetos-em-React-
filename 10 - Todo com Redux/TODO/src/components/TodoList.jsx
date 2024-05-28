import React from "react";
import { useDispatch, useSelector } from "react-redux";

function TodoList() {
  const { list, filter } = useSelector((state) => state.todos);
  return (
    <div>
      <button>Todas</button>
      <button>Completas</button>
      <button>Incompletas</button>
      <ul>
        {list.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
