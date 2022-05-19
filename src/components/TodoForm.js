import React, { useState, useEffect, useRef } from "react";
import "../App.css";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleOnChange = (e) => {
    setInput(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <>
      <form className="todo-form" onSubmit={handleOnSubmit}>
        {props.edit ? (
          <>
            <input
              type="text"
              className="todo-input edit"
              placeholder="Add Todo Work"
              onChange={handleOnChange}
              value={input}
              ref={inputRef}
            />
            <button onClick={handleOnSubmit} className="todo-button edit">
              Update
            </button>
          </>
        ) : (
          <>
            <input
              type="text"
              className="todo-input"
              placeholder="Add Todo Work"
              onChange={handleOnChange}
              value={input}
              ref={inputRef}
            />
            <button onClick={handleOnSubmit} className="todo-button">
              Add ToDo
            </button>
          </>
        )}
      </form>
    </>
  );
}

export default TodoForm;
