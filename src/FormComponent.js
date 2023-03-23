import React, { Component } from 'react'

export class FormComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        count: 0
        // topic: "React"
      }
      this.handleCount = this.handleCount.bind(this) 
      // this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleCount(){
        this.setState({
            count: this.state.count + 1
        })
    }

    /* handleSubmit(event){
        this.setState({
            topic: event.target.value
        })
    } */



  render() {
    return (
      <div className="container">
        <form >
          <label>New Todo</label>
          <input type="text" />
        </form>
        <button >Submit</button>

        <button onClick = {this.handleCount}>Count ({this.state.count})</button>  
      </div>
    )
  }
}

export default FormComponent