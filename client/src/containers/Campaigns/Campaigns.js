import React, { Component } from "react";
import ApplicationHeader from "../../components/ApplicationHeader/ApplicationHeader";
import SideBar from "./SideBar/SideBar";
import Actionbar from "./ActionBar/ActionBar";
import CampaignsLists from "./CampaignsLists/CampaignsLists";
import CreateCampaign from "./CreateCampaign/CreateCampaign";
import ApplicationSideNav from "../../components/ApplicationSideNav/ApplicationSideNav";

class Campaigns extends Component {
  // Create Campaign button is present in the header
  renderCampaignManagerHeader() {
    return (
      <div className="CampaignManager__header">
        <h1 className="CampaignManager__header__caption-text">Campaigns</h1>
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
        <ApplicationSideNav />
        <ApplicationHeader />
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
