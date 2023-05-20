// login - resloving apis
// get all products logic

// import product collection 
const products = require('../models/productSchema')


exports.getallproducts=async (req,res)=>{
    // logic 
    try{
        // get all product from products collection in mongodb
        const allproduct = await products.find()
        res.status(200).json(allproduct)
    }
    catch(error){
        res.status(401).json(error)
    }
}

exports.viewproduct = async(req,res)=>{
    // get id from request
    const id  =  req.params.id
    try{
        // check id in mongodb
        const product = await products.findOne({id})
        if(product){
            res.status(200).json(product)
        }
        else{
            res.status(401).json("Item Not Found")
        }

    }
    catch(error){
        res.status(401).json(error)

    }
}



