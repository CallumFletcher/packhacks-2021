import React from "react";
import { Container, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
});

const Profile = (props) => {
  return (
    <Container>
      <Typography variant="h2" align="center">
        user profile here
      </Typography>
    </Container>
  );
};

export default Profile;
