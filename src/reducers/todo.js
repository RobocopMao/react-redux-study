export default (state = { todoList: [], inputVal: '' }, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            if (action.inputVal.length === 0) {
                return state
            }
            return Object.assign({}, state, {
                todoList: [
                    ...state.todoList,
                    action.inputVal
                ]
            })
        case 'DEL_TODO':
            state.todoList.splice(action.index, 1)
            return Object.assign({}, state, {
                todoList: [
                    ...state.todoList,
                ]
            })
        case 'CHANGE_TODO_INPUT_VAL':
            return Object.assign({}, state, {
                inputVal: action.inputVal
            })
        default:
            return state
    }
}
