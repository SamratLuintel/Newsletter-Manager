const express = require("express");
const app = express();
const passport = require("passport");
const session = require("express-session");
const cors = require("cors");
const keys = require("./config/keys");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true
  })
);
app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(keys.mongoURI)
  .then(() => console.log("Connected to Mongo server"));

//loading the models
require("./models/User");
require("./models/Template");
require("./models/Campaign");

//loading the passport
require("./services/passport");

//loading the routes
require("./routes/authRoutes")(app);
require("./routes/templateRoutes")(app);
require("./routes/campaignRoutes")(app);
require("./routes/profileRoutes")(app);

if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets

  app.use(express.static("client/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server is listening on the port", port);
});
