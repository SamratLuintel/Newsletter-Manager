import {
  UPDATE_TEMPLATE,
  LOADING_TEMPLATE,
  SET_TEMPLATE_SORT_OPTION,
  SET_TEMPLATE_FILTER_TEXT
} from "../actions/types";

//sortOption includes [latest,oldest,lastEdited]
const initialState = {
  //contains the list of all fetched templates
  lists: null,
  loading: false,
  filter: {
    text: "",
    sortBy: "latest"
  },
  errors: {
    //This errors occurs when something goes wrong while creating Template
    // Most common error is name already exist
    creationError: null
  }
};
export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TEMPLATE:
      return { ...state, lists: action.payload, loading: false };
    case LOADING_TEMPLATE:
      return { ...state, loading: action.payload };
    case SET_TEMPLATE_SORT_OPTION:
      return {
        ...state,
        filter: {
          ...state.filter,
          sortBy: action.payload
        }
      };
    case SET_TEMPLATE_FILTER_TEXT:
      return {
        ...state,
        filter: {
          ...state.filter,
          text: action.payload
        }
      };
    default:
      return state;
  }
};
