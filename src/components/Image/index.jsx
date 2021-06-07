import React from "react";
import "./Image.css";

function Image(props) {
  const { className } = props;

  return (
    <div className={`image ${className || ""}`}>
      <div className="overlap-group13-2">
        <img
          className="vector-4"
          src="https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/vector@2x.png"
        />
        <img
          className="vector-5"
          src="https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/vector-2@2x.svg"
        />
      </div>
    </div>
  );
}

export default Image;
