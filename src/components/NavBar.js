import React from "react"
import AssignmentICon from '@material-ui/icons/Assignment'

export default props =>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark-blue shadow mb-3 p-3">
    <div className="container">
      <a className="navbar-brand" href="/">
        <AssignmentICon>AssignmentICon</AssignmentICon> Todo list
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"> </span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link" rel="noopener noreferrer" target="_blank"
             href="https://github.com/HackYourFuture-CPH/React/blob/master/documentation/homework/W2-homework.md">
            Homework question
            <span className="sr-only">(current)</span>
          </a>
          <a className="nav-item nav-link" href=" ">
            repository
          </a>
        </div>
      </div>
    </div>
  </nav>

