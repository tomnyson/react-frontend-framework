const passportJWT = require('passport-jwt')
import UserSchema from '../schemas/userSchema'

require('dotenv').config()
const ExtractJwt = passportJWT.ExtractJwt
const JwtStrategy = passportJWT.Strategy

const jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
jwtOptions.secretOrKey = process.env.TOKEN_SECRET

// const create our strategy for web token
const strategy = new JwtStrategy(jwtOptions, function (jwt_payload, next) {
  const user = UserSchema.findOne({ username: jwt_payload.username })
  if (user) {
    next(null, user)
  } else {
    next(null, false)
  }
})

export default strategy
