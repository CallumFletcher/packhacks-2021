import React from "react";
import { makeStyles, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import Background from "../assets/HomeBackground.png";
import "./About.css";
import Back from "../assets/Back.png";

const useStyles = makeStyles({
  root: {
    backgroundImage: `url(${Background})`,
  },
});

const About = (props) => {
  const classes = useStyles();
  return (
    <Container
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
        paddingBottom: '20vh'
      }}
    >
    <div class="about"></div>
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

        <div class="x7">
          <div class="cloud3"></div>
        </div>

        <div class="x8">
          <div class="cloud4"></div>
        </div>
      </div>
      <Link to="/">
        <img className="back" src={Back} alt="Back"></img>
      </Link>
      
    </Container>
  );
};

export default About;
