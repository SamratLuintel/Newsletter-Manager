import React from 'react';
import Header from '../../components/Header/Header';
import './Campaigns.scss';
import SideBar from './SideBar/SideBar';
import Actionbar from './ActionBar/ActionBar';
import Slat from './Slat/Slat';
const Campaigns = () => {
    return (
        <div>
            <Header loggedIn={true} />

            <div className="CampaignManager">

                <div className="CampaignManager__header">
                    <h1>Campaigns</h1>
                    <button>Create Campaign</button>
                </div>

                <div className="CampaignManager__body">
                    <SideBar />
                    <div className="CampaignManager__listOuter">
                        <Actionbar />
                        <div className="CampaignManager__listItem">
                            <div className="CampaignManager__listItem__header">
                                Past Month(1)
                            </div>

                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Campaigns;