import React from 'react'
import ItemTodo from "./ItemTodo"
import Card from "./Card"

export default props =>
  props.todos.length > 0
    ? <ul className="list-group shadow-sm">
      {props.todos.map(todo =>
        <ItemTodo
          toggleDone={() => props.toggleDone(todo.id)}
          deleteTodo={() => props.deleteTodo(todo.id)}
          key={todo.id} id={todo.id} done={todo.done}>{todo.description}
        </ItemTodo>
      )}
    </ul>
    : <Card>No items found!</Card>