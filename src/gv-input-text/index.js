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

  handleBlur = () => {
    this.setState({
      focused: false
    });
  };

  renderLabel = () => {
    if (!this.props.label) return null;
    return (
      <label
        className={classnames("gv-text-field__label", {
          "gv-text-field__label--shrink":
            this.state.focused ||
            (this.props.value && this.props.value.length > 0)
        })}
      >
        {this.props.label}
      </label>
    );
  };

  renderInput = () => {
    return (
      <div
        className={classnames(this.props.className || "gv-text-field", {
          "gv-text-field--invalid": this.props.touched && this.props.error,
          "gv-text-field--focused": this.state.focused
        })}
      >
        <input
          type="text"
          className={classnames("gv-text-field__input")}
          type="text"
          onBlur={this.props.onBlur}
          onChange={this.props.onChange}
          name={this.props.name}
          value={this.props.value}
          placeholder={this.props.placeholder}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          {...this.props}
        />
      </div>
    );
  };
  render() {
    return (
      <div className="gv-text-field__wrapper">
        {this.renderLabel()}
        {this.renderInput()}
        {this.showError()}
      </div>
    );
    /*({
    //field, // { name, value, onChange, onBlur }
    label,
    name,
    value, //field.value
    touched, //touched[field.name]
    error, //errors[field.name]
    setFieldValue, // form.setFieldValue
    number,
    className,
    //form: { touched, errors, setFieldValue }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    ...props
  }) =>*/
  }
}

export default GVTextField;

GVTextField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  touched: PropTypes.bool,
  error: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func
};
