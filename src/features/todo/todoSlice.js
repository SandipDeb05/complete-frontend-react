import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, title: "Do exercise", completed: false }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        title: action.payload.title,
        completed: false,
      };

      state.todos.push(todo);
    },

    removeTodo: (state, action) => {
      console.log(state);
      console.log(action);
      const newTodos = state.todos.filter(
        (todo) => todo.id !== action.payload.id
      );

      state.todos = newTodos;
    },

    toggleTodo: (state, action) => {
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.completed = !todo.completed;
          return todo;
        } else {
          return todo;
        }
      });

      state.todos = updatedTodos;
    },
  },
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
