import Left3 from './Left3'

export default function Left2({ number }: any) {
  return (
    <div>
      <h1>Left2 : {number}</h1>
      <Left3 number={number} />
    </div>
  )
}
