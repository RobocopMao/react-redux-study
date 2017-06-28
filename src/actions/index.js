import * as types from '../constants/ActionTypes'
/**
 * Counter Action
 */
const incrementAction = () => ({
    type: types.INCREMENT
})

export const increment = (dispatch) => dispatch(incrementAction())

const decrementAction = () => ({
    type: types.DECREMENT
})

export const decrement = (dispatch) => dispatch(decrementAction())

/**
 * Todo Action
 */
const changeTodoInputValAction = (inputVal) => ({
    type: types.CHANGE_TODO_INPUT_VAL,
    inputVal
})

export const changeTodoInputVal = (dispatch, inputVal) => dispatch(changeTodoInputValAction(inputVal))

const addTodoAction = (inputVal) => ({
    type: types.ADD_TODO,
    inputVal
})

export const addTodo = (dispatch, inputVal) => dispatch(addTodoAction(inputVal))

const delTodoAction = (index) => ({
    type: types.DEL_TODO,
    index
})

export const delTodo = (dispatch, index) => dispatch(delTodoAction(index))


