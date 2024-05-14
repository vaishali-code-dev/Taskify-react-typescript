import React, { useRef, useState, useEffect } from "react";
import { Todo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./styles.css";

type props = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  todo: Todo;
  key: number;
};

const TodoCard: React.FC<props> = ({ todos, setTodos, todo, key }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo?.todo);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);
  const handleDone = (id: number) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
  };
  const handleDelete = (id: number) => {
    setTodos(todos.filter((item) => item?.id !== id));
  };
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((item) => (item.id === id ? { ...item, todo: editTodo } : item))
    );
    setEdit(false);
  };
  return (
    <form className="todos__single" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          ref={inputRef}
          className="todos__single--text"
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
        />
      ) : todo.isDone ? (
        <s className="todos__single--text">{todo.todo}</s>
      ) : (
        <span className="todos__single--text">{todo.todo}</span>
      )}
      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !todo?.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo?.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo?.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default TodoCard;
