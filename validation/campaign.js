// Validates whether the campaign is properly filled before sending
const isEmpty = require("../utils/is-empty");

const validateCampaign = campaign => {
  const { name, recipients, senderName, email, template, subject } = campaign;
  let errors = {};
  let isValid = false;
  if (isEmpty(name)) errors.name = "Name is required";
  if (isEmpty(recipients)) errors.recipients = "Recipient List is required";
  if (isEmpty(senderName)) errors.senderName = "Sender Name is required";
  if (isEmpty(subject)) errors.subject = "Subject is required";
  if (isEmpty(email)) errors.email = "Sender Email Name is required";
  if (template === "default") errors.email = "You must select a template";

  if (Object.keys(errors).length === 0) {
    isValid = true;
  }
  return {
    isValid,
    errors
  };
};

module.exports = validateCampaign;
