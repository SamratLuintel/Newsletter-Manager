import { CLEAR_CURRENT_PROFILE, UPDATE_USER_NAME } from "../types";
import { updateToken } from "../token";
import axios from "axios";

export const fetchUser = token => async dispatch => {
  console.log("Fetch User is called", token);
  const res = await axios.get("/user/get-user", {
    headers: {
      authorization: token
    }
  });
  const name = res.data.firstName;
  dispatch({
    type: UPDATE_USER_NAME,
    payload: name
  });
};

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
