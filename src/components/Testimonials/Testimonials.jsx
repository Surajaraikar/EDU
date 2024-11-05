import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />

      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Jennifer</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>William Jackson </h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Pursuing my degree at Edusity has been one of my best decisions.
                The supportive community, modern facilities, and dedication to
                academic excellence have surpassed my and truly exceeded my
                expectations and dedication which have surpassed all my
                expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Jessica</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                The main idea—expressing satisfaction with the decision to study
                at Edusity, The institution is equipped with up-to-date
                facilities that enhance learning. The phrase "dedication which
                have surpassed all my expectations" is also redundant, adding no
                new information.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Thomas</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Pursuing my degree at Edusity has been one of my best decisions.
                The supportive community, modern facilities, and commitment to
                academic excellence have exceeded all my expectations. This
                removes redundancies and improves clarity while maintaining the
                original message.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
