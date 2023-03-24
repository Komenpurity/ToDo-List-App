import React, { Component } from 'react'
import Submit from './Submit'

class FormComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        count: 0
      }
      this.handleCount = this.handleCount.bind(this) 
    }

    handleCount(){
        this.setState({
            count: this.state.count + 1
        })
    }


  render() {

    return (
      <div className="container">

        <Submit />

        <button onClick = {this.handleCount}>Count ({this.state.count})</button>  

      </div>
    )
  }
}

export default FormComponent