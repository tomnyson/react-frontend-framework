const express = require('express')
const {create, getList, getDetail, update, remove } = require('../controllers/product.controller')

const productRoute = express.Router()
/**
 *  chia nhỏ route con ra
 * 
 */
productRoute.get('/', (req, res, next) => {
  getList(req, res, next)
})

productRoute.get('/:id', (req, res, next) => {
  getDetail(req, res, next )
})
productRoute.post('/', (req, res, next) => {
  create(req, res, next)
})

productRoute.put('/:id', (req, res, next) => {
  update(req, res, next)
})

productRoute.delete('/:id', (req, res, next) => {
  remove(req, res, next)
})


module.exports =productRoute