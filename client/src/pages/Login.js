import { useHistory } from "react-router-dom";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Background from "../assets/HomeBackground.png";
import "./LandingPage.css";
import {
  Container,
  Typography,
  makeStyles,
  Paper,
  TextField,
  Button,
  Grid,
} from "@material-ui/core";
import axios from "axios";
import { store } from "../store";
const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    padding: 25,
    marginTop: 25,
    width: 600,
    height: "100%",
  },
});

const Signup = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });
  const globalState = useContext(store);
  const { dispatch } = globalState;
  function handleSend() {
    axios
      .post("http://localhost:5000/api/user/login", userInfo)
      .then((response) => {
        dispatch({
          type: "setUser",
          payload: { username: userInfo.username, jwt: response.data },
        });
        localStorage.setItem("jwt", response.data);
        console.log(response);
        if (response.status === 200) {
          history.push("/map");
        }
      })
      .catch((error) => {
        alert("Incorrect Username or Password");
      });
  }
  function handleChange(e) {
    e.persist();
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  return (
    <Container
      className={classes.root}
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
        paddingBottom: "20vh",
      }}
    >
      <Typography variant="h3" align="center" style={{ paddingTop: 100 }}>
        Log In
      </Typography>
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
      </div>
      <Paper className={classes.paper} elevation={10}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              name="username"
              onChange={handleChange}
              value={userInfo.username}
              label="Username"
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              name="password"
              onChange={handleChange}
              value={userInfo.password}
              variant="outlined"
              label="Password"
              type="password"
              helperText="Don't use a real password, I didn't spend much time on security."
              fullWidth
            />
          </Grid>
          <Grid
            item
            xs={7}
            style={{ display: "flex",disableUnderline: "false", justifyContent: 'flex-end', alignItems: 'center', textDecoration: 'none', color: 'primary', width: '100px', marginRight: '50px'}}
          >
            <Button
              variant="contained"
              color="primary"
              disabled={!userInfo.password || !userInfo.username}
              onClick={handleSend}
            >
              Confirm
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Signup;
