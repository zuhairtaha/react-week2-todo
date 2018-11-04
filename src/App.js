import React, {Component} from 'react'
import "./css/bootstrap.min.css"
import "./css/App.scss"
import NavBar from "./components/NavBar"
import TodoList from "./components/TodoList"

const todosItems = [
  {id: 1, desc: "Get out of bed", deadline: "Wed Sep 13 2017"},
  {id: 2, desc: "Brush teeth", deadline: "Thu Sep 14 2017"},
  {id: 3, desc: "Eat breakfast", deadline: "Fri Sep 15 2017"}
]

class Index extends Component {
  render = () =>
    <>
      <NavBar/>
      <div className="container">
        <TodoList todos={todosItems}/>
      </div>
    </>
}

export default Index
