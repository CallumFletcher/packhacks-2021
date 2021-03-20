import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Lobby from "./pages/Lobby";
import Leaderboard from "./pages/Leaderboard";
import Login from "./pages/Login";
import Map from "./pages/Map";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import ChatRoom from "./ChatRooms/ChatRoom";

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
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/Leaderboard">
          <Leaderboard />
        </Route>
        <Route exact path="/map">
          <Map />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/chatroom">
          <ChatRoom />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
