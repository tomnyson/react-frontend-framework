const express = require('express')
const {create, getList, getDetail, update, remove } = require('../controllers/category.controller')

const categoryRoute = express.Router()
/**
 *  chia nhỏ route con ra
 * 
 */

categoryRoute.get('/', (req, res, next) => {
  getList(req, res, next)
})

categoryRoute.get('/:id', (req, res, next) => {
  getDetail(req, res, next )
})
// router đăng ký
categoryRoute.post('/', (req, res, next) => {
  create(req, res, next)
})

categoryRoute.put('/:id', (req, res, next) => {
  update(req, res, next)
})

categoryRoute.delete('/:id', (req, res, next) => {
  remove(req, res, next)
})


module.exports =categoryRoute