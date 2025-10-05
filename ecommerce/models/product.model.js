import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    categoryId : {
        type : String,
        required : true,
        unique : true
    },
    categoryName : {
        type : String,
        required : true
    }
},{timestamps : true})

const productSchema = new mongoose.Schema({
    productId : {
        type : String,
        required : true,
        unique : true
    },
    productName : {
        type : String,
        required : true,
        unique : true,
    },
    productDescription : {
        type : String,
        required : true
    },
    stock : {
        type : Number,
        default : 1
    },
    category : [categorySchema]
},{timestamps : true});

export const Product = mongoose.model("Product" , productSchema)