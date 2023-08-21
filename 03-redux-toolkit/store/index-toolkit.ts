// import { createStore } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import counterSlice from 'slice/toolkit-slice'

// // **** (1) 스토어 생성
const counterToolkitStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
})

export default counterToolkitStore
