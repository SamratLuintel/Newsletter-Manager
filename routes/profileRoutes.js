const mongoose = require("mongoose");
const User = mongoose.model("users");
const passport = require("passport");
const requireToken = passport.authenticate("jwt", { session: false });

module.exports = app => {
  app.get("/user/get-user", requireToken, async (req, res) => {
    console.log("Profile route is called");
    const user = await User.findOne({ _id: req.user.id });
    res.status(200).send(user);
  });
};
