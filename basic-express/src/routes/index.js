import express from 'express'
import userRoutes from './user.route'

const apiRoute = express.Router()
/**
 *  chia nhỏ route con ra
 * 
 */
 apiRoute.use('/user', userRoutes)
//  apiRoute.use('/categories', userRoutes)
//  apiRoute.use('/products', userRoutes)
//  apiRoute.use('/orders', userRoutes)

 export default apiRoute