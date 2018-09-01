import { CLEAR_CURRENT_PROFILE } from "../actions/types";

const initialState = {
  name: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_CURRENT_PROFILE:
      return { ...state };

    default:
      return state;
  }
};
