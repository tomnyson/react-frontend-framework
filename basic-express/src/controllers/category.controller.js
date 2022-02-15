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

  }
}
