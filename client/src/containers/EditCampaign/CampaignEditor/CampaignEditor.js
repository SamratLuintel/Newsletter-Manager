import React, { Component } from "react";
import NameEditor from "./NameEditor/NameEditor";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import RecipientEditor from "./RecipientEditor/RecipientEditor";
import SenderEditor from "./SenderEditor/SenderEditor";
import update from "immutability-helper";
import SubjectEditor from "./SubjectEditor/SubjectEditor";

class CampaignEditor extends Component {
  state = {
    // Checks to see if the data is send from the server
    fetched: false,
    //Checks to see if the campaign with given id exist
    exist: false,
    campaign: {
      name: "",
      senderName: "",
      email: "",
      recipients: "",
      subject: ""
    }
  };

  //This function is called from NameEditor.js when user clicks on save
  onCampaignNameChange = name => {
    let newState = update(this.state, {
      campaign: {
        name: { $set: name }
      }
    });
    this.setState(newState);
  };

  //This function is called from RecipientEditor.js when user clicks on save
  onRecipientListChange = recipients => {
    let newState = update(this.state, {
      campaign: {
        recipients: { $set: recipients }
      }
    });
    this.setState(newState);
    console.log(this.state);
  };

  onSenderEmailAndNameChange = (name, email) => {
    let newState = update(this.state, {
      campaign: {
        email: { $set: email },
        senderName: { $set: name }
      }
    });
    this.setState(newState);
  };

  onSubjectChange = subject => {
    let newState = update(this.state, {
      campaign: {
        subject: { $set: subject }
      }
    });
    this.setState(newState);
  };
  render() {
    return (
      <div className="c-CampaignEditor">
        <NameEditor
          campaignName={this.state.campaign.name}
          saveName={this.onCampaignNameChange}
        />

        <div className="c-CampaignEditor--border">
          <RecipientEditor
            saveRecipients={this.onRecipientListChange}
            recipients={this.state.campaign.recipients}
          />
          <SenderEditor
            senderName={this.state.campaign.senderName}
            email={this.state.campaign.email}
            saveSenderAndEmail={this.onSenderEmailAndNameChange}
          />
          <SubjectEditor
            subject={this.state.campaign.subject}
            saveSubject={this.onSubjectChange}
          />
        </div>
      </div>
    );
  }

  static getDerivedStateFromProps = (nextProps, nextState) => {
    // If the date is not fetched it will fetch it
    if (!nextState.fetched) {
      const { id, campaignLists } = nextProps;
      if (campaignLists) {
        //filters the campaignList with given id
        const campaign = campaignLists.filter(
          campaign => campaign._id == id
        )[0];

        if (campaign) {
          return {
            fetched: true,
            exist: true,
            campaign: {
              name: campaign.name,
              recipients: campaign.recipients,
              senderName: campaign.senderName,
              email: campaign.email
            }
          };
        } else {
          return {
            fetched: true,
            exist: false,
            campaign: null
          };
        }
      }
    }
  };
}

const mapStateToProps = state => ({
  campaignLists: state.campaigns.lists
});

export default connect(mapStateToProps)(CampaignEditor);
