import React from 'react';
import {setCampaignFilterText} from '../../../store/actions/actionsIndex';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'

const Actionbar = (props) => {
    const {filterText,setCampaignFilterText}=props
    return (
        <div className="CampaignManager__actionBar">
            <input type="text" 
                placeholder="Find a campaign by name,type or list" 
                className="CampaignManager__input"
                value={filterText}
                onChange={(e)=>setCampaignFilterText(e.target.value)}
                />

            <div className="CampaignManager__sortDropdown">
            </div>
        </div>
    );
}

const mapStateToProps= (state)=>({
    filterText:state.campaigns.filter.text
})

const mapDispatchToProps =(dispatch)=>({
    setCampaignFilterText:bindActionCreators(setCampaignFilterText,dispatch)
})
export default connect(mapStateToProps,mapDispatchToProps)(Actionbar);