import React from "react";
import { Container, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
});

const Login = (props) => {
  return (
    <Container>
      <Typography variant="h2" align="center">
        Login
      </Typography>
    </Container>
  );
};

export default Login;
