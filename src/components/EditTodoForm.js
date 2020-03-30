import React, { Component } from 'react'

class EditTodoForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  render () {
    return (
      <form>
        <input name='name' onChange={this.handleChange} value={this.state.name} type='text' />
      </form>
    )
  }
}

export default EditTodoForm
