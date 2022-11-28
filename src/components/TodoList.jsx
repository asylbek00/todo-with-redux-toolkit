import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((store) => store.todos.todos)

  return (
    <ul>
      {todos.map((el) => (
        <TodoItem
          key={el.id}
          {...el}
       
        />
      ))}
    </ul>
  );
};

export default TodoList;
