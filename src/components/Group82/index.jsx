import React from "react";
import Image from "../Image";
import "./Group82.css";

function Group82(props) {
  const { nzsMostTrusted, spanText, spanText2, className } = props;

  return (
    <div className={`group-82 ${className || ""}`}>
      <div className="overlap-group15">
        <div className="overlap-group13-4">
          <Image className="image-1" />
        </div>
        <div className="flex-col-3">
          <div className="nzs-most-trusted valign-text-middle lato-bold-cape-cod-25px">{nzsMostTrusted}</div>
          <div className="default">
            <p className="text-2 lato-light-black-14px">
              <span>{spanText}</span>
              <span className="span-1 lato-medium-black-14px">{spanText2}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Group82;
