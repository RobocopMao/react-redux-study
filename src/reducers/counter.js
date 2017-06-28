export default (state = { count: 0 }, action) => {
    const count = state.count
    switch (action.type) {
        case 'INCREMENT':
            return {count: count + 1}
        case 'DECREMENT':
            if (count === 0) {
                return state
            }
            return {count: count - 1}
        default:
            return state
    }
}
