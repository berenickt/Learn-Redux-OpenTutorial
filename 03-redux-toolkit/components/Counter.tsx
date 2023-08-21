import { useDispatch, useSelector } from 'react-redux'
import { UP } from 'slice/toolkit-slice'

export default function Counter() {
  // **** useSelector => 변수가져오기
  const count = useSelector((state: any) => {
    console.log('store에 정의한 key객체가 이름으로 옴 state', state)
    return state.counter.value
  })

  const dispatch = useDispatch()

  const onClickCountUp = () => {
    /** dispatch => 함수 가져오기
     * store에서 createSlice에 정의한 name을
     * `name/reducers에서선언한함수` 형태로 넘겨준다
     */
    // dispatch({ type: 'counter/UP', step: 2 }) // redux 방식으로 쓰는법
    dispatch(UP(2)) // redux-toolkit방식으로 쓰는 법
  }

  return (
    <div>
      <button onClick={onClickCountUp}>+</button>
      {count}
    </div>
  )
}
