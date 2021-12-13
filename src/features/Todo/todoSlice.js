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
    },

    setCheck: (state, action) => {
      state.todoList.map(list => {
        if (action.payload === list.id){
          if (list.done === true){
            list.done = false
          }
            else {
              list.done = true
            }
          }
      })
      }
  }

});

export const { storeTodo, setCheck } = todoSlice.actions

export const selectTodoList =state => state.todos.todoList 

export default todoSlice.reducer