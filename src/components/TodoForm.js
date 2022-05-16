import React from "react";

function TodoForm() {
  return (
    <>
      <h1>ToDo List</h1>
      <div className="todo-form">
        <input type="text" placeholder="Add Todo Work" />
        <button>Add ToDo</button>
      </div>
    </>
  );
}

export default TodoForm;
