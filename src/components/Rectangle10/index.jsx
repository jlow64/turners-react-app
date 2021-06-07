import React from "react";
import "./Rectangle10.css";

function Rectangle10(props) {
  const { className } = props;

  return <div className={`rectangle-2 smart-layers-pointers ${className || ""}`}></div>;
}

export default Rectangle10;
