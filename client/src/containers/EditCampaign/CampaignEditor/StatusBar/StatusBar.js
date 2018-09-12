import React, { Component, Fragment } from "react";
import statusValidation from "./statusValidation";
import { connect } from "react-redux";
import {
  editCampaign,
  sendCampaign
} from "../../../../store/actions/campaign/campaign";
import ProgressMessage from "../../../../components/ProgressMessage/ProgressMessage";

class StatusBar extends Component {
  state = {
    sendDisable: true,
    campaign: null,
    sendingError: "",
    messageClosed: false
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
    this.setState({ messageClosed: false });
    sendCampaign(campaign, auth.token);
  };

  saveCampaign = () => {
    const { editCampaign, auth } = this.props;
    const { campaign } = this.state;
    console.log("Campaign from status bar", this.state.campaign);
    editCampaign(campaign, auth.token);
  };

  onMessageClosed = () => {
    this.setState({ messageClosed: true });
  };

  emailProgressMessage = () => {
    let progress;
    if (
      (this.props.campaignStatus.sending && !this.state.messageClosed) ||
      (this.props.campaignStatus.sent && !this.state.messageClosed)
    ) {
      progress = (
        <ProgressMessage
          message="Your email is being sent"
          finishedMessage="Your email is successfully sent"
          finished={this.props.campaignStatus.sent}
          onCrossed={this.onMessageClosed}
        />
      );
    }
    return progress;
  };
  render() {
    return (
      <Fragment>
        {this.emailProgressMessage()}
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
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  campaignStatus: state.campaigns.campaignStatus
});

export default connect(
  mapStateToProps,
  { editCampaign, sendCampaign }
)(StatusBar);
