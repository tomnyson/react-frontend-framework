export const actions = {
  ADD_TODO_ITEM: "ADD_TODO_ITEM",
  REMOVE_TODO_ITEM: "REMOVE_TODO_ITEM",
  TOGGLE_COMPLETED: "TOGGLE_COMPLETED",
  ADD_AUTH: "ADD_AUTH",
  PRODUCT_LIST_FETCHING: "FETCHING_PRODUCT_LIST",
  PRODUCT_LIST_FETCH_COMPLETE: "PRODUCT_FETCH_COMPLETE",
  PRODUCT_LIST_FETCH_ERROR: "PRODUCT_LIST_FETCH_ERROR",
  USER_LOGIN: "USER_LOGIN",
  USER_LOGIN_COMPLETE: "USER_LOGIN_COMPLETE",
  USER_LOGIN_FAILED: "USER_LOGIN_COMPLETE",
  // alert action
  SHOW_ALERT: "SHOW_ALERT",
  CLEAR_ALERT: "CLEAR_ALERT",
}

export const addToDo = (payload) => {
  return { type: actions.ADD_TODO_ITEM, payload }
}

export const fetchingProductList = (payload) => {
  return { type: actions.PRODUCT_LIST_FETCHING }
}

export const UserLogin = (payload) => {
  return { type: actions.USER_LOGIN, payload }
}

export const userLoginComplete = (payload) => {
  //save token localstorage
  localStorage.setItem("TOKEN", payload.token)
  localStorage.setItem(
    "User",
    JSON.stringify({ username: payload.username, role: payload.role })
  )
  return { type: actions.USER_LOGIN_COMPLETE, payload }
}
export const initialState = {
  todo: {
    todoList: [],
  },
  auth: {
    isAuth: false,
  },
  product: {
    productList: [],
    fetchingProductList: false,
    fetchProductListError: false,
  },
  alert: {
    message: "",
    type: "",
  },
}

export const showAlert = (payload) => {
  return { type: actions.SHOW_ALERT, payload }
}

export const clearAlert = (payload) => {
  return { type: actions.CLEAR_ALERT, payload }
}
export const init = (initialState) => {
  return { initialState }
}
