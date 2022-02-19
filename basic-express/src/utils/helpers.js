const jwt = require('jsonwebtoken')

const generateAccessToken = (payload = {}, time = '7d') => {
  return jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: time })
}

module.exports = {generateAccessToken}