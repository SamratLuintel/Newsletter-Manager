import React, { Component, Fragment } from "react";
import StatusBar from "./StatusBar/StatusBar";
import Header from "../../components/Header/Header";
import CampaignEditor from "./CampaignEditor/CampaignEditor";
import "./EditCampaign.scss";

class EditCampaign extends Component {
  render() {
    return (
      <Fragment>
        <Header loggedIn={true} />
        <StatusBar />
        <CampaignEditor id={this.props.match.params.id} />
      </Fragment>
    );
  }
}

export default EditCampaign;
