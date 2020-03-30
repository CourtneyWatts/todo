import React, { Component } from 'react'
import NewTodoForm from './NewTodoForm'
import Todo from './Todo'

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
    })
  }

  saveTodo (id, n) {
    console.log(id)
    console.log(n)

  }

  render () {
    const todos = this.state.todos.map((todo) => {
      return <Todo name={todo.name} key={todo.id} id={todo.id} editMode={todo.editMode} edit={() => { this.editTodo(todo.id) }} save={this.saveTodo} remove={() => { this.removeTodo(todo.id) }} />
    })
    return (
      <div>
        <p>Todolist</p>
        <NewTodoForm addNewTodo={this.addTodo} />
        {todos}
      </div>
    )
  }
}

export default TodoList
