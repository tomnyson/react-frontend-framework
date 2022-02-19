const express = require('express')
const userRoutes =  require('./user.route')
const categoryRoutes = require('./categories.route')
const productRoutes = require('./products.route')

const apiRoute = express.Router()
/**
 *  chia nhỏ route con ra
 * 
 */
 apiRoute.use('/users', userRoutes)
 apiRoute.use('/categories', categoryRoutes)
 apiRoute.use('/products', productRoutes)
//  apiRoute.use('/orders', userRoutes)

module.exports = apiRoute