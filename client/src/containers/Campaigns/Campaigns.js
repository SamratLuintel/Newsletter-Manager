import React, { Component } from "react";
import Header from "../../components/Header/Header";
import "./Campaigns.scss";
import SideBar from "./SideBar/SideBar";
import Actionbar from "./ActionBar/ActionBar";
import CampaignsLists from "./CampaignsLists/CampaignsLists";
import CreateCampaign from "./CreateCampaign/CreateCampaign";

class Campaigns extends Component {
  // Create Campaign button is present in the header
  renderCampaignManagerHeader() {
    return (
      <div className="CampaignManager__header">
        <h1>Campaigns</h1>
        <CreateCampaign />
      </div>
    );
  }
  renderListItemHeader() {
    return <div className="CampaignManager__category-date">Past Month(1)</div>;
  }
  render() {
    return (
      <div>
        <Header loggedIn={true} />
        <div className="CampaignManager">
          {this.renderCampaignManagerHeader()}
          <div className="CampaignManager__body">
            <SideBar />
            <div className="CampaignManager__listOuter">
              <Actionbar />
              {this.renderListItemHeader()}
              <CampaignsLists />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Campaigns;
