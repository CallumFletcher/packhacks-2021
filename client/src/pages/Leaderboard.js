import React, { useState, useContext, useEffect } from "react";
import {
  Container,
  Typography,
  makeStyles,
  Grid,
  Paper,
  Divider,
} from "@material-ui/core";
import axios from "axios";
import { store } from "../store";
import scoreToTime from "../utils/scoreToTime";
import scoreToRank from "../utils/scoreToRank";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
});

const LeaderboardItem = (props) => {
  console.log(props);
  return (
    <Grid item xs={12}>
      <Grid container>
        <Grid item xs={4}>
          <Typography variant="h6">
            {`${props.rank + 1}:  ${props.data.username}`}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" align="center">
            {scoreToTime(props.data.score)}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6" align="right">
            {scoreToRank(props.data.score)}
          </Typography>
        </Grid>
      </Grid>
      <Divider />
    </Grid>
  );
};

const Leaderboard = (props) => {
  const jwt = useContext(store).state.jwt;
  const [leaderboard, setLeaderboard] = useState([]);
  const [stats, setStats] = useState({});
  useEffect(() => {
    async function fetchLeaderboard() {
      let config = {
        method: "get",
        url: "/api/leaderboard/top",
        headers: {
          "auth-token": jwt,
        },
      };
      axios(config).then((response) => {
        console.log(response);
        setLeaderboard(response.data);
      });
    }
    async function fetchStats() {
      let config = {
        method: "get",
        url: "/api/leaderboard/user",
        headers: {
          "auth-token": jwt,
        },
      };
      axios(config).then((response) => {
        console.log(response);
        setStats(response.data);
        console.log(scoreToTime(response.data.score));
      });
    }
    fetchStats();
    fetchLeaderboard(); //eslint-disable-next-line
  }, []);

  return (
    <Container>
      <Typography variant="h4" align="center">
        Leaderboard
      </Typography>
      <Grid container>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={4}>
              <Typography variant="h5" style={{ fontWeight: 700 }}>
                User
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography
                variant="h5"
                align="center"
                style={{ fontWeight: 700 }}
              >
                Time(Hours)
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography
                variant="h5"
                align="right"
                style={{ fontWeight: 700 }}
              >
                Rank
              </Typography>
            </Grid>
          </Grid>
          <Divider style={{ margin: 15 }} />
        </Grid>
        {leaderboard.map((element, index) => (
          <LeaderboardItem data={element} key={element._id} rank={index} />
        ))}
      </Grid>
      <Typography variant="h4" align="center">
        Your Stats
      </Typography>
      {stats.data && (
        <Grid container>
          <Grid
            item
            xs={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Typography
              variant="h5"
              style={{ fontWeight: 700, paddingRight: 25 }}
            >
              Leaderboard rank:
            </Typography>
            <Typography variant="h5">{stats.index + 1}</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Typography
              variant="h5"
              style={{ fontWeight: 700, paddingRight: 25 }}
            >
              Time Spent Studying(Hours):
            </Typography>
            <Typography variant="h5">
              {scoreToTime(stats.data.score)}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Typography
              variant="h5"
              style={{ fontWeight: 700, paddingRight: 25 }}
            >
              Rank:
            </Typography>
            <Typography variant="h5">
              {scoreToRank(stats.data.score)}
            </Typography>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default Leaderboard;
