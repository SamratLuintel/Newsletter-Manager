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
          <h1 className="SenderEditor__h1">From</h1>
          <p className="SenderEditor__p">Who is sending this campaign</p>

          {this.state.edit && (
            <Fragment>
              <p className="SenderEditor__namelabel">Name</p>
              <input
                type="text"
                className="SenderEditor__audience-list"
                value={this.state.senderName}
                onChange={this.onSenderNameChange}
              />
              <p>Use something subscriber will instantly recognize</p>
              <p>{this.state.nameErrorMessage}</p>
              <p className="SenderEditor__emaillabel">Email</p>
              <input
                type="email"
                className="SenderEditor__email"
                value={this.state.email}
                onChange={this.onEmailChange}
              />
              <p>{this.state.emailErrorMessage}</p>
              <button onClick={this.onRecipientSave}>Save</button>
              <button onClick={this.changeEditFalse}>Cancel</button>
            </Fragment>
          )}
        </div>
        {!this.state.edit && (
          <div className="SenderEditor-action">
            <button onClick={this.changeEditTrue}>Edit Recipients</button>
          </div>
        )}
      </div>
    );
  }
}

export default SenderEditor;
