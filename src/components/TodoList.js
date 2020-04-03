import React, { Component } from 'react'
import NewTodoForm from './NewTodoForm'
import Todo from './Todo'
import './todolist.scss'

class TodoList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      todos: []
    }
    this.addTodo = this.addTodo.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
    this.editTodo = this.editTodo.bind(this)
    this.saveTodo = this.saveTodo.bind(this)
    this.toggleCompleted = this.toggleCompleted.bind(this)
  }

  addTodo (newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  removeTodo (todoToRemove) {
    const updatedListOfTodos = this.state.todos.filter(todo => todo.id !== todoToRemove)
    this.setState({
      todos: updatedListOfTodos
    })
  }

  editTodo (todoID) {
    const indexToEdit = this.state.todos.findIndex(todo => todo.id === todoID)
    const todos = [...this.state.todos]
    todos[indexToEdit].editMode = true
    console.log(todos)
    this.setState({
      todos: todos
    }, function () {
      const input = document.getElementById(todoID)

      console.log(input.querySelector('input'))

      input.querySelector('input').focus()
    })
  }

  saveTodo (id, newName) {
    const indexToEdit = this.state.todos.findIndex(todo => todo.id === id)
    const todos = [...this.state.todos]
    todos[indexToEdit].editMode = false
    todos[indexToEdit].name = newName
    console.log(id)
    console.log(newName)
    this.setState({
      todos: todos
    })
  }

  toggleCompleted (id) {
    const indexToEdit = this.state.todos.findIndex(todo => todo.id === id)
    const todos = [...this.state.todos]
    todos[indexToEdit].completed = !todos[indexToEdit].completed
    this.setState({
      todos: todos
    })
  }

  render () {
    const todos = this.state.todos.map((todo) => {
      return <Todo name={todo.name} key={todo.id} id={todo.id} toggleCompleted={this.toggleCompleted} completed={todo.completed} editMode={todo.editMode} edit={() => { this.editTodo(todo.id) }} save={this.saveTodo} remove={() => { this.removeTodo(todo.id) }} />
    })
    return (
      <div className='Todolist'>
        <h1>Todo List!</h1>
        <NewTodoForm addNewTodo={this.addTodo} />
        {todos}
      </div>
    )
  }
}

export default TodoList
