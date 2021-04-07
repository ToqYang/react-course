import React, { useReducer, useEffect } from "react";
import "./styles.css";
import { todoReducer } from "./todoReducer";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoId) => {
    console.log("del: ", todoId);

    const action = {
      type: "delete",
      payload: todoId,
    };

    dispatch(action);
  };

  const handleToggle = (todoId) => {
    dispatch({
      type: "toggle",
      payload: todoId,
    });
  };

  const handleTodo = (newTodo) => {
    dispatch({
      type: "add",
      payload: newTodo,
    });
  };

  console.log(todos);
  return (
    <div>
      <h1>Todo App ( {todos.length} )</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          {
            <TodoList
              todos={todos}
              handleToggle={handleToggle}
              handleDelete={handleDelete}
            />
          }
        </div>
        <div className="col-5">
          <TodoAdd handleAddTodo={handleTodo} />
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
