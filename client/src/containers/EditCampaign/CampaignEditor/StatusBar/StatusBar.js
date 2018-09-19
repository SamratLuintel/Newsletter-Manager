import React, { Component, Fragment } from "react";
import statusValidation from "./statusValidation";
import { connect } from "react-redux";
import {
  editCampaign,
  sendCampaign
} from "../../../../store/actions/campaign/campaign";
import ProgressMessage from "../../../../components/ProgressMessage/ProgressMessage";
import {
  resetSendingMesssage,
  resestSavingMessage
} from "../../../../store/actions/campaign/message";

class StatusBar extends Component {
  state = {
    sendDisable: true,
    campaign: null,
    sendingError: ""
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

  onSendingMessageClosed = () => {
    this.props.resetSendingMesssage();
  };

  onSavingMessageClosed = () => {
    this.props.resestSavingMessage();
  };

  emailProgressMessage = () => {
    let progress;
    if (this.props.campaignStatus.sending || this.props.campaignStatus.sent) {
      progress = (
        <ProgressMessage
          message="Your email is being sent"
          finishedMessage="Your email is successfully sent"
          finished={this.props.campaignStatus.sent}
          onCrossed={this.onSendingMessageClosed}
        />
      );
    }
    return progress;
  };

  savingProgressMessage = () => {
    let progress;
    if (this.props.campaignStatus.saving || this.props.campaignStatus.saved) {
      progress = (
        <ProgressMessage
          message="Your campaign is being saved"
          finishedMessage="Your campaign is saved successfully"
          finished={this.props.campaignStatus.saved}
          onCrossed={this.onSavingMessageClosed}
        />
      );
    }
    return progress;
  };
  render() {
    return (
      <Fragment>
        {this.emailProgressMessage()}
        {this.savingProgressMessage()}
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
  {
    editCampaign,
    sendCampaign,
    resetSendingMesssage,
    resestSavingMessage
  }
)(StatusBar);
