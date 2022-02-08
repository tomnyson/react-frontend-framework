const Resize = require('../middleware/resize')
const path = require('path')
module.exports = {
  createSlider: async (req, res, next) => {
    const imagePath = path.join(__dirname, '../public/images')
    const fileUpload = new Resize(imagePath)
    const { resize = 300 } = req.body
    if (!req.files) {
      res.status(401).json({ error: 'Please provide an image' })
    }
    const result = []
    for (const file of req.files) {
      const filename = await fileUpload.save(file.buffer, parseInt(resize))
      result.push(filename)
    }
    return res.status(200).json({ name: result })
  },
}
