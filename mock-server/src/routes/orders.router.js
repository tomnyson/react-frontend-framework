import express from 'express'
const orderRoutes = express.Router()
import {
  create,
  getList,
  getDetail,
  update,
  remove,
} from '../controllers/orders.controller'

orderRoutes.get('/', (req, res, next) => {
  getList(req, res, next)
})

orderRoutes.get('/:id', (req, res, next) => {
  getDetail(req, res, next)
})

orderRoutes.post('/', (req, res, next) => {
  create(req, res, next)
})

orderRoutes.put('/:id', (req, res, next) => {
  update(req, res, next)
})

orderRoutes.delete('/:id', (req, res, next) => {
  remove(req, res, next)
})

export default orderRoutes
