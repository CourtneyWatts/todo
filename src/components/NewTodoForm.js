import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './NewTodoForm.scss'
import AddIcon from '../icons/add-button.svg'

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
    if (evt.target.value.length >= 50) {
      return
    }
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit (evt) {
    evt.preventDefault()
    if (!this.state.name) {
      return
    }
    this.props.addNewTodo({ ...this.state, id: uuidv4(), completed: false })
    this.setState({
      name: ''
    })
  }

  render () {
    return (
      <div>
        <form className='NewTodoForm' onClick={this.handleSubmit}>
          <input name='name' onChange={this.handleChange} value={this.state.name} type='text' />
          <div className='addBtn'>
            <button><img src={AddIcon} /></button>
          </div>
        </form>
      </div>
    )
  }
}
