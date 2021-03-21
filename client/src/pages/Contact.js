import React from "react";
import { Container, Typography, makeStyles, Button } from "@material-ui/core";
import "./Contact.css";
import TextField from '@material-ui/core/TextField';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import Background from "../assets/HomeBackground.png";
import "./About.css";
import Back from "../assets/Back.png";


const Contact = (props) => {
  const history = useHistory();
  return (
    <Container       style={{
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
      }}>
      <div id="background-wrap" style={{overflow: "hidden"}}>
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
        <img className="backs" src={Back} alt="Back"></img>
      </Link>
            <div className="your-thoughts-container" id="contact">
        <br></br>
        <div className="your-thoughts-heading">Contact</div>
        <form>
          <input
            className="your-thoughts-input"
            placeholder="First Name"
          ></input>
          <input
            className="your-thoughts-input"
            placeholder="Last Name"
          ></input>
          <input
            className="your-thoughts-input"
            placeholder="Email Address"
          ></input>
          <textarea
            className="your-thoughts-textarea"
            placeholder="What we should know"
          ></textarea>
        </form>
        </div>
    </Container>
 );
};

export default Contact;
    


 