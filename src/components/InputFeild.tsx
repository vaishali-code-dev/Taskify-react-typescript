import React, { useRef } from "react";
import "./styles.css";

interface props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputFeild: React.FC<props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="imput"
        placeholder="Enter a task"
        className="input__box"
        value={todo}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setTodo(e.target.value)
        }
      />
      <button className="input__submit" type="submit">
        GO
      </button>
    </form>
  );
};

export default InputFeild;
