const mongoose = require("mongoose");
const User = mongoose.model("users");
const Campaign = mongoose.model("campaigns");
const passport = require("passport");

const requireToken = passport.authenticate("jwt", { session: false });

module.exports = app => {
  app.get("/user/campaigns", requireToken, async (req, res) => {
    const campaigns = await Campaign.find();
    res.send(campaigns);
  });

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
};
