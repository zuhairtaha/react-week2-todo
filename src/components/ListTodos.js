import React from 'react'
import ItemTodo from "./ItemTodo"

class ListTodos extends React.Component {

  render = () =>
    <ul className="list-group shadow-sm">
      {this.props.todos.map(todo =>
        <ItemTodo
          toggleDone={() => this.props.toggleDone(todo.id)}
          deleteTodo={() => this.props.deleteTodo(todo.id)}
          key={todo.id} id={todo.id} done={todo.done}>{todo.description}
        </ItemTodo>
      )}
    </ul>
}

export default ListTodos