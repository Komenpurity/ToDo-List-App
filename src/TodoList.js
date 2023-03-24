import React from 'react'

export default function TodoList(props) {

    const {listTodos,listTodo,listSettodos} = props

    const deleteTodo = (text) => {
        const newTodos = listTodos.filter((todo) =>{
            return todo !== text
        })
        listSettodos(newTodos);
    }

  return (
    <div>
        <h4>Todo List</h4>

    {listTodos.length> 0 ? (
    <ul className="todo_list">
        {listTodos.map((todo,index) => (
            <div className='todolist'> 
            <li key={index}>{todo}</li> 
            <button onClick = {() => {
                deleteTodo(todo) 
            }}>Delete</button> 
            </div>
        ))}
    </ul> ) : (
        <div>
            <p>No task found</p> 
        </div>

    )}
        </div>
    )
    }
