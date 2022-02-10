const jwt = require('jsonwebtoken')

export const generateAccessToken = (payload) => {
  return jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: '7d' })
}
