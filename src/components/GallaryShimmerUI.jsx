import React from "react";
import "./GallaryShimmerUI.css"; // Import the CSS file for styling

const GallaryShimmerUI = () => {
  return (
    <div className="shimmer-painting-grid">
      {Array(2) // Display 6 shimmer cards to simulate loading
        .fill("")
        .map((_, id) => (
          <div key={id} className="shimmer-painting-card">
            <div className="shimmer-painting-image"></div>
          </div>
        ))}
    </div>
  );
};

export default GallaryShimmerUI;
