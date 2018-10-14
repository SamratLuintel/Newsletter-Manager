import axios from "axios";
import {
  loadingTemplate,
  updateTemplate,
  savingInProgress,
  templateSaved,
  resetSavingMessage
} from "./message";

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

//Delete the Campaign
export const deleteTemplate = (id, token) => async dispatch => {
  try {
    await axios.delete(`/user/templates/${id}`, {
      headers: {
        authorization: token
      }
    });
    dispatch(fetchTemplates(token));
  } catch (error) {
    console.log(error);
  }
};

export const saveTemplate = (
  design,
  name,
  html,
  id,
  token
) => async dispatch => {
  dispatch(savingInProgress());
  try {
    await axios.post(
      `/user/templates/${id}`,
      {
        design,
        name,
        html
      },
      {
        headers: {
          authorization: token
        }
      }
    );
    dispatch(templateSaved());
    console.log("Successfully saved the design");
  } catch (err) {
    console.log(err);
  }
};

export const createTemplate = (
  design,
  name,
  html,
  token,
  history
) => async dispatch => {
  try {
    dispatch(savingInProgress());
    await axios.post(
      "/user/templates/create",
      {
        design,
        name,
        html
      },
      {
        headers: {
          authorization: token
        }
      }
    );
    dispatch(resetSavingMessage());
    history.push("/templates");
  } catch (err) {
    console.log(err);
  }
};
