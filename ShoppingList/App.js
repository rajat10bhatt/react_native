import React from 'react';
import ShoppingCart from './ShoppingCart'
import { Provider } from 'react-redux'
import store from './store'

const App = () => {
  return (
    <Provider store={store}>
      <ShoppingCart />
    </Provider>
  )
}
export default App;