import {
  UPDATE_CAMPAIGN,
  CAMPAIGN_CREATION_ERROR,
  SET_CAMPAIGN_FILTER_TEXT,
  SET_CAMPAIGN_SORT_OPTION
} from "../types";

import axios from "axios";

//Fetches all the Campaigns and return an array of list
export const fetchCampaigns = token => async dispatch => {
  const res = await axios.get("/user/campaigns", {
    headers: {
      authorization: token
    }
  });
  const campaigns = res.data;
  dispatch(updateCampaign(campaigns));
};

//Update the Campaign
export const updateCampaign = campaigns => ({
  type: UPDATE_CAMPAIGN,
  payload: campaigns
});

//Create the campaign
export const createCampaign = (
  campaignName,
  token,
  closeModal
) => async dispatch => {
  //error handling left to be done
  try {
    await axios.post(
      "/user/campaigns/create",
      { name: campaignName },
      {
        headers: {
          authorization: token
        }
      }
    );
    closeModal();
    dispatch(fetchCampaigns(token));
  } catch (error) {
    dispatch(campaignCreationError(error.response.data.message));
  }
};

//Edits the campaign
export const editCampaign = (campaign, token) => async dispatch => {
  console.log("This is called from edit Campaign", campaign);
  const { id } = campaign;

  try {
    await axios.post(
      `/user/campaigns/edit/${id}`,
      {
        campaign
      },
      {
        headers: {
          authorization: token
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};

//Send the campaign
export const sendCampaign = (campaign, token) => async dispatch => {
  console.log("This is called from send campaign");
  console.log(campaign, token);
};

export const campaignCreationError = message => ({
  type: CAMPAIGN_CREATION_ERROR,
  payload: message
});

//Set the Campaign Filter Text
export const setCampaignFilterText = text => ({
  type: SET_CAMPAIGN_FILTER_TEXT,
  payload: text
});

//Set the Campaign Sort Option
export const setCampaignSortOption = text => ({
  type: SET_CAMPAIGN_SORT_OPTION,
  payload: text
});
