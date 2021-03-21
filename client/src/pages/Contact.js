import React from "react";
import { Container, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
});

const Contact = (props) => {
  return (
    <Container>
      <Typography variant="h2" align="center">
        Contact
      </Typography>
    </Container>
  );
};

export default Contact;