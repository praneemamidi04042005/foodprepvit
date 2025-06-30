const express = require('express');
const {addToCart, getCart, removeFromCart} = require('../controllers/cartController');
const cartRouter = express.Router();
const authMiddleware = require('../middlewares/auth');
cartRouter.post('/add',authMiddleware,addToCart)
cartRouter.post('/get',authMiddleware,getCart)
cartRouter.post('/remove',authMiddleware,removeFromCart)

module.exports = cartRouter;