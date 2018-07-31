import React from "react";
import { Field } from "formik";

const GVFormikField = ({ component: Component, ...props }) => {
  const { name, ...otherProps } = { ...props };
  return (
    <Field
      name={name}
      render={({ field, form }) => {
        return (
          <Component
            {...field}
            {...otherProps}
            touched={form.touched[field.name]}
            error={form.errors[field.name]}
          />
        );
      }}
    />
  );
};

export default GVFormikField;
