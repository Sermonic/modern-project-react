import React from "react";
import "./TodoListItem.css";

export const TodoListItem = ({ todo, onRemovePressed }) => (
  <div className="todo-item-container">
    <h3>{todo.text}</h3>
    <div className="buttons-container">
      <button className="completed-button">Mark As Completed</button>
      <button
        className="remove-button"
        onClick={() => onRemovePressed(todo.text)}
      >
        Remove
      </button>
    </div>
  </div>
);
