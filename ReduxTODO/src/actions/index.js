import { TOGGLE_TODO, ADD_TODO } from './actionTypes'

let nextId = 0
export const addTodo = (text) => (
    {
        type: ADD_TODO,
        text,
        id: nextId++,
    }
)

export const toggleTodo = id => (
    {
        type: TOGGLE_TODO,
        id,
    }
)