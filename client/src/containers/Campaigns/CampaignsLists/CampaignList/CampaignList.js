// This is a individual campaign shown in the campaign list
import React, { Component } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { deleteCampaign } from "../../../../store/actions/campaign/campaign";
import { connect } from "react-redux";

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
    const {
      name,
      createdAt,
      lastEdited,
      draft,
      id,
      token,
      deleteCampaign
    } = this.props;
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
          <h3>
            <Link className="CampaignList__name" to={`campaigns/edit/${id}`}>
              {name}
            </Link>
          </h3>
          <p className="CampaignList__alternate-text">Regular</p>
          <p className="CampaignList__edit-date">
            Edited <span>{lastEditedDate}</span>
          </p>
        </div>
        {draft && <div className="CampaignList__draft">Draft</div>}

        <div
          onClick={() => deleteCampaign(id, token)}
          className={deleteClasses}
        >
          Delete
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { deleteCampaign }
)(CampaignList);
