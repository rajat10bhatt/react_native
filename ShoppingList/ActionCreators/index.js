import { add, remove } from './actionNames'

export const addToCart = (item) => (
    { type: add, payload: item }
)

export const removeFromCart = (item) => (
    { type: remove, payload: item }
)