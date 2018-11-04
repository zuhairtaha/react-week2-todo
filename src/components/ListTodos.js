import React from 'react'
import DeleteIcon from "@material-ui/icons/Delete"
import IconButton from '@material-ui/core/IconButton'

class ListTodos extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props)
  }
  render = () =>
    <ul className="list-group shadow-sm">

      {this.props.todos.map(item =>
          <p>test</p>
      )}
    </ul>
}

export default ListTodos