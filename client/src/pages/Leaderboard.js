import React from "react";
import { Container, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
});

const Leaderboard = (props) => {
  return (
    <Container>
      <Typography variant="h2" align="center">
        Leaderboard
      </Typography>
    </Container>
  );
};

export default Leaderboard;
