import express from 'express'
const categoryRoutes = express.Router()
import {
  create,
  getList,
  getDetail,
  update,
  remove,
} from '../controllers/categories.controller'

categoryRoutes.get('/', (req, res, next) => {
  getList(req, res, next)
})

categoryRoutes.get('/:id', (req, res, next) => {
  getDetail(req, res, next)
})

categoryRoutes.post('/', (req, res, next) => {
  create(req, res, next)
})

categoryRoutes.put('/:id', (req, res, next) => {
  update(req, res, next)
})

categoryRoutes.delete('/:id', (req, res, next) => {
  remove(req, res, next)
})

export default categoryRoutes
