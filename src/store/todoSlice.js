import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodoHandler(state, action) {
      // console.log(state);
      console.log(action);

      state.todos.push({
        id: Date.now(),
        text: action.payload.text,
        completed: false,
      });
    },
    removeTodoHandler(state, action) {
      state.todos = state.todos.filter((el) => el.id !== action.payload.id);
    },
    toggleTodoCompleted(state, action) {
      const toggledTodo = state.todos.find((el) => el.id === action.payload.id);
      toggledTodo.completed = !toggledTodo.completed;
    },
  },
});

export const { addTodoHandler, removeTodoHandler, toggleTodoCompleted } =
  todoSlice.actions; //создать action

export default todoSlice.reducer; //и создавать несколько reducer func
