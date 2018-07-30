import React, { Component } from "react";

import "./App.css";
import "./styles/common.scss";
import { Field, withFormik } from "formik";

import GVTextField from "./gv-input-text";
import withFormikField from "./with-formik-field";

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

        <Field
          type="email"
          name="email"
          label="Email"
          render={withFormikField(GVTextField)}
        />
        <Field
          type="password"
          name="password"
          label="Password"
          component={withFormikField(GVTextField)}
        />
        <Field name="firstName" component={CustomInputComponent} />
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
  //validationSchema: validationSchema,
  handleSubmit: (values, { props, setSubmitting }) => {
    props.onSubmit(values, setSubmitting);
  }
})(LoginForm);

const CustomInputComponent = ({
  field // { name, value, onChange, onBlur }
}) => (
  <CustomComponent
    onBlur={field.onBlur}
    onChange={field.onChange}
    name={field.name}
    value={field.value}
    placeholder="123"
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
