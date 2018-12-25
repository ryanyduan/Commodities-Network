import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import RyanPage from "./Components/RyanPage";
import Contracts from "./Components/Contracts";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/Ryan" component={RyanPage} />
          <Route exact path="/Contracts" component={Contracts} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
