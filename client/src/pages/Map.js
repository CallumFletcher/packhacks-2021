import React, { useState, useContext } from "react";
import { store } from "../store.js";
import { useHistory } from "react-router-dom";
import { Container, Typography, Button } from "@material-ui/core";
import axios from "axios";

const Map = (props) => {
  const history = useHistory();

  function handleCalc() {
    axios
      .get("http://localhost:5000/api/room/Calculus")
      .then((response) => lobbyNavigate(response.data.response))
      .catch((error) => console.log(error));
  }

  function handlePhys() {
    axios
      .get("http://localhost:5000/api/room/Classical Mechanics")
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
    </Container>
  );
};

export default Map;
