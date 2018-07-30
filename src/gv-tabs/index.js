import React from "react";
import classnames from "classnames";
import "./style.scss";

const GVTabs = ({ className, value, onChange, children }) => {
  const tabs = children.map(child => {
    const childValue = child.props.value;
    const selected = childValue === value;
    return React.cloneElement(child, {
      selected,
      onChange
    });
  });
  return <div className={classnames(className || "gv-tabs")}>{tabs}</div>;
};

export default GVTabs;
