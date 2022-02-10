import express from 'express'
const userRoutes = express.Router()
import { createUser, loginUser, getUser } from '../controllers/user.controller'
const passport = require('passport')

userRoutes.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res, next) => {
    getUser(req, res, next)
  }
)
userRoutes.post('/', (req, res, next) => {
  createUser(req, res, next)
})

userRoutes.post('/login', (req, res, next) => {
  loginUser(req, res, next)
})
export default userRoutes
