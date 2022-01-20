import mongoose from 'mongoose'
const Schema = mongoose.Schema

const TagSchema = new Schema({
  name: { type: String, unique: true },
  post: { type: mongoose.Schema.Types.ObjectId, ref: 'Posts' },
})

module.exports = mongoose.model('Tags', TagSchema)
