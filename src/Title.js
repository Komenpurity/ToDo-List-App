import React from 'react'
import FormComponent from './FormComponent'

function Title(props) {
  return (
    <div>
        <h2>{props.name}</h2>

        <FormComponent />

    </div>
  )
}

export default Title