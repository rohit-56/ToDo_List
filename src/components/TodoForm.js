import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

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
      <h1>ToDo List</h1>
      <form className="todo-form" onSubmit={handleOnSubmit}>
        <input
          type="text"
          placeholder="Add Todo Work"
          onChange={handleOnChange}
          value={input}
        />
        <button>Add ToDo</button>
      </form>
    </>
  );
}

export default TodoForm;
