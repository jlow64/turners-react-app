import React from "react";
import GroupInsurance1 from "../GroupInsurance1";
import "./Group89.css";

function Group89(props) {
  const { turnersRewards, text16, className } = props;

  return (
    <div className={`group-89 ${className || ""}-insurance`}>
      <GroupInsurance1 />
      <div className="turners-rewards-insurance valign-text-middle lato-bold-cape-cod-20px">{turnersRewards}</div>
      <p className="text-7-insurance lato-light-black-12px">{text16}</p>
    </div>
  );
}

export default Group89;
