import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'


export default class NewTodoForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit (evt) {
    evt.preventDefault()
    this.props.addNewTodo({ ...this.state, id: uuidv4() })
    this.setState({
      name: ''
    })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name='name' onChange={this.handleChange} value={this.state.name} type='text' />
        <button>Add</button>
      </form>
    )
  }
}
