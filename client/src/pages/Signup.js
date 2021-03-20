import React from "react";
import { Container, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
});

const Signup = (props) => {
  return (
    <Container>
      <Typography variant="h2" align="center">
        Signup page here
      </Typography>
    </Container>
  );
};

export default Signup;
