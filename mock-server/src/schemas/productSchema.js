import mongoose from 'mongoose'
const Schema = mongoose.Schema

const ProductSchema = new Schema({
  name: { type: String },
  description: String,
  images: [String],
  price: Number,
  category: { type: Schema.Types.ObjectId, ref: 'Categories' },
  createAt: { type: Date, default: Date.now() },
})

module.exports = mongoose.model('Products', ProductSchema)
