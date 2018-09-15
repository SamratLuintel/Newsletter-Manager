import { SET_TEMPLATE_FILTER_TEXT, SET_TEMPLATE_SORT_OPTION } from "../types";

//Set the Campaign Filter Text
export const setTemplateFilterText = text => ({
  type: SET_TEMPLATE_FILTER_TEXT,
  payload: text
});

//Set the Campaign Sort Option
export const setTemplateSortOption = text => ({
  type: SET_TEMPLATE_SORT_OPTION,
  payload: text
});
