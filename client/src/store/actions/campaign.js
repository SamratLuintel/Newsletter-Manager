import {
    UPDATE_CAMPAIGN,
    CREATE_CAMPAIGN,
    SET_CAMPAIGN_FILTER_TEXT,
    SET_CAMPAIGN_SORT_OPTION
} from './types';

import axios from 'axios';

export const fetchCampaign = (token) => async dispatch => {
    const res = await axios.get('/user/campaigns', {
        headers: {
            authorization: token
        }
    })
    const campaigns = res.data;
    dispatch(updateCampaign(campaigns));
}

export const updateCampaign = (campaigns) => ({
    type: UPDATE_CAMPAIGN,
    payload: campaigns
})

export const createCampaign = (campaignName,token,closeModal) => async dispatch =>{
    //error handling left to be done
   try{
    await axios.post('/user/campaigns/create',{name:campaignName},{
        headers:{
            authorization:token
        }
    })
    closeModal();
    dispatch(fetchCampaign(token));
   } catch(error){
       console.log("Create Campaign error",error);
   }
}

export const setCampaignFilterText = (text) => ({
    type: SET_CAMPAIGN_FILTER_TEXT,
    payload: text
})

export const setCampaignSortOption = (text) => ({
    type: SET_CAMPAIGN_SORT_OPTION,
    payload: text
})