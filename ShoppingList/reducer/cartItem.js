import { add, remove } from '../ActionCreators/actionNames'

const cartItems = (state = [], action) => {
    switch (action.type) {
        case add:
            return [...state, action.payload]
        case remove:
            return state.filter(item => item.id !== action.payload.id)
    }
    return state
}

export default cartItems