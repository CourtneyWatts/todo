import React, { Component } from 'react'
import './todo.scss'
import DeleteIcon from '../icons/delete.svg'
import EditIcon from '../icons/edit.svg'

export default class Todo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: this.props.name,
      id: this.props.id,
      completed: this.props.completed
    }
    this.handleRemove = this.handleRemove.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.handleTaskClick = this.handleTaskClick.bind(this)
  }

  handleRemove () {
    this.props.remove()
  }

  handleEdit () {
    this.props.edit()
  }

  handleSave () {
    if (!this.state.name) {
      return
    }
    this.props.save(this.props.id, this.state.name)
  }

  handleChange (evt) {
    if (evt.target.value.length >= 50) {
      return
    }
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleTaskClick (editMode, id) {
    if (editMode) {
      return
    }
    this.props.toggleCompleted(id)
  }

  render () {
    const view = !this.props.editMode
      ? <p className=''>{this.props.name}</p>
      : <input name='name' onChange={this.handleChange} value={this.state.name} type='text' />
    const editButton = !this.props.editMode
      ? <img src={EditIcon} onClick={this.handleEdit} />
      : <div className='btn' onClick={this.handleSave}>SAVE</div>
    return (
      <div id={this.props.id} className={this.props.completed ? 'completed Todo' : 'Todo'}>
        <div className='task' onClick={() => { this.handleTaskClick(this.props.editMode, this.props.id) }}>
          {view}
        </div>
        <div className='btns'>
          <div className='btn'>
            {editButton}
          </div>
          <div className='btn'>
            <img src={DeleteIcon} onClick={this.handleRemove} />
          </div>
        </div>
      </div>
    )
  }
}
