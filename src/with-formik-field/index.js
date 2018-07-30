import React from "react";

const withFormikField = Component => ({ field, form, ...props }) => {
  return (
    <Component
      touched={form.touched[field.name]}
      error={form.errors[field.name]}
      onBlur={field.onBlur}
      onChange={field.onChange}
      name={field.name}
      value={field.value}
      {...props}
    />
  );
};

export default withFormikField;
