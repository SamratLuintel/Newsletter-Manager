import React, { Component } from "react";

const SignUpField = ({ input, label, meta: { touched, error } }) => {
  return (
    <div className="formField">
      <label className="formField__label">{label}</label>

      <div className="formField__input-wrapper">
        <input
          className="formField__input"
          {...input}
          placeholder={label}
          type="text"
        />

        {touched && error && <p className="formField__error">{error}</p>}
      </div>
    </div>
  );
};

export default SignUpField;
