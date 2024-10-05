import React from "react";
import "./ShimmerUi.css"; // Importing the CSS for shimmer effect

const ShimmerUi = () => {
  return (
    <div className="shimmer-artworks-container">
      {Array(6) // Display 6 shimmer cards to simulate the loading
        .fill("")
        .map((_, index) => (
          <div key={index} className="shimmer-artwork-card">
            <div className="shimmer-artwork-image"></div>
            <div className="shimmer-artwork-title"></div>
          </div>
        ))}
    </div>
  );
};

export default ShimmerUi;
