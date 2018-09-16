import React, { Component, Fragment } from "react";
import EmailEditor from "react-email-editor";
import axios from "axios";
import isEmpty from "../../utils/is-empty";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import ProgressMessage from "../../components/ProgressMessage/ProgressMessage";
import { saveTemplate } from "../../store/actions/template/template";
import { resetSavingMessage } from "../../store/actions/template/message";
import { connect } from "react-redux";

class EditTemplate extends Component {
  state = {
    name: "",
    error: "",
    // This error is shown when something goes wrong while fetching data from server
    fetchingError: "",
    //Status message like "template is being saved"
    sending: false,
    sent: false
  };

  onInputChange = e => {
    this.setState({ name: e.target.value });
  };

  onMessageClosed = () => {
    this.props.resetSavingMessage();
  };

  templateProgressMessage = () => {
    let progress;
    if (
      (this.props.templateStatus.saving && !this.state.messageClosed) ||
      (this.props.templateStatus.saved && !this.state.messageClosed)
    ) {
      progress = (
        <ProgressMessage
          message="Your template is being saved"
          finishedMessage="Your template is saved successfully"
          finished={this.props.templateStatus.saved}
          onCrossed={this.onMessageClosed}
        />
      );
    }
    return progress;
  };

  componentDidMount = () => {
    this.props.resetSavingMessage();
  };

  //this.props.match.params.id
  render() {
    return (
      <Fragment>
        <div className="EditTemplate">
          <div className="EditTemplate__header">
            <input
              type="text"
              placeholder="Name"
              value={this.state.name}
              onChange={this.onInputChange}
              className="EditTemplate__name-input"
            />
            <div className="EditTemplate__button-container">
              <div className="EditTemplate__cancel-btn EditTemplate__header__nav">
                Cancel
              </div>
              <div
                className="EditTemplate__save-btn EditTemplate__header__nav"
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
      return this.setState({ error: "You must provide a name before saving" });
    }
    const { auth } = this.props;
    const id = this.props.match.params.id;
    this.editor.exportHtml(data => {
      const { html } = data;
      this.editor.saveDesign(async design => {
        console.log("This saveTemplate is called");
        this.props.saveTemplate(design, this.state.name, html, id, auth.token);
      });
    });
  };

  onLoad = async () => {
    const id = this.props.match.params.id;
    try {
      const res = await axios.get(`/user/templates/${id}`);
      this.setState({ name: res.data.name });
      this.editor.loadDesign(res.data.template);
    } catch (err) {
      console.log(err);
    }
  };
}
const mapStateToProps = state => ({
  auth: state.auth,
  templateStatus: state.templates.templateStatus
});
export default connect(
  mapStateToProps,
  { saveTemplate, resetSavingMessage }
)(EditTemplate);
