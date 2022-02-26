const express = require('express')
const userRoutes =  require('./user.route')
const categoryRoutes = require('./categories.route')
const productRoutes = require('./products.route')
const orderRoutes = require('./orders.route')

const apiRoute = express.Router()
/**
 *  chia nhỏ route con ra
 * 
 */
 apiRoute.use('/users', userRoutes)
 apiRoute.use('/categories', categoryRoutes)
 apiRoute.use('/products', productRoutes)
 apiRoute.use('/orders', orderRoutes)

module.exports = apiRoute