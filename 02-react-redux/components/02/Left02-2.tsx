import Left023 from './Left02-3'

export default function Left022() {
  console.log('⭐️Left023-리덕스 값이 변화해도, 부모는 재렌더링되지 않는다.')
  return (
    <div>
      <h1>Left2 : </h1>
      <Left023 />
    </div>
  )
}
