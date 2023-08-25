import { useDispatch, useSelector } from 'react-redux'
import { asyncUpFetch, up } from 'slice/counterSlice'

export default function Counter() {
  const dispatch = useDispatch()

  const count = useSelector((state: any) => {
    return state.counter.value
  })

  const status = useSelector((state: any) => {
    return state.counter.status
  })

  const onClickUpTwo = () => dispatch(up(2))
  const onClickAsyncFetch = () => dispatch(asyncUpFetch())

  return (
    <div>
      <button onClick={onClickUpTwo}>+</button>
      <button onClick={onClickAsyncFetch}>+ async fetch</button>
      <br />
      <div>
        {count} | {status}
      </div>
    </div>
  )
}
