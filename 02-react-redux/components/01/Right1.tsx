import Right2 from './Right2'

export default function Right1({ onClickUpCount }: any) {
  return (
    <div>
      <h1>Right1</h1>
      <Right2 onClickUpCount={onClickUpCount} />
    </div>
  )
}
