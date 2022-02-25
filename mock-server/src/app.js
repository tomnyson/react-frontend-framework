require('dotenv').config()
import express from 'express'
import bodyParser from 'body-parser'
import mainRouter from './routes'
import cors from 'cors'
const passport = require('passport')
import strategy from './middleware/auth.middleware'
const app = express()
const pug = require('pug')
passport.use(strategy)
app.use(passport.initialize())
app.set('view engine', 'pug')
app.use(cors())
app.use(bodyParser.json())
app.use(express.static('public'))
app.use('/api', mainRouter)

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
  require('./services/mongoDb')
  console.log(`Server is running on PORT ${PORT}`)
})
