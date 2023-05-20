// To Define routes for client Request,Create routes folder and routes.js files
    
// import Express 
const express = require('express')
// Import ProductController
const productController=require('../Controllers/productController')
// Import Wishlist controller
const wishlistController = require('../Controllers/wishlistController')
// import cart controller
const cartController = require('../Controllers/cartController')

// using Express Create an Object for router class inorder to setup path
const router =new express.Router()

// Resolving Client Requests

// api - getallproduct request 
router.get('/products/all-products',productController.getallproducts)

// api - view product request
router.get('/product/view-product/:id',productController.viewproduct)

// api -product added to wish list 
router.post('/wishlist/add-to-wishlist',wishlistController.addtowishlist)

// api - get all product from wishlist
router.get('/wishlist/getwishlistproduct',wishlistController.getallwishlist)

// api -  remove product from wishlist
router.delete('/wishlist/delete-wishlist-product/:id',wishlistController.removewishlistitems)

// api - add to cart
router.post('/cart/add-to-cart/',cartController.addToCart)

// api - get all cart list
router.get('/cart/get-all-cart',cartController.getallCart)
// api - increment quantity
router.get('/cart/incrementquantity/:id',cartController.incrementcount)
// api - decrement quantity
router.get('/cart/decrementquantity/:id',cartController.decrementcount)

// api - remove from cart 
router.delete('/cart/remove-cart/:id',cartController.removecartitems)
// export router

module.exports = router
