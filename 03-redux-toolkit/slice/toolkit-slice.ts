import { createSlice } from '@reduxjs/toolkit'

// **** (2)redux-toolkit 리듀서같은 Slice
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    UP: (state: any, action: any) => {
      // console.log('action', action)

      // state.value = state.value + action.step
      state.value = state.value + action.payload
    },
  },
})

export default counterSlice
export const { UP }: any = counterSlice.actions
