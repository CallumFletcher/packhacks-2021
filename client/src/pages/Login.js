import React, { useState, useEffect } from "react";
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
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });

  function handleSend() {
    axios
      .post("http://localhost:5000/api/user/login", userInfo)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  }
  function handleChange(e) {
    e.persist();
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  return (
    <Container className={classes.root}>
      <Typography variant="h3" align="center" style={{ paddingTop: 100 }}>
        Create An Account
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
