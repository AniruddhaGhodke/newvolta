import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const loadIcons = ({ icon, impStyle = {}, link = false }) => {
  let style = {
    height: "18px",
    width: "18px",
    color: "white",
  };
  style = { ...style, ...impStyle };
  return link ? (
    <a className="icon" style={style} href={link} target="_blank">
      <FontAwesomeIcon icon={icon} style={{ verticalAlign: "baseline" }} />
    </a>
  ) : (
    <div className="icon" style={style}>
      <FontAwesomeIcon icon={icon} style={{ verticalAlign: "baseline" }} />
    </div>
  );
};

export default loadIcons;
