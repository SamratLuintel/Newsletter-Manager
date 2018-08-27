import React, { Component } from "react";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import TemplateLists from "./TemplatesLists/TemplateLists";

class Templates extends Component {
  render() {
    return (
      <div>
        <Header loggedin={true} />
        <div className="Template">
          <div className="Template__header">
            <h1 className="Template__header_h1">Templates</h1>
            <button className="Template__header_create">Create Template</button>
          </div>
          <TemplateLists />
        </div>
      </div>
    );
  }
}

export default Templates;
