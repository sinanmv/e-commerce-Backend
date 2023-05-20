// import wishlist collection
const wishlist = require('../models/wishListSchema')


// add to wishlist logic


exports.addtowishlist = async (req,res)=>{
    // get product details from request

    // using destructure
    const{id,title,price,image}=req.body

    // logic
    try{
        // check if product is in wishlist
        const item= await wishlist.findOne({id})
        {
            if(item){
                res.status(403).json('Irem already Exists in Wishlist')
            }
            else{
                // add the item to the wishlist
                const newProduct = new wishlist({id,title,price,image})

                // to store
                await newProduct.save()

                res.status(200).json("Product added to the wishlist")
        }
    }
}
    catch(error){
        res.status(401).json(error)
    }
}
exports.getallwishlist=async (req,res)=>{
    // logic 
    try{
        // get all product from wishlist collection in mongodb
        const wishlistdata = await wishlist.find()
            res.status(200).json(wishlistdata)
        
    }
    catch(error){
        res.status(401).json(error)
    }
}
// remove wishlist items - logic

exports.removewishlistitems=async (req,res)=>{
    // get product id from request
    const {id}=req.params
    // logic
    try{
        // remove item from wishlist
        const removewishlist = await wishlist.deleteOne({id})
        if(removewishlist){
            // get all wishlist after removing particular wishlist item
            const allwishlist = await wishlist.find() // remaining wishlist items
            res.status(200).json(allwishlist)
        }
        else
        {
            res.status(404).json('Product not found in wishlist')
        }
    }catch(error){
        res.status(401).json(error)
    }
                
}
