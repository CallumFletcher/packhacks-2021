import React, { useState, useContext } from "react";
import { store } from "../store.js";
import { useHistory } from "react-router-dom";
import { Container, Typography, Button } from "@material-ui/core";
import axios from "axios";
import { Link } from "react-router-dom";
import Background from '../assets/Water.png';
import Chemistry from "../assets/Chemistry.png";
import Professionalism from "../assets/Professionalism.png";
import Arts from "../assets/Arts.png";
import Break from "../assets/Break.png";
import Calculus from "../assets/Calculus.png";
import Physics from "../assets/Physics.png";
import Trophy from "../assets/Trophy.png";
import SignupCloud from "../assets/SignupCloud.png";
import LoginCloud from "../assets/LoginCloud.png";
import "./Map.css"

const Map = (props) => {
  const history = useHistory();

  function handleCalc() {
    axios
      .get("http://localhost:5000/api/room/Calculus")
      .then((response) => lobbyNavigate(response.data.response))
      .catch((error) => console.log(error));
  }

  function handlePhys() {
    axios
      .get("http://localhost:5000/api/room/Classical Mechanics")
      .then((response) => lobbyNavigate(response.data.response))
      .catch((error) => console.log(error));
  }

  function lobbyNavigate(id) {
    history.push(`/lobby/${id}`);
  }

  return (
    <Container
    style={{
      backgroundImage: `url(${Background})`,
      imageRendering: "pixelated",
      backgroundSize: "50% 50%",
      backgroundRepeat: 'repeat',
      minHeight: "100vh",
      minWidth: "100%",
      position: "fixed",
      top: 0,
      left: 0,
    }}>
      <div className = 'island'></div>
      <img className="chemistry" src={Chemistry} alt="Chemistry" onClick={handlePhys}></img>
      <img className="professionalism" src={Professionalism} alt="Professionalism" onClick={handlePhys}></img>
      <img className="arts" src={Arts} alt="Arts" onClick={handlePhys}></img>
      <img className="break" src={Break} alt="Break" onClick={handlePhys}></img>
      <img className="calculus" src={Calculus} alt="About Us" onClick={handleCalc}></img>
      <img className="physics" src={Physics} alt="Physics" onClick={handlePhys}></img>
      <Link to={"/leaderboard"}>
        <img className="trophy" src={Trophy} alt="About Us"></img>
      </Link>
      <div className = 'cloudGroup'></div>

    </Container>
  );
};

export default Map;
