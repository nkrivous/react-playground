import React, { Component } from "react";

import "./App.css";
import "./styles/common.scss";
import { Field, withFormik } from "formik";

import GVTextField from "./gv-input-text";
import GVFormikField from "./gv-formik-field";

class App extends Component {
  handleSubmit = (loginFormData, setSubmitting) => {
    console.log(loginFormData, setSubmitting);
  };
  render() {
    return (
      <div className="App">
        <LoginFormFormik onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

let LoginForm = ({
  values,
  touched,
  errors,
  isSubmitting,
  handleSubmit,
  error
}) => {
  return (
    <form id="loginForm" onSubmit={handleSubmit} noValidate>
      <div className="login">
        <div className="login__header">Login</div>

        <GVFormikField
          type="email"
          name="email"
          label="Email"
          component={GVTextField}
        />
        <GVFormikField
          type="password"
          name="password"
          placeholder="Password"
          component={GVTextField}
          adornment={<a href="example.com">forgot?</a>}
          adornmentPosition="end"
          disabled
        />
        <input type="submit" />
      </div>
    </form>
  );
};

let LoginFormFormik = withFormik({
  displayName: "login",
  mapPropsToValues: () => ({
    email: "",
    password: ""
  }),
  validate: values => {
    let errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    return errors;
  },
  handleSubmit: (values, { props, setSubmitting }) => {
    props.onSubmit(values, setSubmitting);
  }
})(LoginForm);

const CustomInputComponent = ({ GVComponent, ...props }) => (
  <Field
    {...props}
    name="aaa"
    render={({ field }) => {
      return (
        <GVComponent
          onBlur={field.onBlur}
          onChange={field.onChange}
          name={field.name}
          value={field.value}
          placeholder="123"
        />
      );
    }}
  />
);

const CustomComponent = ({ onBlur, onChange, name, value, ...props }) => {
  return (
    <div>
      <input
        type="text"
        onBlur={onBlur}
        onChange={onChange}
        name={name}
        value={value}
        {...props}
      />
    </div>
  );
};

export default App;
