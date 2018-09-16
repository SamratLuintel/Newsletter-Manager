import {
  UPDATE_TEMPLATE,
  LOADING_TEMPLATE,
  SET_TEMPLATE_SORT_OPTION,
  SET_TEMPLATE_FILTER_TEXT,
  TEMPLATE_SAVING_IN_PROGRESS,
  TEMPLATE_SAVED,
  RESET_TEMPLATE_SAVING_MESSAGE
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
  },
  // Checks the status of new Campaign whether it is being sent or in process
  templateStatus: {
    saving: false,
    saved: false
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
    case TEMPLATE_SAVING_IN_PROGRESS:
      return {
        ...state,
        templateStatus: {
          ...state.templateStatus,
          saving: true
        }
      };
    case TEMPLATE_SAVED:
      return {
        ...state,
        templateStatus: {
          ...state.templateStatus,
          saved: true
        }
      };
    case RESET_TEMPLATE_SAVING_MESSAGE:
      return {
        ...state,
        templateStatus: {
          saved: false,
          saving: false
        }
      };
    default:
      return state;
  }
};
