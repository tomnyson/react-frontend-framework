import { actions } from "./action"

export const authReducer = (state, action) => {
  switch (action.type) {
    case actions.USER_LOGIN_COMPLETE: {
      return {
        ...state,
        isAuth: true,
        ...action.payload,
      }
    }
    default:
      return state
  }
}
