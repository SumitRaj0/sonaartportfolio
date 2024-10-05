import React from "react";
import "./About.css"; // Import the separate CSS file
import { useNavigate } from "react-router-dom";
import kanchan from "../utils/Kanchan.png";
import Text from "./Text";

const About = () => {
  const navigate = useNavigate();
  
  const handleBack = () => {
    navigate("/");
  };
  
  return (
    <div className="about-container">
      <div className="about-header">
        <div className="back-icon" onClick={handleBack}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
          </svg>
        </div>
        <h2 className="about-title">About Me</h2>
      </div>

      <div className="about-body">
        <div className="profile">
          <div className="">
            <img className="profile-image" src={kanchan} alt="Kanchan Sharma" />
          </div>
          <div className="profile-info">
            <p className="profile-name">Kanchan Sharma</p>
            <p className="profile-role">{<Text />}</p>
          </div>
        </div>
        <p className="about-description">
          I'm an artist based in India 🇮🇳. My passion is to illustrate the beauty of the world on paper 🖌️.
        </p>

        <h2 className="career-heading">Career 🚀</h2>

        <ul className="timeline">
          <li>
            <span className="dot"></span>
            <div className="timeline-content">
              <h3>Master of Arts | Painting and Drawing🎓</h3>
              <span>2024–Present</span>
            </div>
          </li>
          <li>
            <span className="dot"></span>
            <div className="timeline-content">
              <h3>Bachelors in Arts | Painting and Drawing 🎓</h3>
              <span>2020–2024</span>
            </div>
          </li>
          <li>
            <span className="dot"></span>
            <div className="timeline-content">
              <h3>Intermediate in Arts🎨</h3>
              <span>2018–2020</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
