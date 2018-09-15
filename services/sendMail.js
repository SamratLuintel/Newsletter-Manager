const nodemailer = require("nodemailer");
const keys = require("../config/keys");

module.exports = (recipients, subject, name, template) => {
  console.log("THis is called from send Mail function");
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: keys.googleEmail,
      pass: keys.googlePassword
    }
  });

  const mailOptions = {
    from: `${name} foo@example.com`, // sender address
    to: recipients, // list of receivers
    subject: subject, // Subject line
    html: template // plain text body
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, function(err, info) {
      if (err) reject(err);
      else resolve(info);
    });
  });
};
