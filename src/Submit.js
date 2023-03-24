import React from 'react'
import { useState } from 'react'
import TodoList from './TodoList';

function Submit() {

    const [todo,setTodo] = useState("") 

//keep track of the status of todos array and add items to it
    const [todos, setTodos] = useState([]);


//add items to todos array
const addTodo = () => {
    if(todo !== ""){
        setTodos([...todos,todo]) 
//after the value of the input is added to the todos list clear the input
        setTodo("")
    }
}


  return (
    <div>

    <form  > 
          <label>New Todo</label> 
            <input type="text" value={todo} onChange={(event) => {
                setTodo(event.target.value);
            }}/>
    
    </form>

        <button type='submit' onClick = {addTodo} >Submit</button>   
        
        <TodoList listTodos={todos} listTodo={todo} listSettodos = {setTodos}/>
    </div>
  )
}

export default Submit