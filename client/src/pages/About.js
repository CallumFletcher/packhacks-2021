import React from "react";
import { Container, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
});

const About = (props) => {
  return (
    <Container>
      <Typography variant="h2" align="center">
        About
      </Typography>
    </Container>
  );
};

export default About;