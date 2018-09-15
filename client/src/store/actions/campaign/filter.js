import {
  SET_CAMPAIGN_FILTER_TEXT,
  SET_CAMPAIGN_SORT_OPTION,
  SET_DRAFT_ONLY_TRUE,
  SET_COMPLETED_ONLY_TRUE,
  SHOW_ALL_CAMPAIGN
} from "../types";

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

//Sets the draft only option to true. So only draft campaigns are shown
export const setDraftOnlyTrue = () => ({
  type: SET_DRAFT_ONLY_TRUE
});

export const setCompletedOnlyTrue = () => ({
  type: SET_COMPLETED_ONLY_TRUE
});

export const showAllCampaign = () => ({
  type: SHOW_ALL_CAMPAIGN
});
