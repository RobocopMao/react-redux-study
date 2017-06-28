import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Todo.css'

export default class Todo extends Component {
    render () {
        let { todoList, inputVal, onAddTodoClick, onDelTodoClick, onTodoInputValChange } = this.props
        return (
            <div className="Todo">
                <input type="text" onChange={(e) => onTodoInputValChange(e)} />
                <button onClick={() => onAddTodoClick(inputVal)}>ADD</button>
                <ul className="Todo-list">
                    {todoList.map((list, index) => (
                        <li key={index}>
                            {list}
                            <a href="javascript:;" onClick={() => onDelTodoClick(index)}>X</a>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

Todo.propTypes = {
    inputVal:PropTypes.string.isRequired,
    todoList: PropTypes.array.isRequired,
    onAddTodoClick: PropTypes.func.isRequired,
    onDelTodoClick: PropTypes.func.isRequired,
    onTodoInputValChange: PropTypes.func.isRequired
}


