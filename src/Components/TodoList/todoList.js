import React from "react";
import { useSelector } from "react-redux";
import TodoCard from "../TodoCard/todoCard";

const TodoList = ({ done, unDone }) => {
  const todoList = useSelector((state) => state.todoList);
  return (
    <div className="todos-section">
      {done === unDone
        ? todoList.map((todo) => (
            <ul className="todo-list">
              <TodoCard todo={todo} />
            </ul>
          ))
        : done
        ? todoList
            .filter((todo) => todo.isDone)
            .map((todo) => (
              <ul className="todo-list">
                <TodoCard todo={todo} />
              </ul>
            ))
        : todoList
            .filter((todo) => todo.isDone === false)
            .map((todo) => (
              <ul className="todo-list">
                <TodoCard todo={todo} />
              </ul>
            ))}
    </div>
  );
};

export default TodoList;
