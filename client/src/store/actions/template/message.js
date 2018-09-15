import { UPDATE_TEMPLATE, LOADING_TEMPLATE } from "../types";

//Update the Campaign
export const updateTemplate = templates => ({
  type: UPDATE_TEMPLATE,
  payload: templates
});

export const loadingTemplate = value => ({
  type: LOADING_TEMPLATE,
  payload: value
});
