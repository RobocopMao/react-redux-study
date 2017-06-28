import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Counter.css'

export default class Counter extends Component {
    render() {
        const { value, onIncreaseClick, onDecreaseClick } = this.props
        return (
            <div className="Counter">
                <p>
                    <span>{value}</span>
                </p>
                <button onClick={onIncreaseClick}>Increase</button>
                <button onClick={onDecreaseClick}>Decrease</button>
            </div>
        )
    }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncreaseClick: PropTypes.func.isRequired,
    onDecreaseClick: PropTypes.func.isRequired
}
