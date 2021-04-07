import React from "react";
import "./todolistitem.css";
import { PropTypes } from "prop-types";

const TodoListItem = ({ todo = {}, index, handleDelete, handleToggle }) => {
  return (
    <li className="list-group-item">
      <p
        className={todo.done ? "complete" : ""}
        onClick={() => handleToggle(todo.id)}
      >
        {index + 1}. {todo.desc}
      </p>
      <button className="btn btn-danger" onClick={() => handleDelete(todo.id)}>
        Borrar
      </button>
    </li>
  );
};

TodoListItem.propTypes = {
  todos: PropTypes.array,
  index: PropTypes.number,
  handleDelete: PropTypes.func,
  handleToggle: PropTypes.func,
};

export default TodoListItem;
