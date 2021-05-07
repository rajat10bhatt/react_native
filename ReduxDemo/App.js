import React from 'react'
import CounterApp from './src/screens/CounterApp'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const initialState = {
  count: 0,
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREASE_COUNT': return {count: state.count + 1}
    case 'DECREASE_COUNT': return {count: state.count - 1}
    default:
      return state
  }
}

const store = createStore(reducer)

const App = () => (
  <Provider store={store}>
    <CounterApp />
  </Provider>
)

export default App


