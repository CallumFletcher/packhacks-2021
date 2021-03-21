import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Container,
  Typography,
  makeStyles,
  Paper,
  TextField,
  Button,
  Grid,
} from "@material-ui/core";
import Background from "../assets/HomeBackground.png";
import AboutCloud from "../assets/AboutCloud.png";
import ContactCloud from "../assets/ContactCloud.png";
import SignupCloud from "../assets/SignupCloud.png";
import LoginCloud from "../assets/LoginCloud.png";
import "./LandingPage.css";
import "./App.css";
import axios from "axios";

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
  const history = useHistory();
  const classes = useStyles();
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
    role: "student",
    score: 0,
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (userInfo.password !== confirmPassword) {
      setError(true);
    } else {
      setError(false);
    }
  }, [userInfo.password, confirmPassword]);

  function handleSend() {
    axios
      .post("http://localhost:5000/api/user/register", userInfo)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          history.push("/login");
        }
      })
      .catch((error) => console.log(error));
  }
  function handleChange(e) {
    e.persist();
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  return (
    <Container className={classes.root}       style={{
      backgroundImage: `url(${Background})`,
      imageRendering: "pixelated",
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat",
      minHeight: "100vh",
      minWidth: "100%",
      position: "fixed",
      top: 0,
      left: 0,
      paddingBottom: '20vh'
    }}>
      <Typography className = {"modal-title"} variant="h3" align="center" style={{ paddingTop: 100 }}>
        Create An Account
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
              fullWidth
              error={error}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              type="password"
              label="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              fullWidth
              error={error}
            />
          </Grid>
          <Grid item xs={12}>
            {error && (
              <Typography variant="body1">Passwords do not match</Typography>
            )}
          </Grid>
          <Grid item xs={6}>
          <Link to={"/"}>
            <Button variant="contained" color="secondary">
              Cancel
            </Button>
            </Link>
          </Grid>
          <Grid
            item
            xs={6}
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <Button
              variant="contained"
              color="primary"
              disabled={!userInfo.password || error}
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
