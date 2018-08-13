import {
    UPDATE_CAMPAIGN,
    SET_CAMPAIGN_FILTER_TEXT,
    SET_CAMPAIGN_SORT_OPTION
} from './types';
import axios from 'axios';

export const fetchCampaign = (token) => async dispatch=>{
    console.log("This action creator is called",token);
    const res = await axios.get('/user/campaigns',{
        headers:{
            authorization:token
        }
    })
    const campaigns = res.data;
    dispatch(updateCampaign(campaigns));
}

export const updateCampaign = (campaigns)=> {
    return {
        type:UPDATE_CAMPAIGN,
        payload:campaigns
    }
}

export const setCampaignFilterText = (text)=>{
    return {
        type:SET_CAMPAIGN_FILTER_TEXT,
        payload:text
    }
}

export const setCampaignSortOption = (text)=>{
    return {
        type:SET_CAMPAIGN_SORT_OPTION,
        payload:text
    }
}