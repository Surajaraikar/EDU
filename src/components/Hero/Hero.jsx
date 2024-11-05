import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="hero conatainer">
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills, and experiences needed to excel in the dynmic field
          of education
        </p>
        <Link
          to="programs"
          smooth={true}
          offset={-260}
          duration={500}
          className="btn"
        >
          Explore more <img src={dark_arrow} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
