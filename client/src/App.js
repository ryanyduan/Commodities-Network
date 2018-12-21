import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Config from "./config";
import axios from "axios";
import RyanPage from "./Components/RyanPage";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/Ryan" render={() => <RyanPage />} />
      </Switch>
    );
  }
}

export default App;
