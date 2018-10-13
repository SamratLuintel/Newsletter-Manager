import React, { Component } from "react";
import ApplicationHeader from "../../components/ApplicationHeader/ApplicationHeader";
import ApplicationSideNav from "../../components/ApplicationSideNav/ApplicationSideNav";
import { Link } from "react-router-dom";
import TemplateLists from "./TemplatesLists/TemplatesLists";
import ActionBar from "./ActionBar/ActionBar";

class Templates extends Component {
  render() {
    return (
      <div>
        <ApplicationSideNav />
        <ApplicationHeader />
        <div className="Template">
          <div className="Template__header">
            <h1 className="Template__header__h1">Templates</h1>
            <button className="Template__header__create">
              <Link
                to="/templates/create"
                className="Template__header__create__text"
              >
                {" "}
                Create Template
              </Link>
            </button>
          </div>
          <ActionBar />
          <TemplateLists />
        </div>
      </div>
    );
  }
}

export default Templates;
