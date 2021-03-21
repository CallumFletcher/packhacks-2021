import React, { useState, useContext } from "react";
import { store } from "../store.js";
import { useHistory } from "react-router-dom";
import { Container, Typography, Button } from "@material-ui/core";
import axios from "axios";

const Map = (props) => {
  const history = useHistory();

  function handleCalc() {
    axios
      .get("/api/room/Calculus")
      .then((response) => lobbyNavigate(response.data.response))
      .catch((error) => console.log(error));
  }

  function handlePhys() {
    axios
      .get("/api/room/Classical Mechanics")
      .then((response) => lobbyNavigate(response.data.response))
      .catch((error) => console.log(error));
  }

  function handleChem() {
    axios
      .get("/api/room/Materials Chemistry")
      .then((response) => lobbyNavigate(response.data.response))
      .catch((error) => console.log(error));
  }

  function handleLit() {
    axios
      .get("/api/room/Literature")
      .then((response) => lobbyNavigate(response.data.response))
      .catch((error) => console.log(error));
  }

  function handleStudy() {
    axios
      .get("/api/room/Study Room")
      .then((response) => lobbyNavigate(response.data.response))
      .catch((error) => console.log(error));
  }

  function handleHangout() {
    axios
      .get("/api/room/Hangout Room")
      .then((response) => lobbyNavigate(response.data.response))
      .catch((error) => console.log(error));
  }

  function lobbyNavigate(id) {
    history.push(`/lobby/${id}`);
  }

  return (
    <Container>
      <Typography variant="h2" align="center">
        Map of lobbies will go here
      </Typography>
      <Button variant="contained" color="primary" onClick={handleCalc}>
        Calculus
      </Button>
      <Button variant="contained" color="primary" onClick={handlePhys}>
        Classical Mechanics
      </Button>
      <Button variant="contained" color="primary" onClick={handleChem}>
        Materials Chemistry
      </Button>
      <Button variant="contained" color="primary" onClick={handleLit}>
        Literature
      </Button>
      <Button variant="contained" color="primary" onClick={handleStudy}>
        Study Room
      </Button>
      <Button variant="contained" color="primary" onClick={handleHangout}>
        Hangout Room
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          history.push("leaderboard");
        }}
      >
        Leaderboard
      </Button>
    </Container>
  );
};

export default Map;
