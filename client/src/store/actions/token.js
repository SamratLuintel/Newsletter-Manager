import { UPDATE_TOKEN } from "./types";
import axios from "axios";

//TODO security issue-- chaina chaina jiskya ho
export const signupFormSubmit = (values, history) => async dispatch => {
  const response = await axios.post("/auth/signup", values);
  const token = response.data;
  history.push("/");
  localStorage.setItem("newsletterToken", token);
  dispatch(updateToken(token));
};

export const fetchToken = () => async dispatch => {
  //Checking the token at first in local Storage
  const token = localStorage.getItem("newsletterToken");
  if (token) return dispatch(updateToken(token));

  //Sending the request to fetch the token from back end
  try {
    console.log("This response is send from token");
    const response = await axios.get("/auth/getToken");
    localStorage.setItem("newsletterToken", response.data);
    dispatch(updateToken(response.data));
  } catch (error) {
    console.log("This below line is called");
    //It will set token to null
    dispatch(updateToken(""));
  }
};

export const updateToken = token => {
  return {
    type: UPDATE_TOKEN,
    payload: token
  };
};
