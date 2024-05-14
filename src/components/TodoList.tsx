import React, { useRef } from "react";
import { Todo } from "../model";
import "./styles.css";
import TodoCard from "./TodoCard";

interface props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<props> = ({ todos, setTodos }) => {
  return (
    <div className="todos">
      {todos.map((item) => (
        <TodoCard
          todo={item}
          key={item?.id}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
