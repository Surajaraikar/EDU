import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nuturing Tomorrow's Leaders Today</h2>
        <p>
          Are you passionate about sharing knowledge, teaching, and positively
          impacting learners’ lives? Edusity offers educators, freelancers, and
          aspiring teachers an incredible opportunity to teach for free on our
          platform. Whether you’re an experienced professor or just starting
          your teaching journey, our Teach for Free services are designed to
          empower you and extend your reach to a global audience.
        </p>
        <p>
          As a freelancer or educator, you value flexibility. Edusity allows you
          to create your own schedule and teach at your convenience. No more
          rigid classroom hours or fixed locations. Teach from the comfort of
          your home or anywhere with an internet connection
        </p>
      </div>
    </div>
  );
};

export default About;
