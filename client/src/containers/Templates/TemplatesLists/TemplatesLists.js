import React, { Component } from "react";
import { connect } from "react-redux";
import TemplateList from "./TemplateList/TemplateList";
import { ClipLoader } from "react-spinners";

class TemplateLists extends Component {
  renderTemplateList = () => {
    const { lists: templateLists, loading } = this.props.templates;

    //If loading
    if (loading) {
      return (
        <ClipLoader
          sizeUnit={"px"}
          size={35}
          color={"#123abc"}
          loading={true}
        />
      );
    }
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
