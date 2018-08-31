import React, { Component, Fragment } from "react";
import Header from "../../components/Header/Header";
import CampaignEditor from "./CampaignEditor/CampaignEditor";
import "./EditCampaign.scss";

class EditCampaign extends Component {
  render() {
    return (
      <Fragment>
        <Header loggedIn={true} />
        <CampaignEditor id={this.props.match.params.id} />
      </Fragment>
    );
  }
}

export default EditCampaign;
