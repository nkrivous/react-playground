import classnames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import GVRipple from "../gv-ripple";

import "./style.scss";

class GVButton extends React.Component {
  render() {
    const {
      className,
      title,
      variant,
      color,
      disabled,
      onClick,
      children
    } = this.props;

    const classname = classnames("gv-btn", className, {
      "gv-btn--primary": color === "primary",
      "gv-btn--secondary": color === "secondary",
      "gv-btn--outlined": variant === "outlined",
      "gv-btn--contained": variant === "contained"
    });
    return (
      <button
        disabled={disabled}
        className={classname}
        onClick={onClick}
        title={title}
      >
        {children}
        <GVRipple />
      </button>
    );
  }
}

GVButton.propTypes = {
  title: PropTypes.string,
  variant: PropTypes.oneOf(["text", "outlined", "contained"]),
  color: PropTypes.oneOf(["default", "primary", "secondary"]),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

GVButton.defaultProps = {
  variant: "contained",
  color: "default"
};

export default GVButton;
