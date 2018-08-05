const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('users');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');

const tokenForUser = async (user)=>{
   const token = await jwt.sign({sub:user.id},keys.tokenSecret);
   return token;
}
module.exports = (app) => {
    app.get('/auth/google', passport.authenticate('google', { prompt: 'select_account', session: false, scope: ['openid', 'profile', 'email'] }))

    app.get('/auth/google/callback', passport.authenticate('google', { session: false }), (req, res) => {
        //Stores the User Google Profile ID in session
        req.session.authId = req.user.id;
        res.redirect('/signup');
    })

    app.post('/auth/signup', async (req,res)=>{
        if(!req.session.authId){

        }
        const {firstName,lastName,address,street,zip} =req.body;
        const user = await new User({
            authId:req.session.authId,
            firstName,
            lastName,
            address,
            street,
            zip
        }).save();
        const token = await tokenForUser(user);
        res.send(token);
    })

    app.get('/auth/authId', (req, res) => {
        let authId = null;
        if(req.session.authId){
            authId=req.session.authId
        }
        res.send({ authId});
    })
}