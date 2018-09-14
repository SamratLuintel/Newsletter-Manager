import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import CampaignList from "./CampaignList/CampaignList";
import { ClipLoader } from "react-spinners";

class CampaignLists extends Component {
  renderCampaignList() {
    const {
      lists,
      filter: { text, sortBy, draftOnly, completedOnly },
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
        sortBy,
        draftOnly,
        completedOnly
      });
      return visibleCampaigns.map(
        ({ name, createdAt, lastEdited, _id, draft }) => {
          return (
            <CampaignList
              name={name}
              createdAt={createdAt}
              lastEdited={lastEdited}
              key={_id}
              draft={draft}
            />
          );
        }
      );
    }
  }

  //Sorts the campaign by text and date and shows only the available campaign
  getVisibleCampaigns = (
    campaigns,
    { text, sortBy, draftOnly, completedOnly }
  ) => {
    //filters the campaign by text
    let filteredCampaigns = campaigns.filter(campaign => {
      const textMatch =
        text === "" || campaign.name.toLowerCase().includes(text.toLowerCase());
      return textMatch;
    });

    //if draftOnly is true return only the drafts
    if (draftOnly) {
      filteredCampaigns = filteredCampaigns.filter(campaign => {
        return campaign.draft === true;
      });
    }

    //Returns only the completed campaigns
    if (completedOnly) {
      filteredCampaigns = filteredCampaigns.filter(campaign => {
        return campaign.draft === false;
      });
    }
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
