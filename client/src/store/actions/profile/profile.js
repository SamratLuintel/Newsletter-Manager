import { CLEAR_CURRENT_PROFILE } from "../types";
import { updateToken } from "../token";

export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};

export const logoutUser = () => dispatch => {
  console.log("Log Out User is called");
  //Remove the token from the local storage
  localStorage.removeItem("newsletterToken");
  //Remove auth header for future request
  dispatch(updateToken(""));
  // Set the current user to {} which will set isAuthenticated to false
  //   dispatch(setCurrentUser({}));
};
