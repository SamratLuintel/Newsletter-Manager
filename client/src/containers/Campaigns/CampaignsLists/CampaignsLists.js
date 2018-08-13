import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { fetchCampaign } from '../../../store/actions/actionsIndex';
import Slat from './Slat/Slat';

class CampaignLists extends Component {

    renderCampaignList() {
        const {lists,filter:{text}} = this.props.campaigns;
        const campaignsList = lists;
        if (campaignsList) {
            const visibleCampaigns = this.getVisibleCampaigns(campaignsList,{text});
            return visibleCampaigns.map(({ name, createdAt, lastEdited, _id }) => {
                return <Slat name={name}
                    createdAt={createdAt}
                    lastEdited={lastEdited}
                    key={_id}
                />
            })
        }
    }

    getVisibleCampaigns = (campaigns, { text }) => {
        return campaigns.filter((campaign)=>{
            const textMatch = text === "" || 
                campaign.name.toLowerCase().includes(text.toLowerCase());

            return textMatch;
        })
    }
    componentDidMount() {
        this.props.fetchCampaign(this.props.auth.token)
    }

    render() {
        return (
            <div className="CampaignManager__listItem">
                {this.renderCampaignList()}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    campaigns: state.campaigns,
    auth: state.auth
})

const mapDispatchToProps = dispatch => ({
    fetchCampaign: bindActionCreators(fetchCampaign, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(CampaignLists);
