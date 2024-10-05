import React, { useEffect, useState } from "react";
import "./Painting.css";
import { storage } from "../utils/Data/firebase";

import { ref, listAll, getDownloadURL } from "firebase/storage";
import ShimmerUi from "./ShimmerUi";

const Sketching = () => {
  const [skechingList, setSkechingList] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State to manage loading
  const imageListRef = ref(storage, "/Skecth/");

  useEffect(() => {
    listAll(imageListRef).then((res) => {
      const promises = res.items.map((item) => getDownloadURL(item));
      Promise.all(promises).then((urls) => {
        setSkechingList(urls);
        setIsLoading(false); // Set loading to false after fetching
      });
    });
  }, []);

  return (
    <div className="painting-container">
      <h1 className="painting-title">Sketches</h1>
      <div className="painting-grid">
        {isLoading ? (
          <ShimmerUi />
        ) : skechingList.length > 0 ? (
          skechingList.map((url, id) => (
            <div key={id} className="painting-card">
              <img src={url} alt={`Sketch ${id}`} className="painting-image" />
            </div>
          ))
        ) : (
          <p>No sketches available</p> // Show message if no sketches found
        )}
      </div>
    </div>
  );
};

export default Sketching;
