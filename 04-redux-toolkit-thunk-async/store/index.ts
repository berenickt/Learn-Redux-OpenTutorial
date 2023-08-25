import { configureStore } from '@reduxjs/toolkit'
import counterSlice from 'slice/counterSlice'

const countStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
})

export default countStore
