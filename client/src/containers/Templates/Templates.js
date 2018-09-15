import React, { Component } from "react";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import TemplateLists from "./TemplatesLists/TemplatesLists";
import ActionBar from "./ActionBar/ActionBar";

class Templates extends Component {
  render() {
    return (
      <div>
        <Header />
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
