const mongoose = require("mongoose");
const Template = mongoose.model("templates");
const passport = require("passport");
const requireToken = passport.authenticate("jwt", { session: false });

module.exports = app => {
  app.post("/user/templates/create", requireToken, async (req, res) => {
    const { design, name } = req.body;
    const templateJSON = JSON.stringify(design);
    try {
      const template = await new Template({
        json: templateJSON,
        name,
        _user: req.user
      }).save();

      res.status(200).send();
    } catch (err) {
      console.log(err);
    }
  });

  app.get("/user/templates", requireToken, async (req, res) => {
    console.log("GET ALL TEMPLATE IS CALLED");
    //Todo load the campaign of specific user
    const templates = await Template.find({ _user: req.user });
    res.send(templates);
  });

  app.get("/user/templates/:id", async (req, res) => {
    try {
      const template = await Template.findOne({ _id: req.params.id });
      if (template) {
        res.send({
          template: JSON.parse(template.json),
          name: template.name
        });
      } else {
        res
          .status(400)
          .send({ message: "The template with provided id does not exist" });
      }
    } catch (error) {
      res.status(400).send(error);
    }
  });

  //@@desc Create and Edits the templates
  //@@access private
  app.post("/user/templates/:id", requireToken, async (req, res) => {
    const { design, name, html } = req.body;
    const templateJSON = JSON.stringify(design);
    const htmlJSON = JSON.stringify(html);

    try {
      const template = await Template.findByIdAndUpdate(
        req.params.id,
        {
          json: templateJSON,
          name: name,
          html: htmlJSON,
          _user: req.user
        },
        { new: true }
      );
      console.log("Tempalte is successfully updated");
      res.status(200).send();
    } catch (error) {
      res.status(400).send({
        message: "Some error occured while saving. Please try again later"
      });
    }
  });

  // @route DELETE /user/templates/:id
  // @desc Deletes the Campaign
  // @access Private
  app.delete("/user/templates/:id", requireToken, async (req, res) => {
    const { id } = req.params;

    try {
      await Template.deleteOne({ _id: id });
      res.status(200).send("Successfully deleted the template");
    } catch (err) {
      res.status(400).send(err);
    }
  });
};
