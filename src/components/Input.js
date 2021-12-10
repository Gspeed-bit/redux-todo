import React, {useState} from 'react'
import './Input.css';
const Input = () => {

  const [inputValue, setInputValue] = useState("")



  const handleChange = (event) =>{
    setInputValue(event.target.value);
  }

  const handleClick = () =>{
    
  }
  return (
    <div className='input'>
      <input type="text" 
      value={inputValue}  
      onChange={handleChange}
      placeholder='To do list...'
      />
      <button onClick={handleClick}>ADD!</button>
    </div>
  )
}

export default Input
