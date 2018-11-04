import React, {Component} from 'react'
import "./css/App.scss"
import NavBar from "./components/NavBar"
import FormTodo from "./components/FormTodo"
import Statistics from "./components/Statistics"
import ListTodos from "./components/ListTodos"

class App extends Component {
  state = {
    todos: [
      {"id": 1, "description": "Get out of bed", "done": true},
      {"id": 2, "description": "Brush teeth", "done": false},
      {"id": 3, "description": "Eat breakfast", "done": false}
    ]
  }

  addTodo = todo => {
    this.setState(state =>
      ({todos: [todo, ...state.todos]}))
  }

  toggleDone = id => {
    this.setState(state => ({
      todos: state.todos.map(todo =>
        todo.id === id ? {...todo, done: !todo.done} : todo
      )
    }))
  }

  deleteTodo = id => {
    this.setState(state => ({
      todos: state.todos.filter(todo => todo.id !== id)
    }))
  }

  render = () =>
    <>
      <NavBar/>
      <div className="container">
        <FormTodo onSubmit={this.addTodo}/>
        <ListTodos toggleDone={this.toggleDone} deleteTodo={this.deleteTodo} todos={this.state.todos}/>
        <Statistics todos={this.state.todos}/>
      </div>
    </>
}

export default App
