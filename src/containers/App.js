import React, { Component } from 'react'
import CounterContainer from './CounterContainer'
import TodoContainer from './TodoContainer'
import './App.css'

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-item">
                    <h2>Counter</h2>
                    <CounterContainer/>
                </div>
                <div>
                    <h2>Simple Todo</h2>
                    <TodoContainer />
                </div>

            </div>
        )
    }
}


export default App
