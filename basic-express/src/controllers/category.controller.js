const CategoryModel =  require('../models/categories.schema')
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
    const newCat = new CategoryModel(body)
    const isCreated = await newCat.save()
    return res.json(isCreated);
  },
  getList: async (req, res, next) => {
    try {
      const data = await CategoryModel.find()
      return res.json(data)
    } catch (error) {
      throw error
    }
  },
  getDetail: async (req, res, next) => {
    try {
      const {id} = req.params
      const result = await CategoryModel.findOne({_id: id})
      return res.json(result)
    } catch (error) {
      return res.status(400).json({message: 'id not exist'})
    }
  },
  update: async (req, res, next) => {
    try {
      const {id} = req.params
      const body = req.body;
      const isUpdate = await CategoryModel.findOneAndUpdate({_id: id},body)
      return res.json({ message: 'update success'})
    } catch (error) {
      return res.status(400).json({message: 'id not exist'})
    }
  },
  remove: async (req, res, next) => {
    try {
      const {id} = req.params
      const isDelete = await CategoryModel.deleteOne({_id: id})
      return res.json({ message: 'delete success'})
    } catch (error) {
      return res.status(400).json({message: 'id not exist'})
    }
  }
}
