import React from "react";
import { useTypewriter } from "react-simple-typewriter";


const Text = () => {
  const [text] = useTypewriter({
    words: ["Sketching ✍️", "Painting 🎨", "Crafting 🧶"],
    loop: {},
    cursor: true,
    cursorStyle: "_",
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <div className="typewriter-container">
      <span className="typewriter-text">{text}</span>
    </div>
  );
};

export default Text;
