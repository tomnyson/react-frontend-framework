import UserSchema from '../schemas/userSchema'
import { generateAccessToken } from '../utils/func'
module.exports = {
  getUser: async (req, res, next) => {
    const users = await UserSchema.find({}).select('-__v -password')
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
      return res.status(400).json({ message: 'login failed 111' })
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
        return res.json({
          message: 'login success',
          token,
          username: isExist.username,
          id: username._id,
          role: isExist.role,
        })
      }
    })
  },
  updateUser: async (req, res, next) => {
    try {
      const body = req.body
      const { id } = req.params
      /**
       * check update exist
       */
      const newUpdate = { ...body }
      Object.keys(body).forEach((key) => {
        if (newUpdate[key] === '') {
          delete newUpdate[key]
        }
        if (newUpdate['_id'] !== '') {
          delete newUpdate['_id']
        }
      })
      const isCheck = await UserSchema.findById(id)
      if (!isCheck) {
        return res.status(400).json({ message: 'user not exist' })
      }
      if (newUpdate.password !== '') {
      }
      const isUpdate = await UserSchema.update({ _id: id }, newUpdate)
      if (isUpdate) {
        return res.json({ message: 'updated success' })
      }
    } catch (error) {
      return res.status(500).json({ message: 'server error' })
    }
  },
  removeUser: async (req, res, next) => {
    const { id } = req.params
    const isCheck = await UserSchema.findById(id)
    if (!isCheck) {
      return res.status(400).json({ message: 'user not exist' })
    }
    await UserSchema.findOneAndDelete({ _id: id })
    return res.json({ message: 'deleted success' })
  },
}
