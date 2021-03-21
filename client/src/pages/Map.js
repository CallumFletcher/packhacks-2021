import React from "react";
import { useHistory } from "react-router-dom";
import { Container, Typography, Button } from "@material-ui/core";

const Map = (props) => {
  const history = useHistory();

  function handleCalc() {
    history.push("/lobby");
  }

  function handlePhys() {
    history.push("/lobby");
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
