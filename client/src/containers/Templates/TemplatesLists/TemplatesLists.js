import React, { Component } from "react";
import { connect } from "react-redux";
import TemplateList from "./TemplateList/TemplateList";

class TemplateLists extends Component {
  renderTemplateList = () => {
    const { lists: templateLists } = this.props.templates;
    console.log(templateLists);
    if (templateLists) {
      return templateLists.map(({ name, lastEdited }) => {
        //make the use of individual template
        return <TemplateList name={name} lastEdited={lastEdited} />;
      });
    }
  };

  render() {
    return (
      <div className="Template__listItem">{this.renderTemplateList()}</div>
    );
  }
}

const mapStateToProps = state => ({
  templates: state.templates,
  auth: state.auth
});

export default connect(mapStateToProps)(TemplateLists);
