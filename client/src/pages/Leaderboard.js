import React, { useState, useContext, useEffect } from "react";
import { Container, Typography, Grid, Divider } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import { store } from "../store";
import scoreToTime from "../utils/scoreToTime";
import scoreToRank from "../utils/scoreToRank";
import "./Leaderboard.css";
import { Link } from "react-router-dom";
import Background from "../assets/HomeBackground.png";
import Back from "../assets/Back.png";

const LeaderboardItem = (props) => {
  return (
    <React.Fragment>
      <TableCell />
      <TableCell align="right">{`${props.rank + 1}:  ${
        props.data.username
      }`}</TableCell>
      <TableCell align="right">{scoreToTime(props.data.score)}</TableCell>
      <TableCell align="right">{scoreToRank(props.data.score)}</TableCell>
    </React.Fragment>
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
        url: "http://localhost:5000/api/leaderboard/top",
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
        url: "http://localhost:5000/api/leaderboard/user",
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
    <React.Fragment>
      <div
        style={{
          backgroundImage: `url(${Background})`,
          imageRendering: "pixelated",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          minWidth: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: "-1",
        }}
      ></div>
      <Container>
        <div id="background-wrap">
          <div class="x1">
            <div class="cloud1"></div>
          </div>

          <div class="x2">
            <div class="cloud2"></div>
          </div>

          <div class="x3">
            <div class="cloud3"></div>
          </div>

          <div class="x4">
            <div class="cloud4"></div>
          </div>

          <div class="x5">
            <div class="cloud1"></div>
          </div>

          <div class="x6">
            <div class="cloud2"></div>
          </div>

          <div class="x7">
            <div class="cloud3"></div>
          </div>

          <div class="x8">
            <div class="cloud4"></div>
          </div>
        </div>
        <Link to="/">
        <img className="back" src={Back} alt="Back"></img>
      </Link>
        <Typography variant="h3" align="center">
          Leaderboard
        </Typography>
        <Card variant="outlined">
          <CardContent>
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
          </CardContent>
        </Card>
      </Container>
      <TableContainer
        style={{ marginLeft: "5vw", marginTop: "3vw", width: "90vw" }}
        component={Paper}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell align="left">User</TableCell>
              <TableCell align="left">Time (hours)</TableCell>
              <TableCell align="left">Rank</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leaderboard.map((element, index) => {
              return (
                <TableRow>
                  <TableCell />
                  <TableCell align="left">
                    <Chip
                      avatar={<Avatar>{`${index + 1}`}</Avatar>}
                      label={element.username}
                      color="primary"
                    />
                  </TableCell>
                  <TableCell align="left">
                    {scoreToTime(element.score)}
                  </TableCell>
                  <TableCell align="left">
                    {scoreToRank(element.score)}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

export default Leaderboard;
