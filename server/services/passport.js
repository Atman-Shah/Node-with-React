const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

// One argument means we are trying to fetch something out of mongoose.
const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  // user.id is the id in the mongo database, not the googleId.
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  // id is the id in the mongo database, not the googleId.
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true, // This is to fix the google redirect URI mismatch error.
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        // We already have a record with the given profile ID
        return done(null, existingUser);
      }
      // We don't have a user record with this ID, make a new record
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);
