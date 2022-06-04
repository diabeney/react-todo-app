import React, { useState } from "react";
import Todo from "./Todos";
import TodoForm from "./todoform";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    let ids = [];
    [...todos].forEach((element) => ids.push(element.id));
    let defaultId;
    ids.length ? (defaultId = ids[ids.length - 1] + 1) : (defaultId = 0);
    const item = { text: text, id: defaultId, isComplete: false };
    const newTodos = [...todos, item];
    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos];
    for (let i = 0; i < newTodos.length; i++) {
      newTodos[i].id === id || newTodos[i].isComplete === true
        ? (newTodos[i].isComplete = true)
        : (newTodos[i].isComplete = false);
    }
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos];
    let newArr = newTodos.filter((element) => element.id !== id);
    setTodos(newArr);
  };
  return (
    <div className="hero-section">
      <h2>ToDo List</h2>
      {todos.map((todo, id) => (
        <Todo
          key={id}
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
      ))}
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
