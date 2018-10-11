import React, { Component } from "react";
import SingleField from "./SingleField/SingleField";
import formFields from "./formFields";

class ContactForm extends Component {
  renderFormFields() {
    return formFields.map(field => {
      return (
        <SingleField label={field.label} name={field.name} type={field.type} />
      );
    });
  }
  render() {
    return (
      <div className="ContactForm">
        <div className="ContactForm__header">
          <h1 className="ContactForm__header__title">Contact Us</h1>
          <h2 className="ContactForm__header__subtitle">
            Feel free to contact us for any question about our products and
            services.
          </h2>
        </div>
        <div className="container">
          <div className="ContactForm__form-container">
            <form action="" className="ContactForm__form">
              {this.renderFormFields()}
              <div className="ContactForm__form-footer">
                <div>required</div>
                <input
                  className="ContactForm__form-submit"
                  type="submit"
                  text="SEND"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactForm;
