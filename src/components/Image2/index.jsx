import React from "react";
import "./Image2.css";

function Image2(props) {
  const { vector2 } = props;

  return (
    <div className="image-3">
      <div className="overlap-group13-3">
        <img
          className="vector-7"
          src="https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/vector@2x.png"
        />
        <img className="vector-6" src={vector2} />
      </div>
    </div>
  );
}

export default Image2;
