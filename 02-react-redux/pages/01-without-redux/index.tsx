import { useState } from 'react'
import { Container, GridWrapper } from 'styles'

import Left1 from '@/01/Left1'
import Right1 from '@/01/Right1'

export default function WithOutReactRedux() {
  const [number, setnumber] = useState(1)

  const onClickUpCount = () => {
    setnumber(prev => prev + 1)
  }

  return (
    <Container>
      <h1>Root : {number}</h1>
      <GridWrapper>
        <Left1 number={number} />
        <Right1 onClickUpCount={onClickUpCount} />
      </GridWrapper>
    </Container>
  )
}
