const mongoose = require("mongoose");
const Template = mongoose.model("templates");
const passport = require("passport");
const requireToken = passport.authenticate("jwt", { session: false });

module.exports = app => {
  app.post("/user/templates/create", (req, res) => {
    const { design, name } = req.body;
    const templateJSON = JSON.stringify(design);
    new Template({ json: templateJSON, name })
      .save()
      .then(() => console.log("template is saved"));
  });

  app.get("/user/templates", requireToken, async (req, res) => {
    //Todo load the campaign of specific user
    const campaigns = await Template.find();
    res.send(campaigns);
  });

  app.get("user/templates/:id", async (req, res) => {
    try {
      const template = await Template.findOne({ _id: req.params.id });
      res.send(JSON.parse(template.json));
    } catch (error) {
      res.status(400).send(error);
    }
  });
};
