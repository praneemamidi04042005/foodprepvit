const express = require('express')
const authMiddleware = require('../middlewares/auth')
const {placeOrder,verifyOrder,userOrders,listOrders,updateStatus} = require('../controllers/orderController')
const orderRouter = express.Router()

orderRouter.post('/place',authMiddleware,placeOrder)
orderRouter.post('/verify',verifyOrder)
orderRouter.get('/list',authMiddleware,listOrders)
orderRouter.post('/status',authMiddleware,updateStatus)
orderRouter.post('/userorders',authMiddleware,userOrders)

 module.exports = orderRouter