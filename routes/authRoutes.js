const passport = require('passport');

module.exports = (app) => {
    app.get('/auth/google', passport.authenticate('google', { session: false, scope: ['openid', 'profile', 'email'] }))

    app.get('/auth/google/callback', passport.authenticate('google', { session: false }), (req, res) => {
        //Stores the User Google Profile ID in session
        req.session.authId = req.user.id;
        res.redirect('/auth/signup');
    })

    app.get('/auth/signup', (req, res) => {
        res.send("Sign up route");
    })

    app.get('/auth/authId', (req, res) => {
        res.send(req.session.authId);
    })
}