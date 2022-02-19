export const combineReducers = (slices) => (state, action) =>
  Object.keys(slices).reduce(
    // use for..in loop, if you prefer it
    (acc, prop) => ({
      ...acc,
      [prop]: slices[prop](acc[prop], action),
    }),
    state
  )

export const formatCurrency = (value) => {
  return (
    value && value.toLocaleString("it-IT", { style: "currency", currency: "VND" })
  )
}

export const removeTags = (str) => {
  if (str === null || str === "") return false
  else str = str.toString()

  // Regular expression to identify HTML tags in
  // the input string. Replacing the identified
  // HTML tag with a null string.
  return str.replace(/(<([^>]+)>)/gi, "")
}

export const debounce = (func, timeout = 300) => {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, timeout)
  }
}
