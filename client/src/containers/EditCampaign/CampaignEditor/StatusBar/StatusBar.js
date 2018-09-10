import React, { Component } from "react";
import statusValidation from "./statusValidation";
import { connect } from "react-redux";
import {
  editCampaign,
  sendCampaign
} from "../../../../store/actions/campaign/campaign";

class StatusBar extends Component {
  state = {
    sendDisable: true,
    campaign: null
  };

  static getDerivedStateFromProps = (nextProps, nextState) => {
    if (nextState.campaign !== nextProps.campaign) {
      const { isValid, errors } = statusValidation(nextProps.campaign);
      return {
        campaign: nextProps.campaign,
        sendDisable: !isValid
      };
    }
  };

  sendCampaign = () => {
    const { sendCampaign, auth } = this.props;
    const { campaign } = this.state;
    sendCampaign(campaign, auth.token);
  };

  saveCampaign = () => {
    const { editCampaign, auth } = this.props;
    const { campaign } = this.state;
    console.log("Campaign from status bar", this.state.campaign);
    editCampaign(campaign, auth.token);
  };
  render() {
    return (
      <div className="c-statusBar">
        <div className="c-statusBar__body">
          <div className="c-statusBar__body__info-status">
            Let's get started! <span className="badge">Draft</span>
          </div>
          <div className="c-statusBar__body__info-title">Draft Email</div>
        </div>
        <div className="c-statusBar__action">
          <button
            className="c-statusBar__action__save-btn"
            onClick={this.saveCampaign}
          >
            Save
          </button>
          <button
            className="c-statusBar__action__send-btn"
            disabled={this.state.sendDisable}
            onClick={this.sendCampaign}
          >
            Send
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { editCampaign, sendCampaign }
)(StatusBar);
