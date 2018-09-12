import { UPDATE_TEMPLATE, LOADING_TEMPLATE } from "../types";

import axios from "axios";

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

//Update the Campaign
export const updateTemplate = templates => ({
  type: UPDATE_TEMPLATE,
  payload: templates
});

export const loadingTemplate = value => ({
  type: LOADING_TEMPLATE,
  payload: value
});

// //Create the template
// export const createCampaign = (
//   campaignName,
//   token,
//   closeModal
// ) => async dispatch => {
//   //error handling left to be done
//   try {
//     await axios.post(
//       "/user/campaigns/create",
//       { name: campaignName },
//       {
//         headers: {
//           authorization: token
//         }
//       }
//     );
//     closeModal();
//     dispatch(fetchTemplates(token));
//   } catch (error) {
//     dispatch(fetchTemplates(error.response.data.message));
//   }
// };
