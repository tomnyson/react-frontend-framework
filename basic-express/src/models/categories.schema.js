const mongoose = require('mongoose');

const { Schema } = mongoose;

const CategoriesSchema = new Schema({
  name: { type: String, unique: true },
  description: String
})

module.exports = mongoose.model('Categories', CategoriesSchema)