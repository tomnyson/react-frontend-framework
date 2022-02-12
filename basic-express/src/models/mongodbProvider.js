import mongoose from 'mongoose'
require('dotenv').config()

const DB_LOCAL = `mongodb://localhost:27017/db-shopping`
const URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_URI}/${process.env.DB_NAME}?retryWrites=true&w=majority`
mongoose.connect(URI || DB_LOCAL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
mongoose.connection.on('error', (err) => {
  console.log('err', err)
})
mongoose.connection.on('connected', (err, res) => {
  console.log('mongoose is connected')
})
