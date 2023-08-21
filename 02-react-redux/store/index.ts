import { createStore } from 'redux'

// **** (2) 리듀서 생성
function reducer(currentState: any, action: any) {
  if (currentState === undefined) {
    return {
      number: 1,
    }
  }
  const newState = { ...currentState }
  if (action.type === 'PLUS') {
    newState.number++
  }
  return newState
}

// **** (1) 스토어 생성
export const store = createStore(reducer)
