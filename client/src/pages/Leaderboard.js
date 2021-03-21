import React, { useContext, useEffect } from "react";
import { Container, Typography, makeStyles } from "@material-ui/core";
import axios from "axios";
import { store } from "../store";

const Leaderboard = (props) => {
  const jwt = useContext(store).state.jwt;
  useEffect(() => {
    console.log(jwt);
    async function fetchLeaderboard() {
      let config = {
        method: "get",
        url: "/api/leaderboard/top",
        headers: {
          "auth-token": jwt,
        },
      };
      axios(config).then((response) => console.log(response));
    }
    fetchLeaderboard();
  }, []);
  return (
    <Container>
      <Typography variant="h2" align="center">
        Leaderboard
      </Typography>
    </Container>
  );
};

export default Leaderboard;
