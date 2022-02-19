import express from 'express'
const userRoutes = express.Router()
import {
  createUser,
  loginUser,
  getUser,
  updateUser,
  removeUser,
} from '../controllers/user.controller'
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

userRoutes.put(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res, next) => {
    updateUser(req, res, next)
  }
)

userRoutes.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res, next) => {
    removeUser(req, res, next)
  }
)
export default userRoutes
