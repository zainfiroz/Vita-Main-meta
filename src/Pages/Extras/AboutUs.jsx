import React from 'react';
import styles from "./AboutUs.module.css";
import { Link, useNavigate } from "react-router-dom";

const AboutUs = () => {

  let navigate = useNavigate();

  return (
    <section className="hero">
      <div className="heading">
        <h1>About Us</h1>
      </div>
      <div className="container">
        <div className="hero-content">
          <h2>Welcome To Our Website</h2>
          <p>
            In this fast-paced world, we can rarely find time to keep a check on
            the needs of our body. With rigorous routines, our body needs ample
            amount of nutrients to function properly. But we cannot do trips to
            the doctor every month for a check-up.
            <br />
            That's why we introduce: <b>VitaCompass.</b>
            <br />
            Your everyday guide to monitor your food intake and tell you what
            you lack on. And how to catch up on that!
          </p>
          <button className="cta-button" onClick={() => navigate("/")}>Learn More</button>
        </div>
        <div className="hero-image">
          <img src="C:\data\vitaMain\Major_Project\about_us_img.jpg" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;