import React from "react";
import "./Links.css";

function Links(props) {
  const { findACar, sellYourCar, finance, insurance } = props;

  return (
    <div className="links-insurance">
      <div className="find-a-car-insurance valign-text-middle mulish-semi-bold-cape-cod-16px">{findACar}</div>
      <div className="sell-your-car-insurance valign-text-middle mulish-semi-bold-cape-cod-16px">{sellYourCar}</div>
      <div className="finance-insurance valign-text-middle mulish-semi-bold-cape-cod-16px">{finance}</div>
      <div className="insurance-insurance valign-text-middle mulish-semi-bold-cape-cod-16px">{insurance}</div>
    </div>
  );
}

export default Links;
