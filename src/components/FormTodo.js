import React from 'react'
import Card from './Card'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import swal from 'sweetalert2'

class FormTodo extends React.Component {
  state = {
    textValue: ""
  }
  submitHandler = e => {
    e.preventDefault()
    const description = this.state.textValue.trim()
    if (description.length < 1) {
      swal(
        'Error!',
        'Please enter a description!',
        'error'
      )
      return
    }
    this.props.onSubmit({
      id: Date.now(),
      description,
      done: false
    })
    this.setState({textValue: ""})
  }
  handleChange = e => {
    this.setState({
      textValue: e.target.value
    })
  }
  render = () =>
    <div>
      <Card>
        <form onSubmit={this.submitHandler}>
          <div className="row">
            <div className="col-sm-10 col-lg-11">
              <div className="form-group">

                <input
                  value={this.state.textValue}
                  type="text"
                  className="form-control form-control-lg mt-2"
                  onChange={this.handleChange}
                  placeholder="Enter todo..."/>

              </div>
            </div>
            <div className="col-sm-2 col-lg-1">

              <Button
                type="submit"
                variant="fab"
                color="primary"
                aria-label="Add">
                <AddIcon/>
              </Button>

            </div>
          </div>
        </form>
      </Card>
    </div>


}

export default FormTodo