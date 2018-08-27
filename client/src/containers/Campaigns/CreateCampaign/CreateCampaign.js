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
        <h1>Create an Email</h1>
        <p>
          Keep your subscribers engaged by sharing your latest news, promoting a
          line of products, or announcing an event.
        </p>
        <br />
        <p>Campaign Name</p>
        {error && <p>{error}</p>}
        <form onSubmit={this.onCampaignSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={campaignName}
            onChange={this.onInputChange}
          />
          <button type="Submit">Submit</button>
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
