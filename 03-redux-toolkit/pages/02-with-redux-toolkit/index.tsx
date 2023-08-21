import Counter from '@/Counter'
import { Provider } from 'react-redux'
import counterToolkitStore from 'store/index-toolkit'

export default function WithReduxToolkit() {
  return (
    <Provider store={counterToolkitStore}>
      <div>
        <Counter />
      </div>
    </Provider>
  )
}
