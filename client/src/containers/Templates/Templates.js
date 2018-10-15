import React, { Component } from "react";
import ApplicationHeader from "../../components/ApplicationHeader/ApplicationHeader";
import ApplicationSideNav from "../../components/ApplicationSideNav/ApplicationSideNav";
import { Link } from "react-router-dom";
import TemplateLists from "./TemplatesLists/TemplatesLists";
import ActionBar from "./ActionBar/ActionBar";
import { withRouter } from "react-router-dom";
class Templates extends Component {
  onCreateTemplateClick = () => {
    this.props.history.push("/templates/create");
  };
  render() {
    return (
      <div>
        <ApplicationSideNav />
        <ApplicationHeader />
        <div className="Template">
          <div className="Template__header">
            <h1 className="Template__header__h1">Templates</h1>
            <button
              className="Template__header__create"
              onClick={this.onCreateTemplateClick}
            >
              Create Template
            </button>
          </div>
          <ActionBar />
          <TemplateLists />
        </div>
      </div>
    );
  }
}

export default withRouter(Templates);
