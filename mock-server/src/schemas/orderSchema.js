import mongoose from 'mongoose'
const Schema = mongoose.Schema

const OrderSchema = new Schema({
  name: { type: String },
  order_date: { type: Date, default: Date.now() },
  customer: { type: Schema.Types.ObjectId, ref: 'Users' },
  status: String,
  total: Number,
  shipping_address: String,
  phone: String,
  email: String,
  items: [
    {
      product: { type: Schema.Types.ObjectId, ref: 'Products' },
      price: Number,
      quantity: Number,
    },
  ],
})

module.exports = mongoose.model('Orders', OrderSchema)
