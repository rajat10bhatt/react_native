import { createStore, applyMiddleware } from 'redux'
import cartItems from '../reducer/cartItem'
// import logger from '../middleware/logger'
import loggerMiddleware from 'redux-logger'

export default  store = createStore(cartItems, applyMiddleware(loggerMiddleware))