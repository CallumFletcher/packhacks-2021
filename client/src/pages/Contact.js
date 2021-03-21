import React from "react";
import "./Contact.css"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';


const Contact = (props) => {
  const history = useHistory();
  return (
    <section className="contact">
      
      <Link to="/">
      <div className="back-img"></div>
      </Link>
     
        <div className="contact-wrapper">

        <TextField
          id="filled-name-input"
          label=" Name"
          type="name"
          variant="filled"
          color="primary"
          style = {{width: 300}}
          InputLabelProps={{
            style: {
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              width: '100%',
              color: 'black',
            }
          }}
        />
        <TextField
          id="filled-name-input"
          label=" Email"
          type="email"
          variant="filled"
          color="primary"
          style = {{width: 300}}
          InputLabelProps={{
            style: {
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              width: '100%',
              color: 'black'
            }
          }}
        />
        <TextField
          id="filled-name-input"
          label=" Text"
          type="text"
          variant="filled"
          color="primary"
          style = {{width: 300}}
          InputLabelProps={{
            style: {
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              width: '100%',
              color: 'black',
            }
          }}
        />
        <br/><br/>
        <Button 
        variant="outlined" 
        color="primary"
        >
          Send Email
        </Button>

        </div>
      </section>



  );
};

export default Contact;