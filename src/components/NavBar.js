import React from "react";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark-blue shadow mb-3 p-3">
        <div className="container">
          <a className="navbar-brand" href="">
            Navbar
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
              <a className="nav-item nav-link active" href=" ">
                <i className="ti-user" /> Home{" "}
                <span className="sr-only">(current)</span>
              </a>
              <a className="nav-item nav-link" href=" ">
                Features
              </a>
              <a className="nav-item nav-link" href=" ">
                Pricing
              </a>
              <a className="nav-item nav-link disabled" href=" ">
                Disabled
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
