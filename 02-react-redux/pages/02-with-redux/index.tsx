import { Provider } from 'react-redux'

import { store } from 'store'
import { Container, GridWrapper } from 'styles'
import Left021 from '@/02/Left02-1'
import Right021 from '@/02/Right02-1'

export default function WithReactRedux() {
  return (
    <Container>
      <h1>Root </h1>
      <GridWrapper>
        {/* (3) Provider 제공 */}
        <Provider store={store}>
          <Left021 />
          <Right021 />
        </Provider>
      </GridWrapper>
    </Container>
  )
}
