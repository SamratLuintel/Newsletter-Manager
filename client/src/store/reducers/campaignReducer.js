import {
  UPDATE_CAMPAIGN,
  CAMPAIGN_CREATION_ERROR,
  SET_CAMPAIGN_FILTER_TEXT,
  SET_CAMPAIGN_SORT_OPTION,
  LOADING_CAMPAIGN,
  CAMPAIGN_SENDING_IN_PROGRESS,
  CAMPAIGN_SENT,
  SET_DRAFT_ONLY_TRUE,
  SET_COMPLETED_ONLY_TRUE,
  SHOW_ALL_CAMPAIGN,
  RESET_CAMPAIGN_SENDING_MESSAGE,
  CAMPAIGN_SAVING_IN_PROGRESS,
  CAMPAIGN_SAVED,
  RESET_CAMPAIGN_SAVING_MESSAGE
} from "../actions/types";

//sortOption includes [latest,oldest,lastEdited]
const initialState = {
  //contains the list of all fetched campaign
  lists: null,
  filter: {
    text: "",
    sortBy: "latest",
    draftOnly: false,
    completedOnly: false
  },
  loading: false,
  errors: {
    //This errors occurs when something goes wrong while creating Campaign
    // Most common error is name already exist
    creationError: null
  },
  // Checks the status of new Campaign whether it is being sent or in process
  campaignStatus: {
    sending: false,
    sent: false,
    saving: false,
    saved: false
  }
};
export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CAMPAIGN:
      return { ...state, lists: action.payload, loading: false };
    case SET_CAMPAIGN_FILTER_TEXT:
      return {
        ...state,
        filter: {
          ...state.filter,
          text: action.payload
        }
      };
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
    case CAMPAIGN_SENDING_IN_PROGRESS:
      return {
        ...state,
        campaignStatus: {
          ...state.campaignStatus,
          sending: true
        }
      };
    case CAMPAIGN_SENT:
      return {
        ...state,
        campaignStatus: {
          ...state.campaignStatus,
          sending: false,
          sent: true
        }
      };
    case RESET_CAMPAIGN_SENDING_MESSAGE:
      return {
        ...state,
        campaignStatus: {
          ...state.campaignStatus,
          sending: false,
          sent: false
        }
      };
    case CAMPAIGN_SAVING_IN_PROGRESS:
      return {
        ...state,
        campaignStatus: {
          ...state.campaignStatus,
          saving: true
        }
      };
    case CAMPAIGN_SAVED:
      return {
        ...state,
        campaignStatus: {
          ...state.campaignStatus,
          saving: false,
          saved: true
        }
      };
    case RESET_CAMPAIGN_SAVING_MESSAGE:
      return {
        ...state,
        campaignStatus: {
          ...state.campaignStatus,
          saving: false,
          saved: false
        }
      };
    case SET_DRAFT_ONLY_TRUE:
      return {
        ...state,
        filter: {
          ...state.filter,
          draftOnly: true,
          completedOnly: false
        }
      };
    case SET_COMPLETED_ONLY_TRUE:
      return {
        ...state,
        filter: {
          ...state.filter,
          draftOnly: false,
          completedOnly: true
        }
      };
    case SHOW_ALL_CAMPAIGN:
      return {
        ...state,
        filter: {
          ...state.filter,
          draftOnly: false,
          completedOnly: false
        }
      };

    default:
      return state;
  }
};
