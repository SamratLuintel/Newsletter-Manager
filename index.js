const express = require('express');
const app = express();
const passport = require('passport');
const session = require('express-session');

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));
require("./services/passport");
require("./routes/authRoutes")(app);

const port = 5000;

app.listen(port, () => {
    console.log("Server is listening on the port", port);
})