import React, { Component } from "react";
import { connect } from "react-redux";

class TemplateLists extends Component {
  renderTemplateList = () => {
    const { lists: templateLists } = this.props.templates;
    if (templateLists) {
      return templateLists.map(({ name }) => {
        //make the use of individual template
        return <p>{name}</p>;
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
