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
      /**
       * lấy theo keyword
       * mặc định số trang sẽ là 10 item và page=1 lần
       */
      const { keyword, limit = 20, page = 1 } = req.query
      const conditions = {}
      if (keyword) {
        conditions.name = { $regex: '.*' + keyword + '.*' }
      }
      const data = await ProductSchema.find(conditions)
        .populate('category', '-__v')
        .skip((page - 1) * limit)
        .limit(limit)
        .sort({ createAt: -1 })
      const total = await ProductSchema.count(conditions)
      return res.json({
        data: data,
        totalPage: Math.floor(total / limit),
      })
    } catch (error) {
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
