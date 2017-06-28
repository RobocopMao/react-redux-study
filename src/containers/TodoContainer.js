import { connect } from 'react-redux'
import { addTodo, delTodo, changeTodoInputVal } from '../actions'
import Todo from '../components/Todo'

// Map Redux state to component props
const mapStateToProps = state => ({
    todoList: state.todo.todoList,
    inputVal: state.todo.inputVal,
    index: state.todo.index
})

// Map Redux actions to component props
const mapDispatchToProps = dispatch => ({
    onAddTodoClick: (inputVal) => addTodo(dispatch, inputVal),
    onDelTodoClick: (index) => delTodo(dispatch, index),
    onTodoInputValChange: (e) => changeTodoInputVal(dispatch, e.target.value)
})

// Connected Component
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Todo)
