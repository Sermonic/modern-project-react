import React from "react";
import TodoListItem from "./TodoListItem";

export const TodoList = ({ todos }) => {
  <div className="list-wrapper">
    {todos.map((todo) => (
      <TodoListItem todo={todo} />
    ))}
  </div>;
};
