import express from 'express'
const productRoutes = express.Router()
import {
  create,
  getList,
  getDetail,
  update,
  remove,
} from '../controllers/products.controller'

productRoutes.get('/', (req, res, next) => {
  getList(req, res, next)
})

productRoutes.get('/:id', (req, res, next) => {
  getDetail(req, res, next)
})

productRoutes.post('/', (req, res, next) => {
  create(req, res, next)
})

productRoutes.put('/:id', (req, res, next) => {
  update(req, res, next)
})

productRoutes.delete('/:id', (req, res, next) => {
  remove(req, res, next)
})

export default productRoutes
