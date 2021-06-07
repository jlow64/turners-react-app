import React from "react";
import "./ImageInsurance.css";

function ImageInsurance(props) {
  const { className } = props;

  return (
    <div className={`image ${className || ""}`}>
      <div className="overlap-group9-2-insurance">
        <img
          className="vector-15-insurance"
          src="https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/vector@2x.png"
        />
        <img
          className="vector-14-insurance"
          src="https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/vector-2@2x.svg"
        />
      </div>
    </div>
  );
}

export default ImageInsurance;
