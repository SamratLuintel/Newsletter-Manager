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
        <div className="c-slatMeta">
          <div className="c-slatMeta__info">
            <div className="c-slatInfo">
              <div className="c-slatInfoBody">
                <div className="c-slatInfoStatus">
                  Let's get started! <span className="badge">Draft</span>
                </div>
                <div className="c-slatInfoTitle">Draft Email</div>
              </div>
            </div>
          </div>
          <div className="c-slatMeta__action">
            <button onClick={this.saveCampaign}>Save</button>
            <button
              disabled={this.state.sendDisable}
              onClick={this.sendCampaign}
            >
              Send
            </button>
          </div>
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
