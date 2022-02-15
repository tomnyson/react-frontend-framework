import express from 'express'
import sliderRoutes from './slider.route'
import userRoutes from './user.route'
import categoryRoutes from './categories.router'
import productRoutes from './products.router'
import orderRoutes from './orders.router'

const apiRoutes = express.Router()

apiRoutes.use('/slider', sliderRoutes)
apiRoutes.use('/users', userRoutes)
apiRoutes.use('/categories', categoryRoutes)
apiRoutes.use('/products', productRoutes)
apiRoutes.use('/orders', orderRoutes)

export default apiRoutes
