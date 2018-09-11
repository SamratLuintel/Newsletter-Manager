import React, { Component, Fragment } from "react";

class TemplateEditor extends Component {
  state = {
    edit: false,
    template: "",
    errorMessage: ""
  };

  changeEditTrue = () => {
    this.setState({ edit: true });
  };

  changeEditFalse = () => {
    this.setState({ edit: false });
  };

  handleSelectChange = e => {
    this.setState({ template: e.target.value });
  };

  onTemplateSave = () => {
    if (this.state.template === "default") {
      return this.setState({ errorMessage: "Please select a template" });
    }
    const template = this.state.template;
    //calls the parent function on CampaignEditor
    this.props.saveTemplate(template);
    this.setState({ edit: false, errorMessage: "" });
  };

  selectTemplate = () => {
    if (!this.props.templateLists) return;
    return (
      <select
        className="TemplateEditor__select"
        value={this.state.template}
        onChange={this.handleSelectChange}
      >
        <option value="default">Select A Template </option>
        {this.props.templateLists.map(template => (
          <option value={template._id} key={template._id}>
            {template.name}
          </option>
        ))}
      </select>
    );
  };

  static getDerivedStateFromProps = (nextProps, nextState) => {
    if (!nextState.edit && nextState.template !== nextProps.template) {
      return {
        template: nextProps.template
      };
    }
  };

  render() {
    return (
      <div className="TemplateEditor">
        <div className="TemplateEditor-brand">
          <h1 className="TemplateEditor__heading grey-header">Content</h1>
          <p className="TemplateEditor__sub-text grey-italic-text">
            Choose the template you want to send to the user
          </p>

          {this.state.edit && (
            <Fragment>
              {this.selectTemplate()}
              <p className="error-text">{this.state.errorMessage}</p>
              <button
                className="TemplateEditor__save-btn"
                onClick={this.onTemplateSave}
              >
                Save
              </button>
              <span
                className="TemplateEditor__cancel underlined-blue-text"
                onClick={this.changeEditFalse}
              >
                Cancel
              </span>
            </Fragment>
          )}
        </div>
        {!this.state.edit && (
          <div className="TemplateEditor__action">
            <button
              className="TemplateEditor__action__button"
              onClick={this.changeEditTrue}
            >
              Design Email
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default TemplateEditor;
