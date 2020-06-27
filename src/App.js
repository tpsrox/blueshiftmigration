import React, { Component } from "react";
import Dashboard from "./components/dashboard";
import AppHeader from "./components/appHeader";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <AppHeader></AppHeader>
        <Dashboard></Dashboard>
      </React.Fragment>
    );
  }
}

export default App;
