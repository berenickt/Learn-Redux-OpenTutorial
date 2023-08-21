import { useSelector } from 'react-redux'

export default function Left023() {
  // (4) useSelector => store에 값(변수) 가져오기
  const number = useSelector((state: any) => state.number)

  console.log('Left023', number)

  return (
    <div>
      <h1>Left3 : {number}</h1>
    </div>
  )
}
