import { configureStore } from '@reduxjs/toolkit';
import  todosReducer from "../features/Todo/todoSlice"
export const store = configureStore({
  reducer: {
    todos:todosReducer
  },
});
