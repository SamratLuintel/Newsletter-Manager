import {
  UPDATE_TEMPLATE,
  LOADING_TEMPLATE,
  TEMPLATE_SAVING_IN_PROGRESS,
  TEMPLATE_SAVED,
  RESET_TEMPLATE_SAVING_MESSAGE
} from "../types";

//Update the Campaign
export const updateTemplate = templates => ({
  type: UPDATE_TEMPLATE,
  payload: templates
});

export const savingInProgress = () => ({
  type: TEMPLATE_SAVING_IN_PROGRESS
});

export const templateSaved = () => ({
  type: TEMPLATE_SAVED
});

export const resetSavingMessage = () => ({
  type: RESET_TEMPLATE_SAVING_MESSAGE
});

export const loadingTemplate = value => ({
  type: LOADING_TEMPLATE,
  payload: value
});
