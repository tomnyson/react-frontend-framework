import express from 'express'
const sliderRoutes = express.Router()
import { createSlider } from '../controllers/slider.controller'
const upload = require('../middleware/uploadMiddleware')

sliderRoutes.get('/', (req, res) => {
  return res.json({ message: 'aaa' })
})
sliderRoutes.post('/', upload.array('images', 10), (req, res, next) => {
  createSlider(req, res, next)
})

export default sliderRoutes
