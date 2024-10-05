import React, { useEffect, useState } from "react";
import { storage } from "../utils/Data/firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import "./Painting.css"; 
import ShimmerUi from "./ShimmerUi";

const Painting = () => {
  const [paintingList, setPaintingList] = useState([]);
  const imageListRef = ref(storage, "Painting/");

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await listAll(imageListRef);
        const urls = await Promise.all(
          res.items.map((item) => getDownloadURL(item))
        );
        setPaintingList(urls);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="painting-container">
      <h1 className="painting-title">Painting</h1>
      <div className="painting-grid">
        {paintingList.length > 0 ? (
          paintingList.map((url, id) => (
            <div key={id} className="painting-card">
              <img src={url} alt={""} className="painting-image" />
            </div>
          ))
        ) : (
          <ShimmerUi />
        )}
      </div>
    </div>
  );
};

export default Painting;
