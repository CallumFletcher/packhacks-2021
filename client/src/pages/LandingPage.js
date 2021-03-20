import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

const LandingPage = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h1">Welcome My Dudes</Typography>
    </div>
  );
};

export default LandingPage;
