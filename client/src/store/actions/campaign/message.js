import {
  CAMPAIGN_SENDING_IN_PROGRESS,
  CAMPAIGN_SENT,
  CAMPAIGN_CREATION_ERROR,
  RESET_CAMPAIGN_SENDING_MESSAGE,
  CAMPAIGN_SAVING_IN_PROGRESS,
  CAMPAIGN_SAVED,
  RESET_CAMPAIGN_SAVING_MESSAGE
} from "../types";

export const sendingInProgress = () => ({
  type: CAMPAIGN_SENDING_IN_PROGRESS
});

export const campaignSent = () => ({
  type: CAMPAIGN_SENT
});

export const resetSendingMesssage = () => ({
  type: RESET_CAMPAIGN_SENDING_MESSAGE
});

export const savingInProgress = () => ({
  type: CAMPAIGN_SAVING_IN_PROGRESS
});

export const campaignSaved = () => ({
  type: CAMPAIGN_SAVED
});

export const resestSavingMessage = () => ({
  type: RESET_CAMPAIGN_SAVING_MESSAGE
});

export const campaignCreationError = message => ({
  type: CAMPAIGN_CREATION_ERROR,
  payload: message
});
