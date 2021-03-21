import React from "react";
import { Container, Typography, makeStyles, Button } from "@material-ui/core";
import "./Contact.css";
import TextField from '@material-ui/core/TextField';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';


const Contact = (props) => {
  const history = useHistory();
  return (
    <Container>
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
      <Typography variant="h2" align="center">
        Contact
      </Typography>
    </Container>
 );
};

export default Contact;
    
    // <section className="contact">
      
    //   <Link to="/">
    //   <div className="back-img"></div>
    //   </Link>
     
    //     <div className="contact-wrapper">

    //     <TextField
    //       id="filled-name-input"
    //       label=" Name"
    //       type="name"
    //       variant="filled"
    //       color="primary"
    //       style = {{width: 300}}
    //       InputLabelProps={{
    //         style: {
    //           textOverflow: 'ellipsis',
    //           whiteSpace: 'nowrap',
    //           overflow: 'hidden',
    //           width: '100%',
    //           color: 'black',
    //         }
    //       }}
    //     />
    //     <TextField
    //       id="filled-name-input"
    //       label=" Email"
    //       type="email"
    //       variant="filled"
    //       color="primary"
    //       style = {{width: 300}}
    //       InputLabelProps={{
    //         style: {
    //           textOverflow: 'ellipsis',
    //           whiteSpace: 'nowrap',
    //           overflow: 'hidden',
    //           width: '100%',
    //           color: 'black'
    //         }
    //       }}
    //     />
    //     <TextField
    //       id="filled-name-input"
    //       label=" Text"
    //       type="text"
    //       variant="filled"
    //       color="primary"
    //       style = {{width: 300}}
    //       InputLabelProps={{
    //         style: {
    //           textOverflow: 'ellipsis',
    //           whiteSpace: 'nowrap',
    //           overflow: 'hidden',
    //           width: '100%',
    //           color: 'black',
    //         }
    //       }}
    //     />
    //     <br/><br/>
    //     <Button 
    //     variant="outlined" 
    //     color="primary"
    //     >
    //       Send Email
    //     </Button>

    //     </div>
    //   </section>



 