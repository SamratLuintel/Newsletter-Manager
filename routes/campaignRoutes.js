const mongoose = require('mongoose');
const User = mongoose.model('users');
const Campaign = mongoose.model('campaigns');
const passport = require('passport');

const requireToken = passport.authenticate('jwt', { session: false });

module.exports =(app)=>{
    app.get('/user/campaigns',requireToken,async (req,res)=>{
       const campaigns = await Campaign.find();
       res.send(campaigns);
    })
    app.post('/user/campaigns/create',async (req,res)=>{
        const {name} = req.body;
        if (name){
           await new Campaign({
                name,
                createdAt:Date.now(),
                lastEdited:Date.now()
            }).save();
            res.status(200).send()

        }else{
            res.status(400).send({message:"Invalid data"})
        }
    })
}