import React, { Component } from "react";

class TemplateList extends Component {
  render() {
    const { name, lastEdited } = this.props;
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
          <p className="TemplateList__edit-date">
            Edited <span>{lastEdited}</span>
          </p>
          <p className="TemplateList__alternate-text">Drag And Drop</p>
        </div>
        <div>Delete</div>
      </div>
    );
  }
}

export default TemplateList;
