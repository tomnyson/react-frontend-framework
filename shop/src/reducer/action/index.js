export const actions = {
  ADD_TODO_ITEM: "ADD_TODO_ITEM",
  REMOVE_TODO_ITEM: "REMOVE_TODO_ITEM",
  TOGGLE_COMPLETED: "TOGGLE_COMPLETED",
  ADD_AUTH: "ADD_AUTH",
  PRODUCT_LIST_FETCHING: "FETCHING_PRODUCT_LIST",
  PRODUCT_LIST_FETCH_COMPLETE: "PRODUCT_FETCH_COMPLETE",
  PRODUCT_LIST_FETCH_ERROR: "PRODUCT_LIST_FETCH_ERROR",
}

export const addToDo = (payload) => {
  return { type: actions.ADD_TODO_ITEM, payload }
}

export const fetchingProductList = (payload) => {
  console.log("aaaa", payload)
  return { type: actions.PRODUCT_LIST_FETCHING }
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
}

export const init = (initialState) => {
  return { initialState }
}
