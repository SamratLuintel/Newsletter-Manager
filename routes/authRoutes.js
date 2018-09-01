const passport = require("passport");
const mongoose = require("mongoose");
const User = mongoose.model("users");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

const tokenForUser = async user => {
  const token = await jwt.sign({ sub: user.id }, keys.tokenSecret);
  return token;
};
module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      prompt: "select_account",
      session: false,
      scope: ["openid", "profile", "email"]
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google", { session: false }),
    async (req, res) => {
      const user = await User.findOne({ authId: req.user.id });

      //Stores the User Google Profile ID in session
      req.session.authId = req.user.id;
      if (user) {
        res.redirect("/");
      }
      //If the user is visiting for the first time,
      //he/she should fill the additional form
      res.redirect("/signup");
    }
  );

  app.post("/auth/signup", async (req, res) => {
    if (!req.session.authId) {
      res.status(400).send("You need to be first authenticated");
    }
    const { firstName, lastName, address, street, zip } = req.body;
    const user = await new User({
      authId: req.session.authId,
      firstName,
      lastName,
      address,
      street,
      zip
    }).save();
    req.session.authId = null;
    const token = await tokenForUser(user);
    res.send(token);
  });

  app.get("/auth/authId", (req, res) => {
    let authId = null;
    if (req.session.authId) {
      authId = req.session.authId;
    }
    res.send({ authId });
  });

  app.get("/auth/getToken", async (req, res) => {
    if (!req.session) {
      res.status(400).send({
        message: "You are not authenticated"
      });
    }
    const user = await User.findOne({ authId: req.session.authId });
    if (user) {
      const token = await tokenForUser(user);
      res.send(token);
    } else {
      res.status(400).send({
        message: "The user with provided authId does not exist"
      });
    }
  });
};
