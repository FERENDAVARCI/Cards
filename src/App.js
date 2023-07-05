import React from "react";
import "./App.css";
import images from "./assets/index";

const rotateImages = () => (
  <div className="App">
    {images.map((image, index) => (
      <img
        key={index}
        src={image}
        alt=""
        style={{ transform: `rotate(${index * 10 - 15}deg)` }}
      />
    ))}
  </div>
);

export default rotateImages;
