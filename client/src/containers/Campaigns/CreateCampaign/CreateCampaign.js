import React, { Component } from "react";
import Modal, { closeModal } from "../../../components/Modal/Modal";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createCampaign } from "../../../store/actions/actionsIndex";

class CreateCampaign extends Component {
  state = {
    campaignName: null,
    error: null
  };

  onCampaignSubmit = event => {
    event.preventDefault();
    const { campaignName } = this.state;
    const {
      auth: { token },
      createCampaign
    } = this.props;

    //checks to see if user has entered any name
    if (!campaignName) {
      this.setState({ error: "Please enter some name" });
    }
    createCampaign(campaignName, token, this.modal.onClose);
  };

  static getDerivedStateFromProps = nextProps => {
    if (nextProps.campaignError) {
      return { error: nextProps.campaignError };
    }
  };

  onInputChange = e => {
    this.setState({
      campaignName: e.target.value
    });
  };
  render() {
    const { campaignName, error } = this.state;

    return (
      <Modal triggerText="Create Campaign" ref={modal => (this.modal = modal)}>
        <h1 className="CreateCampaign__title">Create an Campaign</h1>
        <p className="CreateCampaign__Subtitle">
          Keep your subscribers engaged by sharing your latest news, promoting a
          line of products, or announcing an event.
        </p>
        <br />
        <p className="CreateCampaign__alternate-text">Campaign Name</p>
        {error && <p className="CreateCampaign__error">{error}</p>}
        <form onSubmit={this.onCampaignSubmit} className="CreateCampaign__form">
          <input
            type="text"
            placeholder="Name"
            value={campaignName}
            className="CreateCampaign__input"
            onChange={this.onInputChange}
          />
          <button className="CreateCampaign__submit-btn" type="Submit">
            Create
          </button>
        </form>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  campaignError: state.campaigns.errors.creationError
});

const mapDispatchToProps = dispatch => ({
  createCampaign: bindActionCreators(createCampaign, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateCampaign);
