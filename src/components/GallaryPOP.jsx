import React from "react";
import "./Gallary.css";

const GallaryPOP = (props) => {
  const { setShowPainting, setShowSkeching, setShowBody, setShowGalleryPopup } =
    props;
  const handlePainting = () => {
    setShowPainting(true);
    setShowBody(false);
    setShowGalleryPopup(false);
    setShowSkeching(false);
  };
  const handleSkecting = () => {
    setShowSkeching(true);
    setShowBody(false);
    setShowPainting(false)
    setShowGalleryPopup(false);
  };
  return (
    <div className="gallary-pop-buttons">
      <button onClick={handlePainting}>Painting</button>
      <button onClick={handleSkecting}>Sketching</button>
    </div>
  );
};

export default GallaryPOP;
