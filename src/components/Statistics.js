import React from 'react'
import Statistic from "./Statistic"

export default props => {
  const allTodos = props.todos.length
  const doneTodos = props.todos.filter(todo => todo.done).length
  const notDone = allTodos - doneTodos
  return <div className="row mt-3">
    <div className="col-sm-4">
      <Statistic text="Total" number={allTodos} bg="bg-danger"/>
    </div>
    <div className="col-sm-4">
      <Statistic text="Done" number={doneTodos} bg="bg-warning"/>
    </div>
    <div className="col-sm-4">
      <Statistic text="Left" number={notDone} bg="bg-success"/>
    </div>
  </div>
}