const express = require('express')
const userRoutes =  require('./user.route')
const categoryRoutes = require('./categories.route')

const apiRoute = express.Router()
/**
 *  chia nhỏ route con ra
 * 
 */
 apiRoute.use('/user', userRoutes)
 apiRoute.use('/categories', categoryRoutes)
//  apiRoute.use('/products', userRoutes)
//  apiRoute.use('/orders', userRoutes)

module.exports = apiRoute