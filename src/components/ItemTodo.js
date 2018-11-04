import React from 'react'
import IconButton from "@material-ui/core/IconButton"
import DeleteIcon from "@material-ui/icons/Delete"

class ItemTodo extends React.Component {

  render = () =>
    <li
      onClick={this.props.toggleDone}
      className="list-group-item d-flex justify-content-between align-items-center">

      <div className="custom-control custom-checkbox">
        <input
          type="checkbox"
          className="custom-control-input"
          checked={this.props.done}
          onChange={this.props.toggleDone}
          id={this.props.id}/>
        <label
          className="custom-control-label"
          style={{textDecoration: this.props.done && "line-through"}}
          htmlFor={this.props.id}>
          {this.props.children}
        </label>
      </div>

      <IconButton
        onClick={this.props.deleteTodo}
        style={{color: "#b0b0b0"}}
        aria-label="Delete">
        <DeleteIcon/>
      </IconButton>
    </li>
}

export default ItemTodo