export const combineReducers = (slices) => (state, action) =>
  Object.keys(slices).reduce(
    // use for..in loop, if you prefer it
    (acc, prop) => ({
      ...acc,
      [prop]: slices[prop](acc[prop], action),
    }),
    state
  )

export const getTotalCart = (cart) => {
  // return cart
  //   .map((o) => o.price * o.quantity)
  //   .reduce((a, c) => {
  //     return a + c
  //   })
  let sum = 0
  cart.forEach((item) => {
    sum += item.price * item.quantity
  })
  return sum
}
