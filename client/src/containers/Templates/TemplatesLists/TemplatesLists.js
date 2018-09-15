import React, { Component } from "react";
import { connect } from "react-redux";
import TemplateList from "./TemplateList/TemplateList";
import { ClipLoader } from "react-spinners";
import moment from "moment";

class TemplateLists extends Component {
  renderTemplateList = () => {
    const {
      lists: templateLists,
      filter: { text, sortBy },
      loading
    } = this.props.templates;

    const {
      auth: { token }
    } = this.props;

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

    console.log("Tempalte Lists sort by is", sortBy);
    if (templateLists) {
      const visibleTemplates = this.getVisibleTemplates(templateLists, {
        text,
        sortBy
      });
      if (visibleTemplates.length === 0) {
        return <p>No Campaign found</p>;
      }
      return visibleTemplates.map(({ name, lastEdited, _id }) => {
        return (
          <TemplateList
            name={name}
            lastEdited={lastEdited}
            key={_id}
            id={_id}
            token={token}
          />
        );
      });
    }
  };
  //Sorts the campaign by text and date and shows only the available campaign
  getVisibleTemplates = (templates, { text, sortBy }) => {
    //filters the campaign by text
    let filteredTemplates = templates.filter(template => {
      const textMatch =
        text === "" || template.name.toLowerCase().includes(text.toLowerCase());
      return textMatch;
    });

    //sorts the campaign
    if (sortBy === "latest") {
      return filteredTemplates.sort((a, b) =>
        moment.utc(b.lastEdited).diff(moment.utc(a.lastEdited))
      );
    } else if (sortBy === "oldest") {
      return filteredTemplates.sort((a, b) =>
        moment.utc(a.lastEdited).diff(moment.utc(b.lastEdited))
      );
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
