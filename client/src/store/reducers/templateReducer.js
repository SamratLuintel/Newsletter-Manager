import { UPDATE_TEMPLATE } from "../actions/types";

//sortOption includes [latest,oldest,lastEdited]
const initialState = {
  //contains the list of all fetched templates
  lists: null,
  errors: {
    //This errors occurs when something goes wrong while creating Template
    // Most common error is name already exist
    creationError: null
  }
};
export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TEMPLATE:
      return { ...state, lists: action.payload };
      break;
    default:
      return state;
  }
};
