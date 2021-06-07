import React from "react";
import "./Group92.css";

function Group92(props) {
  const { src, className } = props;

  return (
    <div className={`group-92 ${className || ""}-insurance`}>
      <img className="vector-18-insurance" src={src} />
    </div>
  );
}

export default Group92;
