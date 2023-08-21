import Left2 from './Left2'

export default function Left1({ number }: any) {
  return (
    <div>
      <h1>Left1 : {number}</h1>
      <Left2 number={number} />
    </div>
  )
}
