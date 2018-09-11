import React, { Component, Fragment } from "react";
import validator from "validator";
import isEmpty from "../../../../utils/is-empty";

class SenderEditor extends Component {
  state = {
    edit: false,
    senderName: "",
    email: "",
    emailErrorMessage: "",
    nameErrorMessage: ""
  };

  changeEditTrue = () => {
    this.setState({ edit: true });
  };

  changeEditFalse = () => {
    this.setState({ edit: false });
  };

  onSenderNameChange = e => {
    this.setState({ senderName: e.target.value });
  };

  onEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  onRecipientSave = () => {
    //valdiator only checks for empty in string so I have to create one my own
    if (isEmpty(this.state.senderName)) {
      this.setState({ nameErrorMessage: "Please fill the name" });
    }
    if (isEmpty(this.state.email)) {
      return this.setState({ emailErrorMessage: "Please provide some email" });
    }
    const isValid = validator.isEmail(this.state.email);
    if (isValid) {
      //takes first paramter name and second email
      this.props.saveSenderAndEmail(this.state.senderName, this.state.email);
      this.setState({ emailErrorMessage: "", nameErrorMessage: "" });
      this.setState({ edit: false });
    } else {
      this.setState({ emailErrorMessage: "Invalid Email" });
    }
  };

  static getDerivedStateFromProps = (nextProps, nextState) => {
    // See Name Editor docs for understanding this line
    if (!nextState.edit && nextState.senderName !== nextProps.senderName) {
      return {
        senderName: nextProps.senderName
      };
    }
    if (!nextState.edit && nextState.email !== nextProps.email) {
      return {
        email: nextProps.email
      };
    }
  };

  render() {
    return (
      <div className="SenderEditor">
        <div className="SenderEditor-brand">
          <h1 className="SenderEditor__heading grey-header">From</h1>
          <p className="SenderEditor__sub-text grey-italic-text">
            Who is sending this campaign
          </p>

          {this.state.edit && (
            <Fragment>
              <p className="SenderEditor__namelabel grey-text">Name</p>
              <input
                type="text"
                className="SenderEditor__name"
                value={this.state.senderName}
                onChange={this.onSenderNameChange}
                placeholder="Use something subscriber will instantly recognize"
              />
              <p className="error-text">{this.state.nameErrorMessage}</p>
              <p className="SenderEditor__emaillabel grey-text">Email</p>
              <input
                type="email"
                className="SenderEditor__email"
                value={this.state.email}
                onChange={this.onEmailChange}
              />
              <p className="error-text">{this.state.emailErrorMessage}</p>
              <button
                className="SenderEditor__save-btn"
                onClick={this.onRecipientSave}
              >
                Save
              </button>
              <span
                className="SenderEditor__cancel-btn underlined-blue-text"
                onClick={this.changeEditFalse}
              >
                Cancel
              </span>
            </Fragment>
          )}
        </div>
        {!this.state.edit && (
          <div className="SenderEditor__action">
            <button
              className="SenderEditor__action__button"
              onClick={this.changeEditTrue}
            >
              Edit Recipients
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default SenderEditor;
