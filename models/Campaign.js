const mongoose = require('mongoose');
const {Schema} = mongoose;

const campaignSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    createdAt: Date,
    lastEdited:Date
})

mongoose.model('campaigns',campaignSchema);