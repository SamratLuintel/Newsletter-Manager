const mongoose = require('mongoose');
const {Schema} = mongoose;

const templateSchema = new Schema({
    json: {
        type:String,
        required:true
    },
    name:{
        type:String,
    },
    _user:{
        type: Schema.Types.ObjectId, 
        ref: 'Story'
    }
})

mongoose.model('templates',templateSchema);