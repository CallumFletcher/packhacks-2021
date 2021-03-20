import React from "react";
import { Typography, makeStyles, Container } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

const LandingPage = (props) => {
  const classes = useStyles();
  return (
    <Container>
      <Typography variant="h1" align="center">
        Welcome My Dudes
      </Typography>
    </Container>
  );
};

export default LandingPage;
