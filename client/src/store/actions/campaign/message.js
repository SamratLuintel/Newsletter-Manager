import {
  CAMPAIGN_SENDING_IN_PROGRESS,
  CAMPAIGN_SENT,
  CAMPAIGN_CREATION_ERROR
} from "../types";

export const sendingInProgress = () => ({
  type: CAMPAIGN_SENDING_IN_PROGRESS
});

export const campaignSent = () => ({
  type: CAMPAIGN_SENT
});

export const campaignCreationError = message => ({
  type: CAMPAIGN_CREATION_ERROR,
  payload: message
});
