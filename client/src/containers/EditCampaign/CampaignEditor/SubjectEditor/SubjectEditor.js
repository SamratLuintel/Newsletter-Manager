import React, { Component, Fragment } from "react";
import isEmpty from "../../../../utils/is-empty";

class SubjectEditor extends Component {
  state = {
    edit: false,
    subject: "",
    errorMessage: ""
  };

  changeEditTrue = () => {
    this.setState({ edit: true });
  };

  changeEditFalse = () => {
    this.setState({ edit: false });
  };

  onInputChange = e => {
    this.setState({ subject: e.target.value });
  };

  onSubjectSave = () => {
    //valdiator only checks for empty in string so I have to create one my own
    if (isEmpty(this.state.subject)) {
      return this.setState({ errorMessage: "Please provide the subject" });
    }
    console.log("This line is called");
    this.props.saveSubject(this.state.subject);
    this.setState({ edit: false, errorMessage: "" });
  };

  static getDerivedStateFromProps = (nextProps, nextState) => {
    // See the docs of Name Editor if you cant understand this line
    if (!nextState.edit && nextState.subject !== nextProps.subject) {
      return {
        subject: nextProps.subject
      };
    }
  };

  render() {
    return (
      <div className="SubjectEditor">
        <div className="SubjectEditor-brand">
          <h1 className="SubjectEditor__heading-text grey-header">Subject</h1>
          <p className="SubjectEditor__sub-text grey-italic-text">
            What's the subject line for this campaign?
          </p>

          {this.state.edit && (
            <Fragment>
              <p className="SubjectEditor__label grey-text">Subject</p>
              <input
                type="text"
                className="SubjectEditor__subject-input"
                value={this.state.subject}
                onChange={this.onInputChange}
                placeholder="Please provide the subject of your email"
              />
              <p className="error-text">{this.state.errorMessage}</p>
              <button
                className="SubjectEditor__save"
                onClick={this.onSubjectSave}
              >
                Save
              </button>
              <span
                className="SubjectEditor__cancel underlined-blue-text"
                onClick={this.changeEditFalse}
              >
                Cancel
              </span>
            </Fragment>
          )}
        </div>
        {!this.state.edit && (
          <div className="SubjectEditor__action">
            <button
              className="SubjectEditor__action__button"
              onClick={this.changeEditTrue}
            >
              Edit Subject
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default SubjectEditor;
