import React from "react";
import { Typography, makeStyles, Container } from "@material-ui/core";
import { Link } from "react-router-dom";

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
        <Link to={"/chathomeroom"} className="enter-chathomeSroom-button">
        Join room
      </Link>
      ^^^ Im am good, you?
      </Typography>
    </Container>
  );
};

export default LandingPage;
