import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { getAPI, postAPI } from '../../services/provider'
import { USER_API } from '../../services/const'
import { TRegister, TLogin } from '../../utils/types/user.type'

export interface UserState {
  token: string | undefined
  data: Array<any>,
  isFetch: boolean
}

const initialState: UserState = {
  token: undefined,
  data: [],
  isFetch: false
}

export const registerAccount = createAsyncThunk(
  'users/registerAccount',
  async (user: TRegister) => {
    delete user.password_confirm
    const response = await postAPI(USER_API.REGISTER, { ...user, roleId: 1 })
    return response.data
  }
)

export const loginAccount = createAsyncThunk(
  'users/loginAccount',
  async (user: TLogin) => {
    const response = await postAPI(USER_API.LOGIN, { ...user })
    if (response.status === 201) {
      localStorage.setItem('TOKEN', response?.body?.data?.access_token)
      localStorage.setItem('USER', user.email)
    }
    return response?.body?.data
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(registerAccount.pending, (state, action) => {
      state.isFetch = true;
    })
    builder.addCase(registerAccount.fulfilled, (state, action) => {
      state.isFetch = false;
      state.data = action.payload
    })
    builder.addCase(registerAccount.rejected, (state, action) => {
      throw new Error('Fetch failed')
    }),
      builder.addCase(loginAccount.pending, (state, action) => {
        state.isFetch = true;
      })
    builder.addCase(loginAccount.fulfilled, (state, action) => {
      state.isFetch = false;
      state.token = action.payload.access_token
    })
    builder.addCase(loginAccount.rejected, (state, action) => {
      throw new Error('Fetch failed')
    })
  }
})

// Action creators are generated for each case reducer function
export default userSlice.reducer