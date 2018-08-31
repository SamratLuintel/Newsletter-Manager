const mongoose = require("mongoose");
const User = mongoose.model("users");
const Campaign = mongoose.model("campaigns");
const Template = mongoose.model("templates");
const passport = require("passport");
const validateCampaign = require("../validation/campaign");
const requireToken = passport.authenticate("jwt", { session: false });
const sendMail = require("../services/sendMail");

module.exports = app => {
  app.get("/user/campaigns", requireToken, async (req, res) => {
    const campaigns = await Campaign.find();
    res.send(campaigns);
  });

  // @route POST /user/campaigns/create
  // @desc Create Campaign
  // @access Private
  app.post("/user/campaigns/create", requireToken, async (req, res) => {
    const { name } = req.body;
    //If the name is passed to the server
    if (name) {
      const campaign = await Campaign.findOne({ name });
      if (campaign) {
        // If the campaign with given name already exist in the server
        res
          .status(400)
          .send({ message: "The campaign with given name already exist" });
      } else {
        try {
          await new Campaign({
            name
          }).save();
          res.status(200).send();
        } catch (err) {
          res.status(400).send({ message: "Some error occured on the server" });
        }
      }
    } else {
      res.status(400).send({ message: "Invalid data" });
    }
  });

  // @route POST /user/campaigns/edit/:id
  // @desc EDIT Campaign
  // @access Private
  app.post("/user/campaigns/edit/:id", requireToken, async (req, res) => {
    const { id } = req.params;
    let { campaign } = req.body;
    //In the create campaign page, there is a drop down for selection of template.
    // By default the value of that dropdown is name "default"
    // But the model of Campaign only stores the id of template
    //So if the user has not provided any option, yet. it should be set to null
    if (campaign.template === "default") campaign.template = null;
    const { name, recipients, senderName, email, template, subject } = campaign;
    console.log("Recipient is ", recipients);

    try {
      const campaign = await Campaign.findOneAndUpdate(
        { _id: id },
        {
          $set: { name, recipients, senderName, email, template, subject }
        },
        {
          new: true
        }
      );
      console.log("Updated campaign is ", campaign);
    } catch (err) {
      console.log("Error occured on Edit Campaign route");
      console.log(err);
    }
  });

  // @route POST /user/campaigns/send/:id
  // @desc Sends the Campaign
  // @access Private
  app.post("/user/campaigns/send/:id", requireToken, async (req, res) => {
    console.log("Send Campaign route is caleld");
    const { id } = req.params;
    let { campaign } = req.body;

    const { isValid, errors } = validateCampaign(campaign);
    if (!isValid) {
      res.status(400).send(errors);
    }

    const { recipients, senderName, subject, template } = campaign;
    //Retrieves the template

    try {
      const templateRes = await Template.findById(template);
      const templateHTML = JSON.parse(templateRes.html);

      sendMail(recipients, subject, senderName, templateHTML);
    } catch (err) {
      console.log(err);
    }
    console.log(isValid, errors);
  });
};
