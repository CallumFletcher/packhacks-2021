import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Lobby from "./pages/Lobby";

function App(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/lobby">
          <Lobby />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
