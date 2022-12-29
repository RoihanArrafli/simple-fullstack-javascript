// const mongoose = require('mongoose');
import mongoose from "mongoose";
const UserSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    }
})

// module.exports = mongoose.UserModel('UserData', UserSchema)
export default mongoose.model('UsersData', UserSchema);