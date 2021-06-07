import React from "react";
import "./GroupInsurance1.css";

function GroupInsurance1(props) {
  const { className } = props;

  return (
    <div className={`group-20 ${className || ""}-insurance`}>
      <div className="image-2-insurance">
        <div className="overlap-group9-3-insurance">
          <img
            className="vector-17-insurance"
            src="https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/vector@2x.png"
          />
          <img
            className="vector-16-insurance"
            src="https://anima-uploads.s3.amazonaws.com/projects/60bc802e0d81379b238f1ca0/img/vector-20@2x.svg"
          />
        </div>
      </div>
    </div>
  );
}

export default GroupInsurance1;
