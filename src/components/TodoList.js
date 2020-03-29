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
  }

  addTodo (newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  render () {
    const todos = this.state.todos.map(function (todo) {
      return <Todo name={todo.name} key={todo.id} id={todo.id} />
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
