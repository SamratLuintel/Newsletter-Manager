import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import CampaignList from "./CampaignList/CampaignList";
import { ClipLoader } from "react-spinners";

class CampaignLists extends Component {
  renderCampaignList() {
    const {
      lists,
      filter: { text, sortBy },
      loading
    } = this.props.campaigns;

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
    const campaignsList = lists;
    if (campaignsList) {
      const visibleCampaigns = this.getVisibleCampaigns(campaignsList, {
        text,
        sortBy
      });
      return visibleCampaigns.map(({ name, createdAt, lastEdited, _id }) => {
        return (
          <CampaignList
            name={name}
            createdAt={createdAt}
            lastEdited={lastEdited}
            key={_id}
          />
        );
      });
    }
  }

  //Sorts the campaign by text and date and shows only the available campaign
  getVisibleCampaigns = (campaigns, { text, sortBy }) => {
    //filters the campaign by text
    const filteredCampaigns = campaigns.filter(campaign => {
      const textMatch =
        text === "" || campaign.name.toLowerCase().includes(text.toLowerCase());
      return textMatch;
    });

    //sorts the campaign
    if (sortBy === "latest") {
      return filteredCampaigns.sort((a, b) =>
        moment.utc(b.createdAt).diff(moment.utc(a.createdAt))
      );
    } else if (sortBy === "oldest") {
      return filteredCampaigns.sort((a, b) =>
        moment.utc(a.createdAt).diff(moment.utc(b.createdAt))
      );
    }
  };

  render() {
    return (
      <div className="CampaignManager__listItem">
        {this.renderCampaignList()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  //Campaign is fetched in App.js file
  campaigns: state.campaigns,
  auth: state.auth
});

export default connect(mapStateToProps)(CampaignLists);
