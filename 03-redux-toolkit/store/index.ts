import { createStore } from 'redux'

// **** (2) 리듀서 생성
function reducer(state: any, action: any) {
  if (action.type === 'UP') {
    // 불변하기 위해서 기존의 값을 복사
    return { ...state, value: state.value + action.step }
  }
  return state
}

// **** (1) 스토어 생성
const initialState = { value: 0 }
export const countStore = createStore(reducer, initialState)
