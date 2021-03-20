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
        <Link to={"/chatroom"} className="enter-chatroom-button">
          Join room
        </Link>
      </Typography>
    </Container>
  );
};

export default LandingPage;
