import React, { Component } from "react";

class TemplateList extends Component {
  state = {
    hovering: false
  };

  hoverOn = () => {
    this.setState({ hovering: true });
  };

  hoverOff = () => {
    this.setState({ hovering: false });
  };

  render() {
    const { name, lastEdited } = this.props;
    let deleteClasses;
    if (this.state.hovering) {
      deleteClasses = "TemplateList__delete TemplateList__delete--is-visible";
    } else {
      deleteClasses = "TemplateList__delete";
    }
    return (
      <div
        onMouseEnter={this.hoverOn}
        onMouseLeave={this.hoverOff}
        className="TemplateList"
      >
        <div className="TemplateList__icon">
          <i class="far fa-envelope" />
        </div>
        <div className="TemplateList__body">
          <h3 className="TemplateList__name">{name}</h3>
          <p className="TemplateList__alternate-text">Drag And Drop</p>
          <p className="TemplateList__edit-date">
            Edited <span>{lastEdited}</span>
          </p>
        </div>
        <div className={deleteClasses}>Delete</div>
      </div>
    );
  }
}

export default TemplateList;