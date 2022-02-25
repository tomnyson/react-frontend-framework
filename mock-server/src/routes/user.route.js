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
const pug = require('pug')
const path = require('path')

const nodemailer = require('nodemailer')
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
userRoutes.post('/template', async (req, res, next) => {
  const pathFile = path.join(__dirname, '../template/login-success.pug')
  const compiledFunction = pug.compileFile(pathFile)
  const htmlText = compiledFunction({
    name: 'Timothy',
  })
  const body = {
    sender: {
      name: 'support',
      email: 'support@gmail.com',
    },
    to: [
      {
        email: 'tabletkindfire@gmail.com',
        name: 'tomnyson',
      },
    ],
    htmlContent: htmlText,
    subject: 'Login Email confirmation',
  }

  let transporter = nodemailer.createTransport({
    host: 'in-v3.mailjet.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: '3170a10cad747faca9aaef699333737f', // generated ethereal user
      pass: '816b02313f79f5422008acc76cf20c16', // generated ethereal password
    },
  })

  let info = await transporter.sendMail({
    from: '"admin" tabletkindfire@gmail.com', // sender address
    to: 'tabletkindfire@gmail.com', // list of receivers
    subject: 'test email', // Subject line
    text: 'Hello world?', // plain text body
    html: htmlText, // html body
  })
  console.log(info)
  return res.json(info)
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
