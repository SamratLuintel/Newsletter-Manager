import {
  UPDATE_CAMPAIGN,
  CAMPAIGN_CREATION_ERROR,
  SET_CAMPAIGN_FILTER_TEXT,
  SET_CAMPAIGN_SORT_OPTION,
  LOADING_CAMPAIGN
} from "../actions/types";

//sortOption includes [latest,oldest,lastEdited]
const initialState = {
  //contains the list of all fetched campaign
  lists: null,
  filter: {
    text: "",
    sortBy: "latest"
  },
  loading: false,
  errors: {
    //This errors occurs when something goes wrong while creating Campaign
    // Most common error is name already exist
    creationError: null
  }
};
export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CAMPAIGN:
      return { ...state, lists: action.payload, loading: false };
      break;
    case SET_CAMPAIGN_FILTER_TEXT:
      return {
        ...state,
        filter: {
          text: action.payload
        }
      };
      break;
    case SET_CAMPAIGN_SORT_OPTION:
      return {
        ...state,
        filter: {
          ...state.filter,
          sortBy: action.payload
        }
      };
    case CAMPAIGN_CREATION_ERROR:
      return {
        ...state,
        errors: {
          creationError: action.payload
        }
      };
    case LOADING_CAMPAIGN:
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
};
