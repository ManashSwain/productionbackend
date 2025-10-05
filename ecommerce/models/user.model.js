import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        lowercase : true,
        unique : true
    },
   email : {
    type : String,
    required : true,
    lowercase : true,
    unique: true
   },
   password: {
    type: String,
    required : true,
    minlength : [6, "minimum password length should be of 6 characters"],
    maxlength : [16, "maximum password length should be of 16 characters"]
   }
},{timestamps : true});

export const User = mongoose.model("User" , userSchema)