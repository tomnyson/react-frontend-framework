import mongoose from 'mongoose'

const { Schema } = mongoose;

const UserSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  role: String,
  name: String,
  date: { type: Date, default: Date.now },
  active: {Type: Boolean,  default: false}
})

module.exports = mongoose.model('Users', UserSchema)