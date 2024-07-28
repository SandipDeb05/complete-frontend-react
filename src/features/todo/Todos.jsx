import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "./todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const removeTodoHandler = (id) => {
    dispatch(removeTodo({ id: id }));
  };

  const toggleTodoHandler = (id) => {
    dispatch(toggleTodo({ id: id }));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Todo List</h2>
      <ul className="list-group">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div className="flex-grow-1">
              <p
                className={`mb-0 me-2 ${
                  todo.completed
                    ? "text-decoration-line-through text-muted"
                    : ""
                }`}
              >
                {todo.title}
              </p>
            </div>
            <div>
              <button
                className="btn btn-danger btn-sm me-2"
                onClick={() => removeTodoHandler(todo.id)}
              >
                <i className="bi bi-trash"></i>
              </button>
              <button
                className="btn btn-success btn-sm"
                onClick={() => toggleTodoHandler(todo.id)}
              >
                <i className="bi bi-check-lg"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
