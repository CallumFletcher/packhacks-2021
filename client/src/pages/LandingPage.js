import React from "react";
import { makeStyles, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import Background from "../assets/HomeBackground.png";
import AboutCloud from "../assets/AboutCloud.png";
import ContactCloud from "../assets/ContactCloud.png";
import SignupCloud from "../assets/SignupCloud.png";
import LoginCloud from "../assets/LoginCloud.png";
import "./LandingPage.css";

const useStyles = makeStyles({
  root: {
    backgroundImage: `url(${Background})`,
  },
});

const LandingPage = (props) => {
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
      }}
    >
      <div class="title"></div>
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

      <Link to={"/about"}>
        <img className="aboutCloud" src={AboutCloud} alt="About Us"></img>
      </Link>
      <Link to={"/contact"}>
        <img className="contactCloud" src={ContactCloud} alt="About Us"></img>
        <Link to={"/signup"}>
          <img className="signupCloud" src={SignupCloud} alt="About Us"></img>
        </Link>
      </Link>
      <Link to={"/login"}>
        <img className="loginCloud" src={LoginCloud} alt="About Us"></img>
      </Link>
    </Container>
  );
};

export default LandingPage;
