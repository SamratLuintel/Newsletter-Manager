import { UPDATE_CAMPAIGN, LOADING_CAMPAIGN } from "../types";
import {
  sendingInProgress,
  campaignCreationError,
  campaignSent
} from "./message";

import axios from "axios";

//Fetches all the Campaigns and return an array of list
export const fetchCampaigns = token => async dispatch => {
  dispatch(loadingCampaigns(true));
  const res = await axios.get("/user/campaigns", {
    headers: {
      authorization: token
    }
  });
  const campaigns = res.data;
  dispatch(updateCampaign(campaigns));
};

export const loadingCampaigns = value => ({
  type: LOADING_CAMPAIGN,
  payload: value
});

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
  dispatch(sendingInProgress());
  const { id } = campaign;
  const res = await axios.post(
    `/user/campaigns/send/${id}`,
    {
      campaign
    },
    {
      headers: {
        authorization: token
      }
    }
  );
  if (res.status == 200) {
    dispatch(campaignSent());
  }
};

//Delete the Campaign
export const deleteCampaign = (id, token) => async dispatch => {
  try {
    await axios.delete(`/user/campaigns/${id}`, {
      headers: {
        authorization: token
      }
    });
    dispatch(fetchCampaigns(token));
  } catch (error) {
    console.log(error);
  }
};
