import React from "react";
import { Container, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
});

const Map = (props) => {
  return (
    <Container>
      <Typography variant="h2" align="center">
        map of lobbies will go here
      </Typography>
    </Container>
  );
};

export default Map;
