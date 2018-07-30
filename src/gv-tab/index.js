import classnames from "classnames";
import React from "react";

import "./style.scss";

const GVTab = ({ label, value, selected, className, onChange, onClick }) => {
  const handleChange = e => {
    if (onChange) {
      onChange(e, value);
    }
    if (onClick) {
      onClick(e, value);
    }
  };

  return (
    <div
      className={classnames(className || "gv-tab", {
        "gv-tab--active": selected
      })}
      onClick={handleChange}
    >
      {label}
    </div>
  );
};

export default GVTab;
