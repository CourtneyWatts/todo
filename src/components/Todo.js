import React, { Component } from 'react'
import EditTodoForm from './EditTodoForm'

export default class Todo extends Component {
  constructor (props) {
    super(props)
    this.handleRemove = this.handleRemove.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSave = this.handleSave.bind(this)
  }

  componentDidMount () {
    this.setState({
      name: this.props.name,
      id: this.props.id
    })
  }

  handleRemove () {
    this.props.remove()
  }

  handleEdit () {
    this.props.edit()
  }

  handleSave () {
    this.props.save(this.props.id, this.state.name)
  }

  handleChange (evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  render () {
    const view = !this.props.editMode
      ? <span>{this.props.name}</span>
      : <input name='name' onChange={this.handleChange} value={this.state.name} type='text' />
    const editButton = !this.props.editMode
      ? <button onClick={this.handleEdit}>edit</button>
      : <button onClick={this.handleSave}>save</button>
    return (
      <div>
        {view}
        <button onClick={this.handleRemove}>x</button>
        {editButton}
      </div>
    )
  }
}
