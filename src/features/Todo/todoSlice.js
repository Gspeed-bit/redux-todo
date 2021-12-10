import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todoList:[]
}

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    storeTodo: (state, action)=>{
      state.todoList.push(action.payload)
    }
  }
});

export const { storeTodo } = todoSlice.actions
 
export default todoSlice.reducer