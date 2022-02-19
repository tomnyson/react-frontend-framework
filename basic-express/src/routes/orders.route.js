const express = require('express')
const {create, getList, getDetail, update, remove } = require('../controllers/product.controller')

const orderRoute = express.Router()
/**
 *  chia nhỏ route con ra
 * 
 */
orderRoute.get('/', (req, res, next) => {
  getList(req, res, next)
})

orderRoute.get('/:id', (req, res, next) => {
  getDetail(req, res, next )
})
orderRoute.post('/', (req, res, next) => {
  create(req, res, next)
})

orderRoute.put('/:id', (req, res, next) => {
  update(req, res, next)
})

orderRoute.delete('/:id', (req, res, next) => {
  remove(req, res, next)
})


module.exports =orderRoute