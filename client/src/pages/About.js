import React from "react";
import { Link } from 'react-router-dom';
import "./About.css"

const About = () => {
  return (
    <section className="about-us">
      <Link to="/">
      <div className="back-button-btn"></div>
      </Link>
      
      <div className="about-us-wrapper-img">
      </div>
    </section>

  );
};

export default About;