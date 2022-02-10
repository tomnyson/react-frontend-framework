require('dotenv').config()
import express from 'express'
import bodyParser from 'body-parser'
import mainRouter from './routes'
import cors from 'cors'
const passport = require('passport')
import strategy from './middleware/auth.middleware'
const app = express()

passport.use(strategy)
app.use(passport.initialize())
app.use(cors())
app.use(bodyParser.json())

app.use('/api', mainRouter)

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
  require('./services/mongoDb')
  console.log(`Server is running on PORT ${PORT}`)
})
