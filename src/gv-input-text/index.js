import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import "./style.scss";

class GVTextField extends React.Component {
  state = {
    focused: false
  };

  showError = () =>
    this.props.touched &&
    this.props.error && (
      <div className="gv-text-field__error">{this.props.error}</div>
    );

  handleFocus = () => {
    this.setState({ focused: true, shrink: true });
  };

  handleBlur = e => {
    this.setState({
      focused: false
    });

    if (this.props.onBlur) this.props.onBlur(e);
  };

  renderLabel = () => {
    if (!this.props.label) return null;
    return (
      <label
        className={classnames("gv-text-field__label", {
          "gv-text-field__label--shrink":
            this.state.focused ||
            this.props.adornment ||
            (this.props.value && this.props.value.length > 0)
        })}
      >
        {this.props.label}
      </label>
    );
  };

  renderAdornment = () => {
    const { adornment, adornmentPosition } = this.props;
    if (!adornment) return null;
    return (
      <div
        className={classnames("gv-text-field__adornment", {
          "gv-text-field__adornment--start": adornmentPosition === "start",
          "gv-text-field__adornment--end": adornmentPosition === "end"
        })}
      >
        {adornment}
      </div>
    );
  };

  renderInput = () => {
    const {
      type,
      onBlur,
      className,
      touched,
      error,
      adornment,
      adornmentPosition,
      ...otherProps
    } = this.props;
    return (
      <input
        type={type || "text"}
        className={classnames("gv-text-field__input")}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        {...otherProps}
      />
    );
  };
  render() {
    return (
      <div className="gv-text-field__wrapper">
        {this.renderLabel()}
        <div
          className={classnames(this.props.className || "gv-text-field", {
            "gv-text-field--disabled": this.props.disabled,
            "gv-text-field--invalid": this.props.touched && this.props.error,
            "gv-text-field--focused": this.state.focused
          })}
        >
          {this.renderInput()}
          {this.renderAdornment()}
        </div>
        {this.showError()}
      </div>
    );
  }
}

export default GVTextField;

GVTextField.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  touched: PropTypes.bool,
  error: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  adornment: PropTypes.node,
  adornmentPosition: PropTypes.oneOf(["start", "end"]),
  onChange: PropTypes.func,
  onBlur: PropTypes.func
};

GVTextField.defaultProps = {
  adornmentPosition: "end"
};
