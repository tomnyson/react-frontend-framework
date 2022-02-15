import OrderSchema from '../schemas/orderSchema'
import { STATUS_ORDER } from '../utils/consts'
module.exports = {
  create: async (req, res, next) => {
    try {
      const body = req.body
      const newOrder = new OrderSchema({
        ...body,
        status: STATUS_ORDER.PENDING,
      })
      const result = await newOrder.save()
      if (result) {
        return res.json(result)
      }
    } catch (error) {
      return res.status(500).json({ message: 'server error' })
    }
  },
  getList: async (req, res, next) => {
    try {
      const data = await OrderSchema.find()
        .populate('customer', '-__v -password')
        .populate('items.product', '_id name image price')
      return res.json(data)
    } catch (error) {
      return res.status(500).json({ message: 'server error' })
    }
  },

  getDetail: async (req, res, next) => {
    try {
      const { id } = req.params
      const data = await OrderSchema.findOne({ _id: id })
        .populate('customer', '-__v -password')
        .populate('items.product', '_id name image price')
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
      const isUpdate = await OrderSchema.findOneAndUpdate({ _id: id }, body)
      if (!isUpdate) {
        return res.status(404).json({ message: 'id not exist' })
      }
      const data = await OrderSchema.findOne({ _id: id })
      return res.json(data)
    } catch (error) {
      return res.json({ message: 'id not found' })
    }
  },

  remove: async (req, res, next) => {
    try {
      const { id } = req.params
      const isDelete = await OrderSchema.deleteOne({ _id: id })
      if (!isDelete) {
        return res.status(404).json({ message: 'id not exist' })
      }
      return res.json({ message: 'delete success' })
    } catch (error) {
      return res.json({ message: 'id not found' })
    }
  },
}
