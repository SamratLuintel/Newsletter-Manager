const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    authId:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    zip:{
        type:String,
        required:true
    },
    street:{
        type:String,
        required:true
    }
})

mongoose.model('users',userSchema);