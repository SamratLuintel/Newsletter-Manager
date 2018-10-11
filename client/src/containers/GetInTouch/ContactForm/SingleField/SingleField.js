import React from "react";

export default props => {
  return (
    <div className="ContactForm__single-field">
      <p className="ContactForm__single-field__label">
        {props.label} <span className="ContactForm__single-field__star">*</span>
      </p>
      {props.type === "input" && (
        <input type="text" className="ContactForm__single-field__input" />
      )}
      {props.type === "textarea" && (
        <textarea rows="7" className="ContactForm__single-field__input" />
      )}
    </div>
  );
};
