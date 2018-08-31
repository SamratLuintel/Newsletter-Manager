import isEmpty from "../../../../utils/is-empty";

const statusValidation = campaign => {
  const { name, recipients, senderName, email, template } = campaign;
  let errors = {};
  let isValid = false;
  if (isEmpty(name)) errors.name = "Name is required";
  if (isEmpty(recipients)) errors.recipients = "Recipient List is required";
  if (isEmpty(senderName)) errors.senderName = "Sender Name is required";
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

export default statusValidation;
