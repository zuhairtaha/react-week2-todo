import React from 'react'
import Card from './Card'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'

class TodoForm extends React.Component {
  render = () =>
    <div>
      <Card>
        <form onSubmit={this.submitHandler}>
          <div className="row">
            <div className="col-sm-11">
              <div className="form-group">
                <input type="text"
                       className="form-control form-control-lg mt-2"
                       placeholder="Enter todo..."/>
              </div>
            </div>
            <div className="col-sm-1">
              <Button type="submit" variant="fab" color="primary" aria-label="Add">
                <AddIcon/>
              </Button>
            </div>
          </div>
        </form>
      </Card>
    </div>

  submitHandler() {

  }
}

export default TodoForm