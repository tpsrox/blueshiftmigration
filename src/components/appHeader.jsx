import React, { Component } from "react";

class AppHeader extends Component {
  state = {};
  render() {
    return (
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h5 className="my-0 mr-md-auto font-weight-normal">
          Blueshift Migration Latest
        </h5>
        <nav className="my-2 my-md-0 mr-md-3">
          <a className="p-2 text-dark" href="#">
            Dashboard
          </a>
          <a className="p-2 text-dark" href="#">
            Logged In as: Pardhu
          </a>
        </nav>
      </div>
    );
  }
}

export default AppHeader;
