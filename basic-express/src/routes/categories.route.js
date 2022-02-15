const express = require('express')
const {create} = require('../controllers/category.controller')

const categoryRoute = express.Router()
/**
 *  chia nhỏ route con ra
 * 
 */

categoryRoute.get('/', (req, res, next) => {
  return res.json({message: 'user route'})
})

categoryRoute.get('/:id', (req, res, next) => {

})
// router đăng ký
categoryRoute.post('/', (req, res, next) => {
  create(req, res, next)
})

categoryRoute.put('/:id', (req, res, next) => {

})

categoryRoute.delete('/:id', (req, res, next) => {

})


module.exports =categoryRoute