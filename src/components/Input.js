import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import './Input.css';
import { storeTodo } from '../features/Todo/todoSlice';

const Input = () => {

  const [inputValue, setInputValue] = useState("")
  const dispatch = useDispatch();


  const addTodo =()=>{
    console.log(`Adding ${inputValue}`)

    dispatch(storeTodo({
      item:inputValue,
      done: false,
      id: Date.now()
    }))

  }

  const handleChange = (event) =>{
    setInputValue(event.target.value);
  }


  return (
    <div className='input'>
      <input type="text" 
      value={inputValue}  
      onChange={handleChange}
      placeholder='To do list...'
      />
      <button onClick={addTodo}>ADD!</button>
    </div>
  )
}

export default Input
