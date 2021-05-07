export default logger = ({getState, disatch}) => next => action => {
    console.log(action)
    next(action)
} 