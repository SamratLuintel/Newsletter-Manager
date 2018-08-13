import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import './Campaigns.scss';
import SideBar from './SideBar/SideBar';
import Actionbar from './ActionBar/ActionBar';
import CampaignsLists from './CampaignsLists/CampaignsLists';

class Campaigns extends Component {

    renderListItemHeader() {
        return (
            <div className="CampaignManager__listItem__header">
                Past Month(1)
            </div>
        )
    }

    renderCampaignManagerHeader() {
        return (
            <div className="CampaignManager__header">
                <h1>Campaigns</h1>
                <button>Create Campaign</button>
            </div>
        )
    }
    render() {
        return (
            <div>
                <Header loggedIn={true} />
                <div className="CampaignManager">

                    {this.renderCampaignManagerHeader()}
                    
                    <div className="CampaignManager__body">
                        <SideBar />
                        <div className="CampaignManager__listOuter">
                            <Actionbar />
                            {this.renderListItemHeader()}
                            <CampaignsLists />
                        </div>

                    </div>

                </div>

            </div>
        );
    }
}

export default Campaigns;
