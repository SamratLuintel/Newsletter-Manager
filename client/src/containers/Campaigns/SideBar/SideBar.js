import React from 'react';

const SideBar = (props) => {
    return (
        <div className="CampaignManager__sidebar">
            <div className="CampaignManager__sidebar__listItem">
                Recent
            </div>
            <div className="CampaignManager__sidebar__listItem">
                Ongoing
            </div>
            <div className="CampaignManager__sidebar__listItem">
                Draft
            </div>
            <div className="CampaignManager__sidebar__listItem">
                Completed
            </div>
        </div>
    );
}

export default SideBar;