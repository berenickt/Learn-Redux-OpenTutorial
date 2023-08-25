import Counter from '@/Counter'
import { Provider } from 'react-redux'
import countStore from 'store'

export default function WithReduxToolkitThunk() {
  return (
    <Provider store={countStore}>
      <div>
        <Counter />
      </div>
    </Provider>
  )
}
