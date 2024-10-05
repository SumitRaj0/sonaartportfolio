import React, { useState } from "react";
import "./ContactForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bounce } from "react-toastify";

const ContactForm = () => {
    
  const navigate = useNavigate(); // Hook to navigate
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "8b80178a-076e-405e-929d-901e1ba3ca92");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
    
    toast.success("Thanks for reaching out me!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const handleInsta = () => {
    window.open("https://www.instagram.com/kanchansharma2539", "_blank");
  };

  const handleFaceBook = () => {
    window.open("https://www.facebook.com", "_blank");
  };

  const handleYoutube = () => {
    window.open("https://www.youtube.com/@kanchansharma1318", "_blank");
  };
  
  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="contact-form-container">
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

      <form className="contact-form" onSubmit={onSubmit}>
        <h2>Contact Me</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required={true}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required={true}
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required={true}
        />
        <button type="submit">Send</button>
      </form>

      <div className="social-links">
        <div className="social-icons">
          <span onClick={handleInsta}>
            <FontAwesomeIcon icon={faInstagram} />
          </span>
          <span onClick={handleFaceBook}>
            <FontAwesomeIcon icon={faFacebook} />
          </span>
          <span onClick={handleYoutube}>
            <FontAwesomeIcon icon={faYoutube} />
          </span>
        </div>
        <p>2024, All rights reserved to @kanchansharma</p>
      </div>

      {/* ToastContainer for displaying toasts */}
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
