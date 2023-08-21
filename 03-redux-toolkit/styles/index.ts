import styled from '@emotion/styled'

export const Container = styled.div`
  border: 5px solid yellowgreen;
  margin: 10px;
`

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  div {
    border: 5px solid tomato;
    margin: 10px;
  }
`
