const express = require('express');
const app = express();
const passport = require('passport');
const session = require('express-session');
const cors = require('cors');
const keys = require('./config/keys');
const mongoose = require('mongoose');
const bodyParser= require('body-parser');

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(keys.mongoURI).then(()=>console.log("Connected to Mongo server"));
require("./services/passport");
require('./models/User');
require("./routes/authRoutes")(app);

const port = 5000;

app.listen(port, () => {
    console.log("Server is listening on the port", port);
})