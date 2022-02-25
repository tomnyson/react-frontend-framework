const ProductModel =  require('../models/product.schema')
module.exports = {
  create: async (req, res, next) => {
    /**
     * b': validation dữ liệu
     * b0: lấy được dữ liệu post vào
     * b1: gọi model category
     * b2: gọi func save
     * b3: trả về dữ liệu
     */
    const body = req.body;
    const newProduct = new ProductModel(body)
    const isCreated = await newProduct.save()
    return res.json(isCreated);
  },
  getList: async (req, res, next) => {
    try {
      const { keyword, categoryList, limit = 2, page = 1 } = req.query
      const conditions = {}
      if (keyword) {
        conditions.name = { $regex: '.*' + keyword + '.*' }
      }
      if(categoryList) {
        conditions.category = { $in : categoryList.split(',')  }
      }
      const data = await ProductModel.find(conditions).populate('category', '-__v')
      return res.json(data)
    } catch (error) {
      throw error
    }
  },
  getDetail: async (req, res, next) => {
    try {
      const {id} = req.params
      const result = await ProductModel.findOne({_id: id}).populate('category', '-__v')
      return res.json(result)
    } catch (error) {
      return res.status(400).json({message: 'id not exist'})
    }
  },
  update: async (req, res, next) => {
    try {
      const {id} = req.params
      const body = req.body;
      const isUpdate = await ProductModel.findOneAndUpdate({_id: id},body)
      return res.json({ message: 'update success'})
    } catch (error) {
      return res.status(400).json({message: 'id not exist'})
    }
  },
  remove: async (req, res, next) => {
    try {
      const {id} = req.params
      const isDelete = await ProductModel.deleteOne({_id: id})
      return res.json({ message: 'delete success'})
    } catch (error) {
      return res.status(400).json({message: 'id not exist'})
    }
  }
}
