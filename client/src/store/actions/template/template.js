import axios from "axios";
import { loadingTemplate, updateTemplate } from "./message";

//Fetches all the Templates and return an array of list
export const fetchTemplates = token => async dispatch => {
  dispatch(loadingTemplate(true));
  const res = await axios.get("/user/templates", {
    headers: {
      authorization: token
    }
  });
  const templates = res.data;
  dispatch(updateTemplate(templates));
};
