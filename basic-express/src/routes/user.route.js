import express from 'express'
import {register} from '../controllers/user.controller'

const userRoute = express.Router()
/**
 *  chia nhỏ route con ra
 * 
 */

userRoute.get('/', (req, res, next) => {
  return res.json({message: 'user route'})
})

userRoute.get('/:id', (req, res, next) => {

})
// router đăng ký
userRoute.post('/register', (req, res, next) => {
  register(req, res, next)
})

userRoute.put('/:id', (req, res, next) => {

})

userRoute.delete('/:id', (req, res, next) => {

})


export default userRoute