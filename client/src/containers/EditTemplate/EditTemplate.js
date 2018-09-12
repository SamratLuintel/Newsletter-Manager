import React, { Component, Fragment } from "react";
import EmailEditor from "react-email-editor";
import axios from "axios";
import isEmpty from "../../utils/is-empty";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

class EditTemplate extends Component {
  state = {
    name: "",
    error: "",
    // This error is shown when something goes wrong while fetching data from server
    fetchingError: ""
  };

  onInputChange = e => {
    this.setState({ name: e.target.value });
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
      return this.setState({ error: "You must provide a name before saving" });
    }
    const id = this.props.match.params.id;

    this.editor.exportHtml(data => {
      const { html } = data;
      this.editor.saveDesign(async design => {
        console.log("This saveDesign is called");
        try {
          await axios.post(`/user/templates/${id}`, {
            design,
            name: this.state.name,
            html
          });
          console.log("Successfully saved the design");
        } catch (err) {
          console.log(err);
        }
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
    // const json = JSON.parse(localStorage.getItem('template'));
  };
}

export default EditTemplate;
