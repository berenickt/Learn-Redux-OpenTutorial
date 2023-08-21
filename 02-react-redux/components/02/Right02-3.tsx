import { useDispatch } from 'react-redux'

export default function Right023() {
  // (5) useDispatch => store에 함수 가져오기
  const dispatch = useDispatch()

  const onClickUpCount = () => dispatch({ type: 'PLUS' })

  return (
    <div>
      <h1>Right3</h1>
      <button onClick={onClickUpCount}>+</button>
    </div>
  )
}
