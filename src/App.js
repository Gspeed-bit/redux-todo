import React from "react";
import "./App.css";
import Input from "./components/Input";
import TodoItems from "./components/TodoItems";
import { useSelector } from 'react-redux';
import { selectTodoList } from "./features/Todo/todoSlice";

// const todoList = [
//   {
//     items: "todo1",
//     done: true,
//     id: 546739678333,
//   },
//   {
//     items: "todo2",
//     done: false,
//     id: 343567890675,
//   },
//   {
//     items: "todo3",
//     done: true,
//     id: 35468890675,
//   },
// ];


function App() {

  const todoList = useSelector(selectTodoList)

  return (
    <div className="App">
      <div className="app__container">
        <div className="app__todoContainer">
        {todoList.map((lists) => {
          return (
            <TodoItems name={lists.item} done={lists.done} id={lists.id} />
          );
        })}
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
