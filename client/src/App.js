import React, { Component } from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import RyanPage from "./Components/RyanPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/Ryan" component={RyanPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
