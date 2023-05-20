// import cart collection
const cart = require('../models/cartSchema')

// add to cart
exports.addToCart = async (req, res) => {
    // get product details from request
    const { id, title, price, image, quantity } = req.body


    // logic
    try {
        // check if product is already in cart
        const product = await cart.findOne({ id })
        if (product) {
            // products is in car,increment product quantity
            product.quantity += 1
            // uopdate grand total in mongodb 
            product.grandTotal = product.price * product.quantity
            // to save changes in mongodb
            product.save()
            // send response to the client
            res.status(200).json("product already added to the cart")

        }
        else {
            // product is unavailabe in the cart
            // add product to the cart
            const newProduct = new cart({ id, title, price, image, quantity, grandTotal: price })
            // save new product
            await newProduct.save()
            // send response to the client
            res.status(200).json("product added to the cart")

        }
    }
    catch (error) {
        res.status(401).json(error)

    }

}

exports.getallCart = async (req, res) => {
    try {
        const allcart = await cart.find()
        res.status(200).json(allcart)
    }
    catch (error) {
        res.status(401).json(error)
    }


}
exports.removecartitems = async (req, res) => {
    // get product id from request params
    const { id } = req.params
    try {
        // remove an item from cart
        const removeProduct = await cart.deleteOne({ id })

        if (removeProduct.deletedCount != 0) {
            // get remaining products
            const remainingproducts = await cart.find()
            // send response to the client
            res.status(200).json(remainingproducts)
        }
        else {
            res.status(404).json("item not found")

        }

    }
    catch (error) {
        res.status(401).json(error)
    }
}
// increment cart item cart

exports.incrementcount = async (req, res) => {
    const { id } = req.params
    // get product id from request params
    try {

        // check if already in cart
        const product = await cart.findOne({ id })
        if (product) {
            // if product is in cart
            product.quantity += 1

            product.grandTotal = product.price * product.quantity

            await product.save()
            //  increment,get all the product from the cart after updating cart item

            // get all products from cart
            const allproduct = await cart.find()
            res.status(200).json(allproduct)
        }
        else {
            res.status(402).json("item not found in cart")
        }
    }
    catch (error) {
        res.status(401).json(error)
    }
}
exports.decrementcount = async (req, res) => {

    const { id } = req.params
    try {
        // check if already in cart
        const product = await cart.findOne({ id })
        console.log(product);
        if (product) {

            product.quantity -= 1
            if (product.quantity == 0) {

                await cart.deleteOne({ id })
                const allproduct = await cart.find()
                res.status(200).json(allproduct)
            }
            else {

                product.grandTotal = product.price * product.quantity
                await product.save()
                const allproduct = await cart.find()
                res.status(200).json(allproduct)
            }
        }
        else {
            res.status(402).json("item not found in cart")
        }
    }
    catch (error) {
        res.status(401).json(error)
    }
}
