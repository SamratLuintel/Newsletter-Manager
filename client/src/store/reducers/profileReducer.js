import { CLEAR_CURRENT_PROFILE, UPDATE_USER_NAME } from "../actions/types";

const initialState = {
  name: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_CURRENT_PROFILE:
      return { ...state };
    case UPDATE_USER_NAME:
      return {
        ...state,
        name: action.payload
      };
    default:
      return state;
  }
};
