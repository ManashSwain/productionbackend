import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required: true,
        unique : true,
        lowercase : true
    },
    email : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,

    },
    password : {
        type : String,
        required: true,
        min : [6 , "Password must be minimum of 6 characters"],
        max : [16 , "password must be maximum of 16 characters"]
    }
},{timestamps : true});

export const User = mongoose.model('User', userSchema)