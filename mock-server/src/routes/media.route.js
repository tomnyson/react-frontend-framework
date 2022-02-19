import express from 'express'
const mediaRoutes = express.Router()
import { create } from '../controllers/media.controller'
const upload = require('../middleware/uploadMiddleware')

mediaRoutes.get('/', (req, res) => {
  return res.json({ message: 'aaa' })
})
mediaRoutes.post('/', upload.array('files', 10), (req, res, next) => {
  create(req, res, next)
})

export default mediaRoutes
