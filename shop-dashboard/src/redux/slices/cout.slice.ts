import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { getAPI } from '../../services/provider'
export interface CounterState {
  value: number
  data: Array<any>,
  isFetch: boolean
}

const initialState: CounterState = {
  value: 0,
  data: [],
  isFetch: false
}

export const fetchData = createAsyncThunk(
  'users/fetchAll',
  async (userId, thunkAPI) => {
    const response = await getAPI('https://61a5e3c48395690017be8ed2.mockapi.io/blogs/article')
    console.log('response', response)
    return response.data
  }
)

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state, action) => {
      state.isFetch = true;
    })
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isFetch = false;
      state.data = action.payload
    })
    builder.addCase(fetchData.rejected, (state, action) => {
      throw new Error('Fetch failed')
    })
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer