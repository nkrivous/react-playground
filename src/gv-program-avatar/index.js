import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import logo from "./manager-avatar.png";
import "./style.scss";

const GVProgramAvatar = ({ url, alt, level, className }) => {
  const handleError = e => {
    e.target.src = logo;
  };
  return (
    <div className={classnames("program-avatar", className)}>
      <img
        className="program-avatar__image"
        src={url}
        alt={alt}
        onError={handleError}
      />
      <span className="program-avatar__level">{level}</span>
    </div>
  );
};

GVProgramAvatar.protoTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  className: PropTypes.string
};

export default GVProgramAvatar;
