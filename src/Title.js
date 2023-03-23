import React from 'react'
import FormComponent from './FormComponent'
import ToDoList from './ToDoList'

function Title(props) {
  return (
    <div>
        <h2>{props.name}</h2>

        <FormComponent />

        <ToDoList />

    </div>
  )
}

export default Title