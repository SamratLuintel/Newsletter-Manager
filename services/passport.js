const mongoose = require("mongoose");
const User = mongoose.model("users");

const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;
const keys = require("../config/keys");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromHeader("authorization");
opts.secretOrKey = keys.tokenSecret;

passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
      const user = await User.findById(jwt_payload.sub);
      done(null, user);
    } catch (error) {
      done(null, false);
    }
  })
);

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientId,
      clientSecret: keys.googleClientSecret,
      //this is for production
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (req, accessToken, refreshToken, profile, done) => {
      done(null, profile);
    }
  )
);
