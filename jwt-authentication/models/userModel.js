const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        unique: true,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    username:{
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        require: true,
        unique: true
    }
})
module.exports = mongoose.model('User', userSchema)