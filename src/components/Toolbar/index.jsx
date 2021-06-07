import React from "react";
import "./Toolbar.css";

function Toolbar(props) {
  const { x2021Turners, surname, newsletter, emailAlerts, facebook, instagram } = props;

  return (
    <div className="toolbar">
      <div className="x2021-turners valign-text-middle">{x2021Turners}</div>
      <div className="surname-1 valign-text-middle mulish-semi-bold-white-18px">{surname}</div>
      <div className="newsletter valign-text-middle mulish-semi-bold-white-18px">{newsletter}</div>
      <div className="email-alerts-1 valign-text-middle mulish-semi-bold-white-18px">{emailAlerts}</div>
      <div className="facebook valign-text-middle mulish-semi-bold-white-18px">{facebook}</div>
      <div className="instagram valign-text-middle mulish-semi-bold-white-18px">{instagram}</div>
    </div>
  );
}

export default Toolbar;
