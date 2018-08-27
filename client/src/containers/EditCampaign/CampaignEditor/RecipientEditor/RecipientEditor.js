import React, { Component, Fragment } from "react";
import recipientValidator from "./recipientValidator";

class RecipientEditor extends Component {
  state = {
    edit: false,
    recipients: "",
    errorMessage: ""
  };

  changeEditTrue = () => {
    this.setState({ edit: true });
  };

  changeEditFalse = () => {
    this.setState({ edit: false });
  };

  onInputChange = e => {
    this.setState({ recipients: e.target.value });
  };

  onRecipientSave = () => {
    const { isValid, message } = recipientValidator(this.state.recipients);
    if (isValid) {
      this.setState({ errorMessage: "" });
      const recipients = this.state.recipients;
      //calls the parent function on CampaignEditor
      this.props.saveRecipients(recipients);
      this.setState({ edit: false });
    } else {
      this.setState({ errorMessage: message });
    }
  };

  static getDerivedStateFromProps = (nextProps, nextState) => {
    // If the user is in edit mode then only the recipients can be changed
    // If the user clicks on save then it changes the recipients calling the function from  CampaignEditor
    // and nextProps.recipients gives new recipients
    // If the user cancels from edit mode then recipients is set to default from the state of CampaignEditor.
    if (!nextState.edit && nextState.recipients !== nextProps.recipients) {
      return {
        recipients: nextProps.recipients
      };
    }
  };

  render() {
    return (
      <div className="RecipientEditor">
        <div className="RecipientEditor-brand">
          <h1 className="RecipientEditor__h1">To</h1>
          <p className="RecipientEditor__p">
            Who are you sending this campaign to?
          </p>

          {this.state.edit && (
            <Fragment>
              <p className="RecipientEditor__label">List</p>
              <input
                type="text"
                className="RecipientEditor__audience-list"
                value={this.state.recipients}
                onChange={this.onInputChange}
              />
              <p>Please provide the email separated by comma</p>
              <p>{this.state.errorMessage}</p>
              <button onClick={this.onRecipientSave}>Save</button>
              <button onClick={this.changeEditFalse}>Cancel</button>
            </Fragment>
          )}
        </div>
        {!this.state.edit && (
          <div className="RecipientEditor-action">
            <button onClick={this.changeEditTrue}>Edit Recipients</button>
          </div>
        )}
      </div>
    );
  }
}

export default RecipientEditor;
