import React from "react";
import { Container, Typography, makeStyles, Button } from "@material-ui/core";
import "./Contact.css";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
});

const Contact = (props) => {
  return (
    <Container>
            <div className="your-thoughts-container" id="contact">
        <br></br>
        <div className="your-thoughts-heading">Tell Us Your Thoughts</div>
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
      <Typography variant="h2" align="center">
        Contact
      </Typography>
    </Container>
    
  );
};

export default Contact;