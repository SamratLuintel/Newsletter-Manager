import { CLEAR_CURRENT_PROFILE } from "../types";
import { updateToken } from "../token";
import axios from "axios";
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};

export const logoutUser = history => async dispatch => {
  console.log("Log Out User is called");
  //Remove the token from the local storage
  localStorage.removeItem("newsletterToken");
  //Remove auth header for future request
  dispatch(updateToken(""));

  await axios.post("/auth/logout");
  // Set the current user to {} which will set isAuthenticated to false
  //   dispatch(setCurrentUser({}));
  history.push("/");
};
