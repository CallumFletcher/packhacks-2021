import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Lobby from "./pages/ChatLobby";
import Leaderboard from "./pages/Leaderboard";
import Login from "./pages/Login";
import Map from "./pages/Map";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import VideoConference from "./pages/VideoConference";
import ChatRoom from "./ChatRooms/ChatRoom";
import ChatHomeRoom from "./ChatRooms/ChatsHomeRoom";

function App(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/lobby/:id">
          <Lobby />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/leaderboard">
          <Leaderboard />
        </Route>
        <Route exact path="/map">
          <Map />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/video-conference">
          <VideoConference />
        </Route>
        <Route exact path="/chathomeroom">
          <ChatHomeRoom />
        </Route>
        <Route exact path="/:roomId">
          <ChatRoom />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
