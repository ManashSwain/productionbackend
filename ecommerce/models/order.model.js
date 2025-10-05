import mongoose from "mongoose";
import productSchema from './product.model'

const oderSchema = new mongoose.Schema({
    orderNumber : {
        type: String,
        required : true,
        unique : true
    },
    placedBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    items : [
      productSchema
    ]
},{timestamps:true});

export const Order = mongoose.model("Order" , oderSchema)