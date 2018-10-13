import React, { Component, Fragment } from "react";
import ApplicationHeader from "../../components/ApplicationHeader/ApplicationHeader";
import CampaignEditor from "./CampaignEditor/CampaignEditor";

class EditCampaign extends Component {
  render() {
    return (
      <Fragment>
        <ApplicationHeader />
        <CampaignEditor id={this.props.match.params.id} />
      </Fragment>
    );
  }
}

export default EditCampaign;
