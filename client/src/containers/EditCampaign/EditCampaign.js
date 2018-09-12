import React, { Component, Fragment } from "react";
import Header from "../../components/Header/Header";
import CampaignEditor from "./CampaignEditor/CampaignEditor";

class EditCampaign extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <CampaignEditor id={this.props.match.params.id} />
      </Fragment>
    );
  }
}

export default EditCampaign;
