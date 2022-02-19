const UserModel = require('../models/user.schema')
const { generateAccessToken } = require('../utils/helpers')
module.exports = {
  register: async(req, res, next) => {
    try {
    const body = req.body
    const createUser = new UserModel(body)
    const isCheck = await UserModel.findOne({username: body.username})
    if(isCheck) {
      return res.status(400).json({message: 'tài khoản đã tồn tại' })
    }
     createUser.save().then((data) => {
       console.log(data)
       return res.json(body)
     })
    } catch (error) {
      return res.status(500).json({message: 'server error'})
    }
  },
  getList: async (req, res, next) => {
    // thêm user vào
    const data = await UserModel.find()
    return res.json(data)
  },
  login: async (req, res, next) => {
    // thêm user vào
    /**
     * b1 tìm email có tồn tại không,
     * b2: check password có đúng ko
     * nếu đúng trả về token jwt gọi hàm generator token
     */
    const {username, password} = req.body

    const isCheck = await UserModel.findOne({username, password})
    if(!isCheck) {
      return res.status(403).json({message: 'tài khoản hoặc mật khẩu không đúng' })
    }
    const token = generateAccessToken({
      id: isCheck._id,
      role: isCheck.role
    })
    console.log(isCheck)
    return res.json({
      message: 'đăng nhập thành công',
      token: token,
      name: isCheck.name,
      role: isCheck.role
    })
  }
}
