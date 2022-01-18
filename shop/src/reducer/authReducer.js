import { actions } from "./action"

export const authReducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_AUTH:
      return {
        auth: {
          ...state,
          auth: {
            isAuth: true,
          },
        },
      }
    default:
      return state
  }
}
