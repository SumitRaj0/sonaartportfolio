import React, { useState, useEffect } from "react";
import "./Home.css"; // Import CSS file
import kanchan from "../utils/Kanchan.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { storage } from "../utils/Data/firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import {
  faHouse,
  faImages,
  faUser,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";
import GallaryPOP from "./GallaryPOP";
import Painting from "./Painting";
import Sketching from "./Skecting";
import { useNavigate } from "react-router-dom";
import Text from "./Text";
import ShimmerUi from "./ShimmerUi";

const Home = () => {
  const navigation = useNavigate();
  const [currentPage, setCurrentPage] = useState("Home"); // Track the current page
  const [bestWorkList, setBestWorkList] = useState([]);

  const [fontLoaded, setFontLoaded] = useState(false);
  const [showGalleryPopup, setShowGalleryPopup] = useState(false);
  const [showPainting, setShowPainting] = useState(false);
  const [showSkeching, setShowSkeching] = useState(false);
  const [showBody, setShowBody] = useState(true);
  const [activeButton, setActiveButton] = useState("Home"); // Active button state

  const handleFontLoad = () => {
    setFontLoaded(true);
  };

  const handleNavigation = (label) => {
    setCurrentPage(label);

    if (label === "My Work") {
      setShowGalleryPopup((prev) => !prev); // Toggle the gallery popup when the button is clicked
    }
    if (label === "Home") {
      navigation("/");
      setShowBody(true);
      setShowPainting(false);
      setShowSkeching(false);
      setActiveButton("Home"); // Set active button to Home
    }
    if (label === "About") {
      navigation("/about");
      setActiveButton("About"); // Set active button to About
    }
    if (label === "Contact") {
      navigation("/contact");
      setActiveButton("Contact"); // Set active button to Contact
    }
  };

  const imageListRef = ref(storage, "BestWork/");

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await listAll(imageListRef);
        const urls = await Promise.all(
          res.items.map((item) => getDownloadURL(item))
        );
        setBestWorkList(urls);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        rel="stylesheet"
        as="style"
        onLoad={handleFontLoad}
        href="https://fonts.googleapis.com/css2?display=swap&family=Epilogue:wght@400;500;700;900&family=Noto+Sans:wght@400;500;700;900"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
        rel="stylesheet"
      />
      <div
        className="portfolio-root"
        style={{
          fontFamily: fontLoaded
            ? 'Epilogue, "Noto Sans", sans-serif'
            : "sans-serif",
        }}
      >
        <div className="portfolio-header">
          <h2 className="portfolio-title">Kanchan Sharma</h2>
          <button className="portfolio-button">
            <div
              className="portfolio-icon"
              data-icon="ShoppingBag"
              data-size="24px"
              data-weight="regular"
            >
              <svg
                aria-label="Verified"
                className="x1lliihq x1n2onr6"
                fill="rgb(0, 149, 246)"
                height="18"
                role="img"
                viewBox="0 0 40 40"
                width="18"
              >
                <title>Verified</title>
                <path
                  d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </div>
          </button>
        </div>
        {showBody && (
          <div>
            <div className="responsive-banner">
              <img src={kanchan} alt="Banner" className="banner-image" />
            </div>

            <p className="portfolio-description">Welcome to My Portfolio</p>

            <div className="portfolio-buttons">
              <p>I am Artist</p>
              <span style={{ fontWeight: "bold", color: "#1ca4e3" }}>
                {<Text />}
              </span>
            </div>

            <h3 className="portfolio-subtitle">Featured Artwork</h3>

            <div className="artworks-container">
              {bestWorkList.length != 0 ? (
                bestWorkList.map((url, idx) => (
                  <div key={idx} className="artwork-card">
                    <div
                      className="artwork-image"
                      style={{ backgroundImage: `url(${url})` }}
                    ></div>
                  </div>
                ))
              ) : (
                <ShimmerUi />
              )}
            </div>
          </div>
        )}
        {showPainting && <Painting />}
        {showSkeching && <Sketching />}
        {showGalleryPopup && (
          <GallaryPOP
            setShowPainting={setShowPainting}
            setShowSkeching={setShowSkeching}
            setShowBody={setShowBody}
            setShowGalleryPopup={setShowGalleryPopup}
          />
        )}
        <div className="portfolio-footer">
          {["Home", "My Work", "About", "Contact"].map((label, idx) => (
            <button
              key={idx}
              className={`footer-button ${
                currentPage === label ? "active" : ""
              }`} // Add active class based on currentPage
              onClick={() => handleNavigation(label)}
            >
              <FontAwesomeIcon
                icon={
                  label === "Home"
                    ? faHouse
                    : label === "My Work"
                    ? faImages
                    : label === "About"
                    ? faUser
                    : faAddressBook
                }
              />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default React.memo(Home);
