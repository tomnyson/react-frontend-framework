const OrderModel =  require('../models/orders.schema')
module.exports = {
  create: async (req, res, next) => {
    /**
     * b': validation dữ liệu
     * b0: lấy được dữ liệu post vào
     * b1: gọi model category
     * b2: gọi func save
     * b3: trả về dữ liệu
     */
    /** send email 
     */
    const body = req.body;
    const newOrder = new OrderModel(body)
    const isCreated = await newOrder.save()
    return res.json(isCreated);
  },
  getList: async (req, res, next) => {
    try {
      const data = await OrderModel.find().populate('Users', '-__v')
      return res.json(data)
    } catch (error) {
      throw error
    }
  },
  getDetail: async (req, res, next) => {
    try {
      const {id} = req.params
      const result = await OrderModel.findOne({_id: id}).populate('Users', '-__v')
      return res.json(result)
    } catch (error) {
      return res.status(400).json({message: 'id not exist'})
    }
  },
  update: async (req, res, next) => {
    try {
      const {id} = req.params
      const body = req.body;
      const isUpdate = await OrderModel.findOneAndUpdate({_id: id},body)
      return res.json({ message: 'update success'})
    } catch (error) {
      return res.status(400).json({message: 'id not exist'})
    }
  },
  remove: async (req, res, next) => {
    try {
      const {id} = req.params
      const isDelete = await OrderModel.deleteOne({_id: id})
      return res.json({ message: 'delete success'})
    } catch (error) {
      return res.status(400).json({message: 'id not exist'})
    }
  }
}
