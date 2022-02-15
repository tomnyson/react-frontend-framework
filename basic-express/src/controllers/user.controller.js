const UserModel = require('../models/user.schema')
module.exports = {
  register: (req, res, next) => {
    // thêm user vào
    const body = req.body
    const createUser = new UserModel(body)
     createUser.save().then((data) => {
       console.log(data)
       return res.json(body)
     })
  }
}
