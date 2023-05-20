// import mongoose
const mongoose = require('mongoose')

// define schema for product collection 
const cartSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true

    },
    title:
    {
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    grandTotal:{
        type:Number,
        required:true
    }
})

// Create a Model to store data
const cart = new mongoose.model("carts",cartSchema)

// export model
module.exports = cart