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

  app.get("/user/templates", async (req, res) => {
    //Todo load the campaign of specific user
    const templates = await Template.find();
    res.send(templates);
  });

  app.get("/user/templates/:id", async (req, res) => {
    console.log("This template route is called");
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

  //@@desc Edits the templates
  //@@access private
  app.post("/user/templates/:id", async (req, res) => {
    const { design, name, html } = req.body;
    const templateJSON = JSON.stringify(design);
    const htmlJSON = JSON.stringify(html);

    try {
      const template = await Template.findByIdAndUpdate(
        req.params.id,
        {
          json: templateJSON,
          name: name,
          html: htmlJSON
        },
        { new: true }
      );
      res.status(200).send();
    } catch (error) {
      res.status(400).send({
        message: "Some error occured while saving. Please try again later"
      });
    }
  });
};
