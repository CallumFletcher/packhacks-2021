import { useHistory } from "react-router-dom";
import React, { useState, useContext } from "react";
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
      .post("/api/user/login", userInfo)
      .then((response) => {
        dispatch({
          type: "setUser",
          payload: { username: userInfo.username, jwt: response.data },
        });
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
    <Container className={classes.root}>
      <Typography variant="h3" align="center" style={{ paddingTop: 100 }}>
        Log In
      </Typography>
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

          <Grid item xs={6}>
            <Button variant="contained" color="secondary">
              Cancel
            </Button>
          </Grid>
          <Grid
            item
            xs={6}
            style={{ display: "flex", justifyContent: "flex-end" }}
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
