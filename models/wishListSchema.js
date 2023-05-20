// import mongoose
const mongoose = require('mongoose')

// define schema for product collection 
const wishListSchema = new mongoose.Schema({
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
    }
})

// Create a Model to store data
const wishList = new mongoose.model("wishLists",wishListSchema)

// export model
module.exports = wishList