import UserSchema from '../schemas/userSchema'
import { generateAccessToken } from '../utils/func'
module.exports = {
  getUser: async (req, res, next) => {
    const users = await UserSchema.find({}).select('-__v')
    return res.json({ data: users })
  },
  createUser: async (req, res, next) => {
    const body = req.body
    const userCreate = new UserSchema(body)
    const isExist = await UserSchema.findOne({ username: body.username })
    if (isExist) {
      return res.status(400).json({ message: 'User already exists' })
    }
    userCreate.save().then((user) => {
      return res.json(user)
    })
  },
  loginUser: async (req, res, next) => {
    const { username, password } = req.body
    const isExist = await UserSchema.findOne({ username })
    if (!isExist) {
      return res.status(400).json({ message: 'login failed' })
    }
    isExist.comparePassword(password, (notMath, isMatch) => {
      if (!isMatch) {
        return res.status(400).json({ message: 'login failed' })
      } else {
        // tạo ra token
        const token = generateAccessToken({
          username: isExist.username,
          id: username._id,
          role: isExist.role,
        })
        return res.json({ message: 'login success', token })
      }
    })
  },
}
