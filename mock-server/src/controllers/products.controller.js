import ProductSchema from '../schemas/productSchema'
module.exports = {
  create: async (req, res, next) => {
    try {
      const body = req.body
      const newProduct = new ProductSchema(body)
      const result = await newProduct.save()
      if (result) {
        return res.json(result)
      }
    } catch (error) {
      return res.status(500).json({ message: 'server error' })
    }
  },
  getList: async (req, res, next) => {
    try {
      const data = await ProductSchema.find().populate('category', '-__v')
      return res.json(data)
    } catch (error) {
      throw error
      return res.status(500).json({ message: 'server error' })
    }
  },

  getDetail: async (req, res, next) => {
    try {
      const { id } = req.params
      const data = await ProductSchema.findOne({ _id: id })
      if (!data) {
        return res.status(404).json({ message: 'id not exist' })
      }
      return res.json(data)
    } catch (error) {
      return res.json({ message: 'id not found' })
    }
  },

  update: async (req, res, next) => {
    try {
      const { id } = req.params
      const body = req.body
      const isUpdate = await ProductSchema.findOneAndUpdate({ _id: id }, body)
      if (!isUpdate) {
        return res.status(404).json({ message: 'id not exist' })
      }
      const data = await ProductSchema.findOne({ _id: id })
      return res.json(data)
    } catch (error) {
      return res.json({ message: 'id not found' })
    }
  },

  remove: async (req, res, next) => {
    try {
      const { id } = req.params
      const isDelete = await ProductSchema.deleteOne({ _id: id })
      if (!isDelete) {
        return res.status(404).json({ message: 'id not exist' })
      }
      return res.json({ message: 'delete success' })
    } catch (error) {
      return res.json({ message: 'id not found' })
    }
  },
}
