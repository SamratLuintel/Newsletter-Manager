import React, { Component, Fragment } from "react";
import EmailEditor from "react-email-editor";
import axios from "axios";
import isEmpty from "../../../utils/is-empty";
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage";

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
              <div className="CreateTemplate__cancel-btn CreateTemplate__header__nav">
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
          <EmailEditor
            minHeight="100vh"
            ref={editor => (this.editor = editor)}
            onLoad={this.onLoad}
          />
        </div>
      </Fragment>
    );
  }
  exportHtml = () => {
    this.editor.exportHtml(data => {
      const { html } = data;
    });
  };
  saveDesign = () => {
    if (isEmpty(this.state.name)) {
      return this.setState({
        error: "You must provide a name before saving",
        errorClosed: false
      });
    }
    this.editor.saveDesign(design => {
      console.log("This line is called");
      console.log(design);
      axios.post("/user/templates/create", {
        design,
        name: this.state.name
      });
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

export default CreateTemplate;
