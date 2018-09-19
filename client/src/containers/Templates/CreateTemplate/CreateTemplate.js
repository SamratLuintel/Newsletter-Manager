import React, { Component, Fragment } from "react";
import EmailEditor from "react-email-editor";
import axios from "axios";
import isEmpty from "../../../utils/is-empty";
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";
import ProgressMessage from "../../../components/ProgressMessage/ProgressMessage";
import {
  saveTemplate,
  createTemplate
} from "../../../store/actions/template/template";
import { withRouter } from "react-router-dom";
import { resetSavingMessage } from "../../../store/actions/template/message";
import { connect } from "react-redux";

class CreateTemplate extends Component {
  state = {
    name: "",
    error: "",
    errorClosed: false
  };

  onInputChange = e => {
    this.setState({ name: e.target.value });
  };

  onErrorClosed = e => {
    this.setState({ errorClosed: true });
  };

  templateProgressMessage = () => {
    let progress;
    if (this.props.templateStatus.saving || this.props.templateStatus.saved) {
      progress = <ProgressMessage message="Your template is being saved" />;
    }
    return progress;
  };

  cancelButton = () => {
    this.props.history.push("/templates");
  };

  render() {
    return (
      <Fragment>
        <div className="CreateTemplate">
          <div className="CreateTemplate__header">
            <input
              type="text"
              placeholder="Name"
              value={this.state.name}
              onChange={this.onInputChange}
              className="CreateTemplate__name-input"
            />
            <div className="CreateTemplate__button-container">
              <div
                onClick={this.cancelButton}
                className="CreateTemplate__cancel-btn CreateTemplate__header__nav"
              >
                Cancel
              </div>
              <div
                className="CreateTemplate__save-btn CreateTemplate__header__nav"
                onClick={this.saveDesign}
              >
                Save Design
              </div>
            </div>
          </div>
          {this.state.error &&
            !this.state.errorClosed && (
              <ErrorMessage
                onCrossed={this.onErrorClosed}
                message={this.state.error}
              />
            )}
          {this.templateProgressMessage()}
          <EmailEditor
            minHeight="100vh"
            ref={editor => (this.editor = editor)}
            onLoad={this.onLoad}
          />
        </div>
      </Fragment>
    );
  }
  saveDesign = () => {
    if (isEmpty(this.state.name)) {
      return this.setState({
        error: "You must provide a name before saving",
        errorClosed: false
      });
    }
    this.editor.saveDesign(design => {
      const { auth, history } = this.props;
      this.props.createTemplate(design, this.state.name, auth.token, history);
    });
  };
  onLoad = async () => {
    try {
      const template = await axios.get(
        "user/templates/5b6eed0bab7ae61258e2ddac"
      );
      this.editor.loadDesign(template.data);
    } catch (err) {
      console.log("From Create Template", err);
    }
  };
}

const mapStateToProps = state => ({
  auth: state.auth,
  templateStatus: state.templates.templateStatus
});
export default connect(
  mapStateToProps,
  { createTemplate, saveTemplate, resetSavingMessage }
)(withRouter(CreateTemplate));
