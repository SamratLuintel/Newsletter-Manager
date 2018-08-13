import React from 'react';
import {setCampaignFilterText,setCampaignSortOption} from '../../../store/actions/actionsIndex';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'

const Actionbar = (props) => {
    const {filterText,setCampaignFilterText,sortBy,setCampaignSortOption}=props
    return (
        <div className="CampaignManager__actionBar">
            <input type="text" 
                placeholder="Find a campaign by name,type or list" 
                className="CampaignManager__input"
                value={filterText}
                onChange={(e)=>setCampaignFilterText(e.target.value)}
                />

            <div className="CampaignManager__sortDropdown">
                SortBy:
                <select value={sortBy} onChange={(e)=>setCampaignSortOption(e.target.value)}>
                    <option value="latest">Latest</option>
                    <option value="oldest">Oldest</option>
                    <option value="lastEdited">Last Edited</option>
                </select>
            </div>
        </div>
    );
}

const mapStateToProps= (state)=>({
    filterText:state.campaigns.filter.text,
    sortBy:state.campaigns.filter.sortBy
})

const mapDispatchToProps =(dispatch)=>({
    setCampaignFilterText:bindActionCreators(setCampaignFilterText,dispatch),
    setCampaignSortOption : bindActionCreators(setCampaignSortOption,dispatch)
})
export default connect(mapStateToProps,mapDispatchToProps)(Actionbar);