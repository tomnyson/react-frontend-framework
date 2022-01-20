import mongoose from 'mongoose'
const Schema = mongoose.Schema

const PostSchema = new Schema({
  name: { type: String, unique: true },
  description: { type: String },
  tags: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tags' }],
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Categories',
  },
})

module.exports = mongoose.model('Posts', PostSchema)
