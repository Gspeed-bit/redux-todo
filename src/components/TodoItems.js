import * as React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import "./todoItems.css"
import {setCheck}  from '../features/Todo/todoSlice';
import { useDispatch } from 'react-redux';



const TodoItems = ({name, done, id}) => {
  const dispatch = useDispatch()
 
const handleCheckBox = () => {
  dispatch(setCheck(id))
}

return (
<div className='todoItems'>
  <Checkbox
        checked={done}
        color='primary'
        onChange={handleCheckBox}
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
    <p className={done && "todoItems--done"}>{name}</p>
    </div>
  )
}

export default TodoItems
