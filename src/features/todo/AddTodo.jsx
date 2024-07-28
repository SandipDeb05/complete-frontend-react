import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (event) => {
    event.preventDefault();

    if (!input || input.trim().length < 1) return;

    dispatch(addTodo({ title: input }));
    setInput("");
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Add a New Todo</h2>
      <form className="form" onSubmit={addTodoHandler}>
        <div className="mb-3 form-group">
          <label className="form-label" htmlFor="todo">
            Todo
          </label>
          <input
            type="text"
            name="todo"
            id="todo"
            className="form-control"
            placeholder="Enter your todo"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary btn-sm">
            Add Todo
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
