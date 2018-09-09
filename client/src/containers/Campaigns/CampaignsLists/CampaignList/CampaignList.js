// This is a individual campaign shown in the campaign list
import React, { Component } from "react";
import moment from "moment";

class CampaignList extends Component {
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
    //I am not making any use of createdAt you can
    const { name, createdAt, lastEdited } = this.props;
    const lastEditedDate = moment(lastEdited).format("ddd, MMMM Do h:mm a");
    let deleteClasses;
    if (this.state.hovering) {
      deleteClasses = "CampaignList__delete CampaignList__delete--is-visible";
    } else {
      deleteClasses = "CampaignList__delete";
    }
    return (
      <div
        onMouseEnter={this.hoverOn}
        onMouseLeave={this.hoverOff}
        className="CampaignList"
      >
        <div className="CampaignList__icon">
          <i class="far fa-envelope" />
        </div>
        <div className="CampaignList__body">
          <h3 className="CampaignList__name">{name}</h3>
          <p className="CampaignList__alternate-text">Regular</p>
          <p className="CampaignList__edit-date">
            Edited <span>{lastEditedDate}</span>
          </p>
        </div>
        <div className="CampaignList__draft">Draft</div>
        <div className={deleteClasses}>Delete</div>
      </div>
    );
  }
}

export default CampaignList;
