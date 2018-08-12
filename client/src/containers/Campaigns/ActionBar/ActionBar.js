import React from 'react';

const Actionbar = () => {
    return (
        <div className="CampaignManager__actionBar">
            <input type="text" 
                placeholder="Find a campaign by name,type or list" 
                className="CampaignManager__input"/>
            <div className="CampaignManager__sortDropdown">
            </div>
        </div>
    );
}

export default Actionbar;