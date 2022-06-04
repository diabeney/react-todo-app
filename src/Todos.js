import React from "react";

function Todo({ todo, id, completeTodo, removeTodo }) {
  id = todo.id;
  return (
    <div className="items">
      <li style={{ textDecoration: todo.isComplete ? "line-through" : "" }}>
        {todo.text}
      </li>
      <div className="btn-container">
        <button onClick={() => completeTodo(id)} className="btn">
          Done
        </button>
        <button onClick={() => removeTodo(id)} className="btn btn__x">
          X
        </button>
      </div>
    </div>
  );
}
export default Todo;
