import validator from "validator";

const recipientValidator = recipients => {
  let message;
  let isValid = false;

  //If the user has not provided any emails
  if (validator.isEmpty(recipients)) {
    message = "Please provide some email";
  } else {
    const recipientsArray = recipients.split(",");

    const inValidRecipients = recipientsArray
      .filter(recipient => !validator.isEmail(recipient))
      .join(",");
    if (inValidRecipients.length === 0) {
      isValid = true;
    } else {
      message = `${inValidRecipients} are not valid emails`;
    }
  }

  return {
    isValid,
    message
  };
};

export default recipientValidator;
